import Image from "next/image";

export interface FeatureItem {
  title: string;
  description: string;
  icon: string; // icon image path or svg
}

interface Props {
  heading: string;
  description: string;
  image: string;
  imageAlt?: string;
  sectionTitle: string;
  features: FeatureItem[];
}

export default function WhatMakesNivaanDifferent({
  heading,
  description,
  image,
  imageAlt = "Nivaan Clinic",
  sectionTitle,
  features,
}: Props) {
  return (
    <section className="bg-[#F6FBFF] py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Top Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#0B4AA6]">
            {heading}
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            {description}
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[30%_67%] gap-8 items-center">
          {/* Left Image */}
          <div className="relative rounded-3xl overflow-hidden h-full shadow-lg">
            <Image
              src={image}
              alt={imageAlt}
              width={1000}
              height={1000}
              className="w-full h-full object-cover object-center"
              unoptimized
            />
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-3xl shadow-lg p-6 md:p-10">
            <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold text-[#1E3A8A] mb-6">
              {sectionTitle}
            </h3>

            <div className="space-y-6">
              {features.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#1E3A8A] flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={60}
                      height={60}
                      style={{ filter: 'brightness(100)' }}
                      className="p-2"
                      unoptimized
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="text-sm md:text-base lg:text-lg xl:text-xl mb-2 font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
