import { rlist } from "./config";
import Rcard from "./Rcard";
import { useState } from "react";

function filterData(searchTxt,restaurants){
    const filterData=restaurants.filter((restaurant)=>restaurant.data.name.includes(searchTxt));
    return (filterData);
   
};


const Rlist=()=>{
    const [searchTxt,setsearchTxt]=useState("");
    const [restaurants,setrestaurants]=useState(rlist);
    return(
        <>
        <div className="search-container">
                <input
                type="text"
                className="search-input"
                placeholder="search"
                value={searchTxt} 
                onChange={(e)=>{
                    setsearchTxt(e.target.value);
                }}
                />
                <button 
                    className="search-btn" 
                    onClick={()=>{
                       const data=filterData(searchTxt,restaurants);
                       setrestaurants(data);
                    }}
                >Search</button>
            </div>
    
    <div className="rlist">
        {
            restaurants.map((restaurant)=>{
                return(
                    <Rcard {...restaurant.data} key={restaurant.data.id} />
                );
            })
        }
        
    </div>
    </>
    );
};
export default Rlist;