const Shimmer1=()=>{
    return(
        <>
        <div className="">
            {Array(3).fill("").map((e,index)=>(<div key={index} className="w-auto h-56 m-8  bg-#f3f4f6 shadow-2xl"></div>))}
        </div>

        </>
    );
};
export default Shimmer1;