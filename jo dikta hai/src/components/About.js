import food from "../assets/image/foodimage.png";
const About = () => {
  return (
    <div className="flex justify-center">
        <div className="flex m-20 justify-between">
            <div className=" bg-white shadow-2xl p-10 ">
              <h1 className="text-4xl font-bold">
                Welcome to <br /> The world of <br />
                <span>Tasty & Fresh Food</span>
              </h1>
              <h4 className="text-3xl">
                "Better you will feel if you eat a Food<span>Fire</span> healthy
                meal"
              </h4>
            </div>
            <div className="">
              <img className="" src={food} alt="Food Image" />
            </div>
        </div>
    </div>
  )
}

export default About