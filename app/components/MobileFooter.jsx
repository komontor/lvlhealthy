import React from 'react'
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Montserrat } from "next/font/google";
import clsx from "clsx";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import "../globals.css";
import DgtlLogo from './icons/DgtlLogo';
import LvlLogo from './icons/LvlLogo';
import { FiPhone } from "react-icons/fi";
const fontMont = Montserrat({
  weights: [400, 500, 600, 700],
  subsets: ["latin"],
  display: "swap",
});
import Link from "next/link";


const MobileFooter = () => {
  return (
    <div className="bg-[#3A1A3D] flex flex-col md:hidden justify-center gap-5 items-center w-full h-[420px]">
        <div className="flex justify-between items-start w-full">
        <div className="flex mt-[32px] gap-[23px] ml-[18px] flex-col justify-start items-start">
            <div className="flex items-center gap-3 justify-center">
                <LvlLogo className="text-[#EFB059] text-5xl" />
            </div>
            <Link href="/" className="group font-tusli text-white text-[13px] flex items-center gap-4 relative">
            <p>ÜRÜNLERİMİZ</p>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#EFB059] group-hover:w-full group-hover:h-0.5 transition-all duration-500 ease-out"></span>
          </Link>
          <Link href="/" className="group font-tusli text-white text-[13px] flex items-center gap-4 relative">
            <p>İLETİŞİM</p>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#EFB059] group-hover:w-full group-hover:h-0.5 transition-all duration-500 ease-out"></span>
          </Link>
          <Link href="/" className="group font-tusli text-white text-[13px] flex items-center gap-4 relative">
            <p>HAKKIMIZDA</p>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#EFB059] group-hover:w-full group-hover:h-0.5 transition-all duration-500 ease-out"></span>
          </Link>
          <Link href="/" className="group font-tusli text-white text-[13px] flex items-center gap-4 relative">
            <p>ÇEREZ POLİTİKASI</p>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#EFB059] group-hover:w-full group-hover:h-0.5 transition-all duration-500 ease-out"></span>
          </Link>
          <Link href="/" className="group font-tusli text-white text-[13px] flex items-center gap-4 relative">
            <p>YASAL İZİNLER</p>
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#EFB059] group-hover:w-full group-hover:h-0.5 transition-all duration-500 ease-out"></span>
          </Link>

        </div>
        <div className="flex flex-col justify-center mr-[18px] gap-[16px] mt-[75px] items-center">
            <a href="tel:+905300674564">
            <div className="bg-[#738595] rounded-md w-[50px] h-[40px] flex justify-center items-center">
            <FaPhone className="text-white text-2xl" />
            </div>
            </a>
            <a href="mailto:info@lvlhealthy.com">
            <div className="bg-[#738595] rounded-md w-[50px] h-[40px] flex justify-center items-center">
            <IoIosMail className="text-white text-2xl" />
            </div>
            </a>
            <a rel="noreferrer noopener" target="_blank" href="">
            <div className="bg-[#738595] rounded-md w-[50px] h-[40px] flex justify-center items-center">
            <FaInstagram className="text-white text-2xl" />
            </div>
            </a>
            <a rel="noreferrer noopener" target="_blank" href="">
            <div className="bg-[#738595] rounded-md w-[50px] h-[40px] flex justify-center items-center">
            <FaYoutube className="text-white text-2xl" />
            </div>
            </a>
            <a rel="noreferrer noopener" target="_blank" href="">
            <div className="bg-[#738595] rounded-md w-[50px] h-[40px] flex justify-center items-center">
            <FaFacebookF className="text-white text-2xl" />
            </div>
            </a>
        </div>
        </div>
        <div className=" flex items-start justify-start h-[1px] w-full px-2 bg-[#738595]">
        </div>
        <a target="_blank" className='flex justify-between w-full pb-4' href="https://dgtlface.com/">
        <div className="w-full flex justify-between items-center px-[20px]">
            <p className="text-white text-[14px] text-justify"> LVLHEALTHY © 2024</p>
                <DgtlLogo className="text-white text-2xl" />
        </div>
        </a>

    </div>
  )
}

export default MobileFooter
