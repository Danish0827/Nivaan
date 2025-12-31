import React from "react";

type ProblemSectionProps = {
  title: string;
  paragraphs: string[];
  highlightText: string;
  conclusionText: string;
  buttonText: string;
  onButtonClick?: string;
  highlightText2?:string;
  imageSrc: string;
  imageAlt?: string;
};

const ProblemSection: React.FC<ProblemSectionProps> = ({
  title,
  paragraphs,
  highlightText,
  highlightText2,
  conclusionText,
  buttonText,
  onButtonClick,
  
  imageSrc,
  imageAlt = "Pain area image",
}) => {
  return (
    <section className="lg:py-12 max-w-[1600px] mx-auto px-6 xl:px-10 2xl:px-0 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center font-mono">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0852A0] mb-6">
            {title}
          </h2>

          {paragraphs.map((text, index) => (
            <p key={index} className="text-gray-700 mb-4 leading-relaxed">
              {text}
            </p>
          ))}

          <p className="font-semibold text-gray-900 mb-4">
            {highlightText}
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            {conclusionText}
          </p>

          <p className="font-semibold text-gray-900 mb-8">
            {highlightText2}
          </p>

          {/* <button
            // onClick={onButtonClick}
            className="bg-[#FF6A3D] hover:bg-[#ff5722] text-white font-semibold px-8 py-3 rounded-full transition"
          >
            {buttonText}
          </button> */}
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="rounded-4xl w-full  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
