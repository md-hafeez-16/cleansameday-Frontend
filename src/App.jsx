import { useState } from "react";
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
import ServiceDetails from "./pages/servicedetails/components/ServiceDetails";
import Booking from "./pages/bookings/Booking";
import HelpCenter from "./pages/useraggrements/components/HelpCenter";
import { Toaster } from "react-hot-toast";
import NavBookngs from "./pages/NavBookngs";
import NavBookings from "./pages/NavBookngs";
import DeepCleaning from "./pages/services/components/DeepCleaning";

function App() {
  return (
    <>
      <Router>
        <Toaster position="top-right" reverseOrder={false} />
        <Header />
        <NavBar />
        <div className="">
          <Routes>
            {/* <-------main pages routes -----> */}
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/service" element={<Service />} />
            <Route path="/deepservice" element={<DeepCleaning />} />
            <Route path="/servicedetails/:id" element={<ServiceDetails />} />

            <Route path="/bookings/:id" element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/navbooking" element={<NavBookings />} />

            {/* <-------main pages routes ----->  */}

            {/* <------- user agreement pages routes -----> */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndCondition />} />
            <Route path="/helpcenter" element={<HelpCenter />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
