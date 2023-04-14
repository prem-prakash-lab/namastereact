import React from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
const AppLayout=()=>{
    return(
        <React.Fragment>
                {/*
                Header
                        -logo
                        -nav Items
                        -cart
                Body
                        -Search bar
                        -Restrauranlist
                            -RestrauntCard
                                    -Image
                                    -name
                                    -rating
                                    -cusins
                Footer
                        -links
                        -contact




                */

                }
        
            <HeaderComponent/>
            <Body/>
            <Footer/>
        </React.Fragment>
    );


};


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);