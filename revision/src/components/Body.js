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
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6234486&lng=85.1323779&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    setallrestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredrestaurants(json?.data?.cards[2]?.data?.data?.cards);

    };
    if (!allrestaurants) return null;

    

    return (allrestaurants.length==0)?<Shimmer/>:(
        <>
        <div className="search-container">
            <input type="text"
                    className="search-input"
                    placeholder="search"
                    value={searchTxt}
                    onChange={(e)=>{
                        setsearchTxt(e.target.value);
                    }
                    }
            />
            <button className="search-btn"
            onClick={()=>{
                const data=filterdata(searchTxt,allrestaurants);
                setfilteredrestaurants(data)}}
            >search</button>

        </div>
        <div className="restaurant-list">
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