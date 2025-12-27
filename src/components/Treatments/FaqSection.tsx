"use client";

import { useState } from "react";
import parse from "html-react-parser";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs?: FaqItem[];
}

export default function FaqSection({ faqs = [] }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pt-5 overview-section">
      <div className="container mr-auto">
        <div className="rounded-3xl border border-gray-200 overflow-hidden bg-white">          
          {faqs && faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-gray-200 last:border-none"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full cursor-pointer flex items-center justify-between gap-4 px-5 mt-1 py-5 text-left"
                >
                  <div className="text-base lg:text-xl font-medium text-black mb-1">
                    {faq.question}
                  </div>

                  <span className="text-2xl font-light text-gray-600">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-gray-600 prose max-w-none">
                      {parse(faq.answer ?? "")}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
