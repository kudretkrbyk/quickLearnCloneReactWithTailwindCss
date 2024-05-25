import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";

export default function WhatsOurReal() {
  const sliderSettingsWhatsOurReal = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    touchMove: true,
  };
  return (
    <div className="What’s-our-Real flex  flex-col md:flex-row  w-full h-full  ">
      <div className=" flex items-center justify-center  bg-orange-300 relative  w-full md:w-2/5 ">
        <img
          src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/testimonial_shape.svg"
          className="absolute top-0 left-0"
        />
        <img
          src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/uploads/2023/08/testimonial-img-3.png"
          className="z-50 object-cover object-center"
        />
      </div>
      <div className="bg-violet-900 w-full md:w-3/5">
        <div className="flex flex-col items-start px-8 p-10 w-full">
          <div className="flex items-center justify-start w-full gap-12 ">
            <h1 className="font-bold text-wrap text-white text-4xl">
              What’s our Real Client Stories <br />
              About Our Work & Passion
            </h1>
            <img src="https://www.radiustheme.com/demo/wordpress/themes/quiklearn/wp-content/themes/quiklearn/assets/element/red-star.svg" />
          </div>
          <div className="flex gap-2 items-center justify-center ">
            <Slider
              {...sliderSettingsWhatsOurReal}
              className="multiple-items-vertical p-4 w-full"
            >
              {/* <!-- slider1 -->*/}
              <div className="item flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <div className="text-yellow-500 text-4xl font-extrabold">
                    * * * * *
                  </div>
                  <div className="text-wrap">
                    “When An Unknown Printer Took Alley Ffer Area Typey And
                    Scrambled To Make A Type Specimen Book Hasswhen An Unknown
                    Printer Took A Galley Offer Type Make Specimen Book Has
                    Survived Type Make.” Richard Whalen CEO, Marketing “When An
                    Unknown Printer Took Alley Ffer Area Typey And Scrambled To
                    Make A Type Specimen Book Hasswhen An Unknown Printer Took A
                    Galley Offer Type Make Specimen Book Has Survived Type
                    Make.”
                  </div>
                  <div className="text-white">MR. K. Jackery</div>
                </div>
              </div>
              {/*<!-- slider2 -->*/}
              <div className=" item flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <div className="text-yellow-500 text-4xl font-extrabold">
                    * * * * *
                  </div>
                  <div className="text-wrap">
                    “When An Unknown Printer Took Alley Ffer Area Typey And
                    Scrambled To Make A Type Specimen Book Hasswhen An Unknown
                    Printer Took A Galley Offer Type Make Specimen Book Has
                    Survived Type Make.” Richard Whalen CEO, Marketing “When An
                    Unknown Printer Took Alley Ffer Area Typey And Scrambled To
                    Make A Type Specimen Book Hasswhen An Unknown Printer Took A
                    Galley Offer Type Make Specimen Book Has Survived Type
                    Make.”
                  </div>
                  <div className="text-white">MR. K. Jackery</div>
                </div>
              </div>
              {/* <!-- slider3 -->*/}
              <div className="item flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <div className="text-yellow-500 text-4xl font-extrabold">
                    * * * * *
                  </div>
                  <div className="text-wrap">
                    “When An Unknown Printer Took Alley Ffer Area Typey And
                    Scrambled To Make A Type Specimen Book Hasswhen An Unknown
                    Printer Took A Galley Offer Type Make Specimen Book Has
                    Survived Type Make.” Richard Whalen CEO, Marketing “When An
                    Unknown Printer Took Alley Ffer Area Typey And Scrambled To
                    Make A Type Specimen Book Hasswhen An Unknown Printer Took A
                    Galley Offer Type Make Specimen Book Has Survived Type
                    Make.”
                  </div>
                  <div className="text-white">MR. K. Jackery</div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
