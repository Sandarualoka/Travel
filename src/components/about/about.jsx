import React from "react";
import Hero_Logo from "../../assets/logo-hero.png";
import Sala from "../../assets/sala-logo.jpg";
import { useInView } from "react-intersection-observer";
import "animate.css";

const About = () => {
  const { ref: refLaksala, inView: inViewLaksala } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
      <div className="bg-black w-full max-w-[1450px] h-auto lg:h-[437px] mx-auto rounded-[20px] lg:rounded-[108px] p-4 lg:p-0">
        <div className="flex flex-col lg:flex-row lg:gap-[500px] items-center">
          {/* section for text */}
          <div className="text-center lg:text-left lg:ml-[70px]">
            <p
              ref={refLaksala}
              className={`${
                inViewLaksala ? "animate__animated animate__backInUp" : ""
              } text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 text-[24px] sm:text-[30px] lg:text-[40px] font-bold mt-[20px] lg:mt-[60px] mb-5`}
            >
              ABOUT LAKSALA
            </p>

            <div className="mt-[20px] mx-auto lg:ml-0">
              <p className="text-white text-[14px] sm:text-[16px] lg:text-[18px] font-semibold">
                The platform to make your purchase for Authentic <br />
                <span className="text-[40px]">Sri Lankan Products.</span>
              </p>
            </div>
            <div className="mt-3 mx-auto lg:ml-0">
              <button class="bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-[40px] hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                EXPLORE NOW
              </button>
            </div>
          </div>
          {/* section for flag */}
          <div className="mt-10 lg:mt-10">
            <img
              src={Hero_Logo}
              alt="flag"
              className="w-[150px] sm:w-[200px] lg:w-auto mx-auto lg:mx-0"
            />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300">
              SALA GROUP
            </span>
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
