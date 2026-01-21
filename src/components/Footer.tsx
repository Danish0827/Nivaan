import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/data/footer";
import ZohoSubscribeForm from "./ZohoSubscribeForm";

interface HeaderProps {
    menu: any;
}
export default function NivaanFooter({ menu }: HeaderProps) {
    return (
        <footer className="bg-[#D4F1FF] w-full pt-16 pb-6 overflow-hidden">
            <div className="relative">
                <Image
                    width={1000}
                    height={1000}
                    alt="water"
                    src="/images/watermark.webp"
                    className="absolute top-20 left-0 w-[800px] pointer-events-none"
                    unoptimized
                />
            </div>
            <div className="max-w-[1700px] mx-auto px-6 xl:px-10 2xl:px-10">
                <div className="lg:flex justify-between">
                    <div className="lg:w-1/3 xl:w-2/5">
                        <h2 className="text-4xl font-bold text-[#0852A0]">Get The Latest Insights!</h2>
                        <p className="text-gray-700 mt-3 max-w-2xl text-lg">
                            Join our newsletter for simple tips, clear guidance, and updates directly from our Interventional Pain Specialists.
                        </p>
                    </div>
                    <ZohoSubscribeForm />
                </div>
                <hr className="border-blue-200 my-10" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[16%_15%_21%_15%_9%_15%] xl:grid-cols-[20%_15%_15%_17%_12%_15%] gap-5">
                    <div className="col-span-2 md:col-span-1 m-auto pb-10 lg:pb-0 lg:m-0">
                        <Link href="/"><Image src="/images/logo.svg" alt="Nivaan Logo" width={250} height={80} unoptimized/></Link>
                        <hr className="border-blue-200 my-7" />
                        <div className="hidden lg:block">
                            {/* <h4 className="font-bold text-[#06A1DC] pt-2 my-3">CONTACT</h4> */}
                            <ul className="space-y-2 text-gray-700 mb-3">
                                <li>
                                    <Link className="hover:text-blue-700" href="mailto:care@nivaancare.com">care@nivaancare.com</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-blue-700" href="tel:+919070057005">+91 90700 57005</Link>
                                </li>
                                 <li>
                                    <Link className="hover:text-blue-700" href="tel:+919020295000">+91 90202 95000</Link>
                                </li>
                            </ul>

                            {/* <h4 className="font-bold text-[#06A1DC] mt-6 mb-2">FOLLOW US</h4> */}
                            <div className="flex gap-3 mt-5 text-2xl text-[#0852A0]">

                                <Link href="https://www.facebook.com/nivaancare/" target="_blank">
                                    <FaFacebookF className="hover:text-blue-800 transition" />
                                </Link>

                                <Link href="https://instagram.com/nivaancare" target="_blank">
                                    <FaInstagram className="hover:text-pink-600 transition" />
                                </Link>

                                <Link href="https://in.linkedin.com/company/nivaancare" target="_blank">
                                    <FaLinkedinIn className="hover:text-blue-700 transition" />
                                </Link>

                                <Link href="https://www.youtube.com/@nivaancare" target="_blank">
                                    <FaYoutube className="hover:text-red-600 transition" />
                                </Link>

                            </div>
                        </div>
                    </div>
                    {menu.map((section: any) => (
                        <div key={section.title}>
                            <h4 className="font-bold text-[#06A1DC] mb-3">{section.title}</h4>
                            <ul className="space-y-2 text-gray-700">
                                {section.children.map((item: any) => (
                                    <li key={item.title}>
                                        <Link href={item.url} className="hover:text-[#06A1DC] transition">
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className="col-span-1 lg:hidden">
                        <h4 className="font-bold text-[#06A1DC] mb-3">CONTACT</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li>
                                    <Link className="hover:text-blue-700" href="mailto:care@nivaancare.com">care@nivaancare.com</Link>
                                </li>
                                <li>
                                    <Link className="hover:text-blue-700" href="tel:+919070057005">+91 90700 57005</Link>
                                </li>
                                 <li>
                                    <Link className="hover:text-blue-700" href="tel:+919020295000">+91 90202 95000</Link>
                                </li>
                        </ul>
                    </div>

                    <div className="col-span-1 lg:hidden">
                        <h4 className="font-bold text-[#06A1DC] mb-3">FOLLOW US</h4>
                        <div className="flex gap-4 mt-2 text-2xl text-[#0852A0]">
                            <Link href="https://www.facebook.com/nivaancare"><FaFacebookF /></Link>
                            <Link href="https://www.instagram.com/nivaancare"><FaInstagram /></Link>
                            <Link href="https://in.linkedin.com/company/nivaancare"><FaLinkedinIn /></Link>
                            <Link href="https://www.youtube.com/@nivaancare"><FaYoutube /></Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600 mt-12 border-t pt-4">
                    <span>© 2026 Nivaan. All Rights Reserved.</span>
                    <span>
                        Crafted by <span className="text-[#06A1DC] hover:text-[#06A1DC]/80 font-medium"><Link target="_blank" href="https://healthus.ai/">Healthus.ai</Link></span>
                    </span>
                </div>
            </div>
        </footer>
    );
}
