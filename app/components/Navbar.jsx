"use client";
import HeaderLogo from "./icons/HeaderLogo";
import HamburgerLogo from "./icons/HamburgerLogo";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import LvlLogo from "./icons/LvlLogo"
import clsx from "clsx";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Apply fixed positioning to the body to prevent background scrolling
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.position = "fixed";
    } else {
      document.body.style.position = "";
    }
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#3A1A3D] pt-4 md:pt-0 shadow-lg text-white w-screen overflow-hidden">
      <div className="container mx-auto flex items-center justify-between md:justify-center p-4">
        <div className="flex md:hidden items-center p-4">
        <Link href="/" className="">
        <LvlLogo className="text-[#EFB059] text-4xl" />
        </Link>
        
        </div>
        {/* Hide on mobile */}
        <div className="hidden gap-[40px] lg:gap-[80px] xl:gap-[100px] 2xl:gap-[125px] md:flex">
        <Link href="/" className="relative font-tusli flex justify-center  items-center gap-4 group">
          <p className="">ÜRÜNLERİMİZ</p>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#EFB059] group-hover:w-full group-hover:h-0.5 transition-all duration-500 ease-out"></span>
        </Link>
        <Link href="/" className="relative font-tusli flex justify-center  items-center gap-4 group">
          <p className="">İLETİŞİM</p>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#EFB059] group-hover:w-full group-hover:h-0.5 transition-all duration-500 ease-out"></span>
        </Link>
        <Link href="/" className="">
        <LvlLogo className="text-[#EFB059] text-4xl" />
        </Link>
          <Link href="/" className="relative font-tusli flex justify-center  items-center gap-4 group">
          <p className="">HAKKIMIZDA</p>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#EFB059] group-hover:w-full group-hover:h-0.5 transition-all duration-500 ease-out"></span>
        </Link>
        <a href="tel:+905300674564" className="relative font-tusli flex justify-center  items-center gap-4 group">
        <FiPhone className="text-2xl"/>
          <p className="">+90 530 067 45 64</p>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#EFB059] group-hover:w-full group-hover:h-0.5 transition-all duration-500 ease-out"></span>
        </a>
        </div>
        <div className="flex md:hidden">
        <Link href="/" className="">
        <LvlLogo className="text-2xl hidden mt-2" />
        </Link>
          
        </div>

        <div className="md:hidden p-4 flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
            <div className="h-[32px] w-[32px] flex items-center justify-center">
              <MdClose
                className={clsx(
                  `text-[#EFB059] text-3xl  transition-all duration-700`,
                  isMenuOpen ? "opacity-100 rotate-180" : "opacity-0 "
                )}
              />
              <HamburgerLogo
                className={clsx(
                  "text-[#EFB059] text-2xl  transition-all duration-700",
                  isMenuOpen ? "opacity-0  w-0" : "opacity-100 w-full"
                )}
              />
            </div>
          </button>
        </div>
      </div>
      {/* Mobile menu overlay */}
      <div
        className={`fixed flex flex-col inset-0 bg-[#3A1A3D] w-full h-[230px] mt-24 transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex gap-7 p-6 flex-col items-start h-full">
          <Link href="/" className="font-tusli flex items-center gap-4">
            <p>ÜRÜNLERİMİZ</p>
            <FaChevronRight />
          </Link>
          <Link href="/" className="font-tusli flex items-center gap-4">
            <p>İLETİŞİM</p>
            <FaChevronRight />
          </Link>
          <Link href="/" className="font-tusli flex items-center gap-4">
            <p>HAKKIMIZDA</p>
            <FaChevronRight />
          </Link>
          <a href="tel:+905300674564" className="font-tusli flex items-center gap-4">
          <FiPhone className="text-2xl"/>
          <p className="">+90 530 067 45 64</p>
            <FaChevronRight />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
