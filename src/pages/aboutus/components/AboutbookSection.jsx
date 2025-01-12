import React from "react";
import img from "../../../assets/images/abtimg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const AboutbookSection = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-7">
      <div className="bg-[#FEDB5D] rounded-xl">
        <div className="flex flex-col md:flex-row md:justify-around md:items-center h-auto md:h-[403px] p-6 md:p-8">
          <div className="text-center md:text-left">
            <h1 className="text-xl whitespace-nowrap  md:text-3xl lg:text-5xl">
              Book your cleaning service
            </h1>
            <h1 className="text-xl md:text-3xl lg:text-5xl">
              today for pristine results
            </h1>
            <div className="flex justify-center md:justify-start items-center gap-2 mt-5">
              <FcCustomerSupport />
              <div>
                <h1 className="text-[11px] md:text-base">
                  Schedule a Consultation with Our Experts
                </h1>
              </div>
            </div>
            <div
              className="text-white mt-6"
              onClick={() => navigate(`/contact`)}
            >
              <button
                type="submit"
                className="relative flex gap-2 items-center py-3 px-4 bg-primary rounded-md text-white shadow-md mx-auto md:mx-0 overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 ease-out group-hover:text-black">
                  Get Custom Quote <FaArrowRightLong />
                </span>
                <div className="absolute inset-0 bg-secondary -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></div>
              </button>
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <img
              src={img}
              alt="Cleaning service"
              className="w-full max-w-[300px] md:max-w-none md:h-[450px] md:relative md:bottom-6 bottom-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutbookSection;
