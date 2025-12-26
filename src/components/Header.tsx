import React from "react";
import { ChevronDown, MapPin } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-gradient-to-t from-[#EEF8FD]/0 to-[#ffffff] pt-2 pb- w-full">
      <div className="xl:px-24 flex items-center justify-between py-4 px-4 lg:px-6 w-full">
        <div className=" gap-2 cursor-pointer select-none w-fit">
          <img
            src="/images/logo.svg" 
            alt="Nivaan Logo"
            className="h-10 object-contain"
          />
        </div>
        <nav className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-medium">
          <div className="bg-white flex items-center gap-6 text-xs xl:text-sm font-medium p-3 rounded-full text-black shadow-lg px-6">
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
              CONDITIONS <ChevronDown size={16} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
              OUR SPECIALISTS <ChevronDown size={16} />
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
              PAIN MANAGEMENT <ChevronDown size={16} />
            </div>
          </div>
          <div className="flex shadow-lg items-center gap-1 text-black bg-white px-4 py-3 rounded-full cursor-pointer hover:shadow-md transition">
            <MapPin size={16} className="text-black hover:text-blue-500" />
            LOCATION <ChevronDown size={16} />
          </div>
        </nav>
        <button className="hidden lg:block bg-gradient-to-r from-[#EC6724] to-[#F05432] text-white font-semibold text-sm xl:text-base px-6 py-3 rounded-full shadow hover:opacity-90 transition">
          BOOK APPOINTMENT
        </button>
        <button className="lg:hidden bg-gradient-to-r flex gap-2 justify-between items-center from-[#fff] to-white text-[#F05432] font-semibold px-8 sm:px-12 py-3 rounded-full shadow hover:opacity-90 transition">
          <Image className="-ml-2 sm:-ml-4 " src="images/menu.svg" alt="menu" width={20} height={20} />
          MENU
        </button> 
      </div>
    </header>
  );
}
