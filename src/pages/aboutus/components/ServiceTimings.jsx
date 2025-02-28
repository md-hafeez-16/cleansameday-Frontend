import React from "react";
import { GoClock } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceTimings = () => {
  const timings = [
    { day: "Sunday", time: "9:00 AM - 6:00 PM" },
    { day: "Monday", time: "8:00 AM - 10:00 AM" },
    { day: "Tuesday", time: "8:00 AM - 10:00 PM" },
    { day: "Wednesday", time: "8:00 AM - 10:00 PM" },
    { day: "Thursday", time: "8:00 AM - 10:00 PM" },
    { day: "Friday", time: "8:00 AM - 10:00 PM" },
    { day: "Saturday", time: "8:00 AM - 10:00 PM" },
  ];

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="px-5">
        <div
          className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg"
          data-aos="fade-up"
        >
          <h2 className="md:text-2xl text-lg font-semibold text-center text-gray-900 mb-4">
            Service Timings
          </h2>
          <p
            className="text-center text-gray-700 md:text-lg text-base mb-2"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            "Quality service, always on time. Your satisfaction is our
            priority."
          </p>
          <p
            className="text-center text-gray-700 md:text-lg text-base mb-6"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            "We are available{" "}
            <span className="font-bold text-primary">24/7</span> to serve you
            anytime, anywhere!"
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {timings.map((slot, index) => (
              <div
                key={index}
                className="flex items-center text-xs md:text-base justify-around p-4 bg-gray-100 rounded-md shadow-sm"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <span className="font-medium text-gray-800 flex items-center gap-2">
                  <GoClock className="text-primary" /> {slot.day}
                </span>
                <span className="text-gray-700">{slot.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceTimings;
