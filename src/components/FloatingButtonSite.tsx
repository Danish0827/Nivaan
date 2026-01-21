"use client";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const FloatingButtonSite = () => {
  return (
    <div className="group z-9999999 drop-shadow-xl fixed bottom-3 right-3 p-2  flex items-end justify-end w-24 h-24 ">
      <div className="text-white shadow-xl flex items-center cursor-pointer bg-blue-600 hover:bg-blue-700 justify-center p-3 xl:p-4 rounded-full bg-gradient-to-r from-primary to-secondary z-9999999 absolute  ">
        <MessageCircle color="white" size={25} />
      </div>
      <Link
        target="_blank"
        href={
          "https://wa.me/+919070057005?text=Hello"
        }
        className="absolute rounded-full transition-all cursor-pointer bg-green-600 hover:bg-green-700 duration-[0.2s] ease-out scale-y-0 group-hover:scale-y-100 group-hover:-translate-x-16 flex p-2.5 hover:p-3 bg-dark scale-100 hover:bg-primary text-white"
      >
        <FaWhatsapp className="text-2xl" />
      </Link>
      <Link
        target="_blank"
        href={"tel:+919070057005"}
        className="absolute rounded-full transition-all cursor-pointer bg-indigo-600 hover:bg-indigo-700 duration-[0.2s] ease-out scale-x-0 group-hover:scale-x-100 group-hover:-translate-y-16  flex  p-2.5 hover:p-3 bg-dark hover:bg-primary  text-white"
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
  );
};

export default FloatingButtonSite;