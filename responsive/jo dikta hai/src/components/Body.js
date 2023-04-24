import Restaurantcard from "./Restaurantcard";
import { restaurantlist } from "../Config";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
function filterdata(searchTxt,restaurants) {
    return(
        restaurants?.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase()))
    );
};

const Body=()=>{
    const[searchTxt,setsearchTxt]=useState();
    const[allrestaurants,setallrestaurants]=useState([]);
    const[filteredrestaurants,setfilteredrestaurants]=useState([]);

    useEffect(()=>{
        //api call
        getRestaurant(); 
    
       },[]);

    async function getRestaurant(){
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    setallrestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredrestaurants(json?.data?.cards[2]?.data?.data?.cards);

    };
    if (!allrestaurants) return null;

    

    return (allrestaurants.length==0)?<Shimmer/>:(
        <>
        <div className="flex my-4 justify-center">
            <input type="text"
                    className=" border-solid border-2 border-black pl-2 w-1/4 min-w-[200px] rounded"
                    placeholder="search"
                    value={searchTxt}
                    onChange={(e)=>{
                        setsearchTxt(e.target.value);
                    }
                    }
            />
            <button className="ml-1 p-2 border-solid border-2 border-black bg-amber-600 hover:bg-amber-500 rounded"
            onClick={()=>{
                const data=filterdata(searchTxt,allrestaurants);
                setfilteredrestaurants(data)}}
            >search</button>

        </div>
        <div className="flex flex-wrap justify-center">
            {filteredrestaurants.map((restaurant)=>{
                return (
                    <Link to={"/restaurant/"+restaurant.data.id}  key={restaurant.data.id}>
                    <Restaurantcard {...restaurant.data}/>
                    </Link>
                );
                
            })}
        </div>
        </>
    );

};
export default Body;