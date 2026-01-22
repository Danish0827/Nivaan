"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "../Treatments/SectionHeader";
import FaqSection from "../Treatments/FaqSection";
import CallbackForm from "../CallbackForm";
import ClinicSection from "./ClinicSection";
import SpecialistsSection from "./SpecialistsSection";
import Symptoms from "./Symptoms";
import ConditionSection from "./ConditionSection";
import WhyNivaan from "./WhyNivaan";
import TreatmentSection from "./TreatmentSection";
import RecoveryTimeline from "./RecoveryTimeline";
import Patient from "./Patient";
import OtherConditionSection from "./OtherConditionSection";

interface SectionItem {
  id: string;
  label: string;
}
export default function LocationTargetingSection({ data ,breadcrumbTitle }: { data: any ,breadcrumbTitle:any}) {
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
        rootMargin: "-15% 0px -15% 0px", // smaller negative margin
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen bg-white relative font-mono">
      <div className="px-4 lg:px-7 xl:px-7 2xl:px-16 md:flex flex-row-reverse gap-6 lg:gap-6 2xl:gap-10 py-16">
        {/* Content */}
        <main className="flex-1 space-y-28 2xl:space-y-40 mb-8 lg:mb-0">
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
              <Symptoms data={data} />
            </section>
          }
          {data?.why_subtitle &&
            <section id="why" className="scroll-mt-28">
              <SectionHeader
                subtitle={data?.why_subtitle}
                title={data?.why_title}
              />
              <WhyNivaan data={data} />
            </section>
          }
          {data?.conditions_subtitle &&
            <section id="conditions" className="scroll-mt-28">
              <SectionHeader
                subtitle={data?.conditions_subtitle}
                title={data?.conditions_title}
              />
              <ConditionSection data={data} />
            </section>
          }
          {data?.treatments_title &&
            <section id="treatments" className="scroll-mt-28">
              <SectionHeader
                subtitle={data?.treatments_subtitle}
                title={data?.treatments_title}
              />
              <TreatmentSection data={data} />
            </section>
          }
          {data?.recovery_subtitle &&
            <section id="recoverys" className="scroll-mt-28">
              <SectionHeader
                subtitle={data?.recovery_subtitle}
                title={data?.recovery_title}
              />
              <RecoveryTimeline data={data} />
            </section>
          }
          {data?.patient_subtitle &&
            <section id="patient" className="scroll-mt-28">
              <SectionHeader
                subtitle={data?.patient_subtitle}
                title={data?.patient_title}
              />
              <Patient data={data} />
            </section>
          }
          {data?.other_subtitle &&
            <section id="other" className="scroll-mt-28">
              <SectionHeader
                subtitle={data?.other_subtitle}
                title={data?.other_title}
              />
              <OtherConditionSection data={data} />
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
        <aside
          className="w-full md:w-72 xl:w-80 2xl:w-80 md:sticky top-28 max-h-[calc(100vh-7rem)] h-fit font-sans overflow-y-auto hide-scrollbar">
          <div className="bg-[#EEF8FD] rounded-3xl p-6">
            <h2 className="font-bold text-2xl mb-6 text-[#0852A0] text-center">
              {breadcrumbTitle?.name}
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
                      className={`w-8 h-8 rounded-full p-2 duration-300
                                                ${activeSection === s.id
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                        }`}
                      src="/images/leftarrow.svg"
                      width={20}
                      height={20}
                      alt="arrow"
                      unoptimized
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="pb-6">
            <CallbackForm />
          </div>
        </aside>
      </div>
    </div>
  );
}
