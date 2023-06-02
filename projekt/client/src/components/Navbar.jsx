import React from "react";
import { FaBars, FaTimes, FaFacebook, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      {/*logo*/}
      <div>ArchGriffin</div>
      {/*menu*/}

      <ul className="hidden md:flex">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/logistics">Logistics</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/*hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*mobile menu*/}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <a href="/">Home</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/logistics">Logistics</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/services">Services</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/*social icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email Us
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Facebook
              <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-purple-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Instagram
              <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
