import Image from "next/image";
import parse from "html-react-parser";
import he from "he";

interface StageItem {
  title: string;
  description: string;
}

interface StagesProps {
  stages_description: string;
  stages_lists: StageItem[];
  stages_image: {
    url: string;
    alt: string;
  };
  stages_2nd_description: string;
}

export default function Stages({
  stages_description,
  stages_lists,
  stages_image,
  stages_2nd_description,
}: StagesProps) {
  return (
    <section className="bg-white container mr-auto overview-list">
      {/* Header */}
      <div
        className="text-gray-700 pt-5 text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-4"
        dangerouslySetInnerHTML={{
          __html: stages_description
        }}
      />

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-2 py-10 gap-5 2xl:gap-10 items-start">
        {/* Left Image */}
        {stages_image.url &&
          <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-lg">
            <Image
              src={stages_image.url}
              alt={stages_image.alt || "Frozen Shoulder Stages"}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        }

        {/* Right Card */}
        {stages_lists &&
          <div className="bg-white rounded-[40px] shadow-lg p-8 md:p-10 relative">
            {/* Vertical Line */}
            {/* <div className="absolute left-10 md:left-16 top-12 bottom-0 w-0.5 h-[465px] lg:h-[380px] xl:h-[430px] 2xl:h-[370px] bg-[#284599]" /> */}
            <div className="space-y-10">
              {stages_lists.map((item, index) => (
                <div key={index} className="relative pl-14">
                  {/* Dot */}
                  <div className="absolute left-0 md:left-[18px] top-1 w-4 h-4  bg-[#284599] rounded-full" />

                  <p className="text-sm font-semibold uppercase text-[#2C6BE0] tracking-wide mb-1">
                    Stage {index + 1}
                  </p>

                  <h3 className="text-xl md:text-2xl font-bold text-[#1E3A8A] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-[#475569] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        }
      </div>

      {/* Bottom Description */}
      <div
        className="text-gray-600 my-6"
        dangerouslySetInnerHTML={{
          __html: stages_2nd_description
        }}
      />
    </section>
  );
}
