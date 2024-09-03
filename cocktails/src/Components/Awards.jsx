import React from "react";
import Marquee from "react-fast-marquee";
import award1 from "../assets/award1.png";
import award2 from "../assets/award2.png";
import award3 from "../assets/award3.png";
import award4 from "../assets/award4.png";
import award5 from "../assets/award5.png";
import award6 from "../assets/award6.png";
import award7 from "../assets/award7.png";
import award8 from "../assets/award8.png";
import Fly from "../assets/Fly.png";
const Awards = () => {
  return (
    <div className="bg-black py-0 lg:pt-32 h-auto">
      <div>
        <Marquee pauseOnHover autoFill speed={20}>
          <img src={award1} alt="" className="w-[150px] lg:w-[270px] mx-5" />
          <img src={award2} alt="" className="w-[150px] lg:w-[270px] mx-5" />
          <img src={award3} alt="" className="w-[150px] lg:w-[270px] mx-5" />
          <img src={award4} alt="" className="w-[150px] lg:w-[270px] mx-5" />
          <img src={award5} alt="" className="w-[150px] lg:w-[270px] mx-5" />
          <img src={award6} alt="" className="w-[150px] lg:w-[270px] mx-5" />
          <img src={award7} alt="" className="w-[150px] lg:w-[270px] mx-5" />
          <img src={award8} alt="" className="w-[150px] lg:w-[270px] mx-5" />
        </Marquee>
      </div>
      <Marquee
        className="my-10 lg:my-20"
        direction="right"
        pauseOnHover
        autoFill
        speed={20}
      >
        <div className="mx-10 text-center w-80 lg:w-96 grid gap-y-5 text-stone-200 text-md lg:text-xl">
          <p className="text-yellow-500">★ ★ ★ ★ ★</p>
          <p>
            "The perfect fusion of premium ingredients and rich flavors for an
            elevated experience."
          </p>
          <p>Evelyn S.</p>
        </div>
        <div className="mx-10 text-center w-80 lg:w-96 grid gap-y-5 text-stone-200 text-md lg:text-xl">
          <p className="text-yellow-500">★ ★ ★ ★ ★</p>
          <p>
            "An ideal blend of high-quality elements and exquisite taste for a
            unique buzz."
          </p>
          <p>Ethan V.</p>
        </div>
        <div className="mx-10 text-center w-80 lg:w-96 grid gap-y-5 text-stone-200 text-md lg:text-xl">
          <p className="text-yellow-500">★ ★ ★ ★ ★</p>
          <p>
            "The ultimate combination of fine ingredients and exceptional flavor
            for a thrilling effect."
          </p>
          <p>Zara P.</p>
        </div>
        <div className="mx-10 text-center w-80 lg:w-96 grid gap-y-5 text-stone-200 text-md lg:text-xl">
          <p className="text-yellow-500">★ ★ ★ ★ ★</p>
          <p>
            "A flawless mix of top-shelf components and smooth flavors for a
            refreshing experience."
          </p>
          <p>Owen D.</p>
        </div>
        <div className="mx-10 text-center w-80 lg:w-96 grid gap-y-5 text-stone-200 text-md lg:text-xl">
          <p className="text-yellow-500">★ ★ ★ ★ ★</p>
          <p>
            "The perfect balance of potent elements and delightful taste for a
            captivating sensation."
          </p>
          <p>Nina M.</p>
        </div>
        <div className="mx-10 text-center w-80 lg:w-96 grid gap-y-5 text-stone-200 text-md lg:text-xl">
          <p className="text-yellow-500">★ ★ ★ ★ ★</p>
          <p>
            "An exceptional pairing of premium ingredients and flavorful notes
            for a memorable high"
          </p>
          <p>Aiden R.</p>
        </div>
        <div className="mx-10 text-center w-80 lg:w-96 grid gap-y-5 text-stone-200 text-md lg:text-xl">
          <p className="text-yellow-500">★ ★ ★ ★ ★</p>
          <p>
            "The supreme integration of quality components and enticing flavors
            for a dynamic effect."
          </p>
          <p>Sophie L.</p>
        </div>
        <div className="mx-10 text-center w-80 lg:w-96 grid gap-y-5 text-stone-200 text-md lg:text-xl">
          <p className="text-yellow-500">★ ★ ★ ★ ★</p>
          <p>
            "A superior blend of refined elements and rich taste for an
            invigorating experience."
          </p>
          <p>Lucas J.</p>
        </div>
        <div className="mx-10 text-center w-80 lg:w-96 grid gap-y-5 text-stone-200 text-md lg:text-xl">
          <p className="text-yellow-500">★ ★ ★ ★ ★</p>
          <p>
            "The optimal mix of potent ingredients and luscious flavors for a
            satisfying buzz."
          </p>
          <p>Maya K.</p>
        </div>
        <div className="mx-10 text-center w-80 lg:w-96 grid gap-y-5 text-stone-200 text-md lg:text-xl">
          <p className="text-yellow-500">★ ★ ★ ★ ★</p>
          <p>
            "A prime combination of high-grade components and delectable taste
            for a unique high."
          </p>
          <p>Liam T.</p>
        </div>
      </Marquee>

      {/* end */}

      <div className="lg:px-10 px-2 text-center lg:w-[700px] mx-auto mt-20">
        <p className="lg:text-6xl text-2xl text-[#cd9e53] font-semibold">SO, WHAT'LL IT BE?</p>
        <button className="bg-[#cd9e53] lg:mt-10 mt-5 text-black w-60 h-12 rounded-md text-center hover:bg-[#e0af70] transition duration-300 font-Oswald">
          TRY OUR ZERO-PROOF COCKTAILS
        </button>
        <img src={Fly} alt="/" className="mx-auto mt-10 lg:mt-16 size-24" />
      </div>
    </div>
  );
};

export default Awards;
