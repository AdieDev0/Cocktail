import React from "react";
import RTB from "../assets/RTB.png";
const Elevate = () => {
  return (
    <div className="p-3 lg:p-10 w-full bg-black flex items-center justify-center relative">
      <div className="lg:flex md:flex items-center ">
        <div>
          <img src={RTB} alt="/" className="w-[1200px] lg:my-0 my-10" />
        </div>
        <div className="text-center lg:px-10 px-5 text-stone-200">
          <p className="font-bold text-3xl md:text-4xl lg:text-5xl">ELEVATED NIGHTS, GLORY DAYS</p>
          <p className="lg:mt-4 mt-6 text-md text-stone-200">
            Mixologist-crafted, non-alc cocktails infused with 5mg of
            hemp-derived THC. Whether it’s a day at the beach or a night on the
            town - you’re in good company with Flyers.
          </p>
          <button className="bg-[#cd9e53] text-black w-32 h-12 font-Oswald rounded-md text-center lg:mt-6 mt-8">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Elevate;
