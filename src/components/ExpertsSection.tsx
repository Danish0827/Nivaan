import Image from "next/image";
import Link from "next/link";

export default function ExpertsSection({ title, description, button }:any) {
    const experts = [
        {
            name: "Dr. Rohit Gulati",
            degree: "MBBS, DA, DNB",
            experience: "18+ years",
            subtitle: "Compassionate Experience",
            image: "/images/doctor.webp",
        },
        {
            name: "Dr. Garima Gupta",
            degree: "MBBS, DA, FIPM GERMANY",
            experience: "15+ years",
            subtitle: "Focused Expertise",
            image: "/images/doctor.webp",
        },
        {
            name: "Dr. Jyotsna Jain",
            degree: "MBBS, MD, FIPM, DHM",
            experience: "17+ years",
            subtitle: "Dedicated Experience",
            image: "/images/doctor.webp",
        },
        {
            name: "Dr. Praneet Singh",
            degree: "MBBS, MD, FIPP, FIAPM",
            experience: "16+ years",
            subtitle: "Proven Care",
            image: "/images/doctor.webp",
        },
    ];

    return (
        <section className="px-4 lg:px-24 xl:px-10 2xl:px-24 mt-10 text-white">
            <div className="w-full bg-gradient-to-br from-[#003368] to-[#0052A9] rounded-[40px] lg:rounded-[80px] px-5 lg:px-10 py-10 lg:py-20">
                <div className="text-center max-w-5xl mx-auto mb-8 lg:mb-14">
                    <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
                    <p className="text-sm md:text-lg font-thin mt-4 opacity-90 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-10">
                    {experts.map((item, i) => (
                        <div
                            key={i}
                            className=" rounded-3xl  text-left text-[#003B73]"
                        >
                            <div className="mb-6">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={600}
                                    height={500}
                                    className="rounded-xl object-cover w-full"
                                />
                            </div>
                            <div className="px-6">
                                <h3 className="text-2xl font-medium text-white">{item.name}</h3>
                                <p className="text-sm text-[#06A1DC] mt-1">{item.degree}</p>
                                <p className="text-base font-semibold text-white mt-3">{item.experience}</p>
                                <p className="text-sm font-light text-blue-100">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Link
                    href={''}
                        // href={journey.button.url}
                        className="block w-fit"
                    >
                        <button className="uppercase bg-gradient-to-r gap-3 flex justify-between items-center w-full lg:w-fit from-orange-600 to-orange-600 text-white px-5 py-2 xl:px-7 2xl:py-2 rounded-full font-medium shadow-md hover:scale-105 duration-500 cursor-pointer">
                           MEET OUR TEAM OF PAIN SPECIALISTS
                            <Image
                                className="group-hover:-rotate-45 w-10 h-10 duration-700 bg-white rounded-full p-3"
                                src="/images/orangearrow.svg"
                                width={20}
                                height={20}
                                alt="arrow"
                            />
                        </button>

                    </Link>
                    
                </div>
            </div>
        </section>
    );
}