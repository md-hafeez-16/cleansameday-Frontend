import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import smallBanner1 from "../../assets/images/clean.jpg";
import smallBanner2 from "../.././assets/images/clean1.jpg";
import smallBanner3 from "../../assets/images/clean2.jpg";

import BigBann1 from "../../assets//backgroundimages/bg23.jpg";
import BigBann2 from "../../assets/backgroundimages/bg24.jpg";
// import BigBann3 from "../../assets/backgroundimages/bg5.jpg";
// import BigBann4 from "../../assets/backgroundimages/bg2.jpg";

const smallBanners = [smallBanner1, smallBanner2, smallBanner3];
const largeBanners = [BigBann1, BigBann2];

const HomeSlider = () => {
  const [bannerArr, setBannerArr] = useState(largeBanners);
  const [isRippling, setIsRippling] = useState(false);
  const [rippleCoords, setRippleCoords] = useState({ x: -1, y: -1 });

  useEffect(() => {
    if (isRippling) {
      const timer = setTimeout(() => setIsRippling(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isRippling]);

  useEffect(() => {
    if (!isRippling && rippleCoords.x !== -1 && rippleCoords.y !== -1) {
      setRippleCoords({ x: -1, y: -1 });
    }
  }, [isRippling]);

  const handleButtonClick = (e) => {
    window.location.href = "/aboutus";
    const rect = e.target.getBoundingClientRect();
    setRippleCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setIsRippling(true);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // nextArrow: <NextArrow onClick={() => Slider.next()} />,
    // prevArrow: <PrevArrow onClick={() => Slider.prev()} />,
  };

  return (
    <div className="w-full overflow-hidden mt-2  md:px-0 font-marcellus">
      <div className="w-full h-full relative">
        <Slider {...settings}>
          {bannerArr.map((ban, index) => (
            <div key={index} className="w-full h-[300px] md:h-[500px] relative">
              <img
                src={ban}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" /> */}
              {/* <div className="absolute inset-0  backdrop-blur-sm z-10" /> */}
              <div className="absolute left-4  top-1/2 transform -translate-y-1/2 xl:w-1/2 md:p-4 text-black z-50">
                {/* Add your content here */}
                <h3 className="lg:text-6xl md:text-4xl text-xl text-primary font-semibold mb-2">
                  Professional and Dedicated Cleaners.
                </h3>
                <p className="lg:text-2xl md:text-xl text-sm text-gray-950">
                  Our cleaners are equipped with right tools and professional
                  attitude to get the job done...
                </p>
                <button
                  onClick={handleButtonClick}
                  className={`relative mt-4 px-6 py-2 bg-primary text-white rounded-full overflow-hidden group transition duration-300 ${
                    isRippling ? "scale-95" : ""
                  }`}
                >
                  <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-black">
                    Learn More
                  </span>
                  <div className="absolute inset-0 bg-secondary -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></div>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeSlider;
