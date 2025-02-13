import React from "react";
import logo from "/logo.svg";
import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="w-[95%] flex justify-between items-center px-[16px] py-[12px] bg-[#05252C] rounded-2xl mx-auto max-lg:w-[98%] max-lg:px-4">
      <Link to="/" className="cursor-pointer">
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex gap-6 text-gray-300 max-lg:hidden">
        <Link to="/" className="cursor-pointer text-white">Events</Link>
        <span className="cursor-pointer">My Ticket</span>
        <Link to="/about-project" className="cursor-pointer">About Project</Link>
      </div>
      <button className="rounded-2xl bg-white text-black px-[24px] hover:bg-[#24A0B5] transition-all duration-300 ease-in-out hover:text-white py-[16px] cursor-pointer font-semibold md:w-[210px] hover:drop-shadow-2xl flex gap-2 justify-center items-center">
        MY TICKETS <MdArrowRightAlt className="text-3xl hover:translate-z-10" />
      </button>
    </header>
  );
};

export default Header;
