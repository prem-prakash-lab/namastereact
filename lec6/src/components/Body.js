import { useState } from "react";
import { restrautList } from "../config";
import RestrauntCard from "./Restaurantcard";
function filterdata(searchText,restaurants){
    return(
        restaurants.filter((restaurant)=>restaurant.data.name.includes(searchText))
    );

};

const Body=()=>{
    const [searchText,setsearchText]=useState("");
    const [restaurants,setrestaurants]=useState(restrautList);
    return(
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
                    const data=filterdata(searchText,restaurants)
                    setrestaurants(data);
                }}
                >search</button>

            </div>
            <div className="Restro-List">
                {
                restaurants.map((restaurant)=>
                {
                    return (<RestrauntCard{...restaurant.data} key={restaurant.data.id}/>);
                })
                }
            </div>
        </>
    );
};

export default Body;