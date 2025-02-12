import React from "react";
import logo from "/logo.svg";
import Button from "./Button";

const Header = () => {
  return (
    <header className="w-[95%] flex justify-between items-center px-[16px] py-[12px] bg-[#05252C] rounded-2xl mx-auto max-lg:w-[98%] max-lg:px-4">
      <span className="cursor-pointer">
        <img src={logo} alt="logo" />
      </span>
      <div className="flex gap-6 text-gray-300 max-lg:hidden">
        <span className="cursor-pointer text-white">Events</span>
        <span className="cursor-pointer">My Ticket</span>
        <span className="cursor-pointer">About Project</span>
      </div>
      <button className="rounded-2xl bg-white text-black px-[24px] py-[16px] cursor-pointer font-semibold md:w-[210px] hover:drop-shadow-2xl">
        MY TICKETS
      </button>
    </header>
  );
};

export default Header;
