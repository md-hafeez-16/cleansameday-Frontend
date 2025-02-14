import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../../assets/images/servicebg.jpg";
import whatsapp from "../../../assets/images/whatsaap.jpg";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://cleansameday.com:4000/api/service/getAllServices"
        );

        console.log("API Response:", response.data); // Debugging

        // Ensure services are properly set
        if (response.data && response.data.serviceDoc) {
          setServices(response.data.serviceDoc);
        } else {
          setServices([]); // Fallback if data structure is unexpected
        }
      } catch (error) {
        console.error("Error fetching services:", error);
        setError("Failed to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <div className="font-marcellus font-medium max-w-7xl mx-auto">
        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-5 right-2 z-50">
          <a
            href="https://wa.me/+971549936911"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsapp}
              alt="WhatsApp"
              className="lg:w-20 lg:h-20 w-16 h-16 shadow-2xl rounded-full"
            />
          </a>
        </div>

        {/* Header Section */}
        <div
          className="relative bg-cover bg-center md:h-60 h-24"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="flex flex-col justify-center items-center h-full text-center text-black">
            <h1 className="md:text-4xl text-xl md:mb-4">Services</h1>
            <a
              href="/"
              className="text-lg font-semibold text-secondary hover:underline"
            >
              Home >> Service
            </a>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-10" id="services">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Our Services
            </h2>

            {/* Loading State */}
            {loading && (
              <div className="text-center text-gray-700">Loading...</div>
            )}

            {/* Error State */}
            {error && <div className="text-center text-red-600">{error}</div>}

            {/* No Services Available */}
            {!loading && !error && services.length === 0 && (
              <div className="text-center text-gray-700">
                No services available.
              </div>
            )}

            {/* Services Grid */}
            {!loading && !error && services.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <div
                    key={service._id}
                    className="group bg-white rounded-lg cursor-pointer shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl relative"
                    // onClick={() =>  navigate(`/servicedetails/${service._id}`)}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      navigate(`/servicedetails/${service._id}`);
                    }}
                  >
                    {/* Image Section */}
                    <div className="relative w-full h-64 overflow-hidden">
                      <img
                        src={service.imgUrl[0]}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Tint Effect */}
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 group-hover:animate-tint-fill"></div>
                    </div>

                    {/* Text Section */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-medium text-gray-800 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-700 text-base line-clamp-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Service;
