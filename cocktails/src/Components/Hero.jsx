import React from "react";
import SunsetPritz from "../assets/SunsetPritzW.jpg";

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={SunsetPritz}
          alt="Sunset Spritz"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text Content */}
      <div className="relative text-center text-stone-200 font-Oswald z-10 p-5">
        <p className="text-4xl md:text-6xl lg:text-7xl font-semibold ">
          NEW! THC SUNSET SPRITZ
        </p>
        <p className="text-xl md:text-2xl lg:text-3xl font-medium mt-4 ">
          ZERO PROOF COCKTAIL
        </p>
        <div className="flex justify-center items-center mt-6">
          <button className="bg-[#cd9e53] text-black w-40 h-12 rounded-md text-center hover:bg-[#e0af70] transition duration-300">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
