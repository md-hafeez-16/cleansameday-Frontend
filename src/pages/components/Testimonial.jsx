import React from "react";
import Slider from "react-slick";
import img from "../../assets/images/about1.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    id: 1,
    text: "The cleaning team was exceptional! They left every corner spotless, and I couldn't be happier with the results.",
    name: "Sarah Johnson",
    role: "Homeowner",
    avatar: "https://randomuser.me/api/portraits/women/91.jpg",
  },
  {
    id: 2,
    text: "Professional and efficient! The service saved me so much time, and my home has never looked better.",
    name: "Michael Brown",
    role: "Business Owner",
    avatar: "https://randomuser.me/api/portraits/men/90.jpg",
  },
  {
    id: 3,
    text: "I highly recommend this cleaning service. They are reliable, thorough, and always exceed expectations.",
    name: "Emily Davis",
    role: "Property Manager",
    avatar: "https://randomuser.me/api/portraits/women/92.jpg",
  },
  {
    id: 4,
    text: "They took care of everything with such attention to detail. I can't thank them enough for the amazing job.",
    name: "Chris Wilson",
    role: "Tenant",
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
  },
  {
    id: 5,
    text: "Affordable and top-notch service! My house looks brand new after their deep cleaning session.",
    name: "Sophia Martinez",
    role: "Homeowner",
    avatar: "https://randomuser.me/api/portraits/women/93.jpg",
  },
];
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="px-4 md:px-5 mt-20 font-marcellus">
        <div className="bg-primary   rounded-xl">
          <div className="flex flex-col md:flex-row md:justify-around md:items-center h-auto md:h-[403px] p-6 md:p-8">
            <div className="text-center md:text-left">
              <h1 className="text-xl whitespace-nowrap  md:text-3xl lg:text-4xl text-white xl:text-5xl">
                <span className="font-semibold">Together</span> We'll
              </h1>
              <h1 className="text-xl md:text-3xl lg:text-4xl text-white xl:text-5xl">
                Explore <span className="font-semibold">New Things</span>
              </h1>
              <div className="flex justify-center md:justify-start items-center gap-2 mt-5">
                {/* <FcCustomerSupport /> */}
                <div>
                  <h1 className="text-[11px] md:text-base lg:w-96 md:w-80 text-white">
                    Chen an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially.
                  </h1>
                </div>
              </div>
              <div
                className="text-white mt-6"
                onClick={() => navigate(`/contact`)}
              >
                <button
                  type="submit"
                  className="relative flex gap-2 items-center py-3 px-4 bg-secondary rounded-full text-black shadow-md mx-auto md:mx-0 overflow-hidden group border border-transparent"
                >
                  <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 ease-out group-hover:text-white">
                    Request an Estimate <FaArrowRightLong />
                  </span>
                  <div className="absolute inset-0 bg-primary -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:border-white"></div>
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
      {/* ------TESTIMONIAL------ */}
      <div className="max-w-7xl mx-auto py-8">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4 cursor-pointer">
              <div className="relative overflow-hidden bg-gradient-to-r from-[#0C706A] to-[#145E58] rounded-xl shadow-2xl p-8 text-white h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12"></div>
                <div className="relative z-10">
                  <svg
                    className="w-12 h-12 mb-4 text-teal-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg font-medium mb-4 line-clamp-3">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-teal-300"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-teal-200">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;
