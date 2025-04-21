import React from "react";
import obj from "../data";

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full mt-[3rem]">
      {/* Left Image Section */}
      <div className="md:w-1/2 w-full h-1/2 md:h-full">
        <img
          src={obj.gpImg1} // Replace with actual image path
          alt="Contact"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Content Section */}
      <div className="md:w-1/2 w-full bg-black text-white flex flex-col justify-center items-center p-10 space-y-10 text-center">
        <div>
          <h2 className="text-2xl font-bold mb-2">GET IN TOUCH</h2>
          <p className="text-lg">youremail@example.com</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-2">BUSINESS/ENQUIRIES</h2>
          <p className="text-lg">business@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
