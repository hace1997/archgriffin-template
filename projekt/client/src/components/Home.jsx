import { HiArrowNarrowRight } from "react-icons/hi";
import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-red-600">You ask</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-red-500">
          We deliver
        </h2>
        <p className="text-gray-400 py-4 max-w-[700px] text-4xl">
          ArchGriffin aims to provide our clients hassle-free transport and
          one-stop service for their goods
        </p>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-red-600 hover:border-red-600">
            Contact Us
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
