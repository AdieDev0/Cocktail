import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Foot = () => {
  return (
    <div className="p-10 flex flex-col lg:flex-row justify-between bg-black text-stone-200">
      <div className="flex lg:gap-28 gap-20 lg:mb-0 mb-10">
        <div className="font-Oswald grid gap-y-3">
          <p className="hover:text-yellow-600 duration-200 cursor-pointer">
            Privacy Policy
          </p>
          <p className="hover:text-yellow-600 duration-200 cursor-pointer">
            Shipping & Returns
          </p>
          <p className="hover:text-yellow-600 duration-200 cursor-pointer">
            FDA Disclaimer
          </p>
          <p className="hover:text-yellow-600 duration-200 cursor-pointer">
            Terms & Conditions
          </p>
          <p className="hover:text-yellow-600 duration-200 cursor-pointer">
            COA
          </p>
        </div>
        <div className="font-Oswald">
          <p className="hover:text-yellow-600 duration-200 cursor-pointer">
            SHOP ALL
          </p>
          <p className="mt-2 hover:text-yellow-600 duration-200 cursor-pointer">
            FAQ
          </p>
          <p className="mt-2 hover:text-yellow-600 duration-200 cursor-pointer">
            CONTACT
          </p>
        </div>
      </div>

      <div>
        <p className="lg:text-4xl text-2xl mb-5 lg:mb-0 font-semibold">
          STAY AWHILE & SAVE
        </p>
        <div className="items-center flex-row">
          <input
            type="/"
            placeholder="email@example.com"
            className="placeholder-stone-200/40 font-Oswald border border-stone-200 h-12 lg:w-80 w-full rounded-lg p-2 lg:mr-2 mr-0 bg-black"
          />
          <button className="bg-[#cd9e53] lg:mt-10  mt-4 text-black w-full lg:w-32 h-12 rounded-md text-center hover:bg-[#e0af70] transition duration-300 font-Oswald mb-10 lg:mb-0">
            SUBSCRIBE
          </button>
        </div>
      </div>
      <div>
        <p className="lg:text-xl text-md font-Oswald mb-3">
          Cloned By @_adie.00
        </p>
        <div className="flex gap-3 ">
          <a href="https://github.com/AdieDev0">
            <IoLogoGithub className="lg:size-6 size-5 cursor-pointer hover:text-gray-400 duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/adrian-barrios-3946b7285/">
          <FaLinkedin className="lg:size-6 size-5 cursor-pointer hover:text-blue-400 duration-200" />
          </a>

          <a href="https://www.instagram.com/_adie.00/">
          <FaInstagram className="lg:size-6 size-5 cursor-pointer hover:text-orange-500 duration-200" />

          </a>
          <a href="https://www.facebook.com/adrey.barrios">
            <FaSquareFacebook className="lg:size-6 size-5 cursor-pointer hover:text-blue-500 duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Foot;
