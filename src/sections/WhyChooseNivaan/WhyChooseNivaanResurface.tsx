import React from "react";
import { FC } from "react";
import { CheckCircle } from "lucide-react"; // you can change icon if needed
import Image from 'next/image';

const features = [
  {
    title: "Multidisciplinary Approach",
    description:
      "A Dedicated Panel of Senior Orthopaedic Surgeon, Pain Specialist and Physiotherapist",
  },
  {
    title: "Dedicated Care Manager",
    description:
      "24×7 dedicated care manager for seamless, end-to-end support",
  },
  {
    title: "Personalised Rehab Program",
    description:
      "A recovery plan designed around your unique needs and goals",
  },
];

const WhyChooseNivaan: FC = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">
          Why Choose Nivaan?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl border border-black p-6 hover:shadow-xl transition duration-300 bg-transparent"
            >
              <div className="flex justify-center mb-4">
                {/* <CheckCircle className="h-10 w-10 text-blue-600" /> */}
                <Image
                  src={require('../../../public/icon.png')}
                  alt="Icon"
                  width={30}
                  height={40}
                  loading="eager"
                  priority={true}
                  quality={30}
                  unoptimized
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNivaan;