/* import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import logo from "../assets/images/Samedayfinal.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [deepCleaningServices, setDeepCleaningServices] = useState([]);
  const [cleaningServices, setCleaningServices] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const location = useLocation();

  // Fetch services data
  useEffect(() => {
    const fetchDeepCleaningServices = async () => {
      try {
        const response = await axios.get(
          "https://cleansameday.com:4000/api/service/getAllDeepCleaningServices"
        );
        if (response.data && response.data.services) {
          setDeepCleaningServices(response.data.services);
        }
      } catch (error) {
        console.error("Error fetching deep cleaning services:", error);
      }
    };

    const fetchCleaningServices = async () => {
      try {
        const response = await axios.get(
          "https://cleansameday.com:4000/api/service/getAllCleaningServices"
        );
        if (response.data && response.data.services) {
          setCleaningServices(response.data.services);
        }
      } catch (error) {
        console.error("Error fetching cleaning services:", error);
      }
    };

    fetchDeepCleaningServices();
    fetchCleaningServices();
  }, []);

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
    setHoveredCategory(null);
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

  const handleServiceClick = (serviceId) => {
    closeMenu();
    // Navigate to service details page
    window.location.href = `/servicedetails/${serviceId}`;
  };

  return (
    <nav className="bg-white border-b-2 border-primary font-marcellus max-w-7xl mx-auto">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:px-5 px-2 menu-container">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="flex flex-col">
            <img
              src={logo}
              alt="Cleansameday logo"
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
                to="/about-us"
                onClick={closeMenu}
                className={`block py-2 px-3 rounded hover:text-primary lg:text-xl hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 ${isActive(
                  "/aboutus"
                )}`}
              >
                About
              </Link>
            </li>
            
//             {/* Services Multi-level Dropdown *///}
//             <li className="relative dropdown group">
//               <button
//                 onClick={toggleDropdown}
//                 className="block py-2 px-3 rounded lg:text-xl hover:text-primary hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 flex items-center gap-1"
//               >
//                 Services
//                 <svg
//                   className="w-4 h-4 transition-transform"
//                   style={{
//                     transform: isDropdownOpen ? "rotate(180deg)" : "",
//                   }}
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button>
              
//               {isDropdownOpen && (
//                 <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 md:block hidden">
//                   <ul className="py-2">
//                     {/* Deep Cleaning with nested dropdown */}
//                     <li
//                       className="relative group/nested"
//                       onMouseEnter={() => setHoveredCategory('deep')}
//                       onMouseLeave={() => setHoveredCategory(null)}
//                     >
//                       <div className="flex items-center justify-between px-4 py-2 text-gray-900 hover:bg-gray-100 cursor-pointer">
//                         <Link
//                           to="/deepservice"
//                           onClick={closeMenu}
//                           className="flex-1"
//                         >
//                           Deep Cleaning
//                         </Link>
//                         <svg
//                           className="w-4 h-4 ml-2"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M9 5l7 7-7 7"
//                           />
//                         </svg>
//                       </div>
                      
//                       {/* Deep Cleaning Services Submenu */}
//                       {hoveredCategory === 'deep' && deepCleaningServices.length > 0 && (
//                         <div className="absolute left-full top-0 ml-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-60">
//                           <ul className="py-2 max-h-96 overflow-y-auto">
//                             {deepCleaningServices.map((service) => (
//                               <li key={service._id}>
//                                 <button
//                                   onClick={() => handleServiceClick(service._id)}
//                                   className="w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors duration-200"
//                                 >
//                                   <div className="font-medium">{service.name}</div>
//                                 </button>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}
//                     </li>
                    
//                     {/* Cleaning Service with nested dropdown */}
//                     <li
//                       className="relative group/nested"
//                       onMouseEnter={() => setHoveredCategory('cleaning')}
//                       onMouseLeave={() => setHoveredCategory(null)}
//                     >
//                       <div className="flex items-center justify-between px-4 py-2 text-gray-900 hover:bg-gray-100 cursor-pointer">
//                         <Link
//                           to="/service"
//                           onClick={closeMenu}
//                           className="flex-1"
//                         >
//                           Cleaning Service
//                         </Link>
//                         <svg
//                           className="w-4 h-4 ml-2"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M9 5l7 7-7 7"
//                           />
//                         </svg>
//                       </div>
                      
