import React from "react";
import { IoLogoTiktok } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";

const Footer = () => {
  return (
    <footer className="w-full bg-primary font-marcellus max-w-7xl mx-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 py-10 lg:py-14 lg:grid-cols-8">
          {/* Logo & Description */}
          <div className="col-span-full lg:col-span-3 text-center lg:text-left">
            <img src={logo} alt="SAMEDAY Logo" className="md:w-64 rounded-md" />

            <p className="py-4 lg:py-8 text-white lg:max-w-xs">
              We take pride in delivering top-notch cleaning services for homes
              and businesses. Whether it’s a one-time deep clean or a regular
              maintenance schedule, we’ve got you covered!
            </p>

            {/* Social Icons */}
            <div className="flex mt-4 space-x-4 justify-center lg:justify-start sm:mt-0">
              {/* Twitter/X */}
              <a
                href="https://x.com/samedayclean0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#33CCFF] hover:bg-gray-900"
              >
                <svg
                  className="text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M11.3214 8.93654L16.4919 3.05554H15.2667L10.7772 8.16193L7.1914 3.05554H3.05566L8.47803 10.7773L3.05566 16.9444H4.28097L9.022 11.5519L12.8088 16.9444H16.9446L11.3211 8.93654H11.3214ZM9.64322 10.8453L9.09382 10.0764L4.72246 3.95809H6.60445L10.1322 8.89578L10.6816 9.66469L15.2672 16.0829H13.3852L9.64322 10.8456V10.8453Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/samedaycleaning_dubai/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[linear-gradient(45deg,#FEE411_6.9%,#FEDB16_10.98%,#FEC125_17.77%,#FE983D_26.42%,#FE5F5E_36.5%,#FE2181_46.24%,#9000DC_85.57%)] hover:bg-gradient-to-b from-gray-900 to-gray-900"
              >
                <svg
                  className="w-[1.25rem] h-[1.125rem] text-white"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.63434 7.99747C5.63434 6.69062 6.6941 5.63093 8.00173 5.63093C9.30936 5.63093 10.3697 6.69062 10.3697 7.99747C10.3697 9.30431 9.30936 10.364 8.00173 10.364C6.6941 10.364 5.63434 9.30431 5.63434 7.99747ZM4.35427 7.99747C4.35427 10.0108 5.98723 11.6427 8.00173 11.6427C10.0162 11.6427 11.6492 10.0108 11.6492 7.99747C11.6492 5.98418 10.0162 4.3522 8.00173 4.3522C5.98723 4.3522 4.35427 5.98418 4.35427 7.99747ZM10.9412 4.20766C10.9411 4.37615 10.991 4.54087 11.0846 4.681C11.1783 4.82113 11.3113 4.93037 11.4671 4.99491C11.6228 5.05945 11.7942 5.07639 11.9595 5.04359C12.1249 5.01078 12.2768 4.92971 12.3961 4.81062C12.5153 4.69153 12.5966 4.53977 12.6295 4.37453C12.6625 4.2093 12.6457 4.03801 12.5812 3.88232C12.5168 3.72663 12.4076 3.59354 12.2674 3.49988C12.1273 3.40622 11.9625 3.35619 11.7939 3.35612H11.7936C11.5676 3.35623 11.3509 3.44597 11.1911 3.60563C11.0313 3.76529 10.9414 3.98182 10.9412 4.20766Z"
                    fill="white"
                  ></path>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1AfRGEsnaK/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#337FFF] hover:bg-gray-900"
              >
                <svg
                  className="w-[1rem] h-[1rem] text-white"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.04111 7.81204L7.41156 5.46043H5.1296V3.93188C5.1296 3.28886 5.44818 2.66054 6.46692 2.66054H7.51899V0.657999C6.90631 0.560385 6.28723 0.507577 5.66675 0.5C3.78857 0.5 2.56239 1.62804 2.56239 3.66733V5.46043H0.480469V7.81204H2.56239V13.5H5.1296V7.81204H7.04111Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@sameday.cleaning?_t=ZS-8zBz5ypz8l6&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-[#010101] hover:bg-[#FF0050]"
              >
                <IoLogoTiktok className="text-white" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-span-full sm:col-span-4 lg:col-span-2 text-center lg:text-left">
            <h4 className="text-lg text-white font-medium mb-4 lg:mb-7">
              Get In Touch
            </h4>
            <ul className="text-white space-y-2">
              <li>
                <a
                  href="mailto:info@cleansameday.com"
                  className="hover:text-secondary"
                >
                  info@cleansameday.com
                </a>
              </li>
              <li>
                <a href="tel:+971549936911" className="hover:text-secondary">
                  +971 549 936911
                </a>
              </li>
              <li>
                F1 - 127 30B St - Hor Al Anz - Dubai - United Arab Emirates
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-span-full sm:col-span-4 lg:col-span-1 text-center lg:text-left">
            <h4 className="text-lg text-white font-medium mb-4 lg:mb-7">
              Products
            </h4>
            <ul className="text-white space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about-us" },
                { name: "Services", path: "/service" },
                { name: "Contact", path: "/contact-us" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-secondary transition-all duration-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-full sm:col-span-4 lg:col-span-2 text-center lg:text-left">
            <h4 className="text-lg text-white font-medium mb-4 lg:mb-7">
              Newsletter
            </h4>
            <div className="flex flex-col items-center lg:items-start">
              <input
                type="text"
                placeholder="Your email here..."
                className="w-full max-w-xs h-12 border border-gray-300 rounded-full px-4 mb-3 focus:outline-none focus:ring focus:ring-gray-500"
              />
              <button className="relative h-12 px-6 bg-secondary text-black border border-transparent rounded-full overflow-hidden group hover:border-secondary">
                <span className="relative z-10 flex items-center justify-center transition-colors duration-300 ease-out group-hover:text-white">
                  Subscribe
                </span>
                <div className="absolute inset-0 bg-primary -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-sm text-white">
              © 2025, All rights reserved by SAMEDAY. | Powered by
              <a
                // href="https://pushpulltechnologys.com"
                className="hover:underline ml-2 hover:text-secondary cursor-pointer"
              >
                PushPull Technologys – Innovating the Future!
              </a>
            </span>

            <ul className="flex items-center gap-9 mt-4 lg:mt-0">
              <li>
                <a href="/terms" className="text-sm text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-sm text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/helpcenter" className="text-sm text-white">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
