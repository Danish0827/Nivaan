import Image from "next/image";

interface OverviewSectionProps {
  subtitle?: string;
  title?: string;
  description?: string;
  featureTitle?: string;
  featuresHtml?: string; // UL from ACF
  image?: string;
  afterDescription?: string;
}

export default function OverviewSection({
  description,
  featuresHtml,
  image,
  afterDescription,
}: OverviewSectionProps) {
  return (
    <section className="bg-white ">
      <div className="container mr-auto space-y-10">
        {/* Top Content */}
        <div className="space-y-4 overview-section"> 
          {description && (
            <div
              className="text-gray-700 text-base xl:text-lg font-mono space-y-4"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>
        {/* Gradient Box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[36px]">
          {/* Left – Features */}
          <div className="bg-gradient-to-br from-[#0EA5E9] to-[#0B4FA3] p-8 lg:p-8 items-center flex text-white">
            {featuresHtml && (
              <div
                className="overview-list text-base xl:text-lg space-y-6"
                dangerouslySetInnerHTML={{ __html: featuresHtml }}
              />
            )}
          </div>
          {/* Right – Image */}
          <div className="relative w-full min-h-[280px] lg:min-h-full object-cover">
            <Image
              src={image || "/images/dummy/knee-ultrasound.webp"}
              alt="Non-surgical knee treatment"
               width={800}
              height={800}
              className="object-cover h-full w-full"
              unoptimized
            />
          </div>
        </div>
        {/* Bottom Text */}
        {afterDescription && (
          <div
            className="text-gray-700 text-base xl:text-lg font-mono space-y-4"
            dangerouslySetInnerHTML={{ __html: afterDescription }}
          />
        )}
      </div>
    </section>
  );
}
