import React, { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ];

  return (
    <>
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0">
        <div className="text-xl container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3 text-primary"
            >
              <span>XYZ</span>
            </a>

            {/* Showing navitem using map */}
            <ul className="md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => {
                return (
                  <a
                    key={link}
                    href={link}
                    className="block hover:text-gray-300"
                  >
                    {link}
                  </a>
                );
              })}
            </ul>
          </div>
          {/* menu btn, only for mobile display */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
          {/* Language and Signup */}
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-secondary"
            >
              {" "}
              <GrLanguage className="mr-2" />
              <span>Language</span>
            </a>
            <button className="bg-secondary py-2 px-4 transition-all duration-300 rounded hover: text-white hover:bg-indigo-600">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {/* Removed: // top-0 right-0 left-0 fixed */}
      <div
        className={`${
          isMenuOpen
            ? "fixed top-0 flex flex-col items-center justify-center w-full"
            : "hidden"
        } 
        text-xl space-y-4 px-4 pt-24 pb-5 bg-secondary
        `}
      >
        {navItems.map(({ link, path }) => {
          return (
            <a
              key={link}
              href={path}
              onClick={toggleMenu}
              className="block hover:text-gray-300"
            >
              {link}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
