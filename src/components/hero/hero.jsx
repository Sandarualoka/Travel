import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cover1 from "../../assets/island.jpg";
import Cover2 from "../../assets/tree.jpg";
import Cover3 from "../../assets/Home_Image.jpg";
import Cover4 from "../../assets/cover4.jpg";
import Cover5 from "../../assets/cover5.jpg";
import "animate.css";
import "./hero.css"; // Import your custom CSS for fading effect

const Hero = () => {
  return (
    <div className="mt-4 px-4">
      <div className="relative overflow-x-hidden">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={800}
          className="rounded-b-[50px] lg:rounded-b-[100px]"
        >
          <div>
            <img
              src={Cover1}
              alt="cover1"
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-b-[60px] fade"
            />
          </div>
          <div>
            <img
              src={Cover2}
              alt="cover2"
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-b-[60px] fade"
            />
          </div>
          <div>
            <img
              src={Cover3}
              alt="cover3"
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-b-[60px] fade"
            />
          </div>

          <div>
            <img
              src={Cover4}
              alt="cover4"
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-b-[60px] fade"
            />
          </div>

          <div>
            <img
              src={Cover5}
              alt="cover5"
              className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-b-[60px] fade"
            />
          </div>
        </Carousel>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 "></div>
        <div className="absolute inset-0 flex flex-col items-center lg:items-start lg:gap-8 p-4 lg:p-10 justify-center">
          {/* section for text */}
          <div className="text-center lg:text-left p-4">
            <p className="animate__animated animate__backInUp text-white text-[24px] sm:text-[30px] md:text-[60px] lg:text-[90px] font-bold mt-[10px] mb-2">
              Welcome to SriLanka
            </p>
            <div className="mt-[10px]">
              <p className="text-white text-[16px] sm:text-[20px] lg:text-[18px] font-semibold">
                Make Your Trip Easier with Us
                <br />
                <span className="text-[24px] sm:text-[30px] md:text-[40px]">
                  Travel With Sample
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
