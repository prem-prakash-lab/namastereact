const Shimmer=()=>{
    return(
        <>
        <div className="flex flex-wrap justify-center">
            {Array(6).fill("").map((e,index)=>(<div key={index} className="w-80 h-80 m-8  bg-#f3f4f6 shadow-2xl"></div>))}
        </div>

        </>
    );
};
export default Shimmer;