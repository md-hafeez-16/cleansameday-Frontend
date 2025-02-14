import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import bgImage from "../../assets/images/about.jpg";

const Booking = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    address1: "",
    address2: "",
    buildingNo: "",
    city: "",
    state: "",
    landmark: "",
    pinCode: "",
  });

  useEffect(() => {
    if (!id) {
      setError("Error: Service ID is undefined");
      setLoading(false);
      return;
    }

    const fetchServiceDetails = async () => {
      try {
        const response = await axios.get(
          `https://cleansameday.com:4000/api/booking/getBookingById/${id}`
        );
        setService(response.data.serviceDoc);
      } catch (err) {
        setError("Failed to load service details");
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://cleansameday.com:4000/api/booking/initiateBooking",
        {
          ...formData,
          serviceId: id,
        }
      );
      alert("Booking successful!");
    } catch (error) {
      alert("Booking failed. Please try again.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div
      className="max-w-7xl mx-auto py-10 bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex items-center justify-center p-5">
        <div className="w-full max-w-[550px] bg-white border p-5 rounded-md">
          <h2 className="text-xl font-bold text-center mb-4">
            Book {service?.name}
          </h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={service?.name || ""}
              disabled
              className="w-full mb-5 border bg-gray-100 py-3 px-6"
            />
            <input
              type="text"
              name="name"
              placeholder="First Name"
              onChange={handleChange}
              required
              className="w-full mb-5 border py-3 px-6"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              required
              className="w-full mb-5 border py-3 px-6"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              required
              className="w-full mb-5 border py-3 px-6"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full mb-5 border py-3 px-6"
            />
            <input
              type="date"
              name="date"
              onChange={handleChange}
              required
              className="w-full mb-5 border py-3 px-6"
            />
            <input
              type="time"
              name="time"
              onChange={handleChange}
              required
              className="w-full mb-5 border py-3 px-6"
            />
            <input
              type="text"
              name="address1"
              placeholder="Address Line 1"
              onChange={handleChange}
              required
              className="w-full mb-5 border py-3 px-6"
            />
            <input
              type="text"
              name="address2"
              placeholder="Address Line 2"
              onChange={handleChange}
              required
              className="w-full mb-5 border py-3 px-6"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={handleChange}
              required
              className="w-full mb-5 border py-3 px-6"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={handleChange}
              required
              className="w-full mb-5 border py-3 px-6"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-md"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
