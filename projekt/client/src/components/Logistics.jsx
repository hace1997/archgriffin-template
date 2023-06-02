import Courier from "../assets/courier.png";
import Naval from "../assets/naval.png";
import Plane from "../assets/plane.png";
import Train from "../assets/train.png";
import Truck from "../assets/truck.png";
import React from "react";

function Logistics() {
  return (
    <div
      name="logistics"
      className="w-full h-full bg-[#0a192f] text-gray-300 pt-16"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-600">
            Logistics
          </p>
          <p className="py-4">
            Connect the world with client-based logistics services
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Truck} alt="truck icon" className="mx-auto my-6" />
            <p className="my-4">Truck</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Naval} alt="naval icon" className="mx-auto" />
            <p className="my-4">Naval</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Plane} alt="plane icon" className="mx-auto" />
            <p className="my-4">Plane</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Train} alt="train icon" className="mx-auto" />
            <p className="my-4">Train</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Courier} alt="courier icon" className="mx-auto" />
            <p className="my-4">Courier</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logistics;
