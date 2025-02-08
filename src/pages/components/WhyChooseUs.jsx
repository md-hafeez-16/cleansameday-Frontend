import React from "react";
import why from "../../assets/images/wallclock.png";
import why1 from "../../assets/images/hygiene.png";
import why2 from "../../assets/images/handshake.png";
import why3 from "../../assets/images/shield.png";

const WhyChooseUs = () => {
  return (
    <>
      <section className="text-gray-700 body-font mt-10 px-3 md:px-0">
        <div className="flex justify-center md:text-4xl font-medium text-2xl text-primary text-center">
          Why Choose Us.
        </div>
        <div className="container md:px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="md:p-4 md:w-1/4 sm:w-1/2">
              <div className="md:px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img src={why} className="w-28 mb-3" />
                </div>
                <h2 className="title-font font-marcellus text-2xl text-primary">
                  Quick Availability
                </h2>
                <h2 className="title-font font-marcellus text-sm text-gray-900 line-clamp-3 mt-1">
                  We are available all day all week. You can book your cleaning
                  anytime and we will get the job done for you ASAP.
                </h2>
              </div>
            </div>

            <div className="md:p-4 md:w-1/4 sm:w-1/2">
              <div className="md:px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img src={why2} className="w-28 mb-3" />
                </div>
                <h2 className="title-font font-marcellus text-2xl text-primary">
                  Always In Touch
                </h2>
                <h2 className="title-font font-marcellus text-sm text-gray-900 line-clamp-3 mt-1">
                  You can get benefit from our online booking service 24/7 or
                  you can message us anytime you like.
                </h2>
              </div>
            </div>

            <div className="md:p-4 md:w-1/4 sm:w-1/2">
              <div className="md:px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img src={why3} className="w-28 mb-3" />
                </div>
                <h2 className="title-font font-marcellus text-2xl text-primary">
                  Your Safety
                </h2>
                <h2 className="title-font font-marcellus text-sm text-gray-900 line-clamp-3 mt-1">
                  Your Safety is our first priority. That is the reason we do
                  all possible background checks for our employees. We guarantee
                  your Cleanit cleaner will be professional and well-mannered.
                </h2>
              </div>
            </div>

            <div className="md:p-4 md:w-1/4 sm:w-1/2">
              <div className="md:px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <img src={why1} className="w-28 mb-3" />
                </div>
                <h2 className="title-font font-marcellus text-2xl text-primary">
                  Hygiene Goals
                </h2>
                <h2 className="title-font font-marcellus text-sm text-gray-900 line-clamp-3 mt-1">
                  One of the most important thing to us is Your Health that is
                  why we emphasis on using Green products for cleaning. Please
                  visit About us page for more.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
