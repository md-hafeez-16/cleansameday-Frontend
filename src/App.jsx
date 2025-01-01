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

function App() {
  return (
    <>
      <Router>
        <Header />
        <NavBar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndCondition />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
