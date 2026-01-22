"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { slugify } from "./LandingHeader";

type MenuItem = {
    name_menu: string;

};
export default function LandingMobileMenuDrawer({
    isOpen,
    onClose,
    menu,
}: {
    isOpen: boolean;
    onClose: () => void;
    menu: MenuItem[];
}) {
    const [active, setActive] = useState<number | null>(null);
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 lg:hidden font-sans">
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />
            <div className="absolute left-0 top-0 h-full w-full bg-white flex flex-col animate-slideIn">
                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-300">
                    <Image
                        src="/images/logo.svg"
                        alt="Nivaan"
                        width={140}
                        height={40}
                        unoptimized
                    />
                    <button
                        onClick={onClose}
                        className="flex items-center border-gray-300 text-black gap-2 text-xs font-semibold border px-4 py-2 rounded-full"
                    >
                        ✕ CLOSE
                    </button>
                </div>
                <div className="flex-1 overflow-y-auto px-5 py-4">
                    {menu.map((item, index) => (
                        <div key={index} className="border-b border-gray-300">
                            <Link href={`#${slugify(item.name_menu)}`} >
                                <button
                                    className="w-full flex justify-between text-black items-center py-4 font-medium text-base uppercase tracking-wide"
                                    onClick={onClose}
                                >
                                    {item.name_menu}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="px-5 py-6 border-t">
                    <p className="text-center text-[#06A1DC] text-sm font-semibold mb-3">
                        FOLLOW US
                    </p>
                    <div className="flex justify-center gap-5 mb-5">
                        <Link href="https://www.facebook.com/nivaancare/" target="_blank">
                            <FaFacebookF className="hover:text-blue-800 text-[#284599] transition text-xl" />
                        </Link>

                        <Link href="https://instagram.com/nivaancare" target="_blank">
                            <FaInstagram className="hover:text-pink-600 text-[#284599] transition text-xl" />
                        </Link>

                        <Link href="https://in.linkedin.com/company/nivaancare" target="_blank">
                            <FaLinkedinIn className="hover:text-blue-700 text-[#284599] transition text-xl" />
                        </Link>

                        <Link href="https://www.youtube.com/@nivaancare" target="_blank">
                            <FaYoutube className="hover:text-red-600 text-[#284599] transition text-xl" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
