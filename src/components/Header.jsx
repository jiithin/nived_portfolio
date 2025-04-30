import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-neutral-900 relative font-Lato py-5">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <button
            onClick={toggleMenu}
            type="button"
            className="absolute top-05 right-4 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
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
          {/* Blur background when dropdown is open */}
          <div
            className={`${
              isOpen ? "fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xl z-10" : ""
            }`}
            onClick={() => setIsOpen(false)}
          ></div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-full left-0 w-full md:static md:block md:w-auto z-20`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-10 border border-transparent rounded-lg bg-transparent text-center md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-3 px-3 text-gray-500 hover:text-orange-400 font-semibold text-2xl md:text-lg rounded-sm md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-3 px-3 text-gray-500 hover:text-orange-400 font-semibold text-2xl md:text-lg rounded-sm md:p-0"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-500 hover:text-orange-400 font-semibold text-2xl md:text-lg rounded-sm md:p-0"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-3 px-3 text-gray-500 hover:text-orange-400 font-semibold text-2xl md:text-lg rounded-sm md:p-0"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-3 px-3 text-gray-500 hover:text-orange-400 font-semibold text-2xl md:text-lg rounded-sm md:p-0"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
