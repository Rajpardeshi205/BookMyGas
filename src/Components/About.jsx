import React from "react";
import Layout from "./Layout";

const About = () => {
  return (
    <Layout>
      <section className="h-screen w-full mt-8 flex items-start bg-gradient-to-b from-white via-gray-300 to-red-700 px-5">
        <div className="w-1/2 mt-44 flex justify-start">
          <img
            src="./Images/img1.jpeg"
            alt="Gas Cylinder Delivery"
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>

        <div className="text-justify max-w-xl tracking-tighter px-2 py-2 mr-6 ml-auto mt-6 w-1/2">
          <p className="pb-2 text-center text-lg md:text-xl">
            We don't just deliver gas; we deliver convenience.
          </p>

          <p className="pb-2 text-base md:text-lg">
            At Book My Gas, we specialize in providing a seamless, hassle-free
            experience for booking your gas cylinders online. Whether you're
            running a household or managing a business, our goal is to ensure
            that your gas cylinder is delivered to your doorstep, right when you
            need it.
          </p>

          <p className="pb-2 text-base md:text-lg">
            Book My Gas stands out for its commitment to reliable service and
            fast deliveries. We understand that life is busy, so we've made the
            booking process simple, efficient, and available 24/7. With just a
            few clicks, your gas cylinder will be on its way.
          </p>

          <p className="pb-2 text-base md:text-lg">
            Our platform offers an innovative approach to gas delivery, with
            features designed to make your life easier. Track your order in
            real-time, receive timely delivery updates, and enjoy flexible
            payment options to suit your needs. Our team is dedicated to
            providing a top-notch experience, ensuring your gas supply is
            consistent and your comfort uninterrupted.
          </p>

          <p className="pb-2 text-base md:text-lg">
            Over time, Book My Gas has earned a reputation as one of the most
            trusted gas cylinder booking services in India. Whether it’s a home
            delivery or large-scale supply for businesses, our customers
            continue to choose us for our prompt service, ease of use, and
            customer care.
          </p>

          <p className="text-center text-lg md:text-xl">
            Looking for the best gas cylinder booking service? Your search ends
            with Book My Gas.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
