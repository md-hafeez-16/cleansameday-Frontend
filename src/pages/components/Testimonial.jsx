// import React from "react";

// const Testimonial = () => {
//   return (
//     <div className="max-w-md mx-auto">
//       <div className="relative overflow-hidden bg-gradient-to-r from-[#0C706A] to-[#145E58] rounded-xl shadow-2xl p-8 text-white">
//         <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-x-12"></div>
//         <div className="relative z-10">
//           <svg
//             className="w-12 h-12 mb-4 text-teal-300"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//           </svg>
//           <p className="text-xl font-medium mb-4">
//             "This product exceeded all my expectations. It's intuitive,
//             powerful, and has dramatically improved my workflow. I can't imagine
//             working without it now!"
//           </p>
//           <div className="flex items-center">
//             <img
//               src="https://randomuser.me/api/portraits/women/91.jpg"
//               alt="Avatar"
//               className="w-12 h-12 rounded-full mr-4 border-2 border-teal-300"
//             />
//             <div>
//               <h4 className="font-semibold">Sarah Johnson</h4>
//               <p className="text-teal-200">UX Designer</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

import React from "react";
import Slider from "react-slick";

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

  return (
    <div className="max-w-7xl mx-auto py-8">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4">
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
  );
};

export default Testimonial;
