import React from "react";
import Hero_Logo from "../../assets/logo-hero.png";
import Contact_Us from "../../assets/contact-us-new.png";
import "./animation.css";
import "animate.css";

const contact = () => {
  return (
    <div className="mt-4 px-4">
      <div className="bg-black w-full max-w-[1450px] h-auto lg:h-[437px] mx-auto rounded-[20px] lg:rounded-[108px] p-4 lg:p-0">
        <div className="flex flex-col lg:flex-row lg:gap-[400px] items-center">
          {/* section for text */}
          <div className="text-center lg:text-left ">
            <p className="animate__animated animate__backInUp text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 text-[36px] lg:text-[40px] font-bold mt-[20px] lg:mt-[60px] lg:ml-[70px] mb-5">
              CONTACT US
            </p>

            <div className="mt-[20px] mx-auto lg:ml-[70px]">
              <p className=" text-white text-[16px] lg:text-[18px] font-semibold">
                The platform to make your purchase for Authentic Sri Lankan
                Products.
              </p>
            </div>
            <div className="mt-3 mx-auto lg:ml-[70px] animate__animated animate__slideInUp">
              <button class="bg-yellow-950 text-yellow-400 border border-yellow-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-[40px] hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-yellow-400 shadow-yellow-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                EXPLORE NOW
              </button>
            </div>
          </div>
          {/* section for flag */}
          <div className="mt-10 lg:mt-10 ">
            <img
              src={Hero_Logo}
              alt="flag"
              className="w-[200px] lg:w-auto mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <div>
          <p className="text-[37px] font-bold mb-8">
            Find Us{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-300 font-bold text-[45px]">
              Online!
            </span>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[20%]">
        {/* form */}
        <div className="flex justify-center mb-8 ml-10">
          <form>
            <div class="mb-4">
              <label
                for="name"
                class="block text-sm font-medium text-gray-700  text-[20px] mb-3"
              >
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                class="w-full px-3 py-2 bg-black/50 rounded-[10px] border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div class="mb-4">
              <label
                for="email"
                class="block text-sm font-medium text-gray-700  text-[20px] mb-3"
              >
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-3 py-2 bg-black/50 rounded-[10px] border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div class="mb-4">
              <label
                for="subject"
                class="block text-sm font-medium text-gray-700  text-[20px] mb-3"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                class="w-full px-3 py-2 bg-black/50 rounded-[10px] border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div class="mb-4">
              <label
                for="message"
                class="block text-sm font-medium text-gray-700  text-[20px] mb-3"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                class="w-full px-3 py-2 bg-black/50 rounded-[10px] border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              ></textarea>
            </div>
            <div class="mb-4">
              <label
                for="phone"
                class="block text-sm font-medium text-gray-700  text-[20px] mb-3"
              >
                Phone Number (Optional):
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                class="w-full px-3 py-2 rounded-[10px] bg-black/50 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                class="inline-flex items-center px-4 py-2 bg-black text-white rounded-md font-bold focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-center float">
          <img
            src={Contact_Us}
            alt="contact-us-logo"
            className="w-[250px] h-[330px]"
          />
        </div>
      </div>
    </div>
  );
};

export default contact;
