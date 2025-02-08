import React, { useEffect } from "react";
import HomeSlider from "./HomeSlider";
import HowitWork from "./HowitWork";
import OurService from "./OurService";
import WhyChooseUs from "./WhyChooseUs";
import Testimonial from "./Testimonial";
import whatsapp from "../../assets/images/whatsaap.jpg";
import BookService from "./BookService";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="max-w-7xl mx-auto overflow-x-hidden">
        <HomeSlider />
        <HowitWork />
        <OurService />

        <WhyChooseUs />
        <BookService />
        <Testimonial />
        <div className="flex justify-end bottom-5 right-2 fixed z-50 object-contain">
          <a
            href="https://wa.me/+971549936911"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsapp}
              alt=""
              className="lg:w-20 lg:h-20 w-16 h-16 lg:mb-0 mb-0  shadow-2xl rounded-full"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
