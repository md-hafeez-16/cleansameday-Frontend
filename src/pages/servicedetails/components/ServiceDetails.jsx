/* eslint-disable react/prop-types */
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import ReactMarkdown from "react-markdown";
// import whatsapp from "../../../assets_optimized/images/whatsaap.webp";
//  // ✅ Import WhatsApp icon

// const ServiceDetails = () => {
//   const { id } = useParams(); // Get service ID from URL
//   const navigate = useNavigate();
//   const [service, setService] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchServiceDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://cleansameday.com:4000/api/service/getServiceById/${id}`
//         );

//         if (response.data.success && response.data.serviceDoc) {
//           setService(response.data.serviceDoc);
//         } else {
//           setError("Service not found.");
//         }
//       } catch (err) {
//         console.error("Error fetching service:", err);
//         setError("Failed to load service details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchServiceDetails();
//   }, [id]);

//   if (loading) return <p>Loading service details...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="max-w-7xl mx-auto font-marcellus font-medium p-5">
//       {/* ✅ WhatsApp Floating Button */}
//       <div className="fixed bottom-5 right-2 z-50">
//         <a
//           href="https://wa.me/+971549936911"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <img
//             src={whatsapp}
//             alt="WhatsApp"
//             className="lg:w-20 lg:h-20 w-16 h-16 shadow-2xl rounded-full"
//           />
//         </a>
//       </div>

//       <div className="mb-5">
//         <p className="md:text-sm text-xs mb-1">BOOK SERVICE</p>
//         <h1 className="md:text-3xl text-lg">
//           Selected Service Booking Details
//         </h1>
//       </div>

//       <div className="flex gap-5">
//         {/* Main Image */}
//         <img
//           src={
//             service.imgUrl && service.imgUrl.length > 0 ? service.imgUrl[0] : ""
//           }
//           alt={service.name}
//           className="w-[70%] h-[150px] md:h-[405px] object-cover rounded-md"
//         />

//         {/* Secondary Images */}
//         <div className="flex flex-col gap-5 md:w-[30%]">
//           <img
//             src={
//               service.imgUrl && service.imgUrl.length > 1
//                 ? service.imgUrl[1]
//                 : ""
//             }
//             alt="Additional View"
//             className="md:h-48 h-16 object-cover rounded-md"
//           />
//           <img
//             src={
//               service.imgUrl && service.imgUrl.length > 2
//                 ? service.imgUrl[2]
//                 : ""
//             }
//             alt="Another View"
//             className="md:h-48 h-16 object-cover rounded-md"
//           />
//         </div>
//       </div>

//       <div className="py-5">
//         <div className="flex justify-between">
//           <h1 className="md:text-2xl text-xl">{service.name}</h1>
//           <div>
//             <p className="text-primary text-xl">Price: AED {service.price}</p>
//             <p className="text-primary text-xl mt-1">
//               Duration: {service.duration}
//             </p>
//           </div>
//         </div>
//         <div className="md:text-base text-sm mt-1 font-normal">
//           <ReactMarkdown>{service.description}</ReactMarkdown>
//         </div>
//       </div>

//       <div className="flex justify-center text-white space-x-4 mt-6">
//         <button
//           type="submit"
//           className="w-1/2 py-3 px-4 bg-primary rounded-md text-white shadow-md"
//           onClick={() =>
//             navigate(`/bookings/${id}`, { state: { service: service.name } })
//           }
//         >
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetails;

/*-------------------------------------------------------------------------------------------*/
// import React, { useEffect, useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet";
// import axios from "axios";
// import ReactMarkdown from "react-markdown";
// import whatsapp from "../../../assets_optimized/images/whatsaap.webp";
// import { redirectMap } from "../../../utils/redirectMap.js";

// const ServiceDetails = () => {
//   const { id } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [service, setService] = useState(null);
//   const [seo, setSeo] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const currentPath = location.pathname; // example: /deepservice
//   const originalSeoUrl = redirectMap[currentPath] || currentPath;

//   // Fetch Service Data
//   useEffect(() => {
//     const fetchService = async () => {
//       try {
//         let response;

//         // Case 1: /servicedetails/:id
//         if (id) {
//           response = await axios.get(
//             `https://cleansameday.com:4000/api/service/getServiceById/${id}`
//           );
//         }

//         // Case 2: /deep-cleaning-services-in-dubai → redirectMap → /servicedetails/:id
//         if (!id && redirectMap[currentPath]) {
//           const actualServicePath = Object.keys(redirectMap).find(
//             (key) => redirectMap[key] === originalSeoUrl
//           );

//           const serviceId = actualServicePath?.replace("/servicedetails/", "");

//           if (serviceId) {
//             response = await axios.get(
//               `https://cleansameday.com:4000/api/service/getServiceById/${serviceId}`
//             );
//           }
//         }

//         if (response?.data?.success) {
//           setService(response.data.serviceDoc);
//         }
//       } catch (error) {
//         console.error("Service fetch error:", error);
//       }
//     };

//     fetchService();
//   }, [id, currentPath]);

//   // Fetch SEO metadata
//   useEffect(() => {
//     const fetchSeo = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:4000/api/seo/get?url=${originalSeoUrl}`
//         );
//         setSeo(res.data.data);
//       } catch (err) {
//         console.error("SEO fetch error:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSeo();
//   }, [originalSeoUrl]);

//   if (loading || !service) return <p>Loading...</p>;

//   return (
//     <div className="max-w-7xl mx-auto font-marcellus font-medium p-5">
      
//       {/* 🟢 Dynamic SEO Metadata */}
//       <Helmet>
//         <title>{seo?.title || service.name}</title>
//         <meta
//           name="description"
//           content={seo?.description || "Service details"}
//         />
//         <meta
//           name="keywords"
//           content={seo?.keywords?.join(", ") || ""}
//         />
//         <link
//           rel="canonical"
//           href={`https://cleansameday.com${originalSeoUrl}`}
//         />
//       </Helmet>

//       {/* WhatsApp Floating Button */}
//       <div className="fixed bottom-5 right-2 z-50">
//         <a href="https://wa.me/+971549936911" target="_blank" rel="noopener noreferrer">
//           <img
//             src={whatsapp}
//             alt="WhatsApp"
//             className="lg:w-20 lg:h-20 w-16 h-16 shadow-2xl rounded-full"
//           />
//         </a>
//       </div>

//       <div className="mb-5">
//         <p className="md:text-sm text-xs mb-1">BOOK SERVICE</p>

//         {/* 🟢 Dynamic H1 */}
//         <h1 className="md:text-3xl text-lg">
//           {seo?.h1 || service.name}
//         </h1>
//       </div>

//       {/* Images */}
//       <div className="flex gap-5">
//         <img
//           src={service.imgUrl?.[0] || ""}
//           alt={service.name}
//           className="w-[70%] h-[150px] md:h-[405px] object-cover rounded-md"
//         />

//         <div className="flex flex-col gap-5 md:w-[30%]">
//           <img
//             src={service.imgUrl?.[1] || ""}
//             alt=""
//             className="md:h-48 h-16 object-cover rounded-md"
//           />
//           <img
//             src={service.imgUrl?.[2] || ""}
//             alt=""
//             className="md:h-48 h-16 object-cover rounded-md"
//           />
//         </div>
//       </div>

//       {/* Details */}
//       <div className="py-5">
//         <div className="flex justify-between">
//           <h1 className="md:text-2xl text-xl">{service.name}</h1>
//           <div>
//             <p className="text-primary text-xl">Price: AED {service.price}</p>
//             <p className="text-primary text-xl mt-1">
//               Duration: {service.duration}
//             </p>
//           </div>
//         </div>

//         <div className="md:text-base text-sm mt-1 font-normal">
//           <ReactMarkdown>{service.description}</ReactMarkdown>
//         </div>
//       </div>

//       <div className="flex justify-center text-white mt-6">
//         <button
//           className="w-1/2 py-3 px-4 bg-primary rounded-md shadow-md"
//           onClick={() =>
//             navigate(`/bookings/${service._id}`, {
//               state: { service: service.name },
//             })
//           }
//         >
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetails;

import React, { useEffect, useRef, useState } from "react";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  FaTag,
  FaRegClock,
  FaWhatsapp,
  FaCheckCircle,
  FaShieldAlt,
  FaLeaf,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useSeoState } from "../../../hooks/useSeo";
import useResolvedImages from "../../../hooks/useResolvedImages";
import SeoHead from "../../../components/SeoHead";
import SeoBody from "../../../components/SeoBody";
import normalizeSeoUrl from "../../../utils/seoUrl";
import whatsapp from "../../../assets_optimized/images/whatsaap.webp";

// Branded placeholder shown when a service image is missing or fails to load.
const SmartImage = ({ src, alt, className, onClick }) => {
  const [failed, setFailed] = useState(!src);
  const clickable = Boolean(onClick && src && !failed);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/20 text-primary/60 ${className}`}
      >
        <span className="px-3 text-center text-xs md:text-sm">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onClick={onClick}
      onError={() => setFailed(true)}
      className={`${className}${clickable ? " cursor-zoom-in" : ""}`}
    />
  );
};

const ImageLightbox = ({ images, initialIndex, onClose }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const scrollToIndex = (index) => {
    const container = scrollRef.current;
    if (!container) return;
    const next = Math.max(0, Math.min(index, images.length - 1));
    container.scrollTo({
      left: next * container.clientWidth,
      behavior: "smooth",
    });
    setActiveIndex(next);
  };

  const goPrev = () => scrollToIndex(activeIndex - 1);
  const goNext = () => scrollToIndex(activeIndex + 1);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, activeIndex, images.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const slide = container.children[initialIndex];
    if (slide) {
      slide.scrollIntoView({ inline: "start", block: "nearest" });
    }
    setActiveIndex(initialIndex);
  }, [initialIndex]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container || !container.clientWidth) return;
    const index = Math.round(container.scrollLeft / container.clientWidth);
    setActiveIndex(index);
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Service image gallery"
    >
      <div className="flex items-center justify-between px-4 py-4 shrink-0">
        <span className="text-white/80 text-sm">
          {activeIndex + 1} / {images.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <FaTimes className="text-xl" />
        </button>
      </div>

      <div className="relative flex-1 min-h-0">
        {activeIndex > 0 && (
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous image"
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
          >
            <FaChevronLeft className="text-lg md:text-xl" />
          </button>
        )}

        {activeIndex < images.length - 1 && (
          <button
            type="button"
            onClick={goNext}
            aria-label="Next image"
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
          >
            <FaChevronRight className="text-lg md:text-xl" />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x"
        >
          {images.map((image, i) => (
            <div
              key={image.url + i}
              className="min-w-full h-full flex items-center justify-center snap-center px-4 pb-8"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="max-h-[calc(100vh-6rem)] max-w-full object-contain select-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-white/50 text-xs pb-4 shrink-0">
        Use arrows, swipe, or scroll to view all images
      </p>
    </div>
  );
};

const ServiceDetails = () => {
  const { serviceSlug } = useParams(); // 👈 from URL
  const location = useLocation();
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const API_BASE =
    import.meta.env.VITE_APP_BASE_URL || "https://cleansameday.com:4000/api";

  // ✅ Exact SEO key for this route (managed from admin dashboard)
  const seoUrl = normalizeSeoUrl(location.pathname);
  const { seo, loaded: seoLoaded } = useSeoState(seoUrl);
  const resolvedImages = useResolvedImages(
    service?.imgUrl,
    service?.name || "Service image"
  );

  // ✅ Fetch Service by SLUG
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const fetchService = async () => {
      setLoading(true);
      setNotFound(false);
      try {
        const res = await axios.get(
          `${API_BASE}/service/getServiceBySlug/${serviceSlug}`
        );

        if (res.data.success) {
          setService(res.data.serviceDoc);
        } else {
          setService(null);
          setNotFound(true);
        }
      } catch (error) {
        console.error("Service fetch error:", error);
        setService(null);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    if (serviceSlug) fetchService();
  }, [serviceSlug, API_BASE]);

  if (loading || !seoLoaded) {
    return (
      <div className="max-w-7xl mx-auto p-10 text-center font-marcellus text-primary">
        Loading service details...
      </div>
    );
  }

  if (notFound || !service) {
    return (
      <div className="max-w-7xl mx-auto p-10 text-center font-marcellus">
        <h1 className="text-2xl text-primary mb-3">Service not found</h1>
        <p className="text-gray-600 mb-6">
          This service may have moved or no longer exists.
        </p>
        <button
          type="button"
          onClick={() => navigate("/service")}
          className="bg-primary text-white px-6 py-2 rounded-md"
        >
          View all services
        </button>
      </div>
    );
  }

  const images = resolvedImages;
  const mainImage = images[0];
  const sideImages = images.slice(1, 3);
  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const whatsappHref = `https://wa.me/+971549936911?text=${encodeURIComponent(
    `Hi, I'd like to book the "${service.name}" service.`
  )}`;

  // Service description may be plain text/markdown today or rich HTML later.
  const description = service.description || "";
  const descriptionIsHtml = /<\/?[a-z][\s\S]*>/i.test(description);

  return (
    <div className="font-marcellus max-w-7xl mx-auto px-4 md:px-6 py-6 bg-surface min-h-screen">
      {/* ✅ SEO META (managed from admin dashboard) */}
      <SeoHead
        url={seoUrl}
        seo={seo}
        seoLoaded={seoLoaded}
        canonicalPath={location.pathname}
        defaults={{
          title: service.name,
          description: service.description || service.name,
        }}
      />

      {/* Fullscreen image gallery */}
      {lightboxIndex !== null && images.length > 0 && (
        <ImageLightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}


      {/* Breadcrumb */}
      <nav className="text-xs md:text-sm text-gray-500 mb-4" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link to="/service" className="hover:text-primary">
          Services
        </Link>
        <span className="mx-2">/</span>
        <span className="text-primary">{service.name}</span>
      </nav>

      {/* Heading */}
      <p className="text-xs md:text-sm uppercase tracking-wider text-secondary font-semibold mb-1">
        Book Service
      </p>
      <h1 className="text-2xl md:text-4xl font-semibold text-primary leading-tight">
        {seo?.h1 || service.name}
      </h1>

      {/* Gallery + booking card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          {images.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <SmartImage
                src={mainImage?.url}
                alt={mainImage?.alt || service.name}
                onClick={() => openLightbox(0)}
                className={`w-full h-64 md:h-[420px] object-cover rounded-2xl ${
                  sideImages.length ? "sm:col-span-2" : "sm:col-span-3"
                }`}
              />
              {sideImages.length > 0 && (
                <div className="flex sm:flex-col gap-3">
                  {sideImages.map((img, i) => (
                    <SmartImage
                      key={img.url + i}
                      src={img.url}
                      alt={img.alt}
                      onClick={() => openLightbox(i + 1)}
                      className="w-full h-32 md:h-[204px] flex-1 object-cover rounded-2xl"
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <SmartImage
              src=""
              alt={service.name}
              className="w-full h-64 md:h-[420px] object-cover rounded-2xl"
            />
          )}
        </div>

        {/* Booking card */}
        <aside className="lg:col-span-1">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-lg p-6 lg:sticky lg:top-6">
            <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
              {service.name}
            </h2>

            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="flex items-center gap-2 text-gray-600">
                  <FaTag className="text-secondary" /> Price
                </span>
                <span className="text-lg font-semibold text-primary">
                  AED {service.price}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-gray-600">
                  <FaRegClock className="text-secondary" /> Duration
                </span>
                <span className="text-lg font-semibold text-primary">
                  {service.duration}
                </span>
              </div>
            </div>

            <button
              onClick={() =>
                navigate(`/bookings/${service._id}`, {
                  state: { service: service.name },
                })
              }
              className="mt-6 w-full py-3 px-4 bg-primary text-white rounded-xl shadow-md hover:bg-primary/90 transition-colors font-medium"
            >
              Book Now
            </button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full py-3 px-4 border border-primary text-primary rounded-xl flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors font-medium"
            >
              <FaWhatsapp className="text-lg" /> Enquire on WhatsApp
            </a>

            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-secondary" /> Trained &amp; vetted
                professionals
              </li>
              <li className="flex items-center gap-2">
                <FaLeaf className="text-secondary" /> Eco-friendly products
              </li>
              <li className="flex items-center gap-2">
                <FaShieldAlt className="text-secondary" /> Same-day availability
              </li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Description / SEO content */}
      <section className="mt-12">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-7 w-1.5 rounded-full bg-secondary" />
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            About this service
          </h2>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-10">
          <SeoBody
            url={seoUrl}
            contentClassName="mx-auto max-w-3xl"
            fallbackBody={
              descriptionIsHtml ? (
                <div
                  className="seo-content mx-auto max-w-3xl"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              ) : (
                <article className="seo-content mx-auto max-w-3xl">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {description}
                  </ReactMarkdown>
                </article>
              )
            }
          />
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="mt-10 bg-primary rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-white text-lg md:text-2xl font-medium text-center md:text-left">
          Ready to book <span className="text-secondary">{service.name}</span>?
        </h2>
        <button
          onClick={() =>
            navigate(`/bookings/${service._id}`, {
              state: { service: service.name },
            })
          }
          className="py-3 px-6 bg-secondary text-black rounded-full font-medium hover:bg-white transition-colors whitespace-nowrap"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
