import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useSeo from "../../../hooks/useSeo";
import SeoHead from "../../../components/SeoHead";
import PageHero from "../../../components/layout/PageHero";
import PageShell from "../../../components/layout/PageShell";
import SectionHeading from "../../../components/layout/SectionHeading";
import ServiceCard from "../../../components/ServiceCard";
import backgroundImage from "../../../assets_optimized/images/servicebg.webp";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const seo = useSeo("/service");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://cleansameday.com:4000/api/service/getAllCleaningServices"
        );

        if (response.data?.services) {
          setServices(response.data.services);
        } else {
          setServices([]);
        }
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Failed to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleServiceClick = (slug) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/${slug}`);
  };

  return (
    <>
      <SeoHead
        url="/service"
        canonicalPath="/service"
        defaults={{
          title: "Cleaning Services in Dubai | Cleansameday",
          description:
            "Explore our professional cleaning services in Dubai. Book reliable, affordable home and office cleaning with Cleansameday.",
          keywords: [],
        }}
      />

      <PageShell>
        <PageHero
          title={seo?.h1 || "Cleaning Services in Dubai"}
          breadcrumb={{ label: "Services" }}
          image={backgroundImage}
        />

        <section className="section-padding" id="services">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Cleaning Services"
            subtitle="Professional home and office cleaning across Dubai — book online in minutes."
          />

          {loading && (
            <p className="text-center text-gray-600">Loading services...</p>
          )}

          {error && <p className="text-center text-red-600">{error}</p>}

          {!loading && !error && services.length === 0 && (
            <p className="text-center text-gray-600">No services available.</p>
          )}

          {!loading && !error && services.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service._id}
                  service={service}
                  onClick={() => handleServiceClick(service.slug)}
                />
              ))}
            </div>
          )}
        </section>
      </PageShell>
    </>
  );
};

export default Service;
