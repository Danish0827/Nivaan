import { MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RequestCallbackModal from '../RequestCallbackModal'

interface MenuData {
    name_menu: string;
}
interface HeaderData {
    menu: MenuData[];
    location: string;
    appointment: string;
}
const LandingHeader = ({ menu, location, appointment }: HeaderData) => {
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
                                <div className="flex text- items-center gap-1 cursor-pointer hover:bg-[#EAF6FB] px-5 lg:px-2 xl:px-5 my-2 py-2 rounded-full transition">
                                    {item.name_menu}
                                </div>
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
                <div className="block">
                    <RequestCallbackModal buttonText={appointment} id={appointment} />
                </div>

            </div>
        </header>
    )
}

export default LandingHeader