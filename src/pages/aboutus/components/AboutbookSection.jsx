import React from "react";
import img from "../../../assets/images/abtimg.png";
const AboutbookSection = () => {
  return (
    <>
      <div className="px-7">
        <div className=" bg-[#FEDB5D]  rounded-xl">
          <div className="flex justify-around items-center h-[403px]">
            <div>
              <h1 className="text-5xl">Book your cleaning service</h1>
              <h1 className="text-5xl">today for pristine results</h1>
              <div className="flex justify-center text-white space-x-4 mt-6">
                <button
                  type="submit"
                  className=" py-3 px-4 bg-primary rounded-full text-white shadow-md"
                >
                  Submit
                </button>
              </div>
            </div>
            <img src={img} alt="" className="relative bottom-6 md:h-[450px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutbookSection;
