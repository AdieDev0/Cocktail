import React from "react";
import close from "../assets/close.jpg";
import iced from "../assets/IcedCan.png";
import OLDF from "../assets/OLDF.png";
import Oldf from "../assets/OldFashion.jpg";
import marga from "../assets/MargaritaClose.png";
import MARGA from "../assets/MARGA.png";
import NewC from "../assets/NewCans.png";
import Cans2 from "../assets/Cans2.png";
import water from "../assets/waterMelonMint.png";
import Water from "../assets/WaterMint.png";
import MangoG from "../assets/MangoGuava.png";
import Gmango from "../assets/GuavaMango.png";
import Glime from "../assets/GrapefruitLime.png";
import Fgrape from "../assets/FruitGRape.png";
import Sunset from "../assets/SunsetPritzBeach.png";
import Cans from "../assets/Cans.png";

const Zero = () => {
  return (
    <div className="w-full lg:p-10 p-5 bg-black">
      <div className="text-center mb-10 lg:mb-20">
        <p className="lg:text-5xl text-2xl font-medium text-stone-200">
          ZERO-PROOF THC COCKTAILS
        </p>
      </div>

      {/* Cards */}

      <div className="flex flex-col md:flex-row lg:flex-row gap-10 lg:mb-10 mb-0">
        {/* 1 */}
        <div className="flex gap-5 lg:gap-10">
          <div className="relative text-center items-center h-[320px] lg:h-[480px] border-yellow-700 border lg:rounded-xl md:rounded-xl rounded-lg lg:p-5 p-2 w-fit grid gap-y-4">
            <div className="relative">
              <img
                src={close}
                alt="close"
                className="rounded-xl lg:w-[280px] lg:h-[350px] transition-opacity duration-300 ease-in-out object-cover"
              />
              <div className="absolute top-0 left-0 lg:w-[280px] h-full bg-black rounded-xl opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 flex items-center justify-center">
                <img src={iced} alt="iced" className="rounded-xl w-[280px]" />
              </div>
            </div>
            <div className="grid gap-y-3">
              <p className="font-semibold text-stone-200">THC Apéro Spritz</p>
              <p className="font-Oswald text-stone-200">$35.00+ </p>
            </div>
          </div>
          {/* 2 */}
          <div className="relative text-center items-center h-[320px] lg:h-[480px] border-yellow-700 border lg:rounded-xl md:rounded-xl rounded-lg lg:p-5 p-2 w-fit grid gap-y-4">
            <div className="relative">
              <img
                src={Oldf}
                alt="close"
                className="rounded-xl lg:w-[280px] lg:h-[350px]  transition-opacity duration-300 ease-in-out object-cover"
              />
              <div className="absolute top-0 left-0 lg:w-[280px] h-full bg-black rounded-xl opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 flex items-center justify-center">
                <img src={OLDF} alt="iced" className="rounded-xl w-[280px]" />
              </div>
            </div>
            <div className="grid gap-y-3">
              <p className="font-semibold text-stone-200">THC Ol' Fashioned</p>
              <p className="font-Oswald text-stone-200">$35.00+ </p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex gap-5 lg:gap-10">
          <div className="relative text-center items-center h-[320px] lg:h-[480px] border-yellow-700 border lg:rounded-xl md:rounded-xl rounded-lg lg:p-5 p-2 w-fit grid gap-y-4">
            <div className="relative">
              <img
                src={marga}
                alt="close"
                className="rounded-xl lg:w-[280px] lg:h-[350px] transition-opacity duration-300 ease-in-out object-cover"
              />
              <div className="absolute top-0 left-0 lg:w-[280px] h-full bg-black rounded-xl opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 flex items-center justify-center">
                <img src={MARGA} alt="iced" className="rounded-xl w-[280px]" />
              </div>
            </div>
            <div className="grid gap-y-3">
              <p className="font-semibold text-stone-200">THC Margarita</p>
              <p className="font-Oswald text-stone-200">$35.00+ </p>
            </div>
          </div>
          {/* 4 */}
          <div className="relative text-center items-center h-[320px] lg:h-[480px] border-yellow-700 border lg:rounded-xl md:rounded-xl rounded-lg lg:p-5 p-2 w-fit grid gap-y-4">
            <div className="relative">
              <img
                src={NewC}
                alt="close"
                className="rounded-xl lg:w-[280px] lg:h-[350px] transition-opacity duration-300 ease-in-out object-cover"
              />
              <div className="absolute top-0 left-0 lg:w-[280px] h-full bg-black rounded-xl opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 flex items-center justify-center">
                <img src={Cans2} alt="iced" className="rounded-xl w-[280px]" />
              </div>
            </div>
            <div className="grid gap-y-3">
              <p className="font-semibold text-stone-200">THC PARTY PACK</p>
              <p className="font-Oswald text-stone-200">$95.00+ </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-10 mt-10">
        <div className="flex gap-5 lg:gap-10">
          {/* 5 */}
          <div className="relative text-center items-center h-[320px] lg:h-[480px] border-yellow-700 border lg:rounded-xl md:rounded-xl rounded-lg lg:p-5 p-2 w-fit grid gap-y-4">
            <div className="relative">
              <img
                src={water}
                alt="close"
                className="rounded-xl lg:w-[280px] lg:h-[350px] transition-opacity duration-300 ease-in-out object-cover"
              />
              <div className="absolute top-0 left-0 lg:w-[280px] h-full bg-black rounded-xl opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 flex items-center justify-center">
                <img src={Water} alt="iced" className="rounded-xl w-[280px]" />
              </div>
            </div>
            <div className="grid gap-y-3">
              <p className="font-semibold text-stone-200">
                THC Sunset Spritz - Watermelon Mint
              </p>
              <p className="font-Oswald text-stone-200">$35.00+</p>
            </div>
          </div>
          {/* 6 */}
          <div className="relative text-center items-center h-[320px] lg:h-[480px] border-yellow-700 border lg:rounded-xl md:rounded-xl rounded-lg lg:p-5 p-2 w-fit grid gap-y-4">
            <div className="relative">
              <img
                src={MangoG}
                alt="close"
                className="rounded-xl lg:w-[280px] lg:h-[350px] transition-opacity duration-300 ease-in-out object-cover"
              />
              <div className="absolute top-0 left-0 lg:w-[280px] h-full bg-black rounded-xl opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 flex items-center justify-center">
                <img src={Gmango} alt="iced" className="rounded-xl w-[280px]" />
              </div>
            </div>
            <div className="grid gap-y-3">
              <p className="font-semibold text-stone-200">
                THC Sunset Spritz - Mango Guava
              </p>
              <p className="font-Oswald text-stone-200">$35.00+ </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 lg:gap-10">
          {/* 7 */}
          <div className="relative text-center items-center h-[320px] lg:h-[480px] border-yellow-700 border lg:rounded-xl md:rounded-xl rounded-lg lg:p-5 p-2 w-fit grid gap-y-4">
            <div className="relative">
              <img
                src={Glime}
                alt="close"
                className="rounded-xl lg:w-[280px] lg:h-[350px] transition-opacity duration-300 ease-in-out object-cover"
              />
              <div className="absolute top-0 left-0 lg:w-[280px] h-full bg-black rounded-xl opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 flex items-center justify-center">
                <img src={Fgrape} alt="iced" className="rounded-xl w-[280px]" />
              </div>
            </div>
            <div className="grid gap-y-3">
              <p className="font-semibold text-stone-200">
                THC Sunset Spritz - Grapefruit Lime
              </p>
              <p className="font-Oswald text-stone-200">$35.00+ </p>
            </div>
          </div>
          {/* 8 */}
          <div className="relative text-center items-center h-[320px] lg:h-[480px] border-yellow-700 border lg:rounded-xl md:rounded-xl rounded-lg lg:p-5 p-2 w-fit grid gap-y-4">
            <div className="relative">
              <img
                src={Sunset}
                alt="close"
                className="rounded-xl lg:w-[280px] lg:h-[350px] transition-opacity duration-300 ease-in-out object-cover"
              />
              <div className="absolute top-0 left-0 lg:w-[280px] h-full bg-black rounded-xl opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 flex items-center justify-center">
                <img src={Cans} alt="iced" className="rounded-xl w-[280px]" />
              </div>
            </div>
            <div className="grid gap-y-3">
              <p className="font-semibold text-stone-200">
                THC SUNSET SPRITZ - PARTY PACK
              </p>
              <p className="font-Oswald text-stone-200">$95.00+ </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-10"></div>
    </div>
  );
};

export default Zero;
