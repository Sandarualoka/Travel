import React, { useState } from "react";
import Contact from "../../assets/contact-us-new.png";
import Hero from "../hero/hero";
import emailjs from "@emailjs/browser";
import "./animation.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check
    if (!name || !email || !message) {
      setSuccessMessage("All fields must be filled.");
      return;
    }

    const serviceId = "service_dqfv2g4";
    const templateId = "template_p0srpw6";
    const publickey = "yXHcd6XiDNlmHtjyJ";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Sandaru",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publickey)
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");
        setSuccessMessage("Message sent successfully!");
      })
      .catch((error) => {
        console.log("Error sending email", error);
        setSuccessMessage("Failed to send message. Please try again.");
      });
  };

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
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 "
              type="text"
            />
            <input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1"
              type="email"
            />
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Say hello"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1"
            ></textarea>
            <button
              className="bg-gradient-to-r  text-black bg-white font-bold py-2 px-4 rounded-md mt-4"
              type="submit"
            >
              Send
            </button>
          </form>
          {successMessage && (
            <div className="mt-4 text-gray-200">{successMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
