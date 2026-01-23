import { aboutPageData } from "@/data/aboutPageData";
import { getFourDoctors } from "@/lib/api";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import UnderstandPain from "@/components/UnderstandPain";
import ProblemSection from "@/components/ProblemSection";
import ResultsSection from "@/components/ResultsSection";
import JourneySection from "@/components/JourneySection";
import WhatMakesNivaanDifferent from "@/components/WhatMakesNivaanDifferent";
import BuiltByPeopleSection from "@/components/BuiltByPeopleSection";
import ExpertsSection from "@/components/ExpertsSection";
import BetterWayCTA from "@/components/BetterWayCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nivaan Care | Advanced Non-Surgical Pain Management Clinic",
  description:
    "Nivaan Care is an advanced pain management clinic focused on non-surgical pain relief through expert doctors, modern technology, and patient-first care.",
  alternates: {
    canonical: "https://www.nivaancare.com/about-us",
  },
};

export default async function AboutPage() {
    const doctors = await getFourDoctors();

    return (
        <>
            <PageBreadcrumb title="About Nivaan" />
            <UnderstandPain
                imageUrl={aboutPageData.understandPain.imageUrl}
                videoUrl={aboutPageData.understandPain.videoUrl}
                title={aboutPageData.understandPain.title}
                description={aboutPageData.understandPain.description}
                buttonText={aboutPageData.understandPain.buttonText}
                onButtonClick={aboutPageData.understandPain.buttonLink}
            />
            <ProblemSection {...aboutPageData.problemSection} />
            <ResultsSection {...aboutPageData.results} />
            <JourneySection journey={aboutPageData.journey} />
            <WhatMakesNivaanDifferent {...aboutPageData.whyDifferent} />
            <BuiltByPeopleSection {...aboutPageData.builtByPeople} />
            <ExpertsSection
                title="Care Led by Experts Who Work as One"
                description="At Nivaan, recovery does not depend on a single opinion. It depends on collaboration. Our specialists work closely together, sharing insights, reviewing progress, and adjusting care plans as needed. This team-based approach ensures that nothing important is missed and every decision supports meaningful, sustained improvement."
                doctordata={doctors?.data}
                button={{ url: "/doctors", title: "Meet Our Team of Pain Specialists" }}
            />
            <BetterWayCTA {...aboutPageData.betterWayCTA} />
        </>
    );
}
