import { img_cdn } from "./config";
const Rcard=({name,cuisines,avgRating,cloudinaryImageId,area})=>{
    return (
    
    <div className="card">
        <img src={img_cdn+cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
        <h4>{area}</h4>

    </div>
    ); 
    
};

export default Rcard;