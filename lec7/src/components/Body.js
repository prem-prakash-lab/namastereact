import { useEffect, useState } from "react";
import { restrautList } from "../config";
import RestrauntCard from "./Restaurantcard";
import Shimmer from "./Shimmer";



function filterdata(searchText,restaurants){
    return(
        restaurants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase()))
    );

};

const Body=()=>{
    const [searchText,setsearchText]=useState("");
    const [allrestaurants,setallrestaurants]=useState([]);
    const [filteredrestaurants,setfilteredrestaurants]=useState([]);
   
   
   useEffect(()=>{
    //api call
    getRestaurant(); 

   },[]);
   
async function getRestaurant(){
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6234486&lng=85.1323779&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json);
   setallrestaurants(json?.data?.cards[2]?.data?.data?.cards);
   setfilteredrestaurants(json?.data?.cards[2]?.data?.data?.cards);
    
};

//conditional rendering
//if restraunt is empty =>shimmer ui
// if restraunt has data => actual data ui

if (!allrestaurants) return null;
if (filteredrestaurants?.length==0) return(<h1>no match</h1>);


    return (allrestaurants.length==0)?<Shimmer/>: (
        <>
            <div className="search-container">
                <input
                type="text"
                className="search-input"
                placeholder="search"
                value={searchText}
                onChange={(e)=>{
                    setsearchText(e.target.value);
                }
                }
                >
                </input>
                <button className="serach-btn"
                onClick={()=>{
                    const data=filterdata(searchText,allrestaurants)
                    setfilteredrestaurants(data);
                }}
                >search</button>

            </div>
            <div className="Restro-List">
                {
                filteredrestaurants.map((restaurant)=>
                {
                    return (<RestrauntCard{...restaurant.data} key={restaurant.data.id}/>);
                })
                }
            </div>
        </>
    );
};

export default Body;