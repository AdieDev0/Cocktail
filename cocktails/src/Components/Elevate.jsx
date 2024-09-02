import React from "react";
import RTB from "../assets/RTB.png";
const Elevate = () => {
  return (
    <div className="p-10 w-full bg-black flex items-center justify-center relative">
      <div className="flex items-center">
        <div>
          <img src={RTB} alt="/" className="w-[1200px]" />
        </div>
        <div className="text-center px-10 text-stone-200">
          <p className="font-bold text-5xl">ELEVATED NIGHTS, GLORY DAYS</p>
          <p className="mt-4 text-md text-stone-200">
            Mixologist-crafted, non-alc cocktails infused with 5mg of
            hemp-derived THC. Whether it’s a day at the beach or a night on the
            town - you’re in good company with Flyers.
          </p>
          <button className="bg-[#cd9e53] text-black w-32 h-12 font-Oswald rounded-md text-center mt-6">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Elevate;
