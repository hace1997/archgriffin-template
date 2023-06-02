import React from "react";
import Brokerage from "../assets/brokerage.png";
import Worldwide from "../assets/worldwide.png";
import Flexibility from "../assets/flexibility.png";

function Services() {
  return (
    <div
      name="services"
      className="w-full h-full bg-[#0a192f] text-gray-300 pt-20"
    >
      <div className="flex flex-col justify-center w-full h-full items-center">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-600">
              Services
            </p>
          </div>
          <div></div>
        </div>
        {/* brokerage */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" hover:scale-110 duration-500">
            <img
              src={Brokerage}
              alt="brokerage icon"
              className="mx-auto my-6"
            />
          </div>

          <div className="sm:text-left text-2xl font-bold">
            <p className="pt-6">
              We ensure that your goods can be properly screened through any
              customs around the world.
            </p>
          </div>
        </div>
        {/* worldwide */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" hover:scale-110 duration-500">
            <img
              src={Worldwide}
              alt="worldwide icon"
              className="mx-auto my-6"
            />
          </div>

          <div className="sm:text-left text-2xl font-bold">
            <p className="pt-8">
              Anywhere, anytime. We are able to transport your goods anywhere in
              the world.
            </p>
          </div>
        </div>
        {/* flexibility */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" hover:scale-110 duration-500">
            <img
              src={Flexibility}
              alt="flexibility icon"
              className="mx-auto my-6 pl-8 pt-5"
            />
          </div>

          <div className="sm:text-left text-2xl font-bold">
            <p className="pt-2">
              We are flexible with our deliveries. You can pick and choose a
              time to have them delivered, or we can keep them in our warehouses
              and allow you to pick them up yourself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
