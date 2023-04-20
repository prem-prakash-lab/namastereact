import { restaurantlist } from "../Config";
import { image_id } from "../Config";
const Restaurantcard=({cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwoString})=>{
    return(
        <div className="card">
            <img src={image_id+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <ul className="card-footer">
               <li>{avgRating}star</li> 
               <li>{deliveryTime}MINS</li>
               <li>{costForTwoString}</li> 
            </ul>

        </div>
    );
};

export default Restaurantcard;