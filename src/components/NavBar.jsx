// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/images/samedayfinal.png";

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const isActive = (path) =>
//     location.pathname === path ? "text-primary" : "text-gray-900";

//   return (
//     <nav className="bg-white border-b-2 border-primary font-marcellus max-w-7xl mx-auto">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:px-5 px-2 ">
//         <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <div className="flex flex-col">
//             {/* <span className="self-center text-4xl font-medium text-primary whitespace-nowrap">
//               SAMEDAY
//             </span>
//             <p className="text-sm text-gray-500">Cleaning Services LLC Dubai</p> */}
//             <img
//               src={logo}
//               alt=""
//               className="lg:w-60 md:w-44 w-28 object-contain rounded-md"
//             />
//           </div>
//         </a>
//         <button
//           onClick={toggleMenu}
//           data-collapse-toggle="navbar-default"
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
//           aria-controls="navbar-default"
//           aria-expanded={isMenuOpen}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//         <div
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } w-full md:block md:w-auto`}
//           id="navbar-default"
//         >
//           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
//             <li>
//               <Link
//                 to="/"
//                 className={`block py-2 px-3 rounded hover:text-primary lg:text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ${isActive(
//                   "/"
//                 )}`}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/aboutus"
//                 className={`block py-2 px-3 rounded hover:text-primary lg:text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ${isActive(
//                   "/aboutus"
//                 )}`}
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/service"
//                 className={`block py-2 px-3 rounded hover:text-primary lg:text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ${isActive(
//                   "/service"
//                 )}`}
//               >
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/navbooking"
//                 className={`block py-2 px-3 rounded hover:text-primary lg:text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ${isActive(
//                   "/bookings"
//                 )}`}
//               >
//                 Booking
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/gallery"
//                 className={`block py-2 px-3 rounded hover:text-primary lg:text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ${isActive(
//                   "/gallery"
//                 )}`}
//               >
//                 Gallery
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className={`block py-2 px-3 rounded hover:text-primary lg:text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ${isActive(
//                   "/contact"
//                 )}`}
//               >
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/Samedayfinal.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-container")) {
        closeMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeMenu(); // Close menu on route change
  }, [location.pathname]);

  const isActive = (path) =>
    location.pathname === path ? "text-primary" : "text-gray-900";

  return (
    <nav className="bg-white border-b-2 border-primary font-marcellus max-w-7xl mx-auto">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:px-5 px-2 menu-container">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="flex flex-col">
            <img
              src={logo}
              alt=""
              className="lg:w-60 md:w-44 w-28 object-contain rounded-md"
            />
          </div>
        </a>
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
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
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className={`block py-2 px-3 rounded hover:text-primary lg:text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ${isActive(
                  "/"
                )}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                onClick={closeMenu}
                className={`block py-2 px-3 rounded hover:text-primary lg:text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ${isActive(
                  "/aboutus"
                )}`}
              >
                About
              </Link>
            </li>
            {/* Services Dropdown */}
            <li className="relative dropdown">
              <button
                onClick={toggleDropdown}
                className={`block py-2 px-3 rounded lg:text-xl hover:text-primary hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 flex items-center gap-1`}
              >
                Services
                <svg
                  className="w-4 h-4 transition-transform"
                  style={{ transform: isDropdownOpen ? "rotate(180deg)" : "" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/deepservice"
                        onClick={closeMenu}
                        className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                      >
                        Deep Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/service"
                        onClick={closeMenu}
                        className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                      >
                        Cleaning Service
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                to="/navbooking"
                onClick={closeMenu}
                className={`block py-2 px-3 rounded hover:text-primary lg:text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ${isActive(
                  "/bookings"
                )}`}
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                onClick={closeMenu}
                className={`block py-2 px-3 rounded hover:text-primary lg:text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ${isActive(
                  "/gallery"
                )}`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className={`block py-2 px-3 rounded hover:text-primary lg:text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ${isActive(
                  "/contact"
                )}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
