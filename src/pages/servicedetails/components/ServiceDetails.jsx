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

import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import whatsapp from "../../../assets_optimized/images/whatsaap.webp";

const ServiceDetails = () => {
  const { serviceSlug } = useParams(); // 👈 from URL
  const location = useLocation();
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [seo, setSeo] = useState(null);
  const [loading, setLoading] = useState(true);

  const currentPath = location.pathname; // /villa-deep-cleaning-services-dubai

  // ✅ Fetch Service by SLUG
  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/service/getServiceBySlug/${serviceSlug}`
        );

        if (res.data.success) {
          setService(res.data.serviceDoc);
        }
      } catch (error) {
        console.error("Service fetch error:", error);
      }
    };

    if (serviceSlug) fetchService();
  }, [serviceSlug]);

  // ✅ Fetch SEO by URL
  useEffect(() => {
    const fetchSeo = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/seo/get?url=${currentPath}`
        );
        console.log("SEO RESPONSE =>", res.data);
        setSeo(res.data.data);
      } catch (err) {
        console.error("SEO fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSeo();
  }, [currentPath]);

  if (loading || !service) return <p>Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto font-marcellus font-medium p-5">

      {/* ✅ SEO META */}
      <Helmet>
        <title>{seo?.title || service.name}</title>
        <meta name="description" content={seo?.description || ""} />
        <meta name="keywords" content={seo?.keywords?.join(", ") || ""} />
        <link rel="canonical" href={`https://cleansameday.com${currentPath}`} />
      </Helmet>

      {/* WhatsApp */}
      <div className="fixed bottom-5 right-2 z-50">
        <a href="https://wa.me/+971549936911" target="_blank" rel="noopener noreferrer">
          <img
            src={whatsapp}
            alt="WhatsApp"
            className="lg:w-20 lg:h-20 w-16 h-16 shadow-2xl rounded-full"
          />
        </a>
      </div>

      {/* H1 */}
      <div className="mb-5">
        <p className="md:text-sm text-xs mb-1">BOOK SERVICE</p>
        <h1 className="md:text-3xl text-lg">{seo?.h1 }</h1>
      </div>

      {/* Images */}
      <div className="flex gap-5">
        <img
          src={service.imgUrl?.[0]}
          alt={service.name}
          className="w-[70%] h-[150px] md:h-[405px] object-cover rounded-md"
        />

        <div className="flex flex-col gap-5 md:w-[30%]">
          <img src={service.imgUrl?.[1]} className="md:h-48 h-16 object-cover rounded-md" />
          <img src={service.imgUrl?.[2]} className="md:h-48 h-16 object-cover rounded-md" />
        </div>
      </div>

      {/* Details */}
      <div className="py-5">
        <div className="flex justify-between">
          <h2 className="md:text-2xl text-xl">{service.name}</h2>
          <div>
            <p className="text-primary text-xl">Price: AED {service.price}</p>
            <p className="text-primary text-xl mt-1">Duration: {service.duration}</p>
          </div>
        </div>

        <div className="md:text-base text-sm mt-1 font-normal">
          <ReactMarkdown>{service.description}</ReactMarkdown>
        </div>
      </div>

      <div className="flex justify-center text-white mt-6">
        <button
          className="w-1/2 py-3 px-4 bg-primary rounded-md shadow-md"
          onClick={() =>
            navigate(`/bookings/${service._id}`, {
              state: { service: service.name },
            })
          }
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
