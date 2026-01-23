"use client";
import React, { useState } from "react";
import NivaanLogo from "../../../public/NivaanMob.webp";
import Image from "next/image";
import { X, Menu, ChevronDown, ChevronUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import { montserratSemiBold, montserratSemiSemiBold } from "@/app/fonts";
import { Navbar2LinksMob } from "@/app/api/data";
import Link from "next/link";

interface Navbar2MobProps {
  isHindi?: boolean;
}

const Navbar2Mob: React.FC<Navbar2MobProps> = ({ isHindi }) => {
  const pathName = usePathname();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const landingPageUrl = `${origin}${pathName}`;

  const [modal, setModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => {
    setModal(!modal);
    sendGTMEvent({
      event: "Form Open",
      value: {
        "Form Name": "NavBar-Form",
        "CTA Button text": "Book Consultation",
        "Landing Page URL": landingPageUrl,
      },
    });
  };

  const handleCloseModal = () => {
    setModal(false);
    sendGTMEvent({
      event: "Form Close",
      value: {
        "Form Name": "NavBar-Form",
        "CTA Button text": null,
        "Landing Page URL": landingPageUrl,
      },
    });
  };

  return (
    <>
      <nav className="flex flex-row px-8 py-4 justify-between md:hidden">
        <a href="/">
          <Image
            className="hover:cursor-pointer"
            src={NivaanLogo}
            alt="Nivaan logo in mobile Navbar"
            width={112}
            height={35}
            unoptimized
          />
        </a>
        <Menu className="h-8 w-8 cursor-pointer" onClick={handleClick} />
      </nav>

      {modal && (
        <div className="fixed top-0 right-0 w-3/4 h-screen bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto">
          <div className="flex justify-end p-4 pr-8">
            <X
              className="h-8 w-8 cursor-pointer text-black"
              onClick={handleCloseModal}
            />
          </div>

          <ul className="p-4 space-y-4">
            {Navbar2LinksMob.map((link, i) => {
              const isPainAreas = (isHindi ? link.titleHindi : link.title) === "Pain Areas";

              return (
                <li key={link.id} className="text-center">
                  {isPainAreas ? (
                    <>
                      <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`${montserratSemiSemiBold.className} flex items-center justify-center gap-2 w-full  text-base`}
                      >
                        {isHindi ? link.titleHindi : link.title}
                        {isDropdownOpen ? (
                          <ChevronUp className="w-4 h-4 text-[#007BFF]" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-[#007BFF]" />
                        )}
                      </button>

                      {isDropdownOpen && (
                        <ul className="flex flex-col mt-4 gap-4">
                          <li className="text-black font-semibold">
                            <Link
                              href="https://pain-solutions.nivaancare.com/back-pain/"
                              onClick={handleCloseModal}
                              className="block text-center text-sm"
                            >
                              Back Pain
                            </Link>
                          </li>
                          <li className="text-black font-semibold">
                            <Link
                              href="https://pain-solutions.nivaancare.com/knee-pain/"
                              onClick={handleCloseModal}
                              className="block text-center text-sm"
                            >
                              Knee Pain
                            </Link>
                          </li>
                          <li className="text-black font-semibold">
                            <Link
                              href="https://pain-solutions.nivaancare.com/neck-pain/"
                              onClick={handleCloseModal}
                              className="block text-center text-sm"
                            >
                              Neck Pain
                            </Link>
                          </li>
                          <li className="text-black font-semibold">
                            <Link
                              href="https://pain-solutions.nivaancare.com/shoulder-pain/"
                              onClick={handleCloseModal}
                              className="block text-center text-sm"
                            >
                              Shoulder Pain
                            </Link>
                          </li>
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.link}
                      className={`${montserratSemiSemiBold.className} text-black active:text-[#007BFF] text-base`}
                      onClick={handleCloseModal}
                    >
                      {isHindi ? link.titleHindi : link.title}
                    </Link>
                  )}

                  {i < Navbar2LinksMob.length - 1 && (
                    <div className="h-[1px] bg-[#18181817] mt-4"></div>
                  )}
                </li>
              );
            })}

          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar2Mob;
