import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/components/Home";
import Footer from "./components/Footer";
import Service from "./pages/services/components/Service";
import ContactUs from "./pages/contactus/components/ContactUs";
import PrivacyPolicy from "./pages/useraggrements/components/PrivacyPolicy";
import TermsAndCondition from "./pages/useraggrements/components/TermsAndCondition";
import AboutUs from "./pages/aboutus/components/AboutUs";
import Gallery from "./pages/gallery/Gallery";
import Booking from "./pages/bookings/Booking";
import HelpCenter from "./pages/useraggrements/components/HelpCenter";
import { Toaster } from "react-hot-toast";
import NavBookings from "./pages/NavBookngs";
import DeepCleaning from "./pages/services/components/DeepCleaning";
import ServiceDetails from "./pages/servicedetails/components/ServiceDetails";

function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Header />
      <NavBar />

      <Routes>
        {/* ===== MAIN PAGES ===== */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />

        {/* ===== DEEP CLEANING MAIN ===== */}
        <Route
          path="/deep-cleaning-services-in-dubai"
          element={<DeepCleaning />}
        />

        {/* ===== SERVICES LISTING ===== */}
        <Route path="/service" element={<Service />} />

      <Route path="/:serviceSlug" element={<ServiceDetails />} />

        {/* ===== OTHER PAGES ===== */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/navbooking" element={<NavBookings />} />
        <Route path="/bookings/:id" element={<Booking />} />

        {/* ===== USER AGREEMENTS ===== */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndCondition />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
