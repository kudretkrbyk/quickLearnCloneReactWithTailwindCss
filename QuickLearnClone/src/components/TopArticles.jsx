import Slider from "react-slick";
export default function TopArticles() {
  const sliderSettings1 = {
    lazyLoad: "ondemand",
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="TOP-ARTICLES flex flex-col gap-4 items-center justify-center bg-gray-200 p-5 py-24 w-full">
      <div className="text-gray-500 font-bold text-xl">TOP ARTICLES</div>
      <div className="text-black font-extrabold text-3xl">
        Want To Learn More? Read Blog
      </div>
      <div className="text-black">
        When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A
        Type Specimen Book It Has Survived Not Only Five Centuries
      </div>
      <div className=" w-full overflow-hidden relative">
        <Slider
          {...sliderSettings1}
          classNme="multiple-items-lg  transition-transform duration-300 ease-in-out  w-full gap-"
        >
          {/* <!-- Slayt 1 -->*/}
          <div className="p-4">
            <div className=" item   splide__slide rounded-xl border border-gray-500 shadow-lg flex flex-col items-start justify-center">
              <div className="p-6 ">
                <img
                  className="rounded-xl hover:scale-110 duration-500"
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_1-600x435.jpg"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-2 gap-2 relative">
                <div className="absolute top-0 left-0">
                  {" "}
                  <button className="bg-purple-200  rounded-xl absolute p-2 px-4">
                    Business
                  </button>
                </div>
              </div>
              <div className="p-2 font-bold mt-5">
                <h1 className="hover:text-purple-500">
                  Take Your Career Next Leveley Future Approch
                </h1>
              </div>
              <div className="w-full p-4 flex justify-between">
                <div>Tarih</div>
                <div>Admin</div>
              </div>
            </div>
          </div>
          {/* <!-- Slayt 2 -->*/}
          <div className="p-4">
            <div className=" item   splide__slide rounded-xl border border-gray-500 shadow-lg flex flex-col items-start justify-center">
              <div className="p-6  ">
                <img
                  className="rounded-xl hover:scale-110 duration-500"
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_1-600x435.jpg"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-2 gap-2 relative">
                <div className="absolute top-0 left-0">
                  {" "}
                  <button className="bg-purple-200  rounded-xl absolute p-2 px-4">
                    Business
                  </button>
                </div>
              </div>
              <div className="p-2 font-bold mt-5">
                <h1 className="hover:text-purple-500">
                  Take Your Career Next Leveley Future Approch
                </h1>
              </div>
              <div className="w-full p-4 flex justify-between">
                <div>Tarih</div>
                <div>Admin</div>
              </div>
            </div>
          </div>
          {/* <!-- Slayt 3 -->*/}
          <div className="p-4">
            <div className=" item   splide__slide rounded-xl border border-gray-500 shadow-lg flex flex-col items-start justify-center">
              <div className="p-6 ">
                <img
                  className="rounded-xl hover:scale-110 duration-500"
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_1-600x435.jpg"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-2 gap-2 relative">
                <div className="absolute top-0 left-0">
                  {" "}
                  <button className="bg-purple-200  rounded-xl absolute p-2 px-4">
                    Business
                  </button>
                </div>
              </div>
              <div className="p-2 font-bold mt-5">
                <h1 className="hover:text-purple-500">
                  Take Your Career Next Leveley Future Approch
                </h1>
              </div>
              <div className="w-full p-4 flex justify-between">
                <div>Tarih</div>
                <div>Admin</div>
              </div>
            </div>
          </div>
          {/* <!-- Slayt 4 -->*/}
          <div className="p-4">
            <div className=" item   splide__slide rounded-xl border border-gray-500 shadow-lg flex flex-col items-start justify-center">
              <div className="p-6  ">
                <img
                  className="rounded-xl hover:scale-110 duration-500"
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_1-600x435.jpg"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-2 gap-2 relative">
                <div className="absolute top-0 left-0">
                  {" "}
                  <button className="bg-purple-200  rounded-xl absolute p-2 px-4">
                    Business
                  </button>
                </div>
              </div>
              <div className="p-2 font-bold mt-5">
                <h1 className="hover:text-purple-500">
                  Take Your Career Next Leveley Future Approch
                </h1>
              </div>
              <div className="w-full p-4 flex justify-between">
                <div>Tarih</div>
                <div>Admin</div>
              </div>
            </div>
          </div>
          {/* <!-- Slayt 5 -->*/}
          <div className="p-4">
            <div className=" item   splide__slide rounded-xl border border-gray-500 shadow-lg flex flex-col items-start justify-center">
              <div className="p-6 ">
                <img
                  className="rounded-xl hover:scale-110 duration-500"
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_1-600x435.jpg"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-2 gap-2 relative">
                <div className="absolute top-0 left-0">
                  {" "}
                  <button className="bg-purple-200  rounded-xl absolute p-2 px-4">
                    Business
                  </button>
                </div>
              </div>
              <div className="p-2 font-bold mt-5">
                <h1 className="hover:text-purple-500">
                  Take Your Career Next Leveley Future Approch
                </h1>
              </div>
              <div className="w-full p-4 flex justify-between">
                <div>Tarih</div>
                <div>Admin</div>
              </div>
            </div>
          </div>
          {/* <!-- Slayt 6 -->*/}
          <div className="p-4">
            <div className=" item  splide__slide rounded-xl border border-gray-500 shadow-lg flex flex-col items-start justify-center">
              <div className="p-6   ">
                <img
                  className="rounded-xl hover:scale-110 duration-500"
                  src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/07/crs_img_1-600x435.jpg"
                />
              </div>
              <div className="flex flex-col items-center justify-center p-2 gap-2 relative">
                <div className="absolute top-0 left-0">
                  {" "}
                  <button className="bg-purple-200  rounded-xl absolute p-2 px-4">
                    Business
                  </button>
                </div>
              </div>
              <div className="p-2 font-bold mt-5">
                <h1 className="hover:text-purple-500">
                  Take Your Career Next Leveley Future Approch
                </h1>
              </div>
              <div className="w-full p-4 flex justify-between">
                <div>Tarih</div>
                <div>Admin</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
