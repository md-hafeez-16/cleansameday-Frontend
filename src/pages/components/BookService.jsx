import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheckCircle, FaClock, FaHome, FaTools } from "react-icons/fa"; // Added FaTools icon

const BookService = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="overflow-hidden whitespace-nowrap font-semibold font-marcellus bg-secondary py-8 group relative">
      
        <div className="flex animate-marquee items-center gap-8 group-hover:animate-paused">
         
          <div className="flex items-center gap-2">
            <FaHome className="text-blue-500" />
            <h1 className="text-2xl font-semibold">
              Need an appointment for Cleaning Service
            </h1>
            <FaHome className="text-blue-500" />
          </div>

       
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            <p className="text-2xl">100% Satisfied Customer</p>
            <FaCheckCircle className="text-green-500" />
          </div>

       
          <div className="flex items-center gap-2">
            <FaHome className="text-orange-500" />
            <p className="text-2xl font-semibold">Cleaning Apartments</p>
            <FaHome className="text-orange-500" />
          </div>

        
          <div className="flex items-center gap-2">
            <FaClock className="text-red-500" />
            <p className="text-2xl font-semibold">24/7 Customer Service</p>
            <FaClock className="text-red-500" />
          </div>

         
          <div className="flex items-center gap-2">
            <FaTools className="text-purple-500" />
            <p className="text-2xl font-semibold">Modern Cleaning Equipments</p>
            <FaTools className="text-purple-500" />
          </div>

         
          <div className="flex items-center gap-8">
         
            <div className="flex items-center gap-2">
              <FaHome className="text-blue-500" />
              <h1 className="text-2xl font-semibold">
                Need an appointment for Cleaning Service
              </h1>
              <FaHome className="text-blue-500" />
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <p className="text-2xl font-semibold">100% Satisfied Customer</p>
              <FaCheckCircle className="text-green-500" />
            </div>
            <div className="flex items-center gap-2">
              <FaHome className="text-orange-500" />
              <p className="text-2xl font-semibold">Cleaning Apartments</p>
              <FaHome className="text-orange-500" />
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-red-500" />
              <p className="text-2xl font-semibold">24/7 Customer Service</p>
              <FaClock className="text-red-500" />
            </div>
            <div className="flex items-center gap-2">
              <FaTools className="text-purple-500" />
              <p className="text-2xl font-semibold">
                Modern Cleaning Equipments
              </p>
              <FaTools className="text-purple-500" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-primary font-marcellus">
        <div className="flex md:flex-row flex-col justify-between items-center md:p-10 p-5 ">
          <h1 className="text-xl md:w-1/2 md:text-2xl lg:text-4xl text-white font-medium border-l-4 border-secondary pl-4">
            <span className="text-secondary">Book Affordable Services </span>:
            Save Time and Money With Us!
          </h1>
          <div className="text-white mt-6" onClick={() => navigate(`/contact`)}>
            <button
              type="submit"
              className="relative flex gap-2 items-center py-3 px-4 bg-secondary rounded-full text-black shadow-md mx-auto md:mx-0 overflow-hidden group border border-transparent"
            >
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 ease-out group-hover:text-white">
                Book A Services <FaArrowRightLong />
              </span>
              <div className="absolute inset-0 bg-primary -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:border-white"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookService;
