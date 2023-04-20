import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { image_id, image_menu } from "../Config";
import Shimmer from "./Shimmer";


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
  return (!(restaurant && menu)) ? <Shimmer/> :(
    <div className="menu">
      <div className="menu-card">
          <h1>Restraunt resId: {resId}</h1>
          <h2>{restaurant?.name}</h2>
          <img src={image_id + restaurant?.cloudinaryImageId}/>
          <h2>{restaurant?.areaName}</h2>
          <h2>{restaurant?.avgRating} star</h2>
          <h2>{restaurant?.locality}</h2>
          <h2>{restaurant?.areaName}</h2>
          <h2>{restaurant?.city}</h2>
          <h2>{restaurant?.sla?.slaString}</h2>
          <h2>{restaurant?.costForTwoMessage}</h2>
      </div>
      <div className="menu-head">
        <h1>MENU</h1>
       <ul className="menu-item">
        {
          Object.values(menu).map((item)=>
            <li key={item?.card?.info?.id}>
              <div>
                <h4>{item?.card?.info?.name}</h4>
                <img src={image_menu+item?.card?.info?.imageId}/>
                <h4>₹{(item?.card?.info?.price)/100}</h4>
              </div>
            </li>)
        }
        </ul>
      </div>

    </div>
  )
}

export default RestaurantMenu