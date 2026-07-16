import ServiceImage from "./ServiceImage";

const ServiceCard = ({ service, onClick }) => (
  <article
    className="group bg-white rounded-2xl cursor-pointer shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl relative"
    onClick={onClick}
  >
    <div className="relative w-full h-64 overflow-hidden">
      <ServiceImage
        image={service.imgUrl?.[0]}
        fallbackAlt={service.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 group-hover:animate-tint-fill pointer-events-none" />
    </div>

    <div className="p-6 text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
        {service.name}
      </h3>
      <p className="text-gray-600 text-sm md:text-base line-clamp-4">
        {service.description}
      </p>
    </div>
  </article>
);

export default ServiceCard;
