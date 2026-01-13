import { ContactData } from "@/interfaces/ContactPage";
import ContactForm from "./ContactForm";
import Link from "next/link";

export default function ContactSection({ data }: { data: ContactData }) {
    const { contact_info, form_title, form_description } = data.acf;
    const LOCATION_MENU = {
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
    return (
        <section className="max-w-7xl mx-auto px-3 pb-16 grid lg:grid-cols-2 gap-10">
            <div className="bg-white border rounded-3xl p-8 shadow-lg flex flex-col justify-between gap-8">
                <div className="flex flex-col gap-6">
                    {contact_info.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="text-blue-600 mt-1">
                            </div>
                            <div>
                                <h3 style={{ letterSpacing: '1px' }} className="text-xs font-medium uppercase text-[#06A1DC]">{item.subtitle}</h3>
                                <Link
                                    href={item.link.url}
                                    className="text-[#284599] py-2 text-xl font-semibold hover:underline block"
                                    target={item.link.target || "_self"}
                                >
                                    {item.link.title}
                                </Link>
                                <p className="text-gray-900 text-base font-mono">{item.info}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm lg:text-lg">
                    {LOCATION_MENU.items.map((clinic, index) => (
                        <Link
                            key={clinic.id}
                            href={clinic.url}
                            className="hover:text-[#284599] transition-colors"
                        >
                            {clinic.title}
                            {index < LOCATION_MENU.items.length - 1 && <span className="mx-2">•</span>}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="mx-0">
                <ContactForm title={form_title} description={form_description} />
            </div>
        </section>
    );
}
