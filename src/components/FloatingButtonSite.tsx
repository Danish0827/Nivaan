"use client";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";


const FloatingButtonSite = () => {
  const buttons = [
  {
    href: "/contact",
    img: FaUserDoctor,
    alt: "Book Appointment",
    label: "Book Appt.",
  },
  // {
  //   href: "https://wa.me/+919070057005?text=Hello",
  //   img: FaWhatsapp,
  //   alt: "WhatsApp",
  //   label: "WhatsApp",
  // },
  {
    href: "mailto:care@nivaancare.com",
    img: CgMail,
    alt: "Mail",
    label: "Mail",
  },
  {
    href: "tel:+919070057005",
    img: MdCall,
    alt: "Call Us",
    label: "Call Us",
  },
];

  return (
    <>
    <div className="group z-50 drop-shadow-xl fixed bottom-3 right-3 p-2 hidden lg:flex items-end justify-end w-24 h-24 ">
      <div className="text-white shadow-xl flex items-center cursor-pointer bg-[#284599] hover:bg-[#284599]/80 justify-center p-3 xl:p-4 rounded-full bg-gradient-to-r from-primary to-secondary z-50 absolute  ">
        <MessageCircle color="white" size={25} />
      </div>
      <Link
        target="_blank"
        href={
          "/contact"
        }
        className="absolute rounded-full transition-all cursor-pointer bg-indigo-600 hover:bg-indigo-700 duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 flex p-2.5 hover:p-3 bg-dark scale-100 hover:bg-primary text-white"
      >
        <FaUserDoctor className="text-2xl" />
      </Link>
      <Link
        target="_blank"
        href={"tel:+919070057005"}
        className="absolute rounded-full transition-all cursor-pointer bg-green-600 hover:bg-green-700 duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2.5 hover:p-3 bg-dark hover:bg-primary  text-white"
      >
        <MdCall className="text-2xl" />
      </Link>
      <Link
        target="_blank"
        href={"mailto:care@nivaancare.com"}
        className="absolute rounded-full transition-all cursor-pointer bg-orange-600 hover:bg-orange-700 duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-14 group-hover:-translate-x-14 flex  p-2.5 hover:p-3 bg-dark hover:bg-primary text-white"
      >
        <CgMail className="text-2xl" />
      </Link>
    </div>
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 flex justify-around items-center py-2 shadow-md">
        {buttons.map((btn, index) => (
          <Link
            key={index}
            href={btn.href}
            className="flex flex-col items-center justify-center text-xs text-[#370025] font-medium"
          >
            <btn.img             
              className="h-6 w-6 object-contain mb-1"
            />
            {btn.label}
          </Link>
        ))}
      </div>
      </>
  );
};

export default FloatingButtonSite;