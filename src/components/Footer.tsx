import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

export default function NivaanFooter() {
    const footerData = [
        {
            title: "CONDITIONS",
            items: [
                { label: "Back Pain", href: "/conditions/back-pain" },
                { label: "Neck Pain", href: "/conditions/neck-pain" },
                { label: "Shoulder Pain", href: "/conditions/shoulder-pain" },
                { label: "Knee Pain", href: "/conditions/knee-pain" },
                { label: "Others", href: "/conditions/others" },
            ],
        },
        {
            title: "TREATMENT",
            items: [
                { label: "PRP Therapy", href: "/treatments/prp-therapy" },
                { label: "Regenerative Medicine", href: "/treatments/regenerative-medicine" },
                { label: "Epidural Injection", href: "/treatments/epidural-injection" },
                { label: "Facet Joint Injection", href: "/treatments/facet-joint-injection" },
                { label: "Radio frequency Ablation", href: "/treatments/rfa" },
                { label: "Neuromodulation", href: "/treatments/neuromodulation" },
                { label: "Peripheral Nerve Stimulation", href: "/treatments/pns" },
                { label: "Sympathetic Nerve Block", href: "/treatments/snb" },
            ],
        },
        {
            title: "CLINICS",
            items: [
                { label: "Delhi", href: "/clinics/delhi" },
                { label: "Mumbai", href: "/clinics/mumbai" },
                { label: "Lucknow", href: "/clinics/lucknow" },
                { label: "Noida", href: "/clinics/noida" },
                { label: "Ghaziabad", href: "/clinics/ghaziabad" },
                { label: "Faridabad", href: "/clinics/faridabad" },
                { label: "Jaipur", href: "/clinics/jaipur" },
            ],
        },
        {
            title: "QUICK LINKS",
            items: [
                { label: "About Nivaan", href: "/about" },
                { label: "Doctors", href: "/doctors" },
                { label: "Careers", href: "/careers" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
            ],
        },
    ];

    const socialLinks = [
        { icon: "fab fa-facebook", href: "https://facebook.com" },
        { icon: "fab fa-instagram", href: "https://instagram.com" },
        { icon: "fab fa-linkedin", href: "https://linkedin.com" },
        { icon: "fab fa-youtube", href: "https://youtube.com" },
    ];
    return (
        <footer className="bg-[#D4F1FF] w-full pt-16 pb-6 mt-10 relative overflow-hidden">
            <img
                src="/images/watermark.webp"
                className="absolute top-60 left-0 w-[850px] pointer-events-none"
            />
            <div className="max-w-[1700px] mx-auto px-6 xl:px-10 2xl:px-0 relative">
                <div className="lg:flex justify-between">
                    {/* Top Section */}
                    <div className="">
                        <h2 className="text-4xl font-bold text-[#0852A0]">Get The Latest Insights!</h2>
                        <p className="text-gray-700 mt-3 max-w-2xl text-lg">
                            Join our newsletter for simple tips, clear guidance, and updates directly from our Pain Management Specialists.
                        </p>
                    </div>
                    {/* Input Row */}
                    <div className="flex flex-col lg:flex-row items-center justify-end gap-4 mt-6 w-full">
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

                {/* Grid Sections */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[22%_15%_15%_15%_15%_15%] gap-5">

                    {/* Logo */}
                    <div className="col-span-2 md:col-span-1">
                        <Image src="/images/logo.svg" alt="Nivaan Logo" width={260} height={80} />
                    </div>

                    {/* Dynamic Sections */}
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

                    {/* Contact */}
                    <div>
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
