import React from "react";

const TermsAndConditions = () => {
  return (
    <>
      <div>
        <div className="min-h-screen max-w-7xl mx-auto bg-[#F0F2F4] font-marcellus font-medium">
          <div className="container mx-auto">
            <div className="grid grid-cols-1">
              <div className="xl:px-32 px-2 py-5 font-poppins">
                <h1 className=" text-2xl text-black">Terms and Conditions</h1>
                <div className="text-start mt-5 bg-[#FFFFFF] p-4 md:p-10">
                  <div>
                    <h1 className="md:text-lg text-black lg:leading-8">
                      1. Introduction
                    </h1>
                    <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                      Welcome to SAMEDAY Cleaning Services. By using our
                      services, you agree to comply with and be bound by these
                      Terms and Conditions.
                    </p>
                  </div>
                  <div>
                    <h1 className="md:text-lg text-black lg:leading-8 mt-2">
                      2. Booking and Cancellation
                    </h1>
                    <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                      - All bookings must be made in advance through our
                      platform or customer service. - Cancellations or
                      rescheduling requests must be made at least 24 hours
                      before the scheduled service. - Late cancellations may be
                      subject to a cancellation fee.
                    </p>
                  </div>
                  <div>
                    <h1 className="md:text-lg text-black lg:leading-8 mt-2">
                      3. Pricing and Payments
                    </h1>
                    <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                      - Pricing is displayed on our website and is subject to
                      change without prior notice. - Payments must be made in
                      full before or at the time of service unless otherwise
                      agreed. - We accept [list payment methods].
                    </p>
                  </div>
                  <div>
                    <h1 className="md:text-lg text-black lg:leading-8 mt-2">
                      4. Customer Responsibilities
                    </h1>
                    <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                      - Customers must provide a safe working environment for
                      our cleaners. - All valuable and fragile items should be
                      secured before service. - Any issues must be reported
                      within 24 hours of service completion.
                    </p>
                  </div>
                  <div>
                    <h1 className="md:text-lg text-black lg:leading-8 mt-2">
                      5. Liability and Damages
                    </h1>
                    <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                      - We are not responsible for pre-existing damage or wear
                      and tear of property. - Any claims of damages must be
                      reported within 24 hours of service. - Our liability is
                      limited to the cost of the service provided.
                    </p>
                  </div>
                  <div>
                    <h1 className="md:text-lg text-black lg:leading-8 mt-2">
                      6. Termination of Services
                    </h1>
                    <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                      - We reserve the right to refuse or terminate services if
                      our staff is treated disrespectfully or if conditions are
                      unsafe. - Customers will be notified if service
                      termination is necessary.
                    </p>
                  </div>
                  <div>
                    <h1 className="md:text-lg text-black lg:leading-8 mt-2">
                      7. Amendments
                    </h1>
                    <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                      - We may update these Terms and Conditions from time to
                      time. It is your responsibility to review them
                      periodically.
                    </p>
                  </div>
                  <div>
                    <h1 className="md:text-lg text-black lg:leading-8 mt-2">
                      8. Contact Information
                    </h1>
                    <p className="text-sm font-medium text-gray-700 mt-2 lg:leading-8">
                      - Email:{" "}
                      <a
                        href="mailto:info@cleansameday.com"
                        className="text-blue-600 underline"
                      >
                        info@cleansameday.com
                      </a>
                      <br />- Phone:{" "}
                      <a
                        href="tel:+971549936911"
                        className="text-blue-600 underline"
                      >
                        +971549936911
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
