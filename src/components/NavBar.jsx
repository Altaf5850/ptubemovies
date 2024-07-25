import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container flex justify-between bg-transparent fixed w-full z-10 p-4">
      <header className="text-3xl mt-4 hover:text-green-500 hover:scale-90 duration-200">
        <Link to="/" className="font-mono m-5 ">
          <span className="text-green-500 text-4xl font-extrabold font-serif">
            P{" "}
          </span>
          Tube
        </Link>
      </header>
      <div className="block md:hidden">
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none ml-36"
        >
          <svg
            className="w-7 h-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
      <nav
        className={`md:flex md:items-center md:space-x-4 mt-5 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-1xl space-y-2 md:space-y-0 md:flex md:space-x-4 p-2 font-serif">
          <Link
            to="/"
            className="block hover:text-green-500 hover:scale-125 duration-200"
          >
            Home
          </Link>
          <Link
            to="/packages"
            className="block hover:text-green-500 hover:scale-125 duration-200"
          >
            Packages
          </Link>
          <Link
            to="/about"
            className="block hover:text-green-500 hover:scale-125 duration-200"
          >
            About
          </Link>
          <Link
            to="/movies"
            className="block hover:text-green-500 hover:scale-125 duration-200"
          >
            Movies
          </Link>
          <Link
            to="/webseries"
            className="block hover:text-green-500 hover:scale-125 duration-200"
          >
            WebSeries
          </Link>
          <Link
            to="/kidsshows"
            className="block hover:text-green-500 hover:scale-125 duration-200"
          >
            KidsShows
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
