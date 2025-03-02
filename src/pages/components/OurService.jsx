// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import services from "../../assets/images/deep.jpeg";
// import services1 from "../../assets/images/sofaclean.jpeg";
// import services2 from "../../assets/images/kitchenclean.jpeg";
// import services3 from "../../assets/images/acclean.jpeg";
// import services4 from "../../assets/images/floorclean.jpeg";
// import services5 from "../../assets/images/balconyclean.jpeg";
// import { useNavigate } from "react-router-dom";

// const OurService = () => {
//   const navigate = useNavigate();

//   const servicesList = [
//     {
//       id: 1,
//       name: "Deep Cleaning",
//       description: "Comprehensive cleaning services for every corner.",
//       image: services,
//     },
//     {
//       id: 2,
//       name: "Sofa Deep Cleaning",
//       description: "Thorough cleaning to restore your sofa's freshness.",
//       image: services1,
//     },
//     {
//       id: 3,
//       name: "Kitchen Deep Cleaning",
//       description: "Deep cleaning for a hygienic and sparkling kitchen.",
//       image: services2,
//     },
//     {
//       id: 4,
//       name: "AC Duct Cleaning",
//       description: "Improve air quality with clean AC ducts.",
//       image: services3,
//     },
//     {
//       id: 5,
//       name: "Floor Deep Cleaning",
//       description: "Spotless floors with our professional cleaning.",
//       image: services4,
//     },
//     {
//       id: 6,
//       name: "Balcony Deep Cleaning",
//       description: "Pristine balconies for relaxing moments.",
//       image: services5,
//     },
//   ];

//   const sliderSettings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     arrows: false,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="p-5 lg:px-[70px] bg-primary font-marcellus">
//       <h1 className="md:text-xl text-2xl  font-medium text-black text-center">
//         Our Services
//       </h1>
//       <h1 className="md:text-4xl text-2xl mb-5 font-medium text-black text-center">
//         Explore Our <span className="text-secondary">Cleaning Services</span>
//       </h1>
//       <Slider {...sliderSettings}>
//         {servicesList.map((service) => (
//           <div key={service.id} className="px-2">
//             <div
//               className="group border rounded-lg shadow-lg overflow-hidden bg-white h-[300px] cursor-pointer flex flex-col relative"
//               onClick={() => navigate(`/service`)}
//             >
//               {/* Image Container */}
//               <div className="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
//                 <img
//                   src={service.image}
//                   alt={service.name}
//                   className="h-full max-h-full object-cover w-full transition-transform duration-300 group-hover:scale-110"
//                 />
//                 {/* Tint Effect */}
//                 <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 group-hover:animate-tint-fill"></div>
//               </div>
//               {/* Content */}
//               <div className="p-4 flex-1 flex flex-col">
//                 <h2 className="font-semibold text-lg truncate">
//                   {service.name}
//                 </h2>
//                 <p className="text-gray-600 text-sm mt-2">
//                   {service.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default OurService;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurService = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get(
        "https://cleansameday.com:4000/api/service/getAllServices"
      );
      setServices(response.data.serviceDoc); // Update state with API data
    } catch (err) {
      console.error("Error fetching services:", err);
      setError("Failed to load services. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="p-5 lg:px-[70px] bg-primary font-marcellus">
      <h1 className="md:text-xl text-2xl font-medium text-white text-center">
        Our Services
      </h1>
      <h1 className="md:text-4xl text-2xl mb-5 font-medium text-white text-center">
        Explore Our <span className="text-secondary">Cleaning Services</span>
      </h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading services...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <Slider {...sliderSettings}>
          {services.map((service) => (
            <div key={service._id} className="px-2">
              <div
                className="group border rounded-lg shadow-lg overflow-hidden bg-white h-[300px] cursor-pointer flex flex-col relative"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  navigate(`/servicedetails/${service._id}`);
                }}
              >
                {/* Image Container */}
                <div className="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={service.imgUrl[0] || "https://via.placeholder.com/300"} // Fallback image
                    alt={service.name}
                    className="h-full max-h-full object-cover w-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 group-hover:animate-tint-fill"></div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h2 className="font-semibold text-lg truncate">
                    {service.name}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default OurService;
