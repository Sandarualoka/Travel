import React from "react";
import Sala from "../../assets/sala-logo.jpg";
import { useInView } from "react-intersection-observer";
import "./about.css";
import "animate.css";
import Cover1 from "../../assets/island.jpg";
import Cover2 from "../../assets/tree.jpg";
import Cover3 from "../../assets/Home_Image.jpg";
import Cover4 from "../../assets/cover4.jpg";
import Cover5 from "../../assets/cover5.jpg";
import { Carousel } from "react-responsive-carousel";

const About = () => {
  const { ref: refSala, inView: inViewSala } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refText, inView: inViewText } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="mt-4 px-4">
      <div>
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
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded-b-[50px] lg:rounded-b-[60px]"></div>
            <div className="absolute inset-0 flex flex-col items-center lg:items-start lg:gap-8 p-4 lg:p-10 justify-center">
              {/* section for text */}
              <div className="text-center lg:text-left p-4">
                <div className="mt-[10px]">
                  <p className="text-white text-[16px] sm:text-[20px] lg:text-[18px] font-semibold mt-10">
                    Make Your Trip Easier with Us
                    <br />
                    <span className="text-[24px] sm:text-[30px] md:text-[40px]">
                      Discover Our Journey , The Story Behind Travel Sample
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between mt-1 lg:mt-5">
        <div className="flex-1 lg:mr-8">
          <p
            ref={refSala}
            className={`${
              inViewSala ? "animate__animated animate__backInUp" : ""
            } text-black p-6 sm:p-8 lg:p-12 font-bold text-center text-[35px] sm:text-[30px] md:text-[35px] lg:text-[55px] rounded-[20px] lg:rounded-[60px]`}
          >
            <span>ABOUT </span> <br />
            <span className="text-white font-sans">Travel sample</span>
          </p>
        </div>
        <div className="flex-1 mt-6 lg:mt-0">
          <img
            src={Sala}
            alt="sala-logo"
            className="w-full max-w-[480px] h-auto mx-auto lg:mx-0"
          />
        </div>
      </div>

      <div className=" bg-gray-100 p-2 rounded-lg mt-8 lg:mt-12 px-4 sm:px-8 lg:px-16 xl:px-32">
        <p
          ref={refText}
          className={`${
            inViewText ? "animate__animated animate__lightSpeedInRight" : ""
          } font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px] text-center`}
        >
          SALA Enterprises was established in 1992 with the initial electronic
          dictionaries offered to the market. After being in business for 30
          years, today SALA is one of the leading IT providers to the entire
          nation with more than 500 appointed agents island-wide.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 mb-8 mt-8">
        {/* mission */}
        <div className="bg-black/75 w-full lg:w-[550px] p-5 rounded-[20px]">
          <p className="text-white font-bold text-[30px] sm:text-[35px] md:text-[40px] text-center">
            OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 text-[40px] sm:text-[45px] md:text-[50px]">
              MISSION
            </span>
          </p>
          <p className="text-sm text-white font-semibold text-center mt-2">
            “To create an awareness in the International Market on the skills,
            creativity and capabilities of the Local Artisans and their unique
            products, created by using local raw-material. To partner with the
            Artisans to help them through their talents, develop livelihood in
            order to achieve higher standards.”
          </p>
        </div>

        {/* vision */}
        <div className="bg-black/75 h-[200px] w-full lg:w-[550px] p-5 rounded-[20px] ">
          <p className="text-white font-bold text-[30px] sm:text-[35px] md:text-[40px] text-center">
            OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 text-[40px] sm:text-[45px] md:text-[50px]">
              VISION
            </span>
          </p>
          <p className="text-sm text-white font-semibold text-center mt-2">
            “LAKSALA to be the International Market Leader in handicrafts and
            other household items through the Franchise Partnership with SALA
            Global.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
