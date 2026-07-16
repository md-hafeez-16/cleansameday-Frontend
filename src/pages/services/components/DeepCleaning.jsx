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

const DeepCleaning = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const seo = useSeo("/deep-cleaning-services-in-dubai");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://cleansameday.com:4000/api/service/getAllDeepCleaningServices"
        );

        if (response.data?.services) {
          setServices(response.data.services);
        } else {
          setServices([]);
        }
      } catch (err) {
        console.error("Error fetching deep cleaning services:", err);
        setError("Failed to load deep cleaning services. Please try again later.");
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
    <PageShell>
      <SeoHead
        url="/deep-cleaning-services-in-dubai"
        canonicalPath="/deep-cleaning-services-in-dubai"
        defaults={{
          title: "Deep Cleaning Services in Dubai | Cleansameday",
          description:
            "Find our best deep cleaning services in Dubai. Trust our professional expert cleaners to ensure excellent safety and hygiene. Book now with Cleansameday.",
          keywords: [],
        }}
      />

      <PageHero
        title={seo?.h1 || "Deep Cleaning Services in Dubai"}
        breadcrumb={{ label: "Deep Cleaning" }}
        image={backgroundImage}
      />

      <section className="section-padding" id="services">
        <SectionHeading
          eyebrow="Deep Clean Experts"
          title="Our Deep Cleaning Services"
          subtitle="Thorough, top-to-bottom cleaning for homes, offices, and commercial spaces in Dubai."
        />

        {loading && (
          <p className="text-center text-gray-600">Loading services...</p>
        )}

        {error && <p className="text-center text-red-600">{error}</p>}

        {!loading && !error && services.length === 0 && (
          <p className="text-center text-gray-600">
            No deep cleaning services available.
          </p>
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
  );
};

export default DeepCleaning;
