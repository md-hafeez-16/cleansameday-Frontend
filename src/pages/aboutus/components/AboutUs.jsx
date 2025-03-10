// import React, { useEffect } from "react";
// import backgroundImage from "../../../assets/images/about.jpg";
// import OurVision from "./OurVision";
// import { useNavigate } from "react-router-dom";
// import AboutbookSection from "./AboutbookSection";
// import whatsapp from "../../../assets/images/whatsaap.jpg";
// import { GoCheckCircleFill } from "react-icons/go";
// import { FaArrowRightLong } from "react-icons/fa6";

// const AboutUs = () => {
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, []);
//   const navigate = useNavigate();
//   return (
//     <>
//       <div className="font-marcellus font-medium bg-[#F0F2F4] max-w-7xl mx-auto pb-5">
//         <div className="flex justify-end bottom-5 right-2 fixed z-50 object-contain">
//           <a
//             href="https://wa.me/+971549936911"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={whatsapp}
//               alt=""
//               className="lg:w-20 lg:h-20 w-16 h-16 lg:mb-0 mb-0  shadow-2xl rounded-full"
//             />
//           </a>
//         </div>
//         <div
//           className="relative bg-cover bg-center md:h-60 h-24"
//           style={{ backgroundImage: `url(${backgroundImage})` }}
//         >
//           <div className="flex flex-col justify-center items-center h-full text-center text-black">
//             <h1 className="md:text-4xl text-xl  md:mb-4"> About US</h1>
//             <a
//               href="/"
//               className="text-lg font-semibold text-black hover:underline"
//             >
//               Home {">>"} About US
//             </a>
//           </div>
//         </div>
//         <section className="w-full mx-auto py-10 ">
//           {/* <!-- Title --> */}
//           {/* <div className="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-blue-600">
//     Services
//   </div> */}

//           <div className="w-full h-full flex flex-col items-center md:py-4 py-10">
//             {/* <!-- Col - 2 --> */}
//             <div className="xl:w-[90%] sm:w-[85%] w-[90%] mx-auto flex lg:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
//               {/* Image Section */}
//               <img
//                 className="lg:w-[50%] w-full md:rounded-lg rounded-sm"
//                 src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
//                 alt="billboard image"
//               />

//               {/* Text Section */}
//               <div className="lg:w-[50%] w-full text-gray-900 md:p-6 p-0 rounded-md">
//                 <h2 className="md:text-3xl text-xl text-gray-900">
//                   Transforming spaces with expert care.
//                 </h2>
//                 <p className="text-sm md:text-base mt-4">
//                   With customized solutions tailored to your specific needs, we
//                   ensure your home or business is spotless and well-maintained.
//                   Using eco-friendly products and proven techniques, we bring a
//                   fresh, clean look.
//                 </p>
//                 <div className="flex flex-wrap mt-4 text-gray-700">
//                   <ul className="list-disc list-inside md:w-1/2">
//                     <li>Highly trained professionals</li>
//                     <li>Flexible scheduling</li>
//                     <li>Tailored cleaning solutions</li>
//                   </ul>
//                   <ul className="list-disc list-inside md:w-1/2">
//                     <li>Eco-friendly products</li>
//                     <li>Free project sample</li>
//                     <li>Customer-centered approach</li>
//                   </ul>
//                 </div>
//                 <div className="text-white space-x-4 mt-6">
//                   <button
//                     type="submit"
//                     className="relative flex items-center justify-center gap-2  py-3 px-4 bg-primary text-white shadow-md rounded-md overflow-hidden group"
//                     onClick={() => navigate(`/contact`)}
//                   >
//                     <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 ease-out group-hover:text-black">
//                       Contact us <FaArrowRightLong />
//                     </span>
//                     <div className="absolute inset-0 bg-secondary -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></div>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             {/* <!-- Col - 3 --> */}
//             <div className="xl:w-[90%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6 md:mt-16">
//               {/* <!--  --> */}
//               <div className="md:w-[50%] w-full  text-gray-900 md:p-4 p-0 rounded-md">
//                 <h2 className="md:text-3xl text-xl   text-gray-900">
//                   Dedicated to excellence in every clean
//                 </h2>

