// const heading=document.createElement("h1");
// heading.innerHTML="namste ract";
// const root=document.getElementById("root");
// root.appendChild(heading);


// const heading=React.createElement("h1",{ },"namste everyone");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


// const heading=React.createElement("h1",
// {id:"title" },
// "namste everyone");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/* <div id="root">
        <div id="container">
            <h1 id="title1">
                heading1
            </h1>
            <h1 id="title2">
                heading2
            </h1>
        </div>
</div> */


import React from "react";
import ReactDOM  from "react-dom/client";


const heading1=React.createElement("h1",{id:"title1"},"heading1");
const heading2=React.createElement("h2",{id:"title1", hello:"world"},"heading2");
const container=React.createElement("div",{id:"container"},[heading1,heading2]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(container);