import { rlist } from "./config";
import Rcard from "./Rcard";
const Rlist=()=>(
    <div className="rlist">
        {
            rlist.map((restaurant)=>{
                return(
                    <Rcard {...restaurant.data} key={restaurant.data.id} />
                );
            })
        }
        
    </div>

);
export default Rlist;