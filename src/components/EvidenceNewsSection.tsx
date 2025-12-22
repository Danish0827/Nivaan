"use client";
import { EvidenceCardProps, EvidenceNewsSectionProps } from "@/interfaces/EvidenceNewsSection";
import Image from "next/image";

export default function EvidenceNewsSection({ evidence, news }: EvidenceNewsSectionProps) {
  return (
    <section className="max-w-[1500px] mx-auto px-6 xl:px-10 2xl:px-0 py-16">
      <div className="grid lg:grid-cols-[52.5%_45%] xl:grid-cols-[57%_40%] gap-5 xl:gap-10">
        <div className="p-6 xl:p-8 rounded-3xl bg-white shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#004A86] pb-1">
            {evidence.title}
          </h2>
          <p className="text-gray-600 mt-2 mb-6">{evidence.info}</p>
          <div className="grid sm:grid-cols-2 gap-4 xl:gap-6">
            {evidence.boxs.map((item, index) => (
              <EvidenceCard key={index} item={item} />
            ))}
          </div>
        </div>
        <div className="p-6 xl:p-8 rounded-3xl bg-white shadow-[0_4px_30px_rgba(0,0,0,0.08)]">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#004A86] pb-1">
            {news.title}
          </h2>
          <p className="text-gray-600 mt-2 mb-6">{news.info}</p>
          <div className="w-full">
            <Image
              src={news.logo.url}
              alt={news.logo.title}
              width={1000}
              height={1000}
              className="object-contain w-full transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function EvidenceCard({ item }: EvidenceCardProps) {
  return (
    <div className="rounded-[50px] h-full bg-[#E8F4FF] border border-[#b1c8dd] px-4 py-5 xl:px-6 xl:py-7 text-center shadow-sm">
      <Image
        src={item.logo.url}
        alt={item.logo.title}
        width={200}
        height={100}
        className="mx-auto w-32 lg:w-36 xl:w-52 my-2 pb-3 object-contain"
      />
      <p className="text-gray-800 lg:text-sm xl:text-base font-bold leading-relaxed">
        {item.details}
      </p>
    </div>
  );
}
