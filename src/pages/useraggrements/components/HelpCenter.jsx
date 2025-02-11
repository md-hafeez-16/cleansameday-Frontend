import React from "react";

const HelpCenter = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-[#F0F2F4] font-marcellus font-medium">
      <div className="container mx-auto">
        <div className="grid grid-cols-1">
          <div className="xl:px-32 px-2 py-5 font-poppins">
            <h1 className="text-2xl text-black">Help Center</h1>
            <div className="text-start mt-5 bg-[#FFFFFF] p-4 md:p-10">
              <div>
                <h2 className="md:text-lg text-black lg:leading-8">
                  1. General Inquiries
                </h2>
                <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                  If you have any questions about our cleaning services,
                  pricing, or scheduling, feel free to contact us via email or
                  phone. Our support team is happy to assist you.
                </p>
              </div>

              <div>
                <h2 className="md:text-lg text-black lg:leading-8 mt-4">
                  2. Booking and Scheduling
                </h2>
                <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                  You can book a cleaning service through our website or by
                  contacting us directly. Please note that all bookings are
                  subject to availability.
                </p>
              </div>

              <div>
                <h2 className="md:text-lg text-black lg:leading-8 mt-4">
                  3. Payment & Billing
                </h2>
                <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                  We accept multiple payment methods, including credit cards,
                  bank transfers, and cash payments. For invoices and
                  billing-related inquiries, please reach out to our support
                  team.
                </p>
              </div>

              <div>
                <h2 className="md:text-lg text-black lg:leading-8 mt-4">
                  4. Service Cancellation & Refund Policy
                </h2>
                <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                  You may cancel or reschedule your appointment up to 24 hours
                  in advance without any cancellation fee. Late cancellations
                  may incur charges. Refunds are processed based on our
                  company’s refund policy.
                </p>
              </div>

              <div>
                <h2 className="md:text-lg text-black lg:leading-8 mt-4">
                  5. Cleaning Service Guarantee
                </h2>
                <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                  We strive for 100% customer satisfaction. If you are not
                  satisfied with our service, please contact us within 24 hours,
                  and we will arrange a re-cleaning or offer a suitable
                  resolution.
                </p>
              </div>

              <div>
                <h2 className="md:text-lg text-black lg:leading-8 mt-4">
                  6. Safety & Hygiene
                </h2>
                <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                  Our cleaners follow strict hygiene protocols, including
                  wearing gloves and masks when required. We use eco-friendly
                  and safe cleaning products to ensure the safety of your home
                  and family.
                </p>
              </div>

              <div>
                <h2 className="md:text-lg text-black lg:leading-8 mt-4">
                  7. Contact Support
                </h2>
                <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                  If you need further assistance, please contact our support
                  team:
                </p>
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
    </div>
  );
};

export default HelpCenter;
