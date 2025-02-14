import React from "react";
import logo from "/logo.svg";
import { MdArrowRightAlt } from "react-icons/md";
import { Link, useLocation } from "react-router";
import { useContext } from "react";
import { AppContext } from "../ContextAPI";

const Header = () => {
  const { setUserImage } = useContext(AppContext);
  const location = useLocation();
  return (
    <header className="header">
      <Link
        to="/"
        className="cursor-pointer"
        onClick={() => {
          localStorage.clear();
          setUserImage("");
        }}
      >
        <img src={logo} alt="logo" />
      </Link>
      <div className="flex gap-6 text-gray-300 max-lg:hidden">
        <Link
          to="/"
          className={`${
            location.pathname == "/"
              ? "font-semibold text-white"
              : "text-gray-300"
          } cursor-pointer hover:text-white`}
        >
          Events
        </Link>
        <span className="cursor-pointer text-gray-300 hover:text-white">
          My Ticket
        </span>
        <Link
          to="/about-project"
          className={`${
            location.pathname == "/about-project"
              ? "font-semibold text-white"
              : "text-gray-300"
          } cursor-pointer hover:text-white`}
        >
          About Project
        </Link>
      </div>
      <button className="group headerBtn">
        MY TICKETS{" "}
        <MdArrowRightAlt className="text-3xl group-hover:rotate-[-45deg] transition" />
      </button>
    </header>
  );
};

export default Header;
