import React from "react";
import { SlEnvolope } from "react-icons/sl";
import { IoCall } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#5e0055", color: "white" }}>
      <div className="flex flex-col lg:flex-row justify-between items-start p-10">
        <aside className="lg:w-1/2 text-justify mb-8 lg:mb-0">
          <h2 className="text-center text-2xl mb-6">BookMyGas</h2>
          <p>
            Book My Gas is a premier gas cylinder booking service in India,
            combining reliability, convenience, and a seamless user experience.
            We specialize in providing hassle-free gas delivery solutions for
            both households and businesses, ensuring timely deliveries and
            consistent service standards. Whether it's a small household
            requirement or large-scale corporate demand, Book My Gas is your
            trusted partner for efficient gas cylinder booking and delivery.
          </p>
        </aside>

        <aside className="lg:w-1/2 text-right ">
          <h2 className="text-2xl mb-6">Contact Us</h2>
          <address className="leading-relaxed">
            TPS Road, <br />
            Shivaji Nagar, <br />
            Parli Vaijnath, Maharashtra 431515 <br />
            <div className="flex flex-col items-end space-y-2">
              <a
                href="mailto:contactus@quickcater.in"
                className="flex items-center  mt-2 space-x-2"
              >
                <SlEnvolope />
                <span>contactus@bookmygas.in</span>
              </a>
              <a
                href="tel:+9198xxxxxx92"
                className="flex items-center space-x-2"
              >
                <IoCall />
                <span>+91 98xxxxxx92</span>
              </a>
            </div>
          </address>
        </aside>
      </div>
      <div
        style={{ backgroundColor: "#18005f", color: "white" }}
        className="flex justify-center items-center space-x-2 h-14"
      >
        <FaRegCopyright />
        <span>
          Copyright 2024. All rights reserved. Website Developed and Maintained
          by PlayerX
        </span>
      </div>
    </footer>
  );
};

export default Footer;
