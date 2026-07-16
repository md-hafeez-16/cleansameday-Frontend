import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  FaCalendarCheck,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaShieldAlt,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import SeoHead from "../components/SeoHead";
import PageHero from "../components/layout/PageHero";
import PageShell from "../components/layout/PageShell";
import SectionHeading from "../components/layout/SectionHeading";
import { BASE_URL } from "../constants";
import heroImage from "../assets_optimized/images/servicebg.webp";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
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
};

const NavBookings = () => {
  const [services, setServices] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchServices = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/service/getAllServicesNoPage`);
        setServices(res.data?.services || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
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
    <>
      <SeoHead
        url="/navbooking"
        canonicalPath="/navbooking"
        defaults={{
          title: "Book a Cleaning Service | Clean Same Day",
          description:
            "Schedule professional cleaning in Dubai. Same-day booking available for homes and offices.",
          keywords: [],
        }}
      />

      <PageShell>
        <PageHero
          title="Book a Cleaning Service"
          breadcrumb={{ label: "Booking" }}
          image={heroImage}
        />

        <section className="section-padding pt-8 md:pt-10">
          <SectionHeading
            eyebrow="Easy Scheduling"
            title="Reserve Your Cleaning Appointment"
            subtitle="Fill in your details below and our team will confirm your booking."
          />

          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 items-start">
            {/* Info panel */}
            <aside className="lg:col-span-2 space-y-6">
              <div className="content-card bg-primary text-white border-0">
                <h3 className="text-xl font-semibold mb-4">
                  Why book with Clean Same Day?
                </h3>
                <ul className="space-y-4 text-sm text-white/90">
                  <li className="flex gap-3">
                    <FaShieldAlt className="text-secondary shrink-0 mt-0.5" />
                    Trained, vetted cleaning professionals
                  </li>
                  <li className="flex gap-3">
                    <FaCalendarCheck className="text-secondary shrink-0 mt-0.5" />
                    Flexible same-day and scheduled bookings
                  </li>
                  <li className="flex gap-3">
                    <FaClock className="text-secondary shrink-0 mt-0.5" />
                    On-time service across Dubai
                  </li>
                  <li className="flex gap-3">
                    <FaMapMarkerAlt className="text-secondary shrink-0 mt-0.5" />
                    Homes, offices, and commercial spaces
                  </li>
                </ul>
              </div>

              <div className="content-card bg-white">
                <p className="text-sm text-gray-500 mb-1">Need help booking?</p>
                <a
                  href="tel:+971549936911"
                  className="flex items-center gap-2 text-primary font-semibold text-lg hover:text-secondary transition-colors"
                >
                  <FaPhone className="text-secondary" />
                  +971 549 936911
                </a>
                <a
                  href="mailto:info@cleansameday.com"
                  className="block mt-2 text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  info@cleansameday.com
                </a>
              </div>
            </aside>

            {/* Booking form */}
            <div className="lg:col-span-3 content-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                    Your details
                  </h3>
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
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                    Service & schedule
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="service" className="form-label">
                        Select Service
                      </label>
                      <select
                        name="service"
                        id="service"
                        onChange={handleFormChange}
                        required
                        defaultValue=""
                        className="form-select"
                      >
                        <option value="" disabled>
                          Choose a cleaning service
                        </option>
                        {services.map((item) => (
                          <option key={item._id} value={item._id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
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
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4 pb-2 border-b border-gray-100">
                    Service address
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="addressLine1" className="form-label">
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        name="address.addressLine1"
                        id="addressLine1"
                        onChange={handleFormChange}
                        required
                        placeholder="Street address"
                        className="form-input"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="addressLine2" className="form-label">
                        Address Line 2 <span className="text-gray-400 font-normal">(optional)</span>
                      </label>
                      <input
                        type="text"
                        name="address.addressLine2"
                        id="addressLine2"
                        onChange={handleFormChange}
                        placeholder="Apartment, suite, etc."
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="buildingNumber" className="form-label">
                        Building / Villa No.
                      </label>
                      <input
                        type="text"
                        name="address.buildingNumber"
                        id="buildingNumber"
                        onChange={handleFormChange}
                        required
                        placeholder="Building number"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="form-label">
                        City / Area
                      </label>
                      <input
                        type="text"
                        name="address.city"
                        id="city"
                        onChange={handleFormChange}
                        required
                        placeholder="e.g. Dubai Marina"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="form-label">
                        Emirate
                      </label>
                      <input
                        type="text"
                        name="address.state"
                        id="state"
                        onChange={handleFormChange}
                        required
                        placeholder="Dubai"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="landmark" className="form-label">
                        Landmark
                      </label>
                      <input
                        type="text"
                        name="address.landmark"
                        id="landmark"
                        onChange={handleFormChange}
                        required
                        placeholder="Nearby landmark"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="pinCode" className="form-label">
                        PIN / Postal Code
                      </label>
                      <input
                        type="text"
                        name="address.pinCode"
                        id="pinCode"
                        onChange={handleFormChange}
                        required
                        placeholder="Postal code"
                        className="form-input"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="relative w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-primary text-white rounded-xl overflow-hidden group font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-black">
                    {submitting ? "Submitting..." : "Confirm Booking"}
                    {!submitting && <FaArrowRightLong />}
                  </span>
                  <div className="absolute inset-0 bg-secondary -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default NavBookings;
