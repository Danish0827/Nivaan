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
    target_description_with_image?: string;
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
              {data?.target_image &&
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
}
            </div>
          </div>

          {/* Symptoms */}
          <div>
           
            {data?.target_description_with_image && (
          <div className="text-gray-700 text-lg targetDescription lg:text-sm xl:text-base 2xl:text-xl leading-relaxed font-mono space-y-4">
            {parse(data?.target_description_with_image)}
          </div>
        )}
          </div>
        </div>
        {/* CTA */}
        {data?.button_text &&
            <button className="block mx-auto rounded-full bg-orange-500 px-8 py-3 text-white font-semibold hover:bg-orange-600 transition">
              {data?.button_text ||
                "Consult a Pain Specialist at Nivaan"}
            </button>
}
      </div>
    </section>
  );
}
