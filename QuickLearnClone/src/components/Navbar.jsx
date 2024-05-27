export default function Navbar() {
  return (
    <div>
      <div className="navbar select-none bg-white w-full px-5 p-3 flex flex-col gap-3">
        <div className="hidden  lg:flex items-center justify-between p-2 w-full">
          <div className="w-2/12 hidden lg:inline">
            <img
              className="p-4  "
              src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/logo-dark.svg"
            />
          </div>

          <div className="  border-2 hidden  lg:flex lg:w-7/12  border-gray-400 rounded-full p-2 items-center justify-between ">
            <div className="flex items-center justify-start gap-4 ">
              <div className="border-r border-gray-400 p-2">
                {" "}
                All Categories
              </div>
              <div>
                <input
                  type="text"
                  className="outline-none border-none"
                  value="Find Your Courses..."
                ></input>
              </div>
            </div>
            <div>
              <button className="bg-purple-800  rounded-full p-2 w-0 lg:w-24">
                Search
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 px-2 w-2/12">
            <button className="bg-white border-gray-400 border-2 rounded-full p-2 text-nowrap w-24">
              Login
            </button>
            <button className="bg-purple-800  rounded-full p-2  text-nowrap w-24">
              Sign Up
            </button>
          </div>
        </div>
        <div className="border-b border-gray-300 flex-col md:flex-row flex items-center lg:hidden   justify-center gap-3 w-full py-5">
          <div className=" flex flex-col md:flex-row items-center justify-center">
            <div className="flex ">
              <div>May 24, 2024</div>
              <div>457 Mott Street,NY 10013</div>
            </div>

            <div>Opening: Mon - Sat 8.00 - 18.00</div>
          </div>
          <div className=" flex  items-center justify-center gap-2">
            <div>
              <button className="border-gray-300 border rounded-full w-24 p-2 px-5">
                Login
              </button>
            </div>
            <div>
              {" "}
              <button className="bg-white border border-gray-300 rounded-full w-24 p-2 px-5 text-nowrap">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 hidden lg:flex items-center justify-between w-full">
          <div>
            <button className="bg-gray-300  rounded-full p-2  text-nowrap w-32 border-gray-400">
              All Categories
            </button>
          </div>
          <div className="flex items-center justify-center gap-10">
            <div className="group relative hover:cursor-pointer">
              <div>
                Home
                <div className="bg-purple-800 w-[0px] h-[1px] group-hover:w-[35px] duration-300"></div>
              </div>
              <div className="absolute bg-white shadow-lg p-4 z-50 w-28 h-0 opacity-0 flex flex-col gap-1 top-10 group-hover:h-32 group-hover:opacity-100 duration-200">
                <div>Home 01</div>
                <div>Home 02</div>
                <div>Home 03</div>
                <div>Home 04</div>
              </div>
            </div>
            <div className="group relative hover:cursor-pointer">
              <div>
                Courses
                <div className="bg-purple-800 w-[0px] h-[1px] group-hover:w-[35px] duration-300"></div>
              </div>
              <div className="absolute bg-white shadow-lg p-4 z-50 w-80 h-0 opacity-0 flex  gap-10 top-10 group-hover:h-80 group-hover:opacity-100 duration-200">
                <div className="flex flex-col gap-2">
                  <div className="text-purple-800 py-5">Couse Layout</div>
                  <div>Home 1</div>
                  <div>Home 1</div>
                  <div>Home 1</div>
                  <div>Home 1</div>
                  <div>Home 1</div>
                  <div>Home 1</div>
                  <div>Home 1</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-purple-800 py-5">Couse Layout</div>
                  <div>Home 1</div>
                  <div>Home 1</div>
                  <div>Home 1</div>
                  <div>Home 1</div>
                  <div>Home 1</div>
                  <div>Home 1</div>
                  <div>Home 1</div>
                </div>
              </div>
            </div>
            <div className="group relative hover:cursor-pointer">
              <div>
                Events
                <div className="bg-purple-800 w-[0px] h-[1px] group-hover:w-[35px] duration-300"></div>
              </div>
              <div className="absolute bg-white shadow-lg p-4 z-50 w-28 h-0 opacity-0 flex flex-col gap-1 top-10 group-hover:h-32 group-hover:opacity-100 duration-200">
                <div>Home 01</div>
                <div>Home 02</div>
                <div>Home 03</div>
                <div>Home 04</div>
              </div>
            </div>
            <div className="group relative hover:cursor-pointer">
              <div>
                Shop
                <div className="bg-purple-800 w-[0px] h-[1px] group-hover:w-[35px] duration-300"></div>
              </div>
              <div className="absolute bg-white shadow-lg p-4 z-50 w-28 h-0 opacity-0 flex flex-col gap-1 top-10 group-hover:h-32 group-hover:opacity-100 duration-200">
                <div>Home 01</div>
                <div>Home 02</div>
                <div>Home 03</div>
                <div>Home 04</div>
              </div>
            </div>
            <div className="group relative hover:cursor-pointer">
              <div>
                Pages
                <div className="bg-purple-800 w-[0px] h-[2px] group-hover:w-[35px] duration-300"></div>
              </div>
              <div className="absolute bg-white shadow-lg p-4 z-50 w-28 h-0 opacity-0 flex flex-col gap-1 top-10 group-hover:h-32 group-hover:opacity-100 duration-200">
                <div>Home 01</div>
                <div>Home 02</div>
                <div>Home 03</div>
                <div>Home 04</div>
              </div>
            </div>
            <div>Blogs</div>
            <div>Contact</div>
          </div>
          <div className="flex items-start justify-center gap-2">
            <div className="">
              <div className="flex flex-col ">
                Emergency Help
                <div className="hover:text-purple-500">+1212-226-3126</div>
              </div>
            </div>
            <div className="border-l  ">kalp</div>
            <div className="border-l  ">dd</div>
          </div>
        </div>
        <div className="flex items-center justify-between p-4  lg:hidden w-full">
          <div className="  ">
            <img
              className="p-4  "
              src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/logo-dark.svg"
            />
          </div>
          <div className="flex gap-3">
            <div className="2">|||</div>
            <div className="2">|||</div>
          </div>
        </div>
      </div>
    </div>
  );
}