//                 <p className="text-md py-3">
//                   Our team delivers top-notch cleaning with eco-friendly
//                   products, focusing on every detail to ensure a spotless,
//                   inviting space.
//                 </p>
//                 <h2 className="text-xl mt-3 flex items-center gap-3 text-gray-900">
//                   <GoCheckCircleFill className="text-secondary" /> Professional
//                   Expertise
//                 </h2>

//                 <p className="text-md mt-2">
//                   Our skilled team brings years of experience to provide
//                   reliable and efficient cleaning solutions.
//                 </p>
//                 <h2 className="text-xl mt-3 flex items-center gap-3 text-gray-900">
//                   <GoCheckCircleFill className="text-secondary" /> Eco-Friendly
//                   Approach
//                 </h2>

//                 <p className="text-md mt-2">
//                   We use sustainable, eco-friendly products to protect both your
//                   space and the environment.
//                 </p>
//                 <h2 className="text-xl mt-3 text-gray-900 flex items-center gap-3">
//                   {" "}
//                   <GoCheckCircleFill className="text-secondary" /> Attention To
//                   Detail
//                 </h2>

//                 <p className="text-md mt-2">
//                   We leave no corner untouched, ensuring a thorough and
//                   meticulous clean every time.
//                 </p>
//               </div>
//               {/* <!--  --> */}
//               <img
//                 className="md:w-[50%] w-full md:rounded-lg rounded-sm"
//                 src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080"
//                 alt="billboard image"
//               />
//             </div>
//           </div>
//         </section>
//         <OurVision />
//         <AboutbookSection />

//         {/* <!-- Photo by '@candjstudios' & '@framesforyourheart' on Unsplash --> */}
//       </div>
//     </>
//   );
// };

// export default AboutUs;

