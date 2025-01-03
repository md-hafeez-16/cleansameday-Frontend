import React from "react";
import img from "../../../assets/images/deepclean.jpg";
import img1 from "../../../assets/images/balconyclean.jpeg";
import img2 from "../../../assets/images/villaclean.jpg";

const ServiceDetails = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto font-marcellus font-medium">
        <div className="mb-5">
          <p className="text-sm mb-1">BOOK SERVICE</p>
          <h1 className="text-3xl">Selected Service Booking Details</h1>
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
      </div>
    </>
  );
};

export default ServiceDetails;
