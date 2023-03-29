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


import {createElement as cr} from "react";
import ReactDOM  from "react-dom/client";

// const heading1=cr("h1",{id:"title1", key:"h1"},"heading1");
// console.log(heading1);
// const heading2=cr("h2",{id:"title1",key:"h2"},"heading2");
// const container=cr("div",{id:"container"},[heading1,heading2]);

const heading=(
<h1 id="tittle" key="h2">
    namste react
</h1> 
);

const Headercomp2=()=>(
    <h1>hello world2</h1>


); 
const Headercomp3=()=>(
    <h1>hello world3</h1>


); 

var xyz=10;
const Headercomp=()=>{
    return (
        <div>
            {1+2}
            {xyz}
            {heading}
            {Headercomp2()}
            <Headercomp3/>
            <h1>hello world</h1>
            <h2>prem prakash</h2>
        </div>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headercomp/>);