import React from "react";

// Assets
import close from "../assets/Close.jpg";
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
import Fgrape from "../assets/FruitGrape.png";
import Sunset from "../assets/SunsetPritzBeach.png";
import Cans from "../assets/Cans.png";

// Main data
const products = [
  {
    frontImg: close,
    hoverImg: iced,
    name: "THC Apéro Spritz",
    price: "$35.00+",
  },
  {
    frontImg: Oldf,
    hoverImg: OLDF,
    name: "THC Ol' Fashioned",
    price: "$35.00+",
  },
  { frontImg: marga, hoverImg: MARGA, name: "THC Margarita", price: "$35.00+" },
  { frontImg: NewC, hoverImg: Cans2, name: "THC PARTY PACK", price: "$95.00+" },
  {
    frontImg: water,
    hoverImg: Water,
    name: "THC Sunset Spritz - Watermelon Mint",
    price: "$35.00+",
  },
  {
    frontImg: MangoG,
    hoverImg: Gmango,
    name: "THC Sunset Spritz - Mango Guava",
    price: "$35.00+",
  },
  {
    frontImg: Glime,
    hoverImg: Fgrape,
    name: "THC Sunset Spritz - Grapefruit Lime",
    price: "$35.00+",
  },
  {
    frontImg: Sunset,
    hoverImg: Cans,
    name: "THC SUNSET SPRITZ - PARTY PACK",
    price: "$95.00+",
  },
];

// Reusable product card
// Reusable product card
const ProductCard = ({ frontImg, hoverImg, name, price }) => (
  <div className="relative text-center border-yellow-700 border rounded-xl p-3 sm:p-4 md:p-5 grid gap-y-4 w-full max-w-[300px]">
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
      <img
        src={frontImg}
        alt={name}
        className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black rounded-xl opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 flex items-center justify-center">
        <img
          src={hoverImg}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
    <div className="grid gap-y-1">
      <p className="font-semibold text-stone-200 text-sm sm:text-base md:text-lg">
        {name}
      </p>
      <p className="font-Oswald text-stone-200 text-xs sm:text-sm md:text-base">
        {price}
      </p>
    </div>
  </div>
);

const Zero = () => {
  return (
    <div className="w-full bg-black p-4 sm:p-6 lg:p-20">
      <div className="text-center mb-6 sm:mb-10 lg:mb-20">
        <p className="text-2xl sm:text-3xl lg:text-5xl font-medium text-stone-200">
          ZERO-PROOF THC COCKTAILS
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center">
        {products.map((item, idx) => (
          <ProductCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Zero;
