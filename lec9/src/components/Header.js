import { useState } from "react";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
const Title=()=>{
    return(
        <a href="/" >
            <img className="logo" alt="foodtou" src={logo}/>
        </a>
    );

};

const Header=()=>{
    const[isLoggedIn,setisLoggedIn]=useState(true);
    return(
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li> <Link to="/"> Home </Link></li>
                    <li> <Link to="/about"> About </Link></li>
                    <li> <Link to="/contact"> Contact </Link></li>
                    <li> <Link to="/cart"> Cart </Link></li>
                </ul>
            </div>
            {/* {
            isLoggedIn ?(<button onClick={()=>setisLoggedIn(false)}>logout</button>) : (<button  onClick={()=>setisLoggedIn(true)}>login</button>)
            } */}
        </div>
    );
};
 export default Header;
