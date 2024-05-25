export default function AvailableOnAndroid() {
  return (
    <div className="AVAILABLE-ON-ANDROID w-full  bg-violet-900 flex relative">
      <div className="flex flex-col gap-10 p-5 w-full items-start justify-center z-50">
        <div className="text-gray-200">AVAILABLE ON ANDROID & APP STORE</div>
        <div className="text-white font-bold text-3xl">
          Build A Beautiful, Professional-Looking Online Course With Quiklearn
        </div>
        <div className="flex items-center justify-start gap-10 lg:gap-0 w-full">
          <div>
            <button className="p-4 border-white border rounded-lg text-white  bg-purple-900">
              Google Play
            </button>
          </div>
          <div>
            <button className="p-4 border-white border rounded-lg  text-white  bg-purple-900">
              Apple Store
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full">
        <div className="bg-no-repeat bg-right-top bg-cover w-[750px] h-[500px] hidden lg:block  bg-[url(https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/app-download-img1.png)]"></div>
        <div id="parallax" className="absolute top-10  lg:bottom-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="126"
            height="125"
            viewBox="0 0 126 125"
            fill="none"
          >
            <path
              d="M51.7514 51.374C41.4193 60.4543 34.9638 73.149 33.7193 86.8341C32.4748 100.519 36.5365 114.148 45.0648 124.904L125.545 54.2106C115.976 44.3641 102.981 38.5787 89.2456 38.0507C75.5107 37.5228 62.0873 42.2927 51.7514 51.374Z"
              fill="#543EE8"
            ></path>
            <path
              d="M19.2325 14.3533C8.89839 23.4284 2.43997 36.1198 1.19294 49.8027C-0.054088 63.4857 4.00566 77.1137 12.5326 87.8682L93.0129 17.1746C83.4426 7.33418 70.4486 1.55397 56.7169 1.02888C42.9852 0.503778 29.5657 5.27393 19.2325 14.3533Z"
              fill="#F8BC24"
            ></path>
          </svg>
        </div>
      </div>
      <div className="-bottom-0 hidden lg:block z-10 bg-no-repeat left-0 absolute bg-cover w-[300px] h-[180px] bg-[url(https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/shape-1-1.svg)]"></div>
    </div>
  );
}