//                       {/* Cleaning Services Submenu */}
//                       {hoveredCategory === 'cleaning' && cleaningServices.length > 0 && (
//                         <div className="absolute left-full top-0 ml-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-60">
//                           <ul className="py-2 max-h-96 overflow-y-auto">
//                             {cleaningServices.map((service) => (
//                               <li key={service._id}>
//                                 <button
//                                   onClick={() => handleServiceClick(service._id)}
//                                   className="w-full text-left px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 transition-colors duration-200"
//                                 >
//                                   <div className="font-medium">{service.name}</div>
//                                 </button>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       )}
//                     </li>
//                   </ul>
//                 </div>
//               )}
              
//               {/* Mobile dropdown - simplified without nested menus */}
//               {isDropdownOpen && (
//                 <div className="md:hidden block w-full bg-white border border-gray-200 rounded-lg shadow-lg mt-2">
//                   <ul className="py-2">
//                     <li>
//                       <Link
//                         to="/deepservice"
//                         onClick={closeMenu}
//                         className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
//                       >
//                         Deep Cleaning
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/service"
//                         onClick={closeMenu}
//                         className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
//                       >
//                         Cleaning Service
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </li>
            
//             <li>
//               <Link
//                 to="/navbooking"
//                 onClick={closeMenu}
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
//                 onClick={closeMenu}
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
//                 onClick={closeMenu}
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaChevronRight } from "react-icons/fa6";
import logo from "../assets/images/Samedayfinal.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [deepCleaningServices, setDeepCleaningServices] = useState([]);
  const [cleaningServices, setCleaningServices] = useState([]);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Fetch services data
  useEffect(() => {
    const fetchDeepCleaningServices = async () => {
      try {
        const response = await axios.get(
          "https://cleansameday.com:4000/api/service/getAllDeepCleaningServices"
        );
        if (response.data && response.data.services) {
          setDeepCleaningServices(response.data.services);
        }
      } catch (error) {
        console.error("Error fetching deep cleaning services:", error);
      }
    };

    const fetchCleaningServices = async () => {
      try {
        const response = await axios.get(
          "https://cleansameday.com:4000/api/service/getAllCleaningServices"
        );
        if (response.data && response.data.services) {
          setCleaningServices(response.data.services);
        }
      } catch (error) {
        console.error("Error fetching cleaning services:", error);
      }
    };

    fetchDeepCleaningServices();
    fetchCleaningServices();
  }, []);

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
    setMobileServicesOpen(null);
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
    closeMenu();
  }, [location.pathname]);

  const isActive = (path) =>
    location.pathname === path ? "text-primary font-semibold" : "text-gray-900";

  const isActivePath = (path) => {
    if (path === "/") return location.pathname === "/" ? "text-primary font-semibold" : "text-gray-900";
    const active =
      location.pathname === path || location.pathname.startsWith(`${path}/`);
    return active ? "text-primary font-semibold" : "text-gray-900";
  };

  // ✅ SEO SLUG NAVIGATION
  const handleServiceClick = (serviceSlug) => {
    closeMenu();
    navigate(`/${serviceSlug}`);
  };

  return (
    <nav className="bg-white border-b-2 border-primary font-marcellus max-w-7xl mx-auto shadow-sm sticky top-0 z-40">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto md:px-5 px-2 menu-container">

        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            alt="Clean Same Day"
            className="lg:w-60 md:w-44 w-28 object-contain rounded-md"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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

        {/* MENU */}
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">

            <li>
              <Link to="/" onClick={closeMenu} className={`block py-2 px-3 lg:text-xl hover:text-primary ${isActive("/")}`}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/about-us" onClick={closeMenu} className={`block py-2 px-3 lg:text-xl hover:text-primary ${isActive("/about-us")}`}>
                About
              </Link>
            </li>

            {/* SERVICES MEGA MENU */}
            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={toggleDropdown}
                className={`py-2 px-3 lg:text-xl hover:text-primary flex items-center gap-1 w-full md:w-auto ${
                  isDropdownOpen ? "text-primary" : ""
                }`}
                aria-expanded={isDropdownOpen}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Desktop mega menu */}
              {isDropdownOpen && (
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
                  <div className="w-[min(720px,calc(100vw-2rem))] bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="grid grid-cols-2 divide-x divide-gray-100">
                      <div className="p-5">
                        <Link
                          to="/deep-cleaning-services-in-dubai"
                          onClick={closeMenu}
                          className="flex items-center justify-between text-primary font-semibold text-base mb-4 pb-2 border-b border-primary/10 hover:text-secondary transition-colors"
                        >
                          Deep Cleaning
                          <FaChevronRight className="text-secondary text-sm" />
                        </Link>
                        <ul className="space-y-0.5 max-h-[260px] overflow-y-auto">
                          {deepCleaningServices.map((service) => (
                            <li key={service._id}>
                              <button
                                type="button"
                                onClick={() => handleServiceClick(service.slug)}
                                className="w-full text-left px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-primary/5 hover:text-primary transition-colors"
                              >
                                {service.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-5">
                        <Link
                          to="/service"
                          onClick={closeMenu}
                          className="flex items-center justify-between text-primary font-semibold text-base mb-4 pb-2 border-b border-primary/10 hover:text-secondary transition-colors"
                        >
                          Cleaning Services
                          <FaChevronRight className="text-secondary text-sm" />
                        </Link>
                        <ul className="space-y-0.5 max-h-[260px] overflow-y-auto">
                          {cleaningServices.map((service) => (
                            <li key={service._id}>
                              <button
                                type="button"
                                onClick={() => handleServiceClick(service.slug)}
                                className="w-full text-left px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-primary/5 hover:text-primary transition-colors"
                              >
                                {service.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-surface px-5 py-3 text-center border-t border-gray-100">
                      <Link
                        to="/navbooking"
                        onClick={closeMenu}
                        className="text-sm font-semibold text-primary hover:text-secondary transition-colors"
                      >
                        Book a cleaning service →
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Mobile services accordion */}
              {isDropdownOpen && (
                <div className="md:hidden mt-2 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden">
                  <button
                    type="button"
                    onClick={() =>
                      setMobileServicesOpen((prev) =>
                        prev === "deep" ? null : "deep"
                      )
                    }
                    className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold text-primary border-b border-gray-100"
                  >
                    Deep Cleaning
                    <FaChevronRight
                      className={`text-secondary transition-transform ${
                        mobileServicesOpen === "deep" ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {mobileServicesOpen === "deep" && (
                    <ul className="max-h-48 overflow-y-auto bg-gray-50">
                      <li>
                        <Link
                          to="/deep-cleaning-services-in-dubai"
                          onClick={closeMenu}
                          className="block px-4 py-2 text-sm font-medium text-secondary"
                        >
                          View all deep cleaning
                        </Link>
                      </li>
                      {deepCleaningServices.map((service) => (
                        <li key={service._id}>
                          <button
                            type="button"
                            onClick={() => handleServiceClick(service.slug)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-white"
                          >
                            {service.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      setMobileServicesOpen((prev) =>
                        prev === "cleaning" ? null : "cleaning"
                      )
                    }
                    className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold text-primary"
                  >
                    Cleaning Services
                    <FaChevronRight
                      className={`text-secondary transition-transform ${
                        mobileServicesOpen === "cleaning" ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {mobileServicesOpen === "cleaning" && (
                    <ul className="max-h-48 overflow-y-auto bg-gray-50">
                      <li>
                        <Link
                          to="/service"
                          onClick={closeMenu}
                          className="block px-4 py-2 text-sm font-medium text-secondary"
                        >
                          View all services
                        </Link>
                      </li>
                      {cleaningServices.map((service) => (
                        <li key={service._id}>
                          <button
                            type="button"
                            onClick={() => handleServiceClick(service.slug)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-white"
                          >
                            {service.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>

            <li>
              <Link
                to="/blog"
                onClick={closeMenu}
                className={`block py-2 px-3 lg:text-xl hover:text-primary ${isActivePath("/blog")}`}
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/gallery"
                onClick={closeMenu}
                className={`block py-2 px-3 lg:text-xl hover:text-primary ${isActivePath("/gallery")}`}
              >
                Gallery
              </Link>
            </li>

            <li>
              <Link
                to="/navbooking"
                onClick={closeMenu}
                className={`block py-2 px-3 lg:text-xl hover:text-primary ${isActivePath("/navbooking")}`}
              >
                Booking
              </Link>
            </li>

            <li>
              <Link
                to="/contact-us"
                onClick={closeMenu}
                className={`block py-2 px-3 lg:text-xl hover:text-primary ${isActivePath("/contact-us")}`}
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
