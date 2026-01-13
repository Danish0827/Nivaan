import Image from "next/image";
import parse from "html-react-parser";
import he from "he";

interface SymptomsProps {
  symptoms_description: string;
  symptoms_image: {
    url: string;
    alt: string;
  };
  location_description_boxs: any;
}

export default function LocationSection({
  symptoms_description,
  symptoms_image,
  location_description_boxs,
}: SymptomsProps) {
  return (
    <section className="bg-white container mr-auto overview-section py-6">
      <div className="text-gray-700 text-lg  lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono mb-10">
        {parse(he.decode(symptoms_description))}
      </div>
      {/* Image */}
      {symptoms_image.url &&
        <div className="relative w-full h-[260px] md:h-[360px] lg:h-[420px] rounded-[40px] overflow-hidden mb-10 shadow-lg">
          <Image
            src={symptoms_image.url}
            alt={symptoms_image.alt || "Frozen Shoulder Symptoms"}
            width={2000}
            height={2000}
            className="object-cover"
            priority
            unoptimized
          />
        </div>}

      {/* Bottom Content Box */}
      {location_description_boxs &&
        <div className="space-y-10">
          {location_description_boxs?.map((item: any, index: number) => (
            <div
              key={index}
              className="border border-[#E2E8F0] rounded-[40px] p-6 md:p-10 bg-white"
            >
              <div className="symptoms-content text-gray-800 space-y-3">
                {parse(he.decode(item.description))}
              </div>
            </div>
          ))}
        </div>
      }
    </section>
  );
}
