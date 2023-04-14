import { restaurantlist } from "../Config";
import { image_id } from "../Config";
const Restaurantcard=({cloudinaryImageId,name,cuisines,avgRating,area,address,id})=>{
    return(
        <div className="card">
            <img src={image_id+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating}star</h4>
            <h4>{area}</h4>
            <h5>{address}</h5>
            <h5>{id}</h5>

        </div>
    );
};

export default Restaurantcard;