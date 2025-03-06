import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BASE_URL } from "../constants";
import bgImage from "../assets/images/about.jpg";
import { useNavigate } from "react-router-dom";

const NavBookings = () => {
  const [service, setService] = useState([]);

  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    bookingDate: "",
    time: "",
    address: {
      addressLine1: "",
      addressLine2: "",
      buildingNumber: "",
      city: "",
      state: "",
      landmark: "",
      pinCode: "",
    },
  });

  const fetchService = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/service/getAllServicesNoPage`);
      console.log(res.data);
      setService(res.data.services);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchService();
  }, []);

  const handleFormSubmit = (e) => {
    const { name, value } = e.target;
    if (name.includes("address")) {
      const addressField = name.split(".")[1];
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [addressField]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData, "formdata");
    try {
      const data = await axios.post(
        `${BASE_URL}/booking/initiateBooking`,
        formData
      );

      console.log(data);

      toast.success("booking confirmed");

      navigate("/service");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div
      className="max-w-7xl mx-auto py-10 font-marcellus bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex items-center justify-center md:p-12 p-5">
        <div className="mx-auto w-full max-w-[800px] bg-white border p-5 md:p-10 rounded-md border-primary">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div className="mb-5">
                <label
                  htmlFor="firstName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={handleFormSubmit}
                  required
                  placeholder="Enter First Your Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="lastName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  onChange={handleFormSubmit}
                  id="lastName"
                  required
                  placeholder="Enter Your Last Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  onChange={handleFormSubmit}
                  required
                  placeholder="Enter your phone number"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleFormSubmit}
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="mb-5 ">
              <label
                htmlFor="service"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Service Booking
              </label>
              <select
                name="service"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                id=""
                onChange={handleFormSubmit}
              >
                <option value="" disabled selected>
                  Select Booking
                </option>
                {service.map((item) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="bookingDate"
                    onChange={handleFormSubmit}
                    id="date"
                    required
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="time"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    onChange={handleFormSubmit}
                    required
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="mb-5 pt-3">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Address Details
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-full">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="address.addressLine1"
                        id="addressLine1"
                        onChange={handleFormSubmit}
                        required
                        placeholder="Address Line 1"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <input
                        type="text"
                        name="address.addressLine2"
                        id="addressLine2"
                        onChange={handleFormSubmit}
                        placeholder="Address Line 2 (optional)"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="address.buildingNumber"
                      id="buildingNumber"
                      onChange={handleFormSubmit}
                      required
                      placeholder="Enter building no"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="address.city"
                      onChange={handleFormSubmit}
                      id="city"
                      required
                      placeholder="Enter city"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="address.state"
                      onChange={handleFormSubmit}
                      id="state"
                      required
                      placeholder="Enter Emirate"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="address.landmark"
                      id="landmark"
                      onChange={handleFormSubmit}
                      required
                      placeholder="Enter landmark"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="number"
                      name="address.pinCode"
                      onChange={handleFormSubmit}
                      id="pinCode"
                      required
                      placeholder="Enter Pin Code"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button className="hover:shadow-form w-full rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NavBookings;