import React, { useEffect } from "react";
import backgroundImage from "../../../assets/images/about.jpg";
import OurVision from "./OurVision";
import { useNavigate } from "react-router-dom";
import AboutbookSection from "./AboutbookSection";
import whatsapp from "../../../assets/images/whatsaap.jpg";
import { GoCheckCircleFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";
import ServiceTimings from "./ServiceTimings";
import ServiceAreas from "./ServiceAreas";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
      delay: 100,
      anchorPlacement: "center-bottom",
    });

    window.addEventListener("resize", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("resize", () => {
        AOS.refresh();
      });
    };
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="font-marcellus font-medium bg-[#F0F2F4] max-w-7xl mx-auto pb-5 overflow-hidden">
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
        <div
          className="relative bg-cover bg-center md:h-60 h-24"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="flex flex-col justify-center items-center h-full text-center text-black">
            <h1 className="md:text-4xl text-xl md:mb-4" data-aos="fade-down">
              About US
            </h1>
            <a
              href="/"
              className="text-lg font-semibold text-black hover:underline"
              data-aos="fade-up"
            >
              Home {">>"} About US
            </a>
          </div>
        </div>
        <section className="w-full mx-auto md:py-10">
          <div className="w-full h-full flex flex-col items-center md:py-4 py-5">
            {/* Col - 2 */}
            <div className="xl:w-[90%] sm:w-[85%] w-[90%] mx-auto flex lg:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
              {/* Image Section */}
              <img
                className="lg:w-[50%] w-full md:rounded-lg rounded-sm"
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="billboard image"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-offset="100"
              />

              {/* Text Section */}
              <div
                className="lg:w-[50%] w-full text-gray-900 md:p-6 p-0 rounded-md"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-offset="100"
              >
                <h2 className="md:text-3xl text-xl text-gray-900">
                  Transforming spaces with expert care.
                </h2>
                <p className="text-sm md:text-base mt-4">
                  With customized solutions tailored to your specific needs, we
                  ensure your home or business is spotless and well-maintained.
                  Using eco-friendly products and proven techniques, we bring a
                  fresh, clean look.
                </p>
                <div className="flex flex-wrap mt-4 text-gray-700">
                  <ul className="list-disc list-inside md:w-1/2">
                    <li>Highly trained professionals</li>
                    <li>Flexible scheduling</li>
                    <li>Tailored cleaning solutions</li>
                  </ul>
                  <ul className="list-disc list-inside md:w-1/2">
                    <li>Eco-friendly products</li>
                    <li>Free project sample</li>
                    <li>Customer-centered approach</li>
                  </ul>
                </div>
                <div className="text-white space-x-4 mt-6">
                  <button
                    type="submit"
                    className="relative flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white shadow-md rounded-md overflow-hidden group"
                    onClick={() => navigate(`/contact`)}
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 ease-out group-hover:text-black">
                      Contact us <FaArrowRightLong />
                    </span>
                    <div className="absolute inset-0 bg-secondary -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Col - 3 */}

            <div className="xl:w-[90%] sm:w-[85%] w-[90%] lg:mx-auto flex lg:flex-row flex-col flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6 md:mt-16">
              {/* Text Section */}
              <div
                className="lg:w-[50%] w-full text-gray-900 md:p-6 p-0 rounded-md"
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-offset="100"
              >
                <h2 className="md:text-3xl text-xl text-gray-900">
                  Dedicated to excellence in every clean
                </h2>
                <p className="text-sm md:text-base mt-4">
                  Our team delivers top-notch cleaning with eco-friendly
                  products, focusing on every detail to ensure a spotless,
                  inviting space.
                </p>
                <div className="flex flex-wrap mt-4 text-gray-700">
                  <h2 className="text-xl mt-3 flex items-center gap-3 text-gray-900">
                    <GoCheckCircleFill className="text-secondary" />{" "}
                    Professional Expertise
                  </h2>

                  <p className="text-md mt-2">
                    Our skilled team brings years of experience to provide
                    reliable and efficient cleaning solutions.
                  </p>
                  <h2 className="text-xl mt-3 flex items-center gap-3 text-gray-900">
                    <GoCheckCircleFill className="text-secondary" />{" "}
                    Eco-Friendly Approach
                  </h2>

                  <p className="text-md mt-2">
                    We use sustainable, eco-friendly products to protect both
                    your space and the environment.
                  </p>
                  <h2 className="text-xl mt-3 text-gray-900 flex items-center gap-3">
                    {" "}
                    <GoCheckCircleFill className="text-secondary" /> Attention
                    To Detail
                  </h2>

                  <p className="text-md mt-2">
                    We leave no corner untouched, ensuring a thorough and
                    meticulous clean every time.
                  </p>
                </div>
                {/* <div className="text-white space-x-4 mt-6">
                  <button
                    type="submit"
                    className="relative flex items-center justify-center gap-2 py-3 px-4 bg-primary text-white shadow-md rounded-md overflow-hidden group"
                    onClick={() => navigate(`/contact`)}
                    data-aos="zoom-in"
                    data-aos-delay="500"
                  >
                    <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 ease-out group-hover:text-black">
                      Contact us <FaArrowRightLong />
                    </span>
                    <div className="absolute inset-0 bg-secondary -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></div>
                  </button>
                </div> */}
              </div>
              {/* Image Section */}
              <img
                className="md:w-[100%] lg:w-[50%] w-full md:rounded-lg rounded-sm"
                src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="billboard image"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-offset="100"
              />
            </div>
          </div>
        </section>
        <ServiceTimings />
        <ServiceAreas />
        <OurVision />
        <AboutbookSection />
      </div>
    </>
  );
};

export default AboutUs;
