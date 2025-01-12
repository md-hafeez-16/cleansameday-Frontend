import React, { useEffect } from "react";
import backgroundImage from "../../../assets/images/servicebg.jpg";
import service from "../../../assets/images/deepclean.jpg";
import service1 from "../../../assets/images/villaclean.jpg";
import service2 from "../../../assets/images/deep.jpeg";
import service3 from "../../../assets/images/move.jpg";
import service4 from "../../../assets/images/warehouse.jpg";
import service5 from "../../../assets/images/office1clean.jpeg";
import service6 from "../../../assets/images/commercial1clean.jpeg";
import service7 from "../../../assets/images/floorclean.jpeg";
import service8 from "../../../assets/images/sofaclean.jpeg";
import service9 from "../../../assets/images/kitchenclean.jpeg";
import service10 from "../../../assets/images/acclean.jpeg";
import service11 from "../../../assets/images/balconyclean.jpeg";
import service12 from "../../../assets/images/garageclean.jpeg";
import service13 from "../../../assets/images/steamclean.jpeg";
import whatsapp from "../../../assets/images/whatsaap.jpg";
import { useNavigate } from "react-router-dom";

const Service = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: "Deep Cleaning & Cleaning Services",
      image: service,
      description:
        "We offer comprehensive deep cleaning and cleaning services to ensure your spaces are spotless and hygienic. Our team uses high-quality products and techniques to leave your home or office sparkling clean. We handle everything from dusting to deep scrubbing, leaving no area untouched. Book our cleaning services today to enjoy a fresh and clean environment.",
    },
    {
      id: 2,
      title: "Villa Deep Cleaning",
      image: service1,
      description:
        "Specialized villa deep cleaning services to maintain a pristine and comfortable environment in your villa. Whether it's a one-time deep clean or ongoing maintenance, we offer tailor-made solutions. Our skilled team uses professional-grade equipment to ensure every corner of your villa is spotless. Enjoy a fresh and hygienic living space with our reliable cleaning services.",
    },
    {
      id: 3,
      title: "Deep Cleaning Services",
      image: service2,
      description:
        "Professional deep cleaning services for all types of properties, tailored to your needs. From residential homes to commercial spaces, we cover it all. Our services include detailed cleaning of kitchens, bathrooms, and living spaces, ensuring a high standard of cleanliness. We take pride in offering comprehensive cleaning solutions to improve the hygiene of your space.",
    },
    {
      id: 4,
      title: "Move In / Out Deep Cleaning",
      image: service3,
      description:
        "Make your move hassle-free with our move-in and move-out deep cleaning services. Moving can be stressful, but our cleaning services ensure your new or old space is in perfect condition. Our team provides a thorough cleaning, addressing every detail from windows to floors. We guarantee that your new home or office will be fresh and welcoming.",
    },
    {
      id: 5,
      title: "Warehouse Deep Cleaning",
      image: service4,
      description:
        "Maintain a clean and organized warehouse with our specialized deep cleaning services. Our team is equipped to handle large spaces and ensure that your warehouse is spotless. We use industrial-grade cleaning equipment to remove dirt, dust, and debris, ensuring a safe and tidy environment. Regular deep cleaning helps maintain a productive and hygienic workspace.",
    },
    {
      id: 6,
      title: "Office Deep Cleaning",
      image: service5,
      description:
        "Enhance productivity and hygiene with our professional office deep cleaning services. A clean office environment promotes employee well-being and creates a positive impression for clients. We clean desks, floors, windows, and common areas, ensuring no spot is missed. Trust us to maintain a pristine and hygienic workspace for your team.",
    },
    {
      id: 7,
      title: "Commercial Deep Cleaning",
      image: service6,
      description:
        "Ensure a clean and professional appearance for your commercial spaces with our deep cleaning services. We cater to offices, retail stores, and other commercial properties, providing customized cleaning solutions. Our team will tackle high-traffic areas and high-touch surfaces to ensure your business premises are safe and welcoming. A clean space enhances your brand's image and helps retain customers.",
    },
    {
      id: 8,
      title: "Floor Deep Cleaning",
      image: service7,
      description:
        "Restore the shine of your floors with our floor deep cleaning services. We specialize in deep cleaning a variety of flooring types, including hardwood, tile, and carpet. Our team uses effective cleaning techniques to remove dirt, stains, and grime, ensuring your floors look as good as new. Regular deep cleaning helps prolong the life of your flooring and enhances the overall appearance of your space.",
    },
    {
      id: 9,
      title: "Sofa Deep Cleaning",
      image: service8,
      description:
        "Keep your sofas fresh and clean with our specialized sofa deep cleaning services. We remove dirt, stains, and odors from your furniture, restoring its original look. Our team uses safe and effective cleaning methods to ensure your sofas are thoroughly cleaned and sanitized. Whether it's a fabric or leather sofa, we have the expertise to keep it looking great.",
    },
    {
      id: 10,
      title: "Kitchen Deep Cleaning",
      image: service9,
      description:
        "Maintain a hygienic cooking space with our thorough kitchen deep cleaning services. We clean everything from countertops and sinks to appliances and cabinets. Our deep cleaning removes grease, food residues, and grime that regular cleaning can't reach. With our service, your kitchen will be spotless and safe for meal preparation.",
    },
    {
      id: 11,
      title: "AC Duct Cleaning",
      image: service10,
      description:
        "Improve air quality with our professional AC duct cleaning services. Dirty ducts can lead to poor air circulation and lower indoor air quality. Our team cleans the entire duct system, removing dust, allergens, and debris. Keep your air fresh and your HVAC system running efficiently with our expert duct cleaning services.",
    },
    {
      id: 12,
      title: "Balcony Deep Cleaning",
      image: service11,
      description:
        "Enjoy a cleaner outdoor space with our balcony deep cleaning services. Balconies often accumulate dirt, leaves, and stains over time, making them unpleasant to use. Our deep cleaning service ensures that your balcony is not only clean but also safe and inviting. Whether it's for relaxation or entertainment, your balcony will be in top condition.",
    },
    {
      id: 13,
      title: "Garage Deep Cleaning",
      image: service12,
      description:
        "Keep your garage clean and organized with our deep cleaning services. Garages are prone to dirt, oil stains, and clutter, but our team will ensure that your garage is spotless and functional. We clean floors, walls, and storage areas to create a well-maintained space. Organize your garage today and enjoy a clutter-free environment.",
    },
    {
      id: 14,
      title: "Steam Deep Cleaning",
      image: service13,
      description:
        "Experience the ultimate cleanliness with our steam deep cleaning services. Steam cleaning uses hot vapor to remove stains, germs, and allergens from various surfaces. It's an eco-friendly and effective method for deep cleaning carpets, upholstery, and floors. Trust our steam cleaning service to refresh your space and leave it hygienic and odor-free.",
    },
  ];

  return (
    <>
      <div className="font-marcellus font-medium max-w-7xl mx-auto">
        <div className="flex justify-end bottom-5 right-2 fixed z-50 object-contain">
          <a
            href="https://wa.me/+971549936911"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={whatsapp}
              alt=""
              className="lg:w-20 lg:h-20 w-16 h-16 lg:mb-0 mb-0  shadow-2xl rounded-full"
            />
          </a>
        </div>
        <div
          className="relative bg-cover bg-center md:h-60 h-24"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="flex flex-col justify-center items-center h-full text-center text-black">
            <h1 className="md:text-4xl text-xl  md:mb-4"> Services</h1>
            <a
              href="/"
              className="text-lg font-semibold text-secondary hover:underline"
            >
              Home >> Service
            </a>
          </div>
        </div>

        <section className="py-10" id="services">
          <div className="container mx-auto px-4">
            {" "}
            {/* Removed md:px-4 to ensure the grid is well spaced */}
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Our Services
            </h2>
            {/* Grid layout for services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {services.map((service) => (
                // <div
                //   key={service.id}
                //   className="bg-white rounded-lg cursor-pointer shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                //   onClick={() => navigate(`/servicedetails`)}
                // >
                //   <img
                //     src={service.image}
                //     alt={service.title}
                //     className="w-full h-64 object-cover"
                //   />
                //   <div className="p-6 text-center">
                //     <h3 className="text-xl font-medium text-gray-800 mb-2">
                //       {service.title}
                //     </h3>
                //     <p className="text-gray-700 text-base line-clamp-4">
                //       {service.description}
                //     </p>
                //   </div>
                // </div>
                <div
                  key={service.id}
                  className="group bg-white rounded-lg cursor-pointer shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl relative"
                  onClick={() => navigate(`/servicedetails`)}
                >
                  <div className="relative w-full h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Tint Effect */}
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 group-hover:animate-tint-fill"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-medium text-gray-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 text-base line-clamp-4">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Service;
