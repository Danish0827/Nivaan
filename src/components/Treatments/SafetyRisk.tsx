import React from "react";

interface SafetyData {
  safety_subtitle: string;
  safety_title: string;
  safety_description: string; // HTML from API
  cta_title: string;
  cta_button_name: string;
  cta_description: string; // HTML from API
}
interface SafetyRiskProps {
  data: SafetyData;
}

const SafetyRisk: React.FC<SafetyRiskProps> = ({
  data
}) => {
  return (
    <section className="w-full bg-white overview-section">
      {/* Safety Content */}
      <div className="container mr-auto">

        {/* Description (HTML from API) */}
        <div
          className="prose prose-sm md:prose-base max-w-none text-gray-700
            prose-h3:text-lg prose-h3:text-blue-600
            prose-h4:text-sm prose-h4:uppercase prose-h4:text-blue-600
            prose-ul:list-disc prose-ul:pl-5 mb-7
            prose-li:marker:text-orange-500"
          dangerouslySetInnerHTML={{
            __html: data.safety_description
          }}
        />
      </div>

      {/* CTA Section */}
      <div style={{
        backgroundImage: "url('/images/cta.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} className="w-full bg-blue-50 py-10 overview-section relative rounded-[40px]">
        <div className="absolute inset-0 bg-gradient-to-l from-[#eaf9ff] to-[#eaf9ffb7] rounded-[40px]"></div>
        <div className="relative z-10  px-4 text-center">
          <h2 className="text-xl lg:text-2xl xl:text-4xl text-[#0852A0] font-bold mt-5 mb-3">
            {data.cta_title}
          </h2>
          <div
            className="text-gray-700 mb-8 prose prose-sm md:prose-base max-w-none mx-auto space-y-2 px-6"
            dangerouslySetInnerHTML={{
              __html: data.cta_description
            }}
          />
          {data.cta_button_name &&
            <button
              // onClick={onCTAClick}
              className="inline-block cursor-pointer rounded-full bg-orange-500 px-8 py-3 text-white font-semibold hover:bg-orange-600 transition">
              {data.cta_button_name}
            </button>
          }
        </div>
      </div>
    </section>
  );
};

export default SafetyRisk;
