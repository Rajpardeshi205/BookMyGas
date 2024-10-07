import React, { useContext } from "react";
import Layout from "./Layout";
import { Button, Input } from "@material-tailwind/react";
import myContext from "../context/myContext";

const Booking = () => {
  // Accessing the context values including formData and handleChange/handleSubmit
  const { formData, handleChange, handleSubmit } = useContext(myContext);

  return (
    <Layout>
      <section className="bg-cover bg-gradient-to-b from-white via-gray-300 to-red-700 min-h-screen w-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl mb-8">Gas Booking</h1>
        <div className="flex flex-col items-center z-10 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="w-96">
              <Input
                type="text"
                color="black"
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-96">
              <Input
                type="tel"
                color="black"
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="w-96">
              <Input
                type="email"
                color="black"
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-96">
              <Input
                type="text"
                color="black"
                label="Your Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="w-96">
              <Input
                type="text"
                color="black"
                label="Gas ID"
                name="gasid"
                value={formData.gasid}
                onChange={handleChange}
              />
            </div>
            <div>
              <Button type="submit" className="bg-red-800 w-96">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
