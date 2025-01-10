import React from "react";
import img from "../../../assets/images/deepclean.jpg";
import img1 from "../../../assets/images/balconyclean.jpeg";
import img2 from "../../../assets/images/villaclean.jpg";
import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-7xl mx-auto font-marcellus font-medium p-5">
        <div className="mb-5">
          <p className="md:text-sm text-xs mb-1">BOOK SERVICE</p>
          <h1 className="md:text-3xl text-lg">
            Selected Service Booking Details
          </h1>
        </div>
        <div className="flex gap-5">
          {/* First Image - Takes 70% Width */}
          <img
            src={img}
            alt="Deep Cleaning"
            className="w-[70%]  h-[150px] md:h-[405px] object-cover rounded-md"
          />

          {/* Remaining Images - Takes 30% Width */}
          <div className="flex flex-col gap-5 md:w-[30%]">
            <img
              src={img1}
              alt="Balcony Cleaning"
              className="md:h-48 h-16 object-cover rounded-md"
            />
            <img
              src={img2}
              alt="Villa Cleaning"
              className="md:h-48 h-16 object-cover rounded-md"
            />
          </div>
        </div>
        <div>
          <div className="py-5">
            <h1 className="md:text-2xl text-xl">Deep Cleaning</h1>
            <p className="md:text-base text-sm mt-1 font-normal">
              We offer comprehensive deep cleaning and cleaning services to
              ensure your spaces are spotless and hygienic. Our team uses
              high-quality products and techniques to leave your home or office
              sparkling clean. We handle everything from dusting to deep
              scrubbing, leaving no area untouched. Book our cleaning services
              today to enjoy a fresh and clean environment.
            </p>
          </div>
          <div className="flex justify-center text-white space-x-4 mt-6">
            <button
              type="submit"
              className="w-1/2 py-3 px-4 bg-primary rounded-md text-white shadow-md"
              onClick={() => navigate(`/bookings`)}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
