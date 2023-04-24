import food from "../assets/image/foodimage.png";
const About = () => {
  return (
    <div className="flex justify-center">
        <div className="md:flex m-20 md:justify-between">
            <div className=" bg-white sm:min-h-[270px] sm:min-w-[500px] shadow-2xl p-10 min-w-[300px] min-h-[200px]">
              <h1 className="sm:text-4xl text-2xl font-bold">
                Welcome to <br /> The world of <br />
                <span>Tasty & Fresh Food</span>
              </h1>
              <h4 className="sm:text-3xl text-1xl">
                "Better you will feel if you eat a Food<span>Fire</span> healthy
                meal"
              </h4>
            </div>
            <div className="">
              <img className="sm:min-w-[400px]  sm:min-h-[270px] min-w-[300px] " src={food} alt="Food Image" />
            </div>
        </div>
    </div>
  )
}

export default About