import React from "react";
import SunsetPritz from "../assets/SunsetPritzW.jpg";
const Hero = () => {
  return (
    <div>
      <div className="absolute">
        <img src={SunsetPritz} alt="/" className="" />
      </div>
      <div className="relative text-center justify-center pt-5 mx-[400px] grid gap-y-7 text-stone-200 font-Oswald">
        <p className="text-7xl font-semibold">NEW! THC SUNSET SPRITZ</p>
        <p className="text-2xl font-medium">ZERO PROOF COCKTAIL</p>
        <div className="flex justify-center items-center">
          <button className="bg-[#cd9e53] text-black w-32 h-12 font-Oswald rounded-md text-center">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
