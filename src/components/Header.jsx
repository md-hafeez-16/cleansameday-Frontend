import React from "react";
import { FaInstagram } from "react-icons/fa";

import { TiSocialTwitterCircular } from "react-icons/ti";
import { IoLogoYoutube } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoTiktok } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div className="bg-primary max-w-[1620px] font-marcellus  mx-auto">
        <div className="max-w-[1620px] mx-auto flex lg:flex-row flex-col md:gap-2 lg:gap-2 2xl:gap-2 xl:gap-16 md:justify-between md:items-center text-[#FFFFFF] py-4 md:text-sm text-xs font-normal px-5">
          <h1>
            Call us:{" "}
            <a href="tel:+971549936911" className="">
              +971549936911
            </a>{" "}
            |{" "}
            <a href="mailto:info@cleansameday.com" className="">
              info@cleansameday.com
            </a>
          </h1>
          {/* <p className="whitespace-nowrap">
            Join Us Sunday @ 9:00 Am for Special Pooja!
          </p> */}
          <p className="flex items-center gap-2 whitespace-nowrap">
            Follow Us :{" "}
            <MdFacebook className="md:w-5 md:h-5 cursor-pointer text-secondary" />
            <FaInstagram className="md:w-4 md:h-4 cursor-pointer text-secondary" />
            <RiTwitterXFill className="w-4 h-4 cursor-pointer text-secondary" />
            <IoLogoTiktok className="md:w-4 md:h-4 cursor-pointer text-secondary" />
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
