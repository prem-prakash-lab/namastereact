import { useState } from "react";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
const Title=()=>{
    return(
        <a href="/" >
            <img className="h-16 p-1 " alt="foodtou" src={logo}/>
        </a>
    );

};

const Header=()=>{
    const[isLoggedIn,setisLoggedIn]=useState(true);
    return(
        <div className="flex justify-between shadow-2xl sticky top-0 bg-white ">
            <Title/>
            <div className="pr-16">
                <ul className="flex">
                    <li className="p-2 m-3  hover:bg-amber-600 rounded"> <Link to="/" className="text-lg"> Home </Link></li>
                    <li className="p-2 m-3  hover:bg-amber-600 rounded"> <Link to="/about" className="text-lg"> About </Link></li>
                    <li className="p-2 m-3  hover:bg-amber-600 rounded"> <Link to="/contact" className="text-lg" > Contact </Link></li>
                    <li className="p-2 m-3  hover:bg-amber-600 rounded"> <Link to="/cart" className="text-lg"> Cart </Link></li>
                </ul>
            </div>
            {/* {
            isLoggedIn ?(<button onClick={()=>setisLoggedIn(false)}>logout</button>) : (<button  onClick={()=>setisLoggedIn(true)}>login</button>)
            } */}
        </div>
    );
};
 export default Header;
