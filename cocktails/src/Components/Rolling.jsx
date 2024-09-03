import React from "react";
import Marquee from "react-fast-marquee";
import LogoB from "../assets/LogoBank.png";
import LogoB2 from "../assets/LogoBank2.png";
import Forbes from "../assets/Forbes.png";
import Roll from "../assets/Rolling.png";
import Total from "../assets/Total.png";
import Margarita from "../assets/MargaritaW.jpg";

const Rolling = () => {
  return (
    <div className="bg-black w-full h-screen lg:py-0 py-10">
      <Marquee pauseOnHover autoFill>
        <img src={LogoB} alt="/" className="w-[150px] lg:w-[200px] mx-5" />
        <img src={LogoB2} alt="/" className="w-[150px] lg:w-[200px] mx-5" />
        <img src={Forbes} alt="/" className="w-[150px] lg:w-[200px] mx-5" />
        <img src={Roll} alt="/" className="w-[150px] lg:w-[200px] mx-5" />
        <img src={Total} alt="/" className="w-[150px] lg:w-[200px] mx-5" />
      </Marquee>
      <div className="lg:px-[300px] px-5 py-16 text-center ">
        <p className="text-yellow-400 text-2xl italic">
          "Taste(s) like an alcohol-free version of your favorite cocktail-
          ...feel more comfortable and relaxed from head to toe. The best of
          both worlds. ”
        </p>
        <p className="text-yellow-400 text-2xl font-semibold">
          - ROLLING STONE
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:px-10 px-3 bg-black">
        <div className="lg:px-8 px-2 ">
          <p className="mb-10 lg:text-3xl text-xl font-semibold text-stone-200">
            THE FLOWERY CITRUS OF JAPANESE YUZU WITH THE SMOOTH SWEETNESS OF
            ORANGE AND A HINT OF CHILI HEAT
          </p>
          <button className="bg-[#cd9e53] text-black w-60 h-12 rounded-md text-center hover:bg-[#e0af70] transition duration-300 font-Oswald">
            The Spicy Marg' reimagined
          </button>
        </div>
        <img
          src={Margarita}
          alt=""
          className="rounded-xl w-[700px] lg:mt-0 mt-10"
        />
      </div>
    </div>
  );
};

export default Rolling;
