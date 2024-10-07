import React from "react";
import Layout from "./Layout";

const Services = () => {
  return (
    <Layout>
      <section className="min-h-screen bg-gradient-to-b from-white via-gray-300 to-red-700 w-full flex flex-col items-center justify-center text-center">
        <div
          style={{
            backgroundColor: "#a8dadc",
            color: "black",
            borderRadius: "45px",
            boxShadow: "20px 20px 15px 10px rgba(0,0,0,0.7)",
          }}
          className="h-auto w-11/12 md:w-3/4 lg:w-2/4 p-6"
        >
          <h2 className="text-4xl font-body mt-10">How We Works</h2>

          <div className="flex flex-col items-start mt-9">
            <div className="flex items-center w-full mb-6">
              <img
                src="https://cdn-icons-png.freepik.com/256/12625/12625478.png?uid=R166815985&ga=GA1.1.1082473057.1728056768&semt=ais_hybrid"
                className="mr-4 h-10"
                alt="Book Online"
              />
              <span className="text-base ml-28 md:text-lg">Book Online</span>
            </div>
            <div className="flex items-center w-full mb-6">
              <img
                src="https://cdn-icons-png.freepik.com/256/1988/1988232.png?uid=R166815985&ga=GA1.1.1082473057.1728056768&semt=ais_hybrid"
                className="mr-4 h-10"
                alt="Your Gas Cylinder Will Be On Its Way"
              />
              <span className="text-base ml-28 md:text-lg">
                Your Gas Cylinder Will Be On Its Way
              </span>
            </div>
            <div className="flex items-center w-full mb-6">
              <img
                src="https://cdn-icons-png.freepik.com/256/6384/6384742.png?uid=R166815985&ga=GA1.1.1082473057.1728056768&semt=ais_hybrid"
                className="mr-4 h-10"
                alt="Our Delivery Man Will Come Right To Your Doorstep"
              />
              <span className="text-base ml-28 md:text-lg">
                Our Delivery Man Will Come Right To Your Doorstep
              </span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
