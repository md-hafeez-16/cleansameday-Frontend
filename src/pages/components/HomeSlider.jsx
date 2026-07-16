import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BigBann1 from "../../assets_optimized/backgroundimages/bg23.webp";
import BigBann2 from "../../assets_optimized/backgroundimages/bg24.webp";
import bgImg1 from "../../assets_optimized/images/ban3.webp";

const largeBanners = [BigBann1, BigBann2, bgImg1];

const HomeSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="w-full overflow-hidden font-marcellus">
      <Slider {...settings}>
        {largeBanners.map((ban, index) => (
          <div key={index} className="w-full h-[300px] md:h-[500px] relative">
            <img
              src={ban}
              alt={`Professional cleaning services in Dubai by Cleansameday - banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />
            <div className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 xl:w-1/2 md:p-4 text-white z-10">
              <h3 className="lg:text-5xl md:text-4xl text-2xl font-bold mb-3 leading-tight">
                Professional and Dedicated Cleaners
              </h3>
              <p className="lg:text-xl md:text-lg text-sm text-white/90 max-w-xl">
                Our cleaners are equipped with the right tools and professional
                attitude to get the job done.
              </p>
              <Link
                to="/about-us"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="relative inline-flex mt-6 px-6 py-3 bg-secondary text-black rounded-full overflow-hidden group font-semibold"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  Learn More
                </span>
                <div className="absolute inset-0 bg-primary -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSlider;
