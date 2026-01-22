"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqSection from "../Treatments/FaqSection";
import CallbackForm from "../CallbackForm";
import { SectionHeader } from "../Treatments/SectionHeader";
import OverviewSection from "./OverviewSection";
import KneePainTypes from "./KneePainTypes";
import LocationSection from "./LocationSection";
import Risks from "./Risks";
import Symptoms from "./Symptoms";
import CausesSection from "./CausesSection";
import TreatmentCarousel from "./TreatmentCarousel";
import RiskSection from "./RiskSection";
import Redflag from "./Redflag";
import Diagnosis from "./Diagnosis";
import PreventionSection from "./PreventionSection";
import BlogsSection from "./BlogsSection";
import Specialists from "./Specialists";
import RecoveryTimeline from "./RecoveryTimeline";
import Patient from "./Patient";

interface SectionItem {
    id: string;
    label: string;
}
export default function HubSection({ breadcrumbTitle, data }: { breadcrumbTitle: any, data: any }) {
    const [activeSection, setActiveSection] = useState<string>("problem");
    const sections: SectionItem[] = [
        { id: "overview", label: data?.overview_subtitle },
        { id: "type", label: data?.type_subtitle },
        { id: "location", label: data?.location_subtitle },
        { id: "risks", label: data?.risks_subtitle },
        { id: "symptoms", label: data?.symptoms_subtitle },
        { id: "causes", label: data?.causes_subtitle },
        { id: "treatment", label: data?.treatment_subtitle },
        { id: "risk", label: data?.risk_subtitle },
        { id: "red", label: data?.red_subtitle },
        { id: "diagnosis", label: data?.diagnosis_subtitle },
        { id: "recovery", label: data?.recovery_subtitle },
        { id: "prevention", label: data?.prevention_subtitle },
        { id: "specialists", label: data?.specialists_subtitle },
        { id: "patient", label: data?.patient_subtitle },
        { id: "blogs", label: data?.blogs_subtitle },
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
                threshold: 0.2, // previously 0.3, lower means section considered visible earlier
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
                <main className="flex-1 space-y-28 2xl:space-y-20 mb-8 lg:mb-0">
                    {data?.overview_subtitle &&
                        <section id="overview" className="scroll-mt-28">
                            <SectionHeader
                                subtitle={data?.overview_subtitle}
                                title={data?.overview_title}
                            />
                            <OverviewSection
                                data={data}
                            />
                        </section>
                    }
                    {data?.type_subtitle &&
                        <section id="type" className="scroll-mt-28">
                            <SectionHeader
                                subtitle={data?.type_subtitle}
                                title={data?.type_title}
                            />
                            <KneePainTypes data={data} />
                        </section>
                    }
                    {data?.location_subtitle &&
                        <section id="location" className="scroll-mt-28">
                            <SectionHeader
                                subtitle={data?.location_subtitle}
                                title={data?.location_title}
                            />
                            <LocationSection symptoms_description={data.location_description} symptoms_image={data.location_image} location_description_boxs={data.location_description_boxs} />
                        </section>
                    }
                    {data?.risks_subtitle &&
                        <section id="risks" className="scroll-mt-28">
                            <SectionHeader
                                subtitle={data?.risks_subtitle}
                                title={data?.risks_title}
                            />
                            <Risks data={data} />
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
                    {data?.causes_subtitle &&
                        <section id="causes" className="scroll-mt-28">
                            <SectionHeader
                                subtitle={data?.causes_subtitle}
                                title={data?.causes_title}
                            />
                            <CausesSection data={data} />
                        </section>
                    }
                    {data?.treatment_subtitle &&
                        <section id="treatment" className="scroll-mt-28">
                            <SectionHeader
                                subtitle={data?.treatment_subtitle}
                                title={data?.treatment_title}
                            />
                            <TreatmentCarousel data={data} />
                        </section>
                    }
                    {data?.risk_subtitle &&
                        <section id="risk" className="scroll-mt-28">
                            <SectionHeader
                                subtitle={data?.risk_subtitle}
                                title={data?.risk_title}
                            />
                            <RiskSection data={data} />
                        </section>
                    }
                    {data?.red_subtitle &&
                        <section id="red" className="scroll-mt-28">
                            <SectionHeader
                                subtitle={data?.red_subtitle}
                                title={data?.red_title}
                            />
                            <Redflag data={data} />
                        </section>
                    }
                    {data?.diagnosis_subtitle &&
                        <section id="diagnosis" className="scroll-mt-28">
                            <SectionHeader
                                subtitle={data?.diagnosis_subtitle}
                                title={data?.diagnosis_title}
                            />
                            <Diagnosis data={data} />
                        </section>
                    }
                    {data?.recovery_subtitle &&
                        <section id="recovery" className="scroll-mt-28">
                            <SectionHeader
                                subtitle={data?.recovery_subtitle}
                                title={data?.recovery_title}
                            />
                            <RecoveryTimeline data={data} />
                        </section>
                    }
                    {data?.prevention_subtitle &&
                        <section id="prevention" className="scroll-mt-28">
                            <SectionHeader
                                subtitle={data?.prevention_subtitle}
                                title={data?.prevention_title}
                            />
                            <PreventionSection data={data} />
                        </section>
                    }
                    {data?.specialists_subtitle &&
                        <section id="specialists" className="scroll-mt-28">
                            <SectionHeader
                                subtitle={data?.specialists_subtitle}
                                title={data?.specialists_title}
                            />
                            <Specialists data={data} />
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
                    {data?.blogs_subtitle &&
                        <section id="blogs" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.blogs_subtitle}
                                title={data?.blogs_title}
                            />
                            <BlogsSection data={data} />
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

                <aside
                    className="w-full md:w-72 xl:w-80 2xl:w-80 md:sticky top-28 max-h-[calc(100vh-7rem)] h-fit font-sans overflow-y-auto hide-scrollbar">
                    <div className="bg-[#EEF8FD] rounded-3xl p-6">
                        <h2 className="font-bold text-2xl mb-6 text-[#0852A0] text-center">
                            {breadcrumbTitle}
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
