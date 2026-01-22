"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "../Treatments/SectionHeader";
import FaqSection from "../Treatments/FaqSection";
import CallbackForm from "../CallbackForm";
import SpecialistsSection from "./SpecialistsSection";
import Symptoms from "./Symptoms";
import Patient from "./Patient";
import CTA from "./CTA";
import WhenToConsult from "./WhenToConsult";
import ApprochSection from "./ApprochSection";
import EvaluationSection from "./EvaluationSection";
import WhyNivaan from "./WhyNivaan";
import WhyNivaanOptimization from "./WhyNivaanOptimization";

interface SectionItem {
    id: string;
    label: string;
}
export default function LocationOptimizationSection({ data, breadcrumbTitle }: { data: any, breadcrumbTitle: any }) {
    const [activeSection, setActiveSection] = useState<string>("problem");
    const sections: SectionItem[] = [
        { id: "specialists", label: data?.specialists_subtitle },
        { id: "when", label: data?.when_subtitle },
        { id: "symptoms", label: data?.symptoms_subtitle },
        { id: "evaluation", label: data?.evaluation_subtitle },
        { id: "approach", label: data?.approach_subtitle },
        { id: "why", label: data?.why_subtitle },
        { id: "patient", label: data?.patient_subtitle },
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
                    {data?.specialists_subtitle &&
                        <section id="specialists" className="scroll-mt-28">
                            <SectionHeader
                                subtitle={data?.specialists_subtitle}
                                title={data?.specialists_title}
                            />
                            <SpecialistsSection data={data} />
                        </section>
                    }
                    {data?.when_subtitle &&
                        <section id="when" className="scroll-mt-28">
                            <SectionHeader
                                subtitle={data?.when_subtitle}
                                title={data?.when_title}
                            />
                            <WhenToConsult
                                featuresHtml={data?.when_description}
                                featuresHtml2={data?.when_3th_description}
                                mainfeaturesHtml={data?.when_2nd_description}
                                image={data?.when_image?.url}
                                buttonbottom={data?.when_button_name}
                            />
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
                    {data?.evaluation_subtitle &&
                        <section id="evaluation" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.evaluation_subtitle}
                                title={data?.evaluation_title}
                            />

                            <EvaluationSection data={data} />
                        </section>
                    }
                    {data?.approach_subtitle &&
                        <section id="approach" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.approach_subtitle}
                                title={data?.approach_title}
                            />

                            <ApprochSection
                                featuresHtml={data?.approach_description}
                                featuresHtml2={data?.approach_3th_description}
                                mainfeaturesHtml={data?.approach_2nd_description}
                                image={data?.approach_image?.url}
                            />
                        </section>
                    }
                    {data?.why_subtitle &&
                        <section id="why" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.why_subtitle}
                                title={data?.why_title}
                            />

                            <WhyNivaanOptimization
                                data={data}
                            />
                        </section>
                    }
                    {data?.patient_subtitle &&
                        <section id="patient" className="scroll-mt-28">
                            <SectionHeader
                                subtitle={data?.patient_subtitle}
                                title={data?.patient_title}
                            />
                            <Patient data={data} />
                            <CTA data={data} />
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
