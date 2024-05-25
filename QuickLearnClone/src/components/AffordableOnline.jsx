export default function AffordableOnline() {
  return (
    <div className="Affordable-Online bg-purple-800 flex flex-col md:flex-row items-center justify-center  w-full h-auto lg:h-[290px]  md:gap-24 md:relative p-5  ">
      <div className="w-full hidden md:flex  justify-center ">
        <div className="absolute bottom-0 z-0">
          <img
            src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/call-shape1.svg"
            className="  object-cover "
          />
        </div>
        <div className="z-50 absolute bottom-0 ">
          {" "}
          <img
            src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/call-action-img1.png"
            className="  object-cover object-center "
          />
        </div>
      </div>
      <div className="w-full  flex md:hidden justify-center items-end relative h-48 ">
        <div className="absolute bottom-0 z-0 ">
          <img
            src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/call-shape1.svg"
            className="  object-contain object-bottom  size-60"
          />
        </div>
        <div className="z-50 absolute bottom-0 ">
          {" "}
          <img
            src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/call-action-img1.png"
            className="  object-contain object-center size-48"
          />
        </div>
      </div>

      <div className="flex items-start justify-center w-full p-4">
        <h1 className="text-white font-bold text-4xl text-wrap text-">
          Affordable Online Courses & Learning Opportunities For You
        </h1>
      </div>
      <div className="w-full p-4 flex justify-center">
        {" "}
        <button className="bg-gray-200 p-3 rounded-full">
          {" "}
          start learning today
        </button>
      </div>
    </div>
  );
}
