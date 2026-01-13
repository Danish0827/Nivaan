import Image from "next/image";
import parse from "html-react-parser";
import he from "he";

interface SymptomsProps {
  symptoms_description: string;
  symptoms_image: {
    url: string;
    alt: string;
  };
  symptoms_2nd_description: string;
}

export default function Symptoms({
  symptoms_description,
  symptoms_image,
  symptoms_2nd_description,
}: SymptomsProps) {
  return (
    <section className="bg-white container mr-auto ">
      {/* Top Description */}
      <div className="max-w-4xl mb-6 text-[#475569]">
        {parse(he.decode(symptoms_description))}
      </div>

      {/* Image */}
      {symptoms_image.url &&
      <div className="relative w-full h-[260px] md:h-[360px] lg:h-[420px] rounded-[32px] overflow-hidden mb-10 shadow-lg">
        <Image
          src={symptoms_image.url}
          alt={symptoms_image.alt || "Frozen Shoulder Symptoms"}
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>}

      {/* Bottom Content Box */}
      <div className="border border-[#E2E8F0] rounded-[32px] p-6 md:p-10">
        <div
          className="symptoms-content text-gray-800"
        >
          {parse(he.decode(symptoms_2nd_description))}
        </div>
      </div>
    </section>
  );
}
