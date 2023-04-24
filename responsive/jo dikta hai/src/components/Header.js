
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Close from "./Close";
import Menu from "./Menu";


const Title=()=>{
    return(
        <a href="/" >
            <img className="h-16 p-1 " alt="foodtou" src={logo}/>
        </a>
    );

};

// const Header=()=>{
//     const[isLoggedIn,setisLoggedIn]=useState(true);
//     return(
//         <div className="flex justify-between shadow-2xl sticky top-0 bg-white ">
//             <Title/>
//             <div className="pr-16">
//                 <ul className="flex">
//                     <li className="p-2 m-3  hover:bg-amber-600 rounded"> <Link to="/" className="text-lg"> Home </Link></li>
//                     <li className="p-2 m-3  hover:bg-amber-600 rounded"> <Link to="/about" className="text-lg"> About </Link></li>
//                     <li className="p-2 m-3  hover:bg-amber-600 rounded"> <Link to="/contact" className="text-lg" > Contact </Link></li>
//                     <li className="p-2 m-3  hover:bg-amber-600 rounded"> <Link to="/cart" className="text-lg"> Cart </Link></li>
//                 </ul>
//             </div>
//             {/* {
//             isLoggedIn ?(<button onClick={()=>setisLoggedIn(false)}>logout</button>) : (<button  onClick={()=>setisLoggedIn(true)}>login</button>)
//             } */}
//         </div>
//     );
// };



const Header = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"ABOUT",link:"/about"},
        {name:"CONTACT",link:"/contact"},
        {name:"CART",link:"/cart"},
      ];
      let [open,setOpen]=useState(false);
  return (
    <div className="shadow-2xl w-full sticky top-0 left-0" >
        <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins]  text-gray-800'>
               <Title/>
           </div>
           <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            {(open?<Close/>:<Menu/>)}
           </div>

           <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-gray-800 hover:bg-amber-600 duration-500 p-1 hover:rounded-md'>{link.name}</Link>
            </li>
          ))
        }
       
      </ul>
        </div>
    </div>
  )
}
 export default Header;
