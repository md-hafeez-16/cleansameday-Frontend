import React from "react";
import { Link } from "react-router-dom";
import why from "../../assets_optimized/images/wallclock.webp";
import why1 from "../../assets_optimized/images/hygiene.webp";
import why2 from "../../assets_optimized/images/handshake.webp";
import why3 from "../../assets_optimized/images/shield.webp";

const WhyChooseUs = () => {
  return (
    <>
      <section className="text-gray-700 body-font mt-10 px-3 md:px-0">
        <h2 className="flex justify-center md:text-4xl font-medium text-2xl text-primary text-center">
          Why Choose Us.
        </h2>
        <div className="container md:px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="md:p-4 md:w-1/4 sm:w-1/2">
              <div className="md:px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img src={why} alt="Quick availability for cleaning bookings" className="w-28 mb-3" />
                </div>
                <h3 className="title-font font-marcellus text-2xl text-primary">
                  Quick Availability
                </h3>
                <p className="title-font font-marcellus text-sm text-gray-900 line-clamp-3 mt-1">
                  We are available all day all week. You can book your cleaning
                  anytime and we will get the job done for you ASAP.
                </p>
              </div>
            </div>

            <div className="md:p-4 md:w-1/4 sm:w-1/2">
              <div className="md:px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img src={why2} alt="Always in touch with our support team" className="w-28 mb-3" />
                </div>
                <h3 className="title-font font-marcellus text-2xl text-primary">
                  Always In Touch
                </h3>
                <p className="title-font font-marcellus text-sm text-gray-900 line-clamp-3 mt-1">
                  You can get benefit from our online booking service 24/7 or
                  you can message us anytime you like.
                </p>
              </div>
            </div>

            <div className="md:p-4 md:w-1/4 sm:w-1/2">
              <div className="md:px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img src={why3} alt="Your safety and verified cleaners" className="w-28 mb-3" />
                </div>
                <h3 className="title-font font-marcellus text-2xl text-primary">
                  Your Safety
                </h3>
                <p className="title-font font-marcellus text-sm text-gray-900 line-clamp-3 mt-1">
                  Your Safety is our first priority. That is the reason we do
                  all possible background checks for our employees. We guarantee
                  your Cleanit cleaner will be professional and well-mannered.
                </p>
              </div>
            </div>

            <div className="md:p-4 md:w-1/4 sm:w-1/2">
              <div className="md:px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img src={why1} alt="Hygiene goals with eco-friendly green products" className="w-28 mb-3" />
                </div>
                <h3 className="title-font font-marcellus text-2xl text-primary">
                  Hygiene Goals
                </h3>
                <p className="title-font font-marcellus text-sm text-gray-900 line-clamp-3 mt-1">
                  One of the most important thing to us is Your Health that is
                  why we emphasis on using Green products for cleaning. Please
                  visit our{" "}
                  <Link to="/about-us" className="text-primary underline font-medium">
                    About Us
                  </Link>{" "}
                  page for more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
