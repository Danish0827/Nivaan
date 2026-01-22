"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "./SectionHeader";
import CallbackForm from "../CallbackForm";
import ProblemAwareness from "./ProblemAwareness";
import OverviewSection from "./OverviewSection";
import TargetAudience from "./TargetAudience";
import HowItWorks from "./HowItWorks";
import TreatmentCarousel from "./TreatmentCarousel";
import Benefits from "./Benefits";
import FaqSection from "./FaqSection";
import WhyNivaan from "./WhyNivaan";
import RecoveryTimeline from "./RecoveryTimeline";
import SafetyRisk from "./SafetyRisk";

interface SectionItem {
    id: string;
    label: string;
}
export default function TreatmentSection({ data }: { data: any }) {
    const [activeSection, setActiveSection] = useState<string>("problem");
    const sections: SectionItem[] = [
        { id: "problem", label: data?.problem_subtitle },
        { id: "overview", label: data?.overview_subtitle },
        { id: "treatment", label: data?.treatment_subtitle },
        { id: "target", label: data?.target_subtitle },
        { id: "how", label: data?.how_subtitle },
        { id: "benefits", label: data?.benefits_subtitle },
        { id: "why", label: data?.why_subtitle },
        { id: "recoverys", label: data?.recovery_subtitle },
        { id: "safety", label: data?.safety_subtitle },
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
        <div className="min-h-screen bg-white relative font-mono">
            <div className="px-4 lg:px-7 xl:px-7 2xl:px-16 md:flex flex-row-reverse gap-6 lg:gap-6 2xl:gap-10 py-16">
                {/* Content */}
                <main className="flex-1 space-y-28 2xl:space-y-40 mb-8 lg:mb-0">
                    {/* Problem */}
                    {data?.problem_subtitle &&
                        <section id="problem" className="scroll-mt-28">
                            <SectionHeader
                                subtitle={data?.problem_subtitle}
                                title={data?.problem_title}
                                midtitle={data?.problem_after_title_text}
                            />
                            <ProblemAwareness
                                subtitle={data?.problem_subtitle}
                                title={data?.problem_title}
                                description={data?.problem_description}
                                image={data?.problem_image?.url}
                                buttonText={data?.problem_button_name}
                            />
                        </section>
                    }
                    {/* Overview */}
                    {data?.overview_subtitle &&
                        <section id="overview" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.overview_subtitle}
                                title={data?.overview_title}
                            />
                            <OverviewSection
                                description={data?.overview_description}
                                featuresHtml={data?.overview_description_with_image}
                                image={data?.overview__image?.url}
                                afterDescription={data?.overview_after_description}
                            />
                        </section>
                    }
                    {data?.treatment_subtitle &&

                        <section id="treatment" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.treatment_subtitle}
                                title={data?.treatment_title}
                            />

                            <TreatmentCarousel data={data} />
                        </section>
                    }
                    {data?.target_subtitle &&
                        <section id="target" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.target_subtitle}
                                title={data?.target_title}
                            />
                            <TargetAudience data={data} />
                        </section>
                    }
                    {data?.how_subtitle &&
                        <section id="how" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.how_subtitle}
                                title={data?.how_title}
                            />
                            <HowItWorks data={data} />
                        </section>
                    }
                    {data?.benefits_subtitle &&
                        <section id="benefits" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.benefits_subtitle}
                                title={data?.benefits_title}
                            />
                            <Benefits
                                description={data?.benefits_description}
                                featuresHtml={data?.benefits_description_with_image}
                                image={data?.benefits_image?.url}
                            />
                        </section>
                    }
                    {data?.why_subtitle &&
                        <section id="why" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.why_subtitle}
                                title={data?.why_title}
                            />
                            <WhyNivaan data={data} />
                        </section>
                    }
                    {data?.recovery_subtitle &&
                        <section id="recoverys" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.recovery_subtitle}
                                title={data?.recovery_title}
                            />
                            <RecoveryTimeline data={data} />
                        </section>
                    }

                    {data?.safety_subtitle &&
                        <section id="safety" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.safety_subtitle}
                                title={data?.safety_title}
                            />
                            <SafetyRisk
                                data={data}
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
                <aside
                    className="w-full md:w-72 xl:w-80 2xl:w-80 md:sticky top-28 max-h-[calc(100vh-7rem)] h-fit font-sans overflow-y-auto hide-scrollbar">
                    <div className="bg-[#EEF8FD] rounded-3xl p-6">
                        <h2 className="font-bold text-2xl mb-6 text-[#0852A0] text-center">
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
