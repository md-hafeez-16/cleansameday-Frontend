import React from "react";

const OurVision = () => {
  return (
    <>
      {/* <div class="[&>*:last-child]:hover:top-0 md:[&>*:last-child]:hover:left-[15rem] lg:[&>*:last-child]:hover:left-[18rem] md:[&>*:last-child]:hover:left-[13rem] xs:[&>*:last-child]:hover:left-[7rem] group absolute top-[30%] md:left-[30%] sm:left-[25%] xs:left-[15%]">
        <div class="[transition:all_400ms_ease] group-hover:rotate-0 lg:w-[18rem] lg:h-[22rem] md:w-[14rem] md:h-[18rem] sm:w-[12rem] sm:h-[16rem] xs:w-[10rem] xs:h-[12rem] border-[0.4rem] border-transparent shadow-xl absolute -rotate-[10deg] origin-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxiZWVyfGVufDB8MHx8fDE3MTI3NDU4Njh8MA&ixlib=rb-4.0.3&q=80&w=1080"
            class="w-full h-full rounded-sm"
            alt="Frame Two"
          />
        </div>
        <div class="[transition:all_400ms_ease] absolute -rotate-[10deg] last:rotate-[20deg] -top-[2rem] left-[2rem] group-hover:rotate-0 lg:w-[18rem] lg:h-[22rem] md:w-[14rem] md:h-[18rem] sm:w-[12rem] sm:h-[16rem] xs:w-[10rem] xs:h-[12rem] border-[0.4rem] border-transparent shadow-xl origin-bottom-left">
          <img
            src="https://images.unsplash.com/photo-1608270586620-248524c67de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxiZWVyfGVufDB8MHx8fDE3MTI3NDU4Njh8MA&ixlib=rb-4.0.3&q=80&w=1080"
            class="w-full h-full rounded-sm"
            alt="Frame One"
          />
        </div>
      </div>

      <div class="absolute bg-black/20 py-2 md:top-[75%] sm:top-[70%] xs:top-[60%]">
        <h1 class="w-full md:px-4 xs:px-2 xl:text-7xl lg:text-5xl sm:text-4xl xs:text-3xl text-white text-center font-serif font-semibold">
          Farm-Fresh Brews: From Field to Glass, an Unforgettable Beer Journey.
        </h1>
      </div> */}

      <section class="">
        <div class="py-8 md:px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          {/* <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Designed for business teams like yours
            </h2>
            <p class="text-gray-500 sm:text-xl">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div> */}
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div className="text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="mb-2 text-2xl  text-gray-800">OUR VISION</h3>
              <p className="text-gray-600 leading-relaxed">
                Our vision is maintaining a pest-free environment without
                hazarding public health and the ecosystem.
              </p>
            </div>

            <div className="text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="mb-4 text-2xl  text-gray-800">OUR MISSION</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to provide our clients with the highest level of
                pest control and cleaning service in a cost-effective manner.
              </p>
            </div>

            {/* <!-- Other blocks omitted for brevity --> */}
            <div className="text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="mb-4 text-2xl  text-gray-800">OUR VALUES</h3>
              <p className="text-gray-600 leading-relaxed">
                We are committed to excellence through the systematic and
                disciplined management of our operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurVision;
