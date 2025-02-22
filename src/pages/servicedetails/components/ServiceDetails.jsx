import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ServiceDetails = () => {
  const { id } = useParams(); // Get service ID from URL
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        console.log(`Fetching service details for ID: ${id}`);
        const response = await axios.get(
          `https://cleansameday.com:4000/api/service/getServiceById/${id}`
        );

        console.log("API Response:", response.data);

        if (response.data.success && response.data.serviceDoc) {
          setService(response.data.serviceDoc);
        } else {
          setError("Service not found.");
        }
      } catch (err) {
        console.error("Error fetching service:", err);
        setError("Failed to load service details.");
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [id]);

  if (loading) return <p>Loading service details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto font-marcellus font-medium p-5">
      <div className="mb-5">
        <p className="md:text-sm text-xs mb-1">BOOK SERVICE</p>
        <h1 className="md:text-3xl text-lg">
          Selected Service Booking Details
        </h1>
      </div>
      <div className="flex gap-5">
        {/* Main Image */}
        <img
          src={
            service.imgUrl && service.imgUrl.length > 0 ? service.imgUrl[0] : ""
          }
          alt={service.name}
          className="w-[70%] h-[150px] md:h-[405px] object-cover rounded-md"
        />

        {/* Placeholder Secondary Images */}
        <div className="flex flex-col gap-5 md:w-[30%]">
          <img
            src={
              service.imgUrl && service.imgUrl.length > 0
                ? service.imgUrl[0]
                : ""
            }
            alt="Additional View"
            className="md:h-48 h-16 object-cover rounded-md"
          />
          <img
            src={
              service.imgUrl && service.imgUrl.length > 0
                ? service.imgUrl[0]
                : ""
            }
            alt="Another View"
            className="md:h-48 h-16 object-cover rounded-md"
          />
        </div>
      </div>
      <div className="py-5">
        <div className="flex justify-between">
          <h1 className="md:text-2xl text-xl">{service.name}</h1>
          <div>
            <p className="text-primary text-xl">Price: ${service.price}</p>
            <p className="text-primary text-xl mt-1">
              Duration: {service.duration}
            </p>
          </div>
        </div>
        <p className="md:text-base text-sm mt-1 font-normal">
          {service.description}
        </p>
        {/* <p className="text-gray-700 mt-2">Duration: {service.duration}</p>
        <p className="text-gray-700">Price: ${service.price}</p> */}
      </div>
      <div className="flex justify-center text-white space-x-4 mt-6">
        <button
          type="submit"
          className="w-1/2 py-3 px-4 bg-primary rounded-md text-white shadow-md"
          onClick={() => navigate(`/bookings/${id}`)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
