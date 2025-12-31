import React from "react";

type BuiltByPeopleSectionProps = {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt?: string;
};

const BuiltByPeopleSection: React.FC<BuiltByPeopleSectionProps> = ({
  title,
  paragraphs,
  imageSrc,
  imageAlt = "Pain treatment image",
}) => {
  return (
    <section className="max-w-[1600px] mx-auto px-6 xl:px-10 2xl:px-0 py-12">
      <div className="bg-[#EAF6FB] border border-[#9EC5E5] rounded-[28px] p-6 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#0B4AA2] mb-5">
              {title}
            </h2>

            {paragraphs.map((text, index) => (
              <p
                key={index}
                className="text-gray-700 mb-4 leading-relaxed"
              >
                {text}
              </p>
            ))}
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-4xl w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BuiltByPeopleSection;
