import { useState } from "react";
const Title=()=>(
    // <h1 id="title" key="h2">Food villa</h1>
   <a href="/">
            <img 
            className="logo"
            alt="logo" src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj" />
    </a>
);
const HeaderComponent=()=>{
    
    const[isLoggedIn,setisLoggedIn]=useState(true);
    // const [title,settitle]=useState("food villa");
    // console.log("render()")
return(
    <div className="header">
        <Title/>
        {/* <h1>{title}</h1>
        <button onClick={()=>settitle("new title")}>change title</button> */}

        <div className="Nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>

        </div>
        {
            isLoggedIn ?(<button onClick={()=>setisLoggedIn(false)}>logout</button>) : (<button  onClick={()=>setisLoggedIn(true)}>login</button>)
        }
    </div>
);
};
 
export default HeaderComponent;