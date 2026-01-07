"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "../Treatments/SectionHeader";
import FaqSection from "../Treatments/FaqSection";
import CallbackForm from "../CallbackForm";
import ClinicSection from "./ClinicSection";
import SpecialistsSection from "./SpecialistsSection";

interface SectionItem {
  id: string;
  label: string;
}
export default function LocationTargetingSection({ data }: { data: any }) {
  const [activeSection, setActiveSection] = useState<string>("problem");
  const sections: SectionItem[] = [
    { id: "clinic", label: data?.clinic_subtitle },
    { id: "specialists", label: data?.specialists_subtitle },
    { id: "symptoms", label: data?.symptoms_subtitle },
    { id: "why", label: data?.why_subtitle },
    { id: "conditions", label: data?.conditions_subtitle },
    { id: "treatments", label: data?.treatments_subtitle },
    { id: "recoverys", label: data?.recovery_subtitle },
    { id: "patient", label: data?.patient_subtitle },
    { id: "other", label: data?.other_subtitle },
    { id: "faqs", label: data?.faqs_subtitle },
  ].filter(
    (section): section is SectionItem =>
      typeof section.label === "string" && section.label.trim() !== ""
  );

  useEffect(() => {
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // previously 0.3, lower means section considered visible earlier
        rootMargin: "-10% 0px -10% 0px", // smaller negative margin
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen bg-white relative z-30 font-mono">
      <div className="px-4 lg:px-7 xl:px-7 2xl:px-24 md:flex flex-row-reverse gap-6 lg:gap-6 2xl:gap-10 py-16">
        {/* Content */}
        <main className="flex-1 space-y-28 2xl:space-y-40">
          {/* Problem */}
          {data?.clinic_subtitle &&
            <section id="clinic" className="scroll-mt-28">
              <SectionHeader
                subtitle={data?.clinic_subtitle}
                title={data?.clinic_title}
              />
              <ClinicSection data={data} />
            </section>
          }
          {data?.specialists_subtitle &&
            <section id="specialists" className="scroll-mt-28">
              <SectionHeader
                subtitle={data?.specialists_subtitle}
                title={data?.specialists_title}
              />
              <SpecialistsSection data={data} />
            </section>
          }
          {data?.symptoms_subtitle &&
            <section id="symptoms" className="scroll-mt-28">
              <SectionHeader
                subtitle={data?.symptoms_subtitle}
                title={data?.symptoms_title}
              />
            </section>
          }
          {data?.why_subtitle &&
            <section id="why" className="scroll-mt-28">
              <SectionHeader
                subtitle={data?.why_subtitle}
                title={data?.why_title}
              />
            </section>
          }
          {data?.conditions_subtitle &&
            <section id="conditions" className="scroll-mt-28">
              <SectionHeader
                subtitle={data?.conditions_subtitle}
                title={data?.conditions_title}
              />
            </section>
          }
          {data?.treatments_title &&
            <section id="treatments" className="scroll-mt-28">
              <SectionHeader
                subtitle={data?.treatments_subtitle}
                title={data?.treatments_title}
              />
            </section>
          }
          {data?.recovery_subtitle &&
            <section id="recoverys" className="scroll-mt-28">
              <SectionHeader
                subtitle={data?.recovery_subtitle}
                title={data?.recovery_title}
              />
            </section>
          }
          {data?.patient_subtitle &&
            <section id="patient" className="scroll-mt-28">
              <SectionHeader
                subtitle={data?.patient_subtitle}
                title={data?.patient_title}
              />
            </section>
          }
          {data?.other_subtitle &&
            <section id="other" className="scroll-mt-28">
              <SectionHeader
                subtitle={data?.other_subtitle}
                title={data?.other_title}
              />
            </section>
          }
          {data?.faqs_subtitle &&
            <section id="faqs" className="scroll-mt-32">
              <SectionHeader
                subtitle={data?.faqs_subtitle}
                title={data?.faqs_title}
                midtitle={data?.faqs_description}
              />
              <FaqSection faqs={data.faqs} />
            </section>
          }
        </main>
        {/* Sidebar */}
        <aside className="w-full md:w-72 xl:w-80 2xl:w-96 md:sticky top-28 h-fit font-sans">
          <div className="bg-[#EEF8FD] rounded-3xl p-6">
            <h2 className="font-bold text-2xl mb-6 text-[#0852A0] text-center ">
              {data?.treatment_types?.title} Treatments
            </h2>
            <ul className="space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`#${s.id}`}
                    className={`flex items-center justify-between px-4 py-3 rounded-full transition group
                                        ${activeSection === s.id
                        ? "bg-[#DDF1FB] font-semibold text-black"
                        : "text-gray-600 hover:bg-[#DDF1FB]"
                      }`}
                  >
                    {s.label}
                    <Image
                      className={`group-hover:opacity-100 w-8 h-8 duration-500 rounded-full p-2 ${activeSection === s.id ? "opacity-100" : "opacity-0"}`}
                      src="/images/leftarrow.svg"
                      width={20}
                      height={20}
                      alt="arrow"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <CallbackForm />
        </aside>
      </div>
    </div>
  );
}
