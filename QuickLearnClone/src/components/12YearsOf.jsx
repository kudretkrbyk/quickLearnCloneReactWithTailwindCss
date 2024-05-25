export default function YearsOf() {
  return (
    <div className="12-years-of w-full flex flex-col lg:flex-row items-center justify-center p-10 gap-4 pt-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2  justify-items-center w-full gap-4">
        <div className="flex flex-col gap-4  md:items-end items-center justify-center">
          <div className="bg-yellow-500 w-60 h-32 rounded-xl p-6 text-2xl text-center">
            12 Years Of Experiences
          </div>
          <div className="w-full h-96 duration-500 rounded-md  md:bg-cover bg-auto bg-no-repeat bg-[url(https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/goal-img-1.png)]"></div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <div className="w-full h-96 duration-500 rounded-md bg- bg-auto bg-no-repeat bg-[url(https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/goal-img-2.png)]"></div>
          </div>
          <div className="flex items-center justify-center gap-4 border h-28 border-gray-200 rounded-lg p-6">
            <div className="rt-media ">
              <img src="./users.svg" alt="" />
            </div>
            <div>
              <div className="text-4xl font-bold">35K+</div>
              Positive Reviews
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="text-gray-600">WHAT’S OUR MAIN GOAL</div>
        <div className="font-extrabold">
          Take The Next Step Toward Your Personal And Professional Goals With
          Quiklearn
        </div>
        <div>
          When An Unknown Printer Took A Galley Offer Area Type And Scrambled To
          Make A Type Specimen Book Has Survived When An Unknown Printer Took A
          Galley Offer Area Type And Scrambled To Make.
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-start gap-4">
            <div className="bg-purple-600 p-12 rounded-xl"></div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Learn From Experts</h1>
              <p>
                Motype Specimen Book Has Survived When An Unknown Printer Took
              </p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-4">
            <div className="bg-purple-600 p-12 rounded-xl"></div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Learn From Experts</h1>
              <p>
                Motype Specimen Book Has Survived When An Unknown Printer Took
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
