'use client'
import { MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import RequestCallbackModal from '../RequestCallbackModal'
import LandingMobileMenuDrawer from './LandingMobileMenuDrawer'
export const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[\s\_]+/g, "-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-");
};

interface MenuData {
    name_menu: string;
}
interface HeaderData {
    menu: MenuData[];
    location: string;
    appointment: string;
}
const LandingHeader = ({ menu, location, appointment }: HeaderData) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="fixed top-0 left-0 z-40 w-full bg-gradient-to-t from-[#EEF8FD]/0 font-sans to-white">
            <div className="xl:px-10 2xl:px-24 flex items-center justify-between py-4 px-4">
                <Link href="/">
                    <Image src="/images/logo.svg" alt="Nivaan Logo" width={170} height={40} className="h-10 lg:h-20 lg:bg-white lg:px-6 lg:shadow-lg lg:rounded-4xl" unoptimized />
                </Link>

                <nav className="hidden lg:flex items-center gap-6 lg:gap-3 xl:gap-6 py-2 text-xs xl:text-sm font-medium">
                    <div className="bg-white flex items-center gap-2 font-normal rounded-full text-black shadow-lg px-3">
                        {menu?.map((item, index) => (
                            <div
                                key={index}
                                className="relative uppercase"
                            >
                                <Link href={`#${slugify(item.name_menu)}`} >
                                    <div className="flex text- items-center gap-1 cursor-pointer hover:bg-[#EAF6FB] px-5 lg:px-2 xl:px-5 my-2 py-2 rounded-full transition">
                                        {item.name_menu}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div
                        className="relative"
                    >
                        <div className="flex shadow-lg uppercase font-normal items-center gap-1 text-black bg-white px-6 py-4 rounded-full cursor-pointer hover:shadow-lg transition">
                            <MapPin className="text-[#06A1DC]" size={16} />
                            {location}
                        </div>
                    </div>
                </nav>
                <div className="hidden lg:block">
                    <RequestCallbackModal buttonText={appointment} id={appointment} />
                </div>
                <button
                    onClick={() => setMenuOpen(true)}
                    className="lg:hidden flex items-center gap-2 bg-white text-[#F05432] font-semibold px-8 py-3 rounded-full shadow"
                >
                    <Image src="/images/menu.svg" alt="menu" width={20} height={20} unoptimized />
                    MENU
                </button>
                <LandingMobileMenuDrawer
                    isOpen={menuOpen}
                    onClose={() => setMenuOpen(false)}
                    menu={menu}
                />
            </div>
        </header>
    )
}

export default LandingHeader