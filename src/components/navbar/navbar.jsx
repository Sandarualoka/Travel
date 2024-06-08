import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../../assets/logo-new-1.png";
import { Link } from "react-router-dom";
import "animate.css";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Gallery",
    link: "/gallery",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-md bg-black">
      <div className="flex justify-between items-center px-6 py-1">
        <div className="flex gap-3 md:gap-7 items-center">
          <div>
            <Link to="/">
              <img
                src={Logo}
                alt="laskala-logo"
                className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] "
              />
            </Link>
          </div>
        </div>
        <div className="md:hidden text-white">
          <FaBars
            className="w-[28px] h-[28px] cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        <ul
          className={`sm:flex items-center gap-4 ml-auto ${
            isMenuOpen
              ? "flex flex-col absolute top-[60px] left-0 w-full bg-black z-10 shadow-lg p-4 animate__animated animate__fadeInDown"
              : "hidden md:flex"
          }`}
        >
          {Menu.map((data) => (
            <li key={data.id} className="mt-2 md:mt-0 ">
              <Link
                className="inline-block px-4 text-white hover:text-[18px] duration-200 font-semibold text-[16px] md:text-[16px]"
                to={data.link}
                onClick={() => setIsMenuOpen(false)} // Close the menu on click
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
