import { Imageid } from "../config";
const RestrauntCard=({name,cuisines,avgRating,cloudinaryImageId})=>{
    return(
        <div className="card">
            <img src={Imageid+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} star</h4>
            
        </div>
    );
};
export default RestrauntCard ;