import React, { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-neutral-900 relative font-sans lg:py-10 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <button
            onClick={toggleMenu}
            type="button"
            className="absolute top-05 right-4 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open Menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`${
              isOpen ? "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xl transition duration-500 z-10" : ""
            }`}
            onClick={() => setIsOpen(false)}
          ></div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full md:static md:block md:w-auto z-20`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-40 border border-transparent rounded-lg bg-transparent text-center md:flex-row md:space-x-16 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
              <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  className="block py-3 px-3 text-gray-500 hover:text-orange-400 transition duration-300 font-semibold text-2xl md:text-xl rounded-sm md:p-0 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
              <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="block py-3 px-3 text-gray-500 hover:text-orange-400 transition duration-500 font-semibold text-2xl md:text-xl rounded-sm md:p-0 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
              <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="block py-2 px-3 text-gray-500 hover:text-orange-400 transition duration-500 font-semibold text-2xl md:text-xl rounded-sm md:p-0 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  About Me
                </Link>
              </li>
              <li>
              <Link
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  className="block py-3 px-3 text-gray-500 hover:text-orange-400 transition duration-500 font-semibold text-2xl md:text-xl rounded-sm md:p-0 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
              <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="block py-3 px-3 text-gray-500 hover:text-orange-400 transition duration-500 font-semibold text-2xl md:text-xl rounded-sm md:p-0 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
