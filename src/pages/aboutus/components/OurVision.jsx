// import React from "react";

// const OurVision = () => {
//   return (
//     <>
//       <section class="p-5">
//         <div class=" md:px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
//           <div class=" text-center mb-8 lg:mb-10">
//             <div className="flex justify-center items-center">
//               <p class="rounded-full text-xl sm:text-xl bg-white p-2 text-primary">
//                 Our Value
//               </p>
//             </div>
//             <h2 class="mb-4 md:text-4xl text-lg tracking-tight  text-gray-900">
//               Leading way high standard cleaning solution
//             </h2>
//           </div>
//           <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
//             <div className="text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ">
//               <h3 className="mb-2 text-2xl  text-gray-800">OUR VISION</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Our vision is maintaining a pest-free environment without
//                 hazarding public health and the ecosystem.
//               </p>
//             </div>

//             <div className="text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
//               <h3 className="mb-4 text-2xl  text-gray-800">OUR MISSION</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Our mission is to provide our clients with the highest level of
//                 pest control and cleaning service in a cost-effective manner.
//               </p>
//             </div>

//             {/* <!-- Other blocks omitted for brevity --> */}
//             <div className="text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
//               <h3 className="mb-4 text-2xl  text-gray-800">OUR VALUES</h3>
//               <p className="text-gray-600 leading-relaxed">
//                 We are committed to excellence through the systematic and
//                 disciplined management of our operations.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default OurVision;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurVision = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
      delay: 100,
      anchorPlacement: "center-bottom",
    });
  }, []);

  return (
    <section className="p-5">
      <div className="md:px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="text-center mb-8 lg:mb-10" data-aos="fade-up">
          <div className="flex justify-center items-center">
            <p className="rounded-full text-xl sm:text-xl bg-white p-2 text-primary">
              Our Value
            </p>
          </div>
          <h2 className="mb-4 md:text-4xl text-lg tracking-tight text-gray-900">
            Leading the way with high-standard cleaning solutions
          </h2>
        </div>

        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div
            className="text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="mb-2 text-2xl text-gray-800">OUR VISION</h3>
            <p className="text-gray-600 leading-relaxed">
              Our vision is maintaining a pest-free environment without
              hazarding public health and the ecosystem.
            </p>
          </div>

          <div
            className="text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h3 className="mb-4 text-2xl text-gray-800">OUR MISSION</h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide our clients with the highest level of
              pest control and cleaning service in a cost-effective manner.
            </p>
          </div>

          <div
            className="text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <h3 className="mb-4 text-2xl text-gray-800">OUR VALUES</h3>
            <p className="text-gray-600 leading-relaxed">
              We are committed to excellence through the systematic and
              disciplined management of our operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
