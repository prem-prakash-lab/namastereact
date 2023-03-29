import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const Burgerking={
    name:" Burger king",
    image:"https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/j/t/p3596-164261702161e858bdab62c.jpg?tr=tr:n-xlarge",
    cusines:["Burger","American"],
    rating:"4.2"
};

const AppLayout=()=>(
    <>
    {/* // -header
    //     -logo 
    //     -navitems
    //     -cart 
    // -body
    //     -searchbar
    //     -resteurantlist 
    //         -resteurantcard
    //             -Image 
    //             -Name 
    //             -rating 
    //             -cusion
    // -footer
    //     -links
    //     -copyright */}

    <Header/>
    <Body/>
    <Footer/>

    </>

);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);