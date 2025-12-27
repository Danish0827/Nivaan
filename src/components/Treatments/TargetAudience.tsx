"use client";
import Image from "next/image";
import parse from "html-react-parser";

interface Props {
  data?: {
    title?: string;
    target_description?: string;
    target_image?: {
      url: string;
      alt?: string;
    };
    symptoms_title?: string;
    symptoms?: string[];
    button_text?: string;
  };
}

export default function TargetAudience({ data }: Props) {
  return (
    <section className="w-full bg-white overview-section">
      <div className="container mr-auto">
        {/* Top Heading */}
        {data?.target_description && (
          <div className="text-gray-700 text-lg lg:text-sm xl:text-base 2xl:text-xl leading-relaxed font-mono space-y-4">
            {parse(data?.target_description)}
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[40%_60%] gap-10 items-start py-10">
          {/* Image */}
          <div className="w-full">
            <div className="relative rounded-[40px] overflow-hidden">
              <Image
                src={
                  data?.target_image?.url ||
                  "https://via.placeholder.com/600x600"
                }
                alt={data?.target_image?.alt || "Knee Pain"}
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Symptoms */}
          <div>
            <h3 className="text-lg font-semibold text-[#0F2A44] mb-5">
              {data?.symptoms_title ||
                "Symptoms And Conditions We Treat"}
            </h3>

            <ul className="space-y-4">
              {(data?.symptoms || [
                "Patellar Tendinopathy or 'Jumper's Knee' that limits sports performance.",
                "Mechanical pain triggered by climbing stairs, squatting, or running.",
                "Early Osteoarthritis causing morning stiffness or aching.",
                "Recurring swelling or a feeling of tightness after activity.",
                "Persistent pain that returns despite rest or previous medications.",
              ]).map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#F36B2B] text-white text-xs font-bold">
                    ✓
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item}
                  </p>
                </li>
              ))}
            </ul>            
          </div>
        </div>
        {/* CTA */}
            <button className="block mx-auto rounded-full bg-orange-500 px-8 py-3 text-white font-semibold hover:bg-orange-600 transition">
              {data?.button_text ||
                "Consult a Pain Specialist at Nivaan"}
            </button>
      </div>
    </section>
  );
}
