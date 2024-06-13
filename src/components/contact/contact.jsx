import React from "react";
import Contact from "../../assets/contact-us-new.png";
import Hero from "../hero/hero";
import "./animation.css";

const ContactForm = () => {
  return (
    <div>
      <Hero />
      <div className="flex flex-col items-center justify-center min-h-screen dark">
        <div className="float mb-8">
          <img
            src={Contact}
            alt="contact-logo"
            className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]"
          />
        </div>
        <div className="w-full max-w-xs sm:max-w-md bg-gray-800 rounded-lg shadow-md p-6 mx-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-200 mb-4 flex justify-center">
            Find me Online
          </h2>
          <form className="flex flex-col">
            <input
              placeholder="Full Name"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
            />
            <input
              placeholder="Email"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="email"
            />
            <input
              placeholder="Phone number"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
            />
            <textarea
              placeholder="Say hello"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            ></textarea>
            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
