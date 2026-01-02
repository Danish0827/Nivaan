import ContactForm from "./ContactForm";
import parse from "html-react-parser";

type ContactInfoLink = {
  url: string;
  title: string;
  target: string;
};

type ContactInfo = {
  subtitle: string;
  link: ContactInfoLink;
  info: string;
};

type SEO = {
  title: string;
  meta_desc: string;
};

type ACF = {
  contact_title: string;
  contact_description: string;
  contact_info: ContactInfo[];
  contact_city_name: string;
  form_title: string;
  form_description: string;
};

type ContactData = {
  id: number;
  slug: string;
  title: string;
  featured_image: string | null;
  seo: SEO;
  acf: ACF;
};
export default function ContactSection({ data }: { data: ContactData }) {
    const LOCATION_MENU = {
        title: "CLINICS",
        items: [
            { id: 1, title: "Delhi", url: "#" },
            { id: 2, title: "Mumbai", url: "#" },
            { id: 3, title: "Lucknow", url: "#" },
            { id: 4, title: "Noida", url: "#" },
            { id: 5, title: "Ghaziabad", url: "#" },
            { id: 6, title: "Faridabad", url: "#" },
            { id: 7, title: "Jaipur", url: "#" },
        ],
    };


    const { contact_info, form_title, form_description } = data.acf;

    return (
        <section className="max-w-7xl mx-auto px-3 pb-16 grid lg:grid-cols-2 gap-10">
            {/* Left Info Section */}
            <div className="bg-white border rounded-3xl p-8 shadow-lg flex flex-col justify-between gap-8">
                <div className="flex flex-col gap-6">
                    {contact_info.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            {/* Optional: icon based on subtitle */}
                            <div className="text-blue-600 mt-1">
                            </div>
                            <div>
                                <h3 style={{ letterSpacing: '1px' }} className="text-xs font-medium uppercase text-[#06A1DC]">{item.subtitle}</h3>
                                <a
                                    href={item.link.url}
                                    className="text-[#284599] py-2 text-xl font-semibold hover:underline block"
                                    target={item.link.target || "_self"}
                                >
                                    {item.link.title}
                                </a>
                                <p className="text-gray-900 text-base font-mono">{item.info}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-sm">
                    {LOCATION_MENU.items.map((clinic, index) => (
                        <a
                            key={clinic.id}
                            href={clinic.url}
                            className="hover:text-[#284599] transition-colors"
                        >
                            {clinic.title}
                            {index < LOCATION_MENU.items.length - 1 && <span className="mx-2">•</span>}
                        </a>
                    ))}
                </div>
            </div>

            {/* Right Form Section */}
            <div className="mx-0">
                <ContactForm title={form_title} description={parse(form_description)} />
            </div>
        </section>
    );
}
