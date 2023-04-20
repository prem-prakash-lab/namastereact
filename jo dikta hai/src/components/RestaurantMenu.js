import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { image_id, image_menu } from "../Config";
import Shimmer from "./Shimmer";
import Shimmer1 from "./Shimmer1";


const RestaurantMenu = () => {
  const {resId}=useParams();
  const [restaurant,setrestaurant]=useState({});
  const [menu,setmenu]=useState();

  useEffect(()=>{
    getRestaurantInfo();
  },[]);
  async function getRestaurantInfo(){
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.6234486&lng=85.1323779&restaurantId=" +resId+"&submitAction=ENTER");
    const json=await data.json();
    setrestaurant(json?.data?.cards[0]?.card?.card?.info);
    setmenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  }
  return (!(restaurant && menu)) ? <Shimmer1/> :(
    <div className="">
      <div className="bg-black my-4 shadow-2xl">
          <div className="flex justify-center pt-4">
                <div className="px-24 pt-40">
                  <h1 className="text-white">Restraunt resId: {resId}</h1>
                  <h2 className="text-white text-3xl font-semibold">{restaurant?.name}</h2>
                </div>
                <img className="px-24" src={image_id + restaurant?.cloudinaryImageId}/>
          </div>
          <div className=" flex justify-between p-4">
                <h2 className="text-white text-lg">AreaName: {restaurant?.areaName}</h2>
                <h2 className="text-white text-lg">Rating: {restaurant?.avgRating} star</h2>
                <h2 className="text-white text-lg">locality: {restaurant?.locality}</h2>
                <h2 className="text-white text-lg">city:{restaurant?.city}</h2>
                <h2 className="text-white text-lg">{restaurant?.costForTwoMessage}</h2>
          </div>
      </div>
      <div className="">
        <h1 className="flex justify-center text-3xl font-semibold">MENU</h1>
          <ul className="">
            {
              Object.values(menu).map((item)=>
                <li key={item?.card?.info?.id}>
                  <div className="m-8  bg-white shadow-2xl flex justify-center">
                    <div className="w-72 bg-amber-600 hover:shadow-2xl">
                      <h4 className="p-1 flex justify-center">{item?.card?.info?.name}</h4>
                      <div className="p-1 flex justify-center" ><img src={image_menu+item?.card?.info?.imageId}/></div>
                      
                      <h4 className="p-1 flex justify-center">₹ {(item?.card?.info?.price)/100}</h4>
                    </div>
                  </div>
                </li>)
            }
          </ul>
      </div>

    </div>
  )
}

export default RestaurantMenu