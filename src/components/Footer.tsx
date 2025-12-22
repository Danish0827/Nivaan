import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/data/footer";

export default function NivaanFooter() {
    return (
        <footer className="bg-[#D4F1FF] w-full pt-16 pb-6 mt-10 relative overflow-hidden">
            <Image
                width={1000}
                height={1000}
                alt="water"
                src="/images/watermark.webp"
                className="absolute top-20 left-0 w-[850px] pointer-events-none"
            />
            <div className="max-w-[1700px] mx-auto px-6 xl:px-10 2xl:px-0 relative">
                <div className="lg:flex justify-between">
                    <div className="lg:w-1/3 xl:w-2/5">
                        <h2 className="text-4xl font-bold text-[#0852A0]">Get The Latest Insights!</h2>
                        <p className="text-gray-700 mt-3 max-w-2xl text-lg">
                            Join our newsletter for simple tips, clear guidance, and updates directly from our Pain Management Specialists.
                        </p>
                    </div>
                    <div className="lg:w-1/3 xl:w-1/2 flex flex-col lg:flex-row items-center justify-end gap-4 mt-6 ">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full lg:w-[300px] px-6 py-4 rounded-full shadow-sm text-black focus:outline-orange-500 bg-white placeholder:text-gray-400"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full lg:w-[300px] px-6 py-4 rounded-full shadow-sm text-black focus:outline-orange-500 bg-white placeholder:text-gray-400"
                        />
                        <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold px-8 py-4 cursor-pointer hover:scale-105 duration-500 rounded-full w-full lg:w-auto">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>
                <hr className="border-blue-200 my-10" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[22%_15%_15%_15%_15%_15%] gap-5">
                    <div className="col-span-2 md:col-span-1 m-auto pb-10 lg:pb-0 lg:m-0">
                        <Image src="/images/logo.svg" alt="Nivaan Logo" width={260} height={80} />
                    </div>
                    {footerData.map((section) => (
                        <div key={section.title}>
                            <h4 className="font-bold text-[#06A1DC] mb-3">{section.title}</h4>
                            <ul className="space-y-2 text-gray-700">
                                {section.items.map((item) => (
                                    <li key={item.label}>
                                        <Link href={item.href} className="hover:text-blue-500 transition">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="hidden lg:block">
                        <h4 className="font-bold text-[#06A1DC] mb-3">CONTACT</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li>
                                <Link href="mailto:care@nivaancare.com">care@nivaancare.com</Link>
                            </li>
                            <li>
                                <Link href="tel:+919070057005">+91 90-7005-7005</Link>
                            </li>
                        </ul>

                        <h4 className="font-bold text-[#06A1DC] mt-6 mb-2">FOLLOW US</h4>
                        <div className="flex gap-3 mt-5 text-2xl text-[#0852A0]">

                            <Link href="https://facebook.com" target="_blank">
                                <FaFacebookF className="hover:text-blue-800 transition" />
                            </Link>

                            <Link href="https://instagram.com" target="_blank">
                                <FaInstagram className="hover:text-pink-600 transition" />
                            </Link>

                            <Link href="https://linkedin.com" target="_blank">
                                <FaLinkedinIn className="hover:text-blue-700 transition" />
                            </Link>

                            <Link href="https://youtube.com" target="_blank">
                                <FaYoutube className="hover:text-red-600 transition" />
                            </Link>

                        </div>
                    </div>
                    <div className="col-span-1 lg:hidden">
                        <h4 className="font-bold text-[#06A1DC] mb-3">CONTACT</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li><Link href="mailto:care@nivaancare.com">care@nivaancare.com</Link></li>
                            <li><Link href="tel:+919070057005">+91 90-7005-7005</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 lg:hidden">
                        <h4 className="font-bold text-[#06A1DC] mb-3">FOLLOW US</h4>
                        <div className="flex gap-4 mt-2 text-2xl text-[#0852A0]">
                            <Link href="https://facebook.com"><FaFacebookF /></Link>
                            <Link href="https://instagram.com"><FaInstagram /></Link>
                            <Link href="https://linkedin.com"><FaLinkedinIn /></Link>
                            <Link href="https://youtube.com"><FaYoutube /></Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600 mt-12 border-t pt-4">
                    <p>© 2025 Nivaan. All Rights Reserved.</p>
                    <p>
                        Crafted by <span className="text-[#06A1DC] font-semibold">Healthus.ai</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
