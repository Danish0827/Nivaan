"use client";

import Image from "next/image";

interface StepIcon {
  id: number;
  url: string;
  alt: string;
}

interface StepItem {
  icon: StepIcon;
  title: string;
  description: string;
}

interface StepImage {
  id: number;
  url: string;
  alt: string;
}

interface NivaanStepsProps {
  step_title: string;
  step_designation: string;
  step_image: StepImage;
  steps: StepItem[];
  step_button_name: string;
}

export default function NivaanSteps({
  step_title,
  step_designation,
  step_image,
  steps,
  step_button_name,
}: NivaanStepsProps) {
  return (
    <section className="w-full bg-[#F5F8FF] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 grid lg:grid-cols-[40%_55%] gap-20">
        
        {/* LEFT TEXT + IMAGE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#284599] leading-tight">
            {step_title}
          </h2>

          <div
            className="text-gray-600 mt-3"
            dangerouslySetInnerHTML={{ __html: step_designation }}
          />

          <div className="mt-8 rounded-4xl overflow-hidden shadow-lg">
            <Image
              src={step_image.url}
              alt={step_image.alt || "steps image"}
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT STEPS */}
        <div className="relative">
          {/* Vertical Line */}

          <div className="space-y-10">
            {steps.map((step, index) => (
                <div key={index} className="relative pl-20 md:pl-24 lg:pl-20">
                
                {/* Step Icon */}
                <div className="absolute left-0 lg:-left-5 top-0 z-10">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#284599] shadow-md flex items-center justify-center">
                    <Image
                      src={step.icon.url}
                      alt={step.icon.alt}
                      width={35}
                      height={35}
                    />
                  </div>
                </div>
                  {index !== steps.length - 1 && (
      <div className="block absolute left-7.5 md:left-9.5 lg:left-4.5 top-12 h-full w-[3px] bg-[#284599]"></div>
    )}

                {/* STEP NUMBER */}
                <p className="text-sm font-semibold text-[#06A1DC]">
                  STEP {index + 1}
                </p>

                {/* Step Title */}
                <h3 className="text-2xl font-semibold text-black">
                  {step.title}
                </h3>

                {/* Description (HTML from backend) */}
                <div
                  className="text-black landing-h4-bold space-y-3 mt-2"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="mt-8 bg-[#FF8A4C] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#ff7b33] transition">
            {step_button_name}
          </button>
        </div>
      </div>
    </section>
  );
}
