"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeader } from "../Treatments/SectionHeader";
import CallbackForm from "../CallbackForm";
import OverviewSection from "./OverviewSection";
import ShoulderJoint from "./ShoulderJoint";
import FaqSection from "@/components/Treatments/FaqSection";
import ConditionCarousel from "./ConditionCarousel";
import CausesCarousel from "./CausesCarousel";
import Stages from "./StagesSection";
import Symptoms from "./Symptoms";
import Diagnosis from "./Diagnosis";
import Approach from "./Approach";
import ConditionTreatment from "./ConditionTreatment";
import WhenToConsult from "./WhenToConsult";

interface SectionItem {
    id: string;
    label: string;
}
export default function ConditionSection({ data }: { data: any }) {
    const [activeSection, setActiveSection] = useState<string>("problem");
    const sections: SectionItem[] = [
        { id: "overview", label: data?.overview_subtitle },
        { id: "joint", label: data?.joint_subtitle },
        { id: "stages", label: data?.stages_subtitle },
        { id: "symptoms", label: data?.symptoms_subtitle },
        { id: "causes", label: data?.causes_subtitle },
        { id: "diagnosis", label: data?.diagnosis_subtitle },
        { id: "treatments", label: data?.treatments_subtitle },
        { id: "recovery", label: data?.recovery_subtitle },
        { id: "when", label: data?.when_subtitle },
        { id: "approach", label: data?.approach_subtitle },
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
                threshold: 0.3,
                rootMargin: "-20% 0px -40% 0px",
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
                <main className="flex-1 space-y-28 2xl:space-y-40 mb-8 lg:mb-0">
                    {/* Problem */}
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
                    {data?.joint_subtitle &&
                        <section id="joint" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.joint_subtitle}
                                title={data?.joint_title}
                            />
                            <ShoulderJoint jointDescription={data?.joint_description} />
                        </section>
                    }

                    {data?.stages_subtitle &&
                        <section id="stages" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.stages_subtitle}
                                title={data?.stages_title}
                            />
                            <Stages
                                stages_description={data.stages_description}
                                stages_lists={data.stages_lists}
                                stages_image={data.stages_image}
                                stages_2nd_description={data.stages_2nd_description}
                            />
                        </section>
                    }

                    {data?.symptoms_subtitle &&
                        <section id="symptoms" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.symptoms_subtitle}
                                title={data?.symptoms_title}
                            />
                            <Symptoms symptoms_description={data.symptoms_description} symptoms_image={data.symptoms_image} symptoms_2nd_description={data.symptoms_2nd_description} />
                        </section>
                    }

                    {data?.causes_subtitle &&
                        <section id="causes" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.causes_subtitle}
                                title={data?.causes_title}
                            />
                            <CausesCarousel
                                data={data}
                            />
                        </section>
                    }

                    {data?.diagnosis_subtitle &&
                        <section id="diagnosis" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.diagnosis_subtitle}
                                title={data?.diagnosis_title}
                            />
                            <Diagnosis
                                data={data}
                            />
                        </section>
                    }
                    {data?.treatments_subtitle &&
                        <section id="treatments" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.treatments_subtitle}
                                title={data?.treatments_title}
                            />
                            <ConditionTreatment data={data} />
                        </section>
                    }

                    {data?.recovery_subtitle &&
                        <section id="recovery" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.recovery_subtitle}
                                title={data?.recovery_title}
                            />
                            <ConditionCarousel data={data} />
                        </section>
                    }

                    {data?.when_subtitle &&
                        <section id="when" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.when_subtitle}
                                title={data?.when_title}
                            />

                            <WhenToConsult
                                featuresHtml={data?.when_description}
                                image={data?.when_image?.url}
                                buttonbottom={data?.when_button_name}
                            />
                        </section>
                    }

                    {data?.approach_subtitle &&
                        <section id="approach" className="scroll-mt-32">
                            <SectionHeader
                                subtitle={data?.approach_subtitle}
                                title={data?.approach_title}
                            />
                            <Approach
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
                <aside
                    className="w-full md:w-72 xl:w-80 2xl:w-80 md:sticky top-28 max-h-[calc(100vh-7rem)] h-fit font-sans overflow-y-auto hide-scrollbar">
                    <div className="bg-[#EEF8FD] rounded-3xl p-6">
                        <h2 className="font-bold text-2xl mb-6 text-[#0852A0] text-center">
                            {data?.condition_type[0]?.title} Condition
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
