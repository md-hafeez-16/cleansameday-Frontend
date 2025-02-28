import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const ServiceAreas = () => {
  const areas = [
    "Al Warqa",
    "Muhaisnah",
    "Al Khawaneej",
    "Liwan",
    "Jumeirah Village Circle",
    "Muteena",
    "Al Mizhar",
    "Al Jaddaf",
    "Dubai Creek Harbour",
    "Dubai International City",
    "Ras Al Khor",
    "Dubai Silicon Oasis",
    "Business Bay",
    "Jumeirah Park",
    "Jumeirah beach residence",
    "Arjan-Dubailand",
    "Dubai Sports City",
    "Paim Jumeriah",
    "Mirdif",
    "Arbain Ranchees",
    "Dubai Marina",
    "Jumeirah Lakes Towers",
    "Dubai Silicon Oasis",
    "Emirates Hills",
    "Downtown Dubai",
    "DAMAC Hills",
    "Jumeirah Village Circle",
    "Jumeirah Village Triangle",
    "Nad Al Sheba",
    "Motor City",
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg"
      data-aos="fade-up"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-900 mb-4">
        Service Areas
      </h2>
      <p
        className="text-center text-gray-700  mb-6"
        data-aos="fade-in"
        data-aos-delay="200"
      >
        "We proudly serve the following locations with top-notch quality and
        dedication."
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {areas.map((area, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-4 bg-gray-100 rounded-md shadow-sm"
            data-aos="fade-right"
            data-aos-delay={index * 100}
          >
            <FaMapMarkerAlt className="text-primary text-lg" />
            <span className="font-medium text-gray-800">{area}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAreas;
