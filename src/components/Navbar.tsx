/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      id="navbar"
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white"
    >
      <img className="w-[40%]" src={Logo} alt="/" />
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="analytics" smooth duration={500}>
            Analytics
          </Link>
        </li>
        <li>
          <Link to="cards" smooth duration={500}>
            Cards
          </Link>
        </li>
        <li>
          <Link to="newsletter" smooth duration={500}>
            Newsletter
          </Link>
        </li>
        <li>
          <Link to="footer" smooth duration={500}>
            Footer
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00A264] m-4">
          KUANTUHM*
        </h1>
        <li className="p-4 border-b border-gray-600">
          {" "}
          <Link onClick={handleNav} to="home" smooth duration={500}>
            Home
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          {" "}
          <Link onClick={handleNav} to="analytics" smooth duration={500}>
            Analytics
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          {" "}
          <Link onClick={handleNav} to="cards" smooth duration={500}>
            Cards
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          {" "}
          <Link onClick={handleNav} to="newsletter" duration={500}>
            Newsletter
          </Link>
        </li>
        <li className="p-4">
          {" "}
          <Link onClick={handleNav} to="footer" smooth duration={500}>
            Footer
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
