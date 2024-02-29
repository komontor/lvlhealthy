import React from 'react'
import HeaderLogo from "./icons/HeaderLogo";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import clsx from 'clsx';
import { Montserrat } from "next/font/google";
import DgtlLogo from './icons/DgtlLogo';
import LvlLogo from './icons/LvlLogo';
const fontMont = Montserrat({
  weights: [400, 500, 600, 700],
  subsets: ["latin"],
  display: "swap",
});
const Footer = () => {
  return (
    <div className="bg-[#3A1A3D] relative hidden z-1 md:flex flex-col justify-center items-center gap-1 h-[300px]">
      <div className="bg-[#3A1A3D] ml-24 mb-10 gap-1 flex flex-row justify-center items-center">
      <div className="md:flex hidden gap-1 order-2 md:order-1 md:flex-row flex-col justify-center md:gap-[30px] lg:gap-[80px] items-center">
      <Link href="/" className="group font-tusli text-white text-[15px] flex items-center gap-4 relative">
            <p>ÜRÜNLERİMİZ</p>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#EFB059] group-hover:w-full group-hover:h-0.5 transition-all duration-500 ease-out"></span>
          </Link>
          <Link href="/" className="group font-tusli text-white text-[15px] flex items-center gap-4 relative">
            <p>İLETİŞİM</p>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#EFB059] group-hover:w-full group-hover:h-0.5 transition-all duration-500 ease-out"></span>
          </Link>

      </div>
      <div className="hidden md:flex mb-6 mt-3 flex-col order-1 md:order-2 mx-14 gap-1 justify-center items-center">
        <LvlLogo className="text-white text-4xl" />

      </div>
      <div className="md:flex hidden gap-1 order-3 md:flex-row flex-col justify-center md:gap-[30px] lg:gap-[80px] items-center">
      <Link href="/" className="group font-tusli text-white text-[15px] flex items-center gap-4 relative">
            <p>HAKKIMIZDA</p>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#EFB059] group-hover:w-full group-hover:h-0.5 transition-all duration-500 ease-out"></span>
          </Link>
          <a href="tel:+905300674564" className="group font-tusli text-white text-[15px] flex items-center gap-4 relative">
          <FiPhone className="text-2xl"/>
          <p className="">+90 530 067 45 64</p>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#EFB059] group-hover:w-full group-hover:h-0.5 transition-all duration-500 ease-out"></span>
          </a>

      </div>
    </div>
    <div className="w-full flex absolute bottom-0 items-center justify-between px-20 h-[50px] bg-[#8D9CA5]">
    <p className={clsx("text-[#152741] text-[14px]",fontMont.className)}>© 2024 LvlHealthy. Her Hakkı Saklıdır</p>
    <a target="_blank" href="https://dgtlface.com/">
      <div className="flex items-center gap-1 justify-center">
      <p className={clsx("text-[#152741] text-[14px]",fontMont.className)}>Powered by company © </p> <DgtlLogo className="text-xl text-[#152741]"/> 
      </div>
    
    </a>
    
    
    </div>
    </div>
  )
}

export default Footer
