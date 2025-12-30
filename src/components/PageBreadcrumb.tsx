import parse from "html-react-parser";
import he from "he";
import Image from "next/image";
import Breadcrumb from "./Breadcrumb";

export function PageBreadcrumb({
    title,
    description
}: any) {
    const decodedTitle = he.decode(title);
    const parsedTitle = parse(decodedTitle, {
        replace: (domNode: any) => {
            if (domNode.name === "spam") {
                return (
                    <span className="text-[#06A1DC] font-bold">
                        {domNode.children[0]?.data}
                    </span>
                );
            }
            if (domNode.name === "space") return " ";
        },
    });

    return (
        <>
            <section className="relative home-main-section w-full bg-gradient-to-b pt-14 overflow-hidden from-[#edf8fc] to-[#edf8fc]">
                <img
                    src="/images/watermark.webp"
                    className="absolute top-20 left-0 w-[700px] pointer-events-none z-20"
                />
                <div className="py-10 md:py-20 px-4 lg:px-10 xl:px-16 2xl:px-24">
                    <div className="grid items-center gap-10 lg:gap-16 py-12 lg:py-10">
                        <div className="relative z-40 text-center lg:text-left flex flex-col items-center justify-center order-2 lg:order-1">
                            <Breadcrumb
                                items={[
                                    { label: "Home", href: "/" },
                                    { label: title },
                                ]}
                            />
                            <h1 className="text-[28px] sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold text-blue-900 leading-tight">
                                {parsedTitle}
                            </h1>
<p>{description}</p>
                        </div>
                    </div>
                </div>
                <Image className="absolute bottom-0 z-30" width={5000} height={5000} alt="" src="/images/bottom.png" />
            </section>
        </>
    );
}
