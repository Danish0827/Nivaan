"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import RequestCallbackModal from "./RequestCallbackModal";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

/* ================= TYPES ================= */

type MenuItem = {
    id: number;
    title: string;
    url?: string;
    children?: MenuItem[];
    icon?: {
        url: string;
        alt?: string;
    };

};

export const LOCATION_MENU = {
    title: "Location",
    items: [
        { id: 1, title: "Delhi", url: "/delhi" },
        { id: 2, title: "Mumbai", url: "/mumbai" },
        { id: 3, title: "Lucknow", url: "/lucknow" },
        { id: 4, title: "Noida", url: "/noida" },
        { id: 5, title: "Ghaziabad", url: "/ghaziabad" },
        { id: 6, title: "Faridabad", url: "/faridabad" },
        { id: 7, title: "Jaipur", url: "/jaipur" },
        { id: 8, title: "Gurugram", url: "/gurugram" },
    ],
};
/* ================= MAIN COMPONENT ================= */

export default function MobileMenuDrawer({
    isOpen,
    onClose,
    menu,
    displayTitle
}: {
    isOpen: boolean;
    onClose: () => void;
    menu: MenuItem[];
    displayTitle:string;
}) {
    const [active, setActive] = useState<number | null>(null);

    // 🔒 Body scroll lock
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
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="absolute left-0 top-0 h-full w-full bg-white flex flex-col animate-slideIn">

                {/* ===== HEADER ===== */}
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

                {/* ===== MENU BODY ===== */}
                <div className="flex-1 overflow-y-auto px-5 py-4">
                    {menu.map((item) => (
                        <div key={item.id} className="border-b border-gray-300">
                            <button
                                onClick={() =>
                                    setActive(active === item.id ? null : item.id)
                                }
                                className="w-full flex justify-between text-black items-center py-4 font-medium text-base uppercase tracking-wide"
                            >
                                {item.title}
                                <span className="text-xs">
                                    {active === item.id ? <MdOutlineKeyboardArrowUp className="text-2xl" /> : <MdOutlineKeyboardArrowUp className="rotate-180 text-2xl" />}
                                </span>
                            </button>


                            {active === item.id && item.children && (
                                <div className="pb-4">
                                    {item.title === "Conditions" && (
                                        <ConditionsList data={item.children} onClose={onClose} />
                                    )}

                                    {/* {item.title === "Our Specialists" && (
                                        <DoctorList data={item.children} onClose={onClose} />
                                    )} */}

                                    {item.title !== "Conditions" && (
                                        <SimpleList data={item.children} onClose={onClose} />
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                    {/* ==== STATIC LOCATION MENU ==== */}
                    <div className="border-b border-gray-300">
                        <button
                            onClick={() => setActive(active === 999 ? null : 999)}
                            className="w-full flex justify-between text-black items-center py-4 font-medium text-base uppercase tracking-wide"
                        >
                            {displayTitle}
                            <span className="text-xs">
                                {active === 999 ? (
                                    <MdOutlineKeyboardArrowUp className="text-2xl" />
                                ) : (
                                    <MdOutlineKeyboardArrowUp className="rotate-180 text-2xl" />
                                )}
                            </span>
                        </button>

                        {active === 999 && (
                            <ul className="space-y-3 pl-2 pb-4">
                                {LOCATION_MENU.items.map((loc) => (
                                    <li key={loc.id} className="flex items-start gap-3">
                                        <span className="mt-2 h-2 w-2 rounded-full bg-[#F05432]" />
                                        <Link
                                            href={loc.url}
                                            onClick={onClose}
                                            className="text-sm text-black"
                                        >
                                            {loc.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                </div>

                {/* ===== FOOTER ===== */}
                <div className="px-5 py-6 border-t">
                    <p className="text-center text-[#06A1DC] text-sm font-semibold mb-3">
                        FOLLOW US
                    </p>

                    <div className="flex justify-center gap-5 mb-5">
                        <Link href="https://www.facebook.com/nivaancare/" target="_blank">
                            <FaFacebookF className="hover:text-blue-800 text-blue-800 transition text-xl" />
                        </Link>

                        <Link href="https://instagram.com/nivaancare" target="_blank">
                            <FaInstagram className="hover:text-pink-600 text-blue-800 transition text-xl" />
                        </Link>

                        <Link href="https://in.linkedin.com/company/nivaancare" target="_blank">
                            <FaLinkedinIn className="hover:text-blue-700 text-blue-800 transition text-xl" />
                        </Link>

                        <Link href="https://www.youtube.com/@nivaancare" target="_blank">
                            <FaYoutube className="hover:text-red-600 text-blue-800 transition text-xl" />
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <RequestCallbackModal buttonText="BOOK APPOINTMENT" id="home-book-appointment" />
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ================= CONDITIONS (2 LEVEL) ================= */

function ConditionsList({
    data,
    onClose,
}: {
    data: MenuItem[];
    onClose: () => void;
}) {

    const [open, setOpen] = useState<number | null>(null);

    return (
        <div className="space-y-2 pl-1">
            {data.map((item) => (
                <div key={item.id}>
                    <button
                        onClick={() => setOpen(open === item.id ? null : item.id)}
                        className="w-full flex items-center text-black justify-between py-2 text-sm font-medium"
                    >
                        <Link href={item.url || "#"} onClick={onClose}>
                            <div className="flex items-center gap-3 ">
                                {item.icon && (
                                    <Image
                                        src={item.icon.url}
                                        alt={item.icon.alt || item.title}
                                        width={50}
                                        height={50}
                                        className="bg-[#284599] w-10 h-10 p-2 rounded-xl"
                                        unoptimized
                                    />
                                )}
                                {item.title}
                            </div>
                        </Link>

                        {item.children && (
                            <span className="text-lg leading-none">
                                {open === item.id ? "−" : "+"}
                            </span>
                        )}
                    </button>

                    {/* Second Level */}
                    {open === item.id && item.children && (
                        <ul className="ml-8 mt-2 pb-2 space-y-2">
                            {item.children.map((child) => (
                                <li key={child.id} className="flex items-start gap-3 space-y-2">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-[#F05432]" />
                                    <Link
                                        href={child.url || "#"}
                                        onClick={onClose}
                                        className="text-sm capitalize text-gray-600"
                                    >
                                        {child.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

/* ================= DOCTORS ================= */

function DoctorList({ data, onClose }: { data: MenuItem[], onClose: () => void; }) {
    return (
        <ul className="space-y-3 pl-2">
            {data.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#F05432]" />
                    <Link
                        onClick={onClose}
                        href={item.url || "#"}
                        className="text-sm text-black"
                    >
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

/* ================= SIMPLE LIST ================= */

function SimpleList({
    data,
    onClose,
}: {
    data: MenuItem[];
    onClose: () => void;
}) {
    return (
        <ul className="space-y-3 pl-2">
            {data.map((item) => (
                <li key={item.id} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#F05432]" />
                    <Link
                        href={item.url || "#"}
                        onClick={onClose}
                        className="text-sm text-black"
                    >
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
