// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       <section className="bg-gradient-to-r from-green-500 to-green-700 text-white py-16 px-6 rounded-lg mb-10 text-center">
//         <h1 className="text-4xl font-bold mb-6">About Us</h1>
//         <p className="text-lg leading-relaxed">
//           Welcome to our cleaning services! We specialize in providing top-notch
//           cleaning solutions tailored to your needs. Our dedicated team ensures
//           that every space we touch is left spotless, shining, and refreshing.
//         </p>
//       </section>

//       <section className="flex flex-wrap gap-6 justify-between">
//         <div className="flex-1 min-w-[300px] bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl">
//           <img
//             src="https://via.placeholder.com/100"
//             alt="Experienced Staff"
//             className="mx-auto mb-4"
//           />
//           <h3 className="text-xl font-semibold text-green-600 mb-2">
//             Experienced Staff
//           </h3>
//           <p className="text-gray-600 leading-relaxed">
//             Our team consists of highly trained professionals with years of
//             experience in delivering exceptional cleaning services.
//           </p>
//         </div>

//         <div className="flex-1 min-w-[300px] bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl">
//           <img
//             src="https://via.placeholder.com/100"
//             alt="Eco-Friendly Solutions"
//             className="mx-auto mb-4"
//           />
//           <h3 className="text-xl font-semibold text-green-600 mb-2">
//             Eco-Friendly Solutions
//           </h3>
//           <p className="text-gray-600 leading-relaxed">
//             We use environmentally friendly products to ensure a safe and
//             healthy space for you and your family.
//           </p>
//         </div>

//         <div className="flex-1 min-w-[300px] bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl">
//           <img
//             src="https://via.placeholder.com/100"
//             alt="Customer Satisfaction"
//             className="mx-auto mb-4"
//           />
//           <h3 className="text-xl font-semibold text-green-600 mb-2">
//             Customer Satisfaction
//           </h3>
//           <p className="text-gray-600 leading-relaxed">
//             Your satisfaction is our priority. We strive to exceed your
//             expectations with every service we provide.
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";
import backgroundImage from "../../../assets/images/about.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="font-marcellus font-medium">
        <div
          className="relative bg-cover bg-center md:h-60 h-24"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="flex flex-col justify-center items-center h-full text-center text-black">
            <h1 className="md:text-4xl text-xl  md:mb-4"> About US</h1>
            <a
              href="/"
              className="text-lg font-semibold text-secondary hover:underline"
            >
              Home >> About US
            </a>
          </div>
        </div>
        <section class="w-full mx-auto py-10 ">
          {/* <!-- Title --> */}
          {/* <div class="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-blue-600">
    Services
  </div> */}

          <div class="w-full h-full flex flex-col items-center md:py-4 py-10">
            {/* <!-- Col - 2 --> */}
            <div class="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-4">
              {/* <!--  --> */}
              <img
                class="md:w-[50%] w-full md:rounded-t-lg rounded-sm"
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="billboard image"
              />

              <div class="md:w-[50%] w-full  text-gray-900 md:p-4 p-0 rounded-md">
                <h2 class="text-3xl  text-gray-900">
                  Lorem ipsum dolor sit amet consectetur
                </h2>
                <p class="text-md mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore placeat assumenda nam veritatis, magni doloremque
                  pariatur quos fugit ipsa id voluptatibus deleniti officiis cum
                  ratione eligendi sed necessitatibus aliquam error laborum
                  delectus quaerat. Delectus hic error eligendi sed repellat
                  natus fuga nobis tempora possimus ullam!
                </p>
              </div>
            </div>
            {/* <!-- Col - 3 --> */}
            <div class="xl:w-[80%] sm:w-[85%] w-[90%] mx-auto flex md:flex-row flex-col flex-col-reverse lg:gap-4 gap-2 justify-center lg:items-stretch md:items-center mt-6">
              {/* <!--  --> */}
              <div class="md:w-[50%] w-full  text-gray-900 md:p-4 p-0 rounded-md">
                <h2 class="text-3xl  text-gray-900">
                  Lorem ipsum dolor sit amet consectetur
                </h2>

                <p class="text-md mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore placeat assumenda nam veritatis, magni doloremque
                  pariatur quos fugit ipsa id voluptatibus deleniti officiis cum
                  ratione eligendi sed necessitatibus aliquam error laborum
                  delectus quaerat. Delectus hic error eligendi sed repellat
                  natus fuga nobis tempora possimus ullam!
                </p>
              </div>
              {/* <!--  --> */}
              <img
                class="md:w-[50%] w-full md:rounded-t-lg rounded-sm"
                src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="billboard image"
              />
            </div>
          </div>
        </section>

        {/* <!-- Photo by '@candjstudios' & '@framesforyourheart' on Unsplash --> */}
      </div>
    </>
  );
};

export default AboutUs;
