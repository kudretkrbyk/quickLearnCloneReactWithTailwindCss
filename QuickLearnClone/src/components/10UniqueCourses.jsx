import Slider from "react-slick";

export default function UniqueCourses() {
  const sliderSettings = {
    lazyLoad: "ondemand",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="10,000-UNIQUE-COURSES bg-white p-10 flex flex-col gap-2 w-full">
      <div className="text-center text-wrap flex flex-col gap-4 items-center justify-center carousel-wrap">
        <p className="text-gray-500">10,000+ UNIQUE COURSES</p>
        <div className="relative">
          <h1 className="font-bold text-black text-4xl">
            You May Also Like More Courses
          </h1>
          <div className="absolute bg-center bg-cover w-48 h-4 left-48 bg-no-repeat bg-[url(https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/themes/quiklearn/assets/element/underline.svg)]"></div>
        </div>

        <p className="text-gray-500">
          When An Unknown Printer Took A Galley Of Type And Scrambled It To Make
          A Type Specimen Book It Has Survived Not Only Five Centuries
        </p>
      </div>
      <div className="  w-full overflow-hidden relative">
        <Slider
          {...sliderSettings}
          className="multiple-items-lg  transition-transform duration-300 ease-in-out  w-full gap-"
        >
          {/* <!-- Slayt 1 -->*/}
          <div className="p-4">
            <div className=" item   splide__slide rounded-xl border border-gray-500 shadow-lg flex flex-col items-start justify-center">
              <div className="p-6 relative">
                <img
                  className="rounded-xl"
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_1-600x435.jpg"
                />
                <button className="bg-gray-200 top-10 left-10 rounded-xl absolute p-2 px-4">
                  Business
                </button>
              </div>
              <div className="flex items-center justify-center p-2 gap-2">
                <div>
                  <p>1.s students</p>
                </div>
                <div>
                  <p>5 lessons</p>
                </div>
              </div>
              <div className="p-2 font-bold">
                <h1 className="hover:text-purple-500">
                  JQuery and JavaScript Fundamental Course
                </h1>
              </div>
              <div className="w-full p-2">
                <div>- Jenny Wilson</div>
                <div className="flex items-center justify-between w-full p-2">
                  <div>*****</div>
                  <div>$ 25.00</div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Slayt 2 -->*/}
          <div className="p-4">
            <div className="item  rounded-xl border border-gray-500 shadow-lg flex flex-col items-start justify-center">
              <div className="p-6 relative">
                <img
                  className="rounded-xl"
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_5-600x435.jpg"
                />
                <button className="bg-gray-200 top-10 left-10 rounded-xl absolute p-2 px-4">
                  Business
                </button>
              </div>
              <div className="flex items-center justify-center p-2 gap-2">
                <div>
                  <p>2.s students</p>
                </div>
                <div>
                  <p>5 lessons</p>
                </div>
              </div>
              <div className="p-2 font-bold">
                <h1 className="hover:text-purple-500">
                  JQuery and JavaScript Fundamental Course
                </h1>
              </div>
              <div className="w-full p-2">
                <div>- Jenny Wilson</div>
                <div className="flex items-center justify-between w-full p-2">
                  <div>*****</div>
                  <div>$ 25.00</div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Slayt 3 -->*/}
          <div className="p-4">
            <div className="item   rounded-xl border border-gray-500 shadow-lg flex flex-col items-start justify-center">
              <div className="p-6 relative">
                <img
                  className="rounded-xl"
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_4-600x435.jpg"
                />
                <button className="bg-gray-200 top-10 left-10 rounded-xl absolute p-2 px-4">
                  Business
                </button>
              </div>
              <div className="flex items-center justify-center p-2 gap-2">
                <div>
                  <p>3.s students</p>
                </div>
                <div>
                  <p>5 lessons</p>
                </div>
              </div>
              <div className="p-2 font-bold">
                <h1 className="hover:text-purple-500">
                  JQuery and JavaScript Fundamental Course
                </h1>
              </div>
              <div className="w-full p-2">
                <div>- Jenny Wilson</div>
                <div className="flex items-center justify-between w-full p-2">
                  <div>*****</div>
                  <div>$ 25.00</div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Slayt 4 -->*/}
          <div className="p-4">
            <div className="item  rounded-xl border border-gray-500 shadow-lg flex flex-col items-start justify-center">
              <div className="p-6 relative">
                <img
                  className="rounded-xl"
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_4-600x435.jpg"
                />
                <button className="bg-gray-200 top-10 left-10 rounded-xl absolute p-2 px-4">
                  Business
                </button>
              </div>
              <div className="flex items-center justify-center p-2 gap-2">
                <div>
                  <p>4.s students</p>
                </div>
                <div>
                  <p>5 lessons</p>
                </div>
              </div>
              <div className="p-2 font-bold">
                <h1 className="hover:text-purple-500">
                  JQuery and JavaScript Fundamental Course
                </h1>
              </div>
              <div className="w-full p-2">
                <div>- Jenny Wilson</div>
                <div className="flex items-center justify-between w-full p-2">
                  <div>*****</div>
                  <div>$ 25.00</div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Slayt 5 -->*/}
          <div className="p-4">
            <div className="item  rounded-xl border border-gray-500 shadow-lg flex flex-col items-start justify-center">
              <div className="p-6 relative">
                <img
                  className="rounded-xl"
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_4-600x435.jpg"
                />
                <button className="bg-gray-200 top-10 left-10 rounded-xl absolute p-2 px-4">
                  Business
                </button>
              </div>
              <div className="flex items-center justify-center p-2 gap-2">
                <div>
                  <p>5.s students</p>
                </div>
                <div>
                  <p>5 lessons</p>
                </div>
              </div>
              <div className="p-2 font-bold">
                <h1 className="hover:text-purple-500">
                  JQuery and JavaScript Fundamental Course
                </h1>
              </div>
              <div className="w-full p-2">
                <div>- Jenny Wilson</div>
                <div className="flex items-center justify-between w-full p-2">
                  <div>*****</div>
                  <div>$ 25.00</div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
