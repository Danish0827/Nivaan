import parse from "html-react-parser";
import Image from "next/image";
import Breadcrumb from "./Breadcrumb";

export function PageBreadcrumb({
    title,
    description
}: any) {
    return (
        <section className="relative home-main-section w-full bg-gradient-to-b pt-14 overflow-hidden from-[#edf8fc] to-[#edf8fc]">
            <img
                src="/images/watermark.webp"
                className="absolute top-20 left-0 w-[700px] pointer-events-none z-20"
            />
            <div className="pt-10 md:pt-20 px-4 lg:px-10 xl:px-16 2xl:px-24">
                <div className="grid items-center gap-10 lg:gap-16 py-12 lg:py-10">
                    <div className="relative z-30 text-center lg:text-left flex flex-col items-center justify-center order-2 lg:order-1">
                        <Breadcrumb
                            items={[
                                { label: "Home", href: "/" },
                                { label: title },
                            ]}
                        />
                        <h1 className="text-[28px] sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-blue-900 leading-tight">
                            {title === "Contact Nivaan" ? description?.contact_title : title}
                        </h1>
                        {description?.contact_description &&
                            <div className="text-black pt-5 font-thin text-lg max-w-5xl text-center px-3">{parse(description?.contact_description)}</div>
                        }
                    </div>
                </div>
            </div>
            <Image className="absolute bottom-0 z-20" width={5000} height={5000} alt="" src="/images/bottom.png" unoptimized />
        </section>
    );
}
