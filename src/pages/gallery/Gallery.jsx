import React from "react";
import useSeo from "../../hooks/useSeo";
import SeoHead from "../../components/SeoHead";

import gall1 from "../../assets_optimized/images/clean.webp";            // deepclean.jpg → clean.webp
import gall2 from "../../assets_optimized/images/about1.webp";          // villaclean.jpg → about1.webp
import gall3 from "../../assets_optimized/images/clean.webp";           // deep.jpeg → clean.webp
import gall4 from "../../assets_optimized/images/abtimg.webp";          // move.jpg → abtimg.webp (guess: moving service image)
import gall5 from "../../assets_optimized/images/warehouse.webp";       // warehouse.jpg → warehouse.webp (if exists)
import gall6 from "../../assets_optimized/images/office1clean.webp";    // office1clean.jpeg → office1clean.webp
import gall7 from "../../assets_optimized/images/commercial1clean.webp";// commercial1clean.jpeg → commercial1clean.webp
import gall8 from "../../assets_optimized/images/floor.webp";           // floor.jpg → floor.webp
import gall9 from "../../assets_optimized/images/sofaclean.webp";            // steamclean.jpeg → sofa.webp (optimized naming difference)
import gall10 from "../../assets_optimized/images/kitchenclean.webp";   // kitchenclean.jpeg → kitchenclean.webp
import gall11 from "../../assets_optimized/images/acclean.webp";        // acclean.jpeg → acclean.webp
import gall12 from "../../assets_optimized/images/balconyclean.webp";   // balconyclean.jpeg → balconyclean.webp
import gall13 from "../../assets_optimized/images/garageclean.webp";    // garageclean.jpeg → garageclean.webp (if exists)
import gall14 from "../../assets_optimized/images/clean.webp";          // steamclean.jpeg → clean.webp (reuse)
import whatsapp from "../../assets_optimized/images/call.webp";         // whatsaap.jpg → call.webp


const Gallery = () => {
  // ✅ Dynamic SEO Metadata (managed from admin dashboard)
  const seo = useSeo("/gallery");

  return (
    <>
      {/* ✅ SEO Meta Tags (managed from admin dashboard) */}
      <SeoHead
        url="/gallery"
        canonicalPath="/gallery"
        defaults={{
          title: "Cleaning Services Gallery in Dubai | Cleansameday",
          description:
            "Browse our gallery of professional deep cleaning and cleaning services across Dubai by Cleansameday.",
          keywords: [],
        }}
      />

      <div className="max-w-7xl mx-auto p-5 md:p-0">
        <div className=" font-marcellus font-medium">
          <div className="flex justify-end bottom-5 right-2 fixed z-50 object-contain">
            <a
              href="https://wa.me/+971549936911"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={whatsapp}
                alt="Chat with Cleansameday on WhatsApp"
                className="lg:w-20 lg:h-20 w-16 h-16 lg:mb-0 mb-0  shadow-2xl rounded-full"
              />
            </a>
          </div>
          <div className="container mx-auto md:px-4 py-8">
            <div className="flex justify-center">
              <h1 className="relative top-0 w-fit h-auto mb-5 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-4xl  text-transparent text-center select-auto">
                {" "}
                {seo?.h1 || "Gallery"}
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* <!-- Large item --> */}
              <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src={gall1}
                  alt="Deep cleaning and cleaning services in Dubai"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl font-bold text-white">
                      Deep Cleaning & Cleaning Services
                    </h3>
                    {/* <p className="text-white">
                    Discover the beauty of the natural world
                  </p> */}
                  </div>
                </div>
              </div>

              {/* <!-- Two small items --> */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src={gall2}
                  alt="Villa deep cleaning in Dubai"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">
                      Villa Deep Cleaning
                    </h4>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src={gall3}
                  alt="Deep cleaning services in Dubai"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">
                      Deep Cleaning Services
                    </h4>
                  </div>
                </div>
              </div>

              {/* <!-- Three medium items --> */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src={gall4}
                  alt="Move in and move out deep cleaning in Dubai"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">
                      Move In / Out Deep Cleaning
                    </h4>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src={gall5}
                  alt="Warehouse deep cleaning in Dubai"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">
                      Warehouse Deep Cleaning
                    </h4>
                  </div>
                </div>
              </div>

              {/* <!-- bottom cards --> */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src={gall6}
                  alt="Office deep cleaning in Dubai"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">
                      Office Deep Cleaning
                    </h4>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src={gall7}
                  alt="Commercial deep cleaning in Dubai"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">
                      Commercial Deep Cleaning
                    </h4>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src={gall8}
                  alt="Floor deep cleaning in Dubai"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">
                      Floor Deep Cleaning
                    </h4>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src={gall9}
                  alt="Sofa deep cleaning in Dubai"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-xl font-bold text-white">
                      Sofa Deep Cleaning
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
