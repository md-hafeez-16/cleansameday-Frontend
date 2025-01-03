import React from "react";
import HomeSlider from "./HomeSlider";
import HowitWork from "./HowitWork";
import OurService from "./OurService";
import WhyChooseUs from "./WhyChooseUs";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <HomeSlider />
        <HowitWork />
        <OurService />
        <WhyChooseUs />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
