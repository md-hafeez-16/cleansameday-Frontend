import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import PageHero from "../../components/layout/PageHero";
import PageShell from "../../components/layout/PageShell";
import SectionHeading from "../../components/layout/SectionHeading";
import { BASE_URL } from "../../constants";
import heroImage from "../../assets_optimized/images/servicebg.webp";

const Booking = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const serviceName = location.state?.service || "Selected Service";
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: id,
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [addressField]: value },
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.post(`${BASE_URL}/booking/initiateBooking`, formData);
      toast.success("Booking confirmed! We'll contact you shortly.");
      navigate("/service");
    } catch (error) {
      console.error(error);
      toast.error("Booking failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageShell>
      <PageHero
        title="Book Your Service"
        breadcrumb={{ label: "Booking" }}
        image={heroImage}
      />

      <section className="section-padding pt-8 md:pt-10">
        <SectionHeading
          eyebrow="Quick Booking"
          title={serviceName}
          subtitle="Complete the form below to schedule your cleaning appointment."
        />

        <div className="max-w-3xl mx-auto content-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="service" className="form-label">
                Service
              </label>
              <input
                type="text"
                id="service"
                value={serviceName}
                readOnly
                className="form-input bg-surface text-primary font-medium cursor-not-allowed"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onChange={handleFormChange}
                  required
                  placeholder="First name"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onChange={handleFormChange}
                  required
                  placeholder="Last name"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  onChange={handleFormChange}
                  required
                  placeholder="+971 5X XXX XXXX"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleFormChange}
                  required
                  placeholder="you@email.com"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="bookingDate" className="form-label">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="bookingDate"
                  id="bookingDate"
                  onChange={handleFormChange}
                  required
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="time" className="form-label">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  onChange={handleFormChange}
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                Service address
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <input
                    type="text"
                    name="address.addressLine1"
                    id="addressLine1"
                    onChange={handleFormChange}
                    required
                    placeholder="Address Line 1"
                    className="form-input"
                  />
                </div>
                <div className="md:col-span-2">
                  <input
                    type="text"
                    name="address.addressLine2"
                    id="addressLine2"
                    onChange={handleFormChange}
                    placeholder="Address Line 2 (optional)"
                    className="form-input"
                  />
                </div>
                <input
                  type="text"
                  name="address.buildingNumber"
                  onChange={handleFormChange}
                  required
                  placeholder="Building / Villa No."
                  className="form-input"
                />
                <input
                  type="text"
                  name="address.city"
                  onChange={handleFormChange}
                  required
                  placeholder="City / Area"
                  className="form-input"
                />
                <input
                  type="text"
                  name="address.state"
                  onChange={handleFormChange}
                  required
                  placeholder="Emirate"
                  className="form-input"
                />
                <input
                  type="text"
                  name="address.landmark"
                  onChange={handleFormChange}
                  required
                  placeholder="Landmark"
                  className="form-input"
                />
                <input
                  type="text"
                  name="address.pinCode"
                  onChange={handleFormChange}
                  required
                  placeholder="PIN / Postal Code"
                  className="form-input"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="relative w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-primary text-white rounded-xl overflow-hidden group font-semibold disabled:opacity-60"
            >
              <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
                {submitting ? "Submitting..." : "Confirm Booking"}
                {!submitting && <FaArrowRightLong />}
              </span>
              <div className="absolute inset-0 bg-secondary -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
};

export default Booking;
