// import React from "react";
// import "swiper/css"; // This is the correct import for Swiper's styles

// const OurService = () => {
//   return (
//     <>
//       <div>
//         <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full transition-all duration-500 group hover:bg-primary hover:bg-gradient-to-b hover:from-primary hover:to-transparent">
//           <div class="flex justify-center mb-3">
//             <svg
//               class="w-7 h-7 text-gray-500 group-hover:text-white"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//             >
//               <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
//             </svg>
//           </div>
//           <a href="#">
//             <h5 class="mb-2 text-2xl font-semibold tracking-tight text-primary group-hover:text-white">
//               Need a help in Claim?
//             </h5>
//           </a>
//           <p class="mb-3 font-normal text-primary group-hover:text-white dark:text-gray-400">
//             Go to this step by step guideline process on how to certify for your
//             weekly benefits:
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default OurService;

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import services from "../../assets/images/clean.jpg";

// const OurService = () => {
//   // Static data for the cards
//   const products = [
//     {
//       id: 1,
//       name: "Product 1",
//       image: services,
//       sellingPrice: 200,
//       costPrice: 250,
//       rating: 4,
//       inStock: true,
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       image: services,
//       sellingPrice: 300,
//       costPrice: 350,
//       rating: 5,
//       inStock: true,
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       image: services,
//       sellingPrice: 150,
//       costPrice: 200,
//       rating: 3,
//       inStock: false,
//     },
//     {
//       id: 4,
//       name: "Product 4",
//       image: services,
//       sellingPrice: 400,
//       costPrice: 450,
//       rating: 4,
//       inStock: true,
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
//     <div className="p-5 lg:px-[70px] bg-transparent">
//       <h1 className="text-2xl mb-5 font-semibold text-gray-800 text-center">
//         Best Sellers
//       </h1>
//       <Slider {...sliderSettings}>
//         {products.map((product) => (
//           <div key={product.id} className="px-2">
//             <div className="border rounded-lg shadow-lg overflow-hidden bg-white">
//               <div className="relative h-40 bg-gray-100 flex items-center justify-center">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-full max-h-full object-cover w-full"
//                 />
//               </div>
//               <div className="p-4">
//                 <h2 className="font-semibold text-lg truncate">
//                   {product.name}
//                 </h2>
//                 <div className="flex items-center justify-between mt-2">
//                   <p className="text-gray-800 font-bold text-md">
//                     ₹{product.sellingPrice}
//                   </p>
//                   <p className="text-gray-500 line-through text-sm">
//                     ₹{product.costPrice}
//                   </p>
//                 </div>
//                 <div className="mt-2 flex items-center text-yellow-400 text-sm">
//                   {Array.from({ length: 5 }, (_, i) => (
//                     <span key={i}>{i < product.rating ? "★" : "☆"}</span>
//                   ))}
//                 </div>
//                 {product.inStock ? (
//                   <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-600">
//                     Add to Cart
//                   </button>
//                 ) : (
//                   <p className="mt-4 text-red-500 font-medium">Out of Stock</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default OurService;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import services from "../../assets/images/deep.jpeg";
import services1 from "../../assets/images/sofaclean.jpeg";

import services2 from "../../assets/images/kitchenclean.jpeg";

import services3 from "../../assets/images/acclean.jpeg";
import services4 from "../../assets/images/floorclean.jpeg";
import services5 from "../../assets/images/balconyclean.jpeg";
import { useNavigate } from "react-router-dom";

const OurService = () => {
  const navigate = useNavigate();
  // Static data for the services
  const servicesList = [
    {
      id: 1,
      name: "Deep Cleaning",
      description: "Comprehensive cleaning services for every corner.",
      image: services,
    },
    {
      id: 2,
      name: "Sofa Deep Cleaning",
      description: "Thorough cleaning to restore your sofa's freshness.",
      image: services1,
    },
    {
      id: 3,
      name: "Kitchen Deep Cleaning",
      description: "Deep cleaning for a hygienic and sparkling kitchen.",
      image: services2,
    },
    {
      id: 4,
      name: "AC Duct Cleaning",
      description: "Improve air quality with clean AC ducts.",
      image: services3,
    },
    {
      id: 5,
      name: "Floor Deep Cleaning",
      description: "Spotless floors with our professional cleaning.",
      image: services4,
    },
    {
      id: 6,
      name: "Balcony Deep Cleaning",
      description: "Pristine balconies for relaxing moments.",
      image: services5,
    },
  ];

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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-5 lg:px-[70px] bg-primary font-marcellus">
      <h1 className="md:text-4xl text-2xl mb-5 font-medium text-black text-center">
        Our Services
      </h1>
      <Slider {...sliderSettings}>
        {servicesList.map((service) => (
          <div key={service.id} className="px-2">
            <div
              className="border rounded-lg shadow-lg overflow-hidden bg-white h-[300px] cursor-pointer flex flex-col "
              onClick={() => navigate(`/service`)}
            >
              <div className="relative h-40 bg-gray-100 flex items-center justify-center ">
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-full max-h-full object-cover w-full"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="font-semibold text-lg truncate">
                  {service.name}
                </h2>
                <p className="text-gray-600 text-sm mt-2">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurService;
