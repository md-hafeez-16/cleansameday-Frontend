import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-[#F0F2F4] font-marcellus font-medium">
      <div className="container mx-auto">
        <div className="grid grid-cols-1">
          <div className="xl:px-32 px-2 py-5 font-poppins">
            <h1 className="text-2xl text-black">Privacy Policy</h1>
            <div className="text-start mt-5 bg-[#FFFFFF] p-4 md:p-10">
              <h1 className="md:text-lg text-black lg:leading-8">
                Information We Collect
              </h1>
              <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                We collect personal information such as your name, phone number,
                email, and address when you book a cleaning service. This
                information is used to schedule services and communicate with
                you.
              </p>

              <h1 className="md:text-lg text-black lg:leading-8 mt-2">
                Payment Information
              </h1>
              <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                We do not store credit card details. All payments are securely
                processed through third-party payment gateways.
              </p>

              <h1 className="md:text-lg text-black lg:leading-8 mt-2">
                Cookies & Tracking Technologies
              </h1>
              <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                Our website uses cookies to improve your experience. You can
                manage cookie preferences through your browser settings.
              </p>

              <h1 className="md:text-lg text-black lg:leading-8 mt-2">
                How We Use Your Information
              </h1>
              <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                We use your data to schedule and provide cleaning services, send
                notifications, and improve our platform.
              </p>

              <h1 className="md:text-lg text-black lg:leading-8 mt-2">
                Data Security
              </h1>
              <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                We implement security measures to protect your personal data.
                However, no online transaction is 100% secure.
              </p>

              <h1 className="md:text-lg text-black lg:leading-8 mt-2">
                Third-Party Sharing
              </h1>
              <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                We do not sell or rent your personal data. Information may be
                shared with service providers who assist us in delivering our
                services.
              </p>

              <h1 className="md:text-lg text-black lg:leading-8 mt-2">
                Your Rights
              </h1>
              <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                You have the right to access, update, or delete your personal
                information. Contact us at info@yourcleaningservice.com for any
                requests.
              </p>

              <h1 className="md:text-lg text-black lg:leading-8 mt-2">
                Updates to This Policy
              </h1>
              <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                We may update this Privacy Policy periodically. Please check
                this page for any changes.
              </p>

              <h1 className="md:text-lg text-black lg:leading-8 mt-2">
                Contact Us
              </h1>
              <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                Email:{" "}
                <a
                  href="mailto:info@yourcleaningservice.com"
                  className="text-blue-600 underline"
                >
                  info@yourcleaningservice.com
                </a>
              </p>
              <p className="text-sm font-medium text-gray-700 mt-1 lg:leading-8">
                Phone:{" "}
                <a href="tel:+1234567890" className="text-blue-600 underline">
                  +1234567890
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
