import React from "react";
import why from "../../assets/images/wallclock.png";
import why1 from "../../assets/images/hygiene.png";
import why2 from "../../assets/images/handshake.png";
import why3 from "../../assets/images/shield.png";

const WhyChooseUs = () => {
  return (
    <>
      {/* <div className="text-center p-8">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Why to choose US?
        </h2>

        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://picsum.photos/400/240"
              alt="gem"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left ">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Simple integration
            </h3>
            <p className="sm:text-lg mt-6">
              Use the LocaleData gem to download translations directly into your
              Ruby on Rails projects using the provided command line interface.
              Just create a project and follow the step-by-step instructions.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://picsum.photos/400/240"
              alt="project members"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left ">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Easy collaboration
            </h3>
            <p className="sm:text-lg mt-6">
              All LocaleData projects are private. Each project can have
              multiple collaborators with different roles and access
              permissions. You determine who can see and edit your translations.
              Just add admins, developers, translators and configure their
              access rights.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left  text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://picsum.photos/400/240"
              alt="editor"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left ">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              No more syntax errors
            </h3>
            <p className="sm:text-lg mt-6">
              LocaleData provides you easy import/export functions for your YAML
              files. Use a simple editor with many predefined languages to
              manage your locales. LocaleData also supports multiple translation
              types, such as simple text, plural forms, numbers, booleans,
              symbols, arrays, ...
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-20 text-left text-center">
          <div className="w-full md:w-3/5 lg:w-1/2 px-4">
            <img
              src="https://picsum.photos/400/240"
              alt="bulk editing"
              className="inline-block rounded shadow-lg border border-merino-400"
            />
          </div>
          <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left ">
            <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
              Bulk editing
            </h3>
            <p className="sm:text-lg mt-6">
              Do you need to change the path of many translation keys at once?
              No problem, just use the bulk editing feature and enjoy the
              results.
            </p>
          </div>
        </div>
      </div> */}
      <section className="text-gray-700 body-font mt-10">
        <div className="flex justify-center md:text-4xl font-medium text-2xl text-primary text-center">
          Why Choose Us.
        </div>
        <div className="container md:px-5 py-12 mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="md:p-4 md:w-1/4 sm:w-1/2">
              <div className="md:px-4 py-6 transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  {/* <img
                    src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                    className="w-32 mb-3"
                  /> */}
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
