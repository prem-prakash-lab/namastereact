import { restaurantlist } from "../Config";
import { image_id } from "../Config";
const Restaurantcard=({cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwoString})=>{
    return(
        <div className="w-80 m-8 bg-white shadow-2xl ">
            <div className="p-4 min-h-[337px]">
                <img className="p-1" src={image_id+cloudinaryImageId}/>
                <h2 className="text-lg font-semibold">{name}</h2>
                <h3>{cuisines.join(", ")}</h3>
                <ul className="flex justify-between">
                <li>{avgRating}star</li> 
                <li>{deliveryTime}MINS</li>
                <li>{costForTwoString}</li> 
                </ul>
            </div>
        </div>
    );
};

export default Restaurantcard;