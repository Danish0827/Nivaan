import React from "react";
import RequestCallbackModal from "./RequestCallbackModal";

type BetterWayCTAProps = {
  title: string;
  description: string;
};

const BetterWayCTA: React.FC<BetterWayCTAProps> = ({
  title,
  description,
}) => {
  return (
    <section className="bg-[#284599] px-4 md:px-10 py-12 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Left Content */}
        <div className="max-w-2xl">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-[#D9E3F5] leading-relaxed">
            {description}
          </p>
        </div>

        {/* Right Button */}
        <div>
          <RequestCallbackModal buttonText="Book Your Consultation" id="about-book-appointment-consultation" />
        </div>

      </div>
    </section>
  );
};

export default BetterWayCTA;
