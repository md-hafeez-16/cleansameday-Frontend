import React, { useState } from "react";
import axios from "axios";
import { Call02Icon, Location01Icon, Mail01Icon } from "hugeicons-react";
import bgimg from "../../../assets/images/contactus.png";
import {
  FaComment,
  FaCommentAlt,
  FaEnvelope,
  FaMobileAlt,
  FaRegUser,
} from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const reqbody = {
      adminEmail: "info@neodeals.in",
      subject: "from neodeals user",
      name: `${firstName} ${lastName}`,
      email: email,
      phoneNumber: phone,
      queryText: address,
    };

    try {
      const res = await axios.post(
        "https://mailsender.neodeals.in:8443/hpUser/send",
        reqbody,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Email Sent Successfully");
    } catch (error) {
      toast.error("Email Not Sent");
    }
  };

  const faqs = [
    {
      id: 1,
      question: "What types of cleaning services do you offer?",
      answer:
        "We offer a variety of cleaning services, including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, and post-construction cleaning. Our services are customizable to meet your specific needs.",
    },
    {
      id: 2,
      question: "Are your cleaning products safe for pets and children?",
      answer:
        "Yes, we use eco-friendly and non-toxic cleaning products that are safe for pets and children. Your safety and well-being are our priority, and we ensure all products we use are safe for your home and family.",
    },
    {
      id: 3,
      question: "How can I book a cleaning service?",
      answer:
        "You can easily book a cleaning service by visiting our website or calling our customer support team. We offer flexible scheduling, and our team will work with you to find a convenient time.",
    },
    {
      id: 4,
      question: "Do I need to provide cleaning supplies?",
      answer:
        "No, our team brings all the necessary cleaning supplies and equipment to your location. We use high-quality products to ensure the best results, so you don't have to worry about a thing.",
    },
    {
      id: 5,
      question: "What if I am not satisfied with the cleaning service?",
      answer:
        "If you're not completely satisfied with our service, please let us know within 24 hours, and we'll send a team back to address any issues. Your satisfaction is important to us, and we strive to provide exceptional cleaning every time.",
    },
  ];

  const handleToggle = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id)); // Toggle the expanded state
  };

  return (
    <>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <div className=" font-marcellus font-medium">
        <div className="max-w-[1540px] mx-auto bg-[#F0F2F4] p-3 md:p-10 lg:px-[70px]">
          <div className="mt-5 flex items-center">
            <p className="ml-2 md:text-3xl text-2xl ">Contact Us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 overflow-hidden h-full w-full">
            <div
              className="bg-cover w-full h-full p-8 md:rounded-l-lg rounded-lg md:rounded-none relative"
              style={{ backgroundImage: `url(${bgimg})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#252F41] opacity-70 via-[#252F41] to-[#252F41] sm:block"></div>
              <div className="relative md:top-10 lg:top-28 lg:left-9 2xl:top-24 2xl:left-24 z-10">
                <h1 className=" md:text-3xl text-2xl text-[#FFFFFF] mb-2">
                  Get In Touch With Us
                </h1>
                <p className="text-[#FFFFFF] md:text-base text-sm font-normal mb-6">
                  Reach out to us for all your enquiry and assistance. <br />
                  Contact us now for prompt support.
                </p>
                <div className="flex gap-2 items-center mt-4 text-lg ">
                  <div className="bg-primary p-2 text-white rounded-sm">
                    <Call02Icon />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[#FFFFFF] md:text-base text-sm ">
                      PHONE
                    </h1>
                    <div className="flex flex-col lg:flex-row md:gap-3 text-[#FFFFFF] font-normal md:text-base text-sm">
                      <p>+91 62625 93782</p>
                      <p>+91 98374 37291</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-4 text-lg ">
                  <div className="bg-primary p-2 text-white rounded-sm">
                    <Mail01Icon />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[#FFFFFF] md:text-base text-sm ">
                      EMAIL
                    </h1>
                    <div className="flex gap-3 text-[#FFFFFF] font-normal text-base">
                      <h1 className="md:text-base text-sm font-normal text-[#FFFFFF]">
                        Depanda@gmail.com
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center mt-4 text-lg ">
                  <div className="bg-primary p-2 text-white rounded-sm mb-5">
                    <Mail01Icon />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-[#FFFFFF] md:text-base text-sm ">
                      OFFICE
                    </h1>
                    <div className="flex gap-3 text-[#FFFFFF] font-normal text-base">
                      <h1 className="md:text-base text-sm font-normal text-[#FFFFFF]">
                        PB Road, Opp Agriculture, Prakash Nagar <br />
                        Bangalore 580031
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-primary p-4 md:p-8 md:rounded-r-lg rounded-lg md:rounded-none mt-5 md:mt-0 xl:px-16">
              <form
                className="bg-[#ffffff] border border-gray-300 p-5 rounded-lg shadow-lg w-full h-full mx-auto"
                onSubmit={handleSubmit}
              >
                <div className="grid gap-4">
                  {/* First Name Input */}
                  <div className="relative">
                    <div className="absolute top-1/2 left-3 transform -translate-y-1/2 flex items-center cursor-pointer">
                      <FaRegUser className="w-5 h-5 text-primary" />
                    </div>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      className="mt-1 block w-full pl-10 pr-2 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-primary sm:text-sm"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Last Name Input */}
                  <div className="relative">
                    <div className="absolute top-1/2 left-3 transform -translate-y-1/2 flex items-center cursor-pointer">
                      <FaRegUser className="w-5 h-5 text-primary" />
                    </div>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      className="mt-1 block w-full pl-10 pr-2 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 mt-3">
                  {/* Phone Input */}
                  <div className="relative">
                    <div className="absolute top-1/2 left-3 transform -translate-y-1/2 flex items-center cursor-pointer">
                      <FaMobileAlt className="w-5 h-5 text-primary" />
                    </div>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Phone Number"
                      className="mt-1 block w-full pl-10 pr-2 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <div className="absolute top-1/2 left-3 transform -translate-y-1/2 flex items-center cursor-pointer">
                      <FaEnvelope className="w-5 h-5 text-primary" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      className="mt-1 block w-full pl-10 pr-2 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="relative mt-4">
                  <div className="absolute top-5 left-3 transform -translate-y-1/2 flex items-center cursor-pointer">
                    <FaCommentAlt className="w-5 h-5 text-primary" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full pl-10 p-2 h-28 border border-gray-300 rounded-lg shadow-sm sm:text-sm"
                    placeholder="Type a message here..."
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center text-white space-x-4 mt-6">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-primary rounded-full text-white shadow-md"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#ffffff]">
        <div className="max-w-[1540px] mx-auto p-3 lg:p-10 lg:px-[70px]">
          <h1 className="md:text-2xl text-lg font-bold text-left text-[#000000]">
            Frequently Asked Questions
          </h1>
          <div className="space-y-4 mt-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b pb-4">
                <button
                  onClick={() => handleToggle(faq.id)}
                  className={`w-full text-left text-lg font-semibold ${
                    expandedId === faq.id ? "text-primary" : "text-[#000000]"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{faq.question}</span>
                    <span>
                      {expandedId === faq.id ? (
                        <FaChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <FaChevronDown className="w-5 h-5 text-primary" />
                      )}
                    </span>
                  </div>
                </button>
                {expandedId === faq.id && (
                  <p className="text-sm mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
