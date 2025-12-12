import Image from "next/image";

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
            <div className="w-full bg-[#003B73] rounded-[40px] lg:rounded-[80px] px-5 lg:px-10 py-10 lg:py-20">
                <div className="text-center max-w-5xl mx-auto mb-8 lg:mb-14">
                    <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
                    <p className="text-sm md:text-lg mt-4 opacity-90 leading-relaxed">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-4 rounded-full flex items-center gap-2 transition">
                        MEET OUR TEAM OF PAIN SPECIALISTS
                        <span className="text-xl">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}