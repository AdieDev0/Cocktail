import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Marquee from "react-fast-marquee";
import { GoPerson } from "react-icons/go";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { TiSpiral } from "react-icons/ti";
import { IoIosClose } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

const Nav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [shopOpen, setshopOpen] = useState(false);

  const bumukaska = () => {
    setshopOpen(!shopOpen);
  };

  return (
    <div className="bg-black w-full">
      {/* Moving */}
      <div>
        <Marquee pauseOnHover autoFill>
          <TiSpiral className="size-4 mx-2 animate-spin text-center" />{" "}
          <p className="text-yellow-600 font-semibold">
            FREE SHIPPING on orders ₱1,799
          </p>
        </Marquee>
        {/* main nav */}
      </div>
      <div className="flex justify-between items-center lg:px-10 px-2 py-2">
        <div className="flex gap-5 text-stone-200">
          <CiMenuBurger
            className="size-6 lg:size-8 cursor-pointer"
            onClick={toggleSidebar}
          />
          <IoSearchOutline className="size-5 lg:size-8" />
        </div>

        <div className="text-center">
          <p className="font-abril-fatface text-6xl lg:text-7xl text-yellow-700">
            Flyers
          </p>
          <p className="font-baskervville-sc uppercase text-xs font-semibold mt-2">
            Cocktail Company
          </p>
        </div>
        <div className="flex gap-5 text-slate-200">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            {/* sun icon */}
            <svg
              className="swap-on size-6 lg:size-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off size-6 lg:size-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <GoPerson className="size-8 hidden lg:block" />
          <PiShoppingCartSimpleLight
            onClick={bumukaska}
            className="size-6 lg:size-8 cursor-pointer"
          />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[370px] lg:w-[650px] bg-black p-5 text-stone-300 transition-transform transform z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex">
          <button onClick={toggleSidebar}>
            <IoIosClose className="size-12 mb-10" />
          </button>
        </div>
        <ul className="lg:p-4 font-Oswald text-2xl grid gap-y-3">
          <li className="py-2 cursor-pointer">SHOP ALL</li>
          <li className="py-2 cursor-pointer">FAQ</li>
          <li className="py-2 cursor-pointer">CONTACT</li>
        </ul>
        <div className="p-0 my-4 lg:my-0 lg:p-5 grid gap-y-2 font-Oswald text-xl">
          <p className="cursor-pointer">Log In</p>
          <p className="cursor-pointer">Create account</p>
        </div>
        <div className="p-0 lg:px-5">
          <input
            type="text"
            placeholder="Search"
            className="bg-black w-[300px] mt-5 lg:mt-0 lg:w-[400px] h-12 border rounded-lg p-2 border-stone-300 placeholder:text-stone-300"
          />
          <div className="flex gap-4 lg:gap-7 mt-5">
            <FaFacebookSquare className="size-5 lg:size-6 cursor-pointer" />
            <FaInstagram className="size-5 lg:size-6 cursor-pointer" />
            <IoLogoGithub className="size-5 lg:size-6 cursor-pointer" />
            <FaLinkedin className="size-5 lg:size-6 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* shopping */}
      <div
  className={`fixed top-0 right-0 h-full w-[370px] lg:w-[650px] bg-black p-5 text-stone-300 transition-transform transform z-50 ${
    shopOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="flex items-center justify-between">
    <p className="text-2xl font-semibold font-Oswald">YOUR CART</p>
    <button onClick={bumukaska}>
      <IoIosClose className="text-2xl" />
    </button>
  </div>
  <div className="mt-10">
    <p className="text-center text-xl font-Oswald">
      Your cart is currently empty.
    </p>
  </div>
</div>

    </div>
  );
};

export default Nav;
