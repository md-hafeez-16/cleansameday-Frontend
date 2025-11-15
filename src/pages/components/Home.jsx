/* import React, { useEffect } from "react";
import HomeSlider from "./HomeSlider";
import HowitWork from "./HowitWork";
import OurService from "./OurService";
import WhyChooseUs from "./WhyChooseUs";
import Testimonial from "./Testimonial";
import whatsapp from "../../assets_optimized/images/whatsaap.webp";
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
 */
//------------------------------------------------------


// import React, { useEffect } from "react";
// import { Helmet } from "react-helmet";
// import HomeSlider from "./HomeSlider";
// import HowitWork from "./HowitWork";
// import OurService from "./OurService";
// import WhyChooseUs from "./WhyChooseUs";
// import Testimonial from "./Testimonial";
// import BookService from "./BookService";
// import whatsapp from "../../assets_optimized/images/whatsaap.webp";

// const Home = () => {
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, []);

//   return (
//     <>
//       {/* ✅ SEO Metadata */}
//       <Helmet>
//         <title>Professional Cleaning Services in Dubai | Cleansameday</title>
//         <meta
//           name="description"
//           content="We are the best professional cleaning services in Dubai and provide a variety of deep cleaning services for homes and businesses in Dubai, UAE."
//         />
//         <link rel="canonical" href="https://cleansameday.com/" />
//       </Helmet>

//       <div className="max-w-7xl mx-auto overflow-x-hidden">
//         {/* ✅ Main Page Heading (H1) */}
// <h1
//   className="text-3xl lg:text-4xl font-bold text-center mt-8 mb-6"
//   style={{ color: '#2E2170' }}
// >
//   Professional Cleaning Services in Dubai at Your Doorstep
// </h1>


//         <HomeSlider />
//         <HowitWork />
//         <OurService />
//         <WhyChooseUs />
//         <BookService />
//         <Testimonial />

//         {/* WhatsApp Floating Button */}
//         <div className="flex justify-end bottom-5 right-2 fixed z-50 object-contain">
//           <a
//             href="https://wa.me/+971549936911"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src={whatsapp}
//               alt="WhatsApp contact Cleansameday"
//               className="lg:w-20 lg:h-20 w-16 h-16 shadow-2xl rounded-full"
//             />
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import HomeSlider from "./HomeSlider";
import HowitWork from "./HowitWork";
import OurService from "./OurService";
import WhyChooseUs from "./WhyChooseUs";
import Testimonial from "./Testimonial";
import BookService from "./BookService";
import whatsapp from "../../assets_optimized/images/whatsaap.webp";
import axios from "axios";

const Home = () => {
  const [seo, setSeo] = useState(null);

  // Fetch SEO Data
  useEffect(() => {
    const fetchSeo = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/seo/get?url=/"
        );
        setSeo(res.data.data);
      } catch (error) {
        console.error("SEO fetch error:", error);
      }
    };

    fetchSeo();
  }, []);

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* 🔥 Dynamic SEO Metadata */}
      <Helmet>
        <title>{seo?.title || "Cleansameday"}</title>
        <meta
          name="description"
          content={seo?.description || "Cleaning services in Dubai."}
        />
        <meta
          name="keywords"
          content={seo?.keywords?.join(", ") || ""}
        />
        <link rel="canonical" href="https://cleansameday.com/" />
      </Helmet>

      <div className="max-w-7xl mx-auto overflow-x-hidden">
        
        {/* 🔥 Dynamic H1 */}
        <h1
          className="text-3xl lg:text-4xl font-bold text-center mt-8 mb-6"
          style={{ color: '#2E2170' }}
        >
          {seo?.h1 || "Professional Cleaning Services in Dubai"}
        </h1>

        <HomeSlider />
        <HowitWork />
        <OurService />
        <WhyChooseUs />
        <BookService />
        <Testimonial />

        {/* WhatsApp Floating Button */}
        <div className="flex justify-end bottom-5 right-2 fixed z-50 object-contain">
          <a
            href="https://wa.me/+971549936911"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsapp}
              alt="WhatsApp contact Cleansameday"
              className="lg:w-20 lg:h-20 w-16 h-16 shadow-2xl rounded-full"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
