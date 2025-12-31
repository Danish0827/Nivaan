import BetterWayCTA from '@/components/BetterWayCTA'
import BuiltByPeopleSection from '@/components/BuiltByPeopleSection'
import ExpertsSection from '@/components/ExpertsSection'
import JourneySection from '@/components/JourneySection'
import { PageBreadcrumb } from '@/components/PageBreadcrumb'
import ProblemSection from '@/components/ProblemSection'
import ResultsSection from '@/components/ResultsSection'
import UnderstandPain from '@/components/UnderstandPain'
import WhatMakesNivaanDifferent from '@/components/WhatMakesNivaanDifferent'
import { url } from 'inspector'
import React from 'react'

const journey = {
    "title": "How Your Chronic Pain Care Works at Nivaan",
    "info": "Your care journey is structured and transparent from the beginning.",
    "button": {
        "url": "",
        "title": "",
        "target": ""
    },
    "list": [
        {
            "image": {
                "id": 80,
                "url": "https://www.hclient.in/nivaan/wp-content/uploads/2025/12/Explore-Complete-Recovery.webp",
                "alt": "",
                "mime_type": "image/webp",
                "title": "Explore Complete Recovery",
                "description": ""
            },
            "icon": {
                "id": 65,
                "url": "https://www.hclient.in/nivaan/wp-content/uploads/2025/12/expert-team-for-your-pain.svg",
                "alt": "",
                "mime_type": "image/svg+xml",
                "title": "expert-team-for-your-pain",
                "description": ""
            },
            "title": "Start with a comprehensive pain evaluation and diagnosis",
            "info": ""
        },
        {
            "image": {
                "id": 82,
                "url": "https://www.hclient.in/nivaan/wp-content/uploads/2025/12/Precise-Diagnosis.webp",
                "alt": "",
                "mime_type": "image/webp",
                "title": "Precise Diagnosis",
                "description": ""
            },
            "icon": {
                "id": 83,
                "url": "https://www.hclient.in/nivaan/wp-content/uploads/2025/12/precise-diagnosis-icon.svg",
                "alt": "",
                "mime_type": "image/svg+xml",
                "title": "precise-diagnosis-icon",
                "description": ""
            },
            "title": "Receive a personalized, non-surgical care plan",
            "info": ""
        },
        {
            "image": {
                "id": 250,
                "url": "https://www.hclient.in/nivaan/wp-content/uploads/2025/12/Rectangle-10.webp",
                "alt": "",
                "mime_type": "image/webp",
                "title": "Rectangle (10)",
                "description": ""
            },
            "icon": {
                "id": 247,
                "url": "https://www.hclient.in/nivaan/wp-content/uploads/2025/12/Group-237871.svg",
                "alt": "",
                "mime_type": "image/svg+xml",
                "title": "Group 237871",
                "description": ""
            },
            "title": "Progress through coordinated treatment and rehabilitation",
            "info": ""
        },
        {
            "image": {
                "id": 249,
                "url": "https://www.hclient.in/nivaan/wp-content/uploads/2025/12/Rectangle-11.webp",
                "alt": "",
                "mime_type": "image/webp",
                "title": "Rectangle (11)",
                "description": ""
            },
            "icon": {
                "id": 248,
                "url": "https://www.hclient.in/nivaan/wp-content/uploads/2025/12/Group-237872.svg",
                "alt": "",
                "mime_type": "image/svg+xml",
                "title": "Group 237872",
                "description": ""
            },
            "title": "Adapt the plan as you improve, without disruption or repetition",
            "info": ""
        }
    ],
    "behind": "Behind the scenes, your care team stays aligned so that your recovery remains consistent, focused, and responsive to change."
}
const aboutpage = async () => {
    const res1 = await fetch(
        `https://hclient.in/nivaan/wp-json/site/v1/doctors?page=1&per_page=4`,
        {
            next: { revalidate: 60 }, // IMPORTANT
        }
    );

    if (!res1.ok) {
        console.error("API failed", res1.status);
        return null;
    }

    let data1;
    try {
        data1 = await res1.json();
    } catch (err) {
        console.error("JSON parse failed");
        return null;
    }
    return (
        <>
            <PageBreadcrumb title={"About Nivaan"} />
            <UnderstandPain
                imageUrl="https://www.hclient.in/nivaan/wp-content/uploads/2025/12/Understand-Video-Image.webp"
                videoUrl="https://www.hclient.in/nivaan/wp-content/uploads/2025/12/understand-your-pain.mp4"
                title="We Rethink Pain. So You Can Rethink Life."
                description="<p>Pain has a way of quietly taking over your life. How you move. How you work. How you rest. Over time, it begins to shape what you avoid, what you postpone, and what you accept as normal.</p><p>Nivaan exists to change that.</p><p>Nivaan is India’s largest Centre of Excellence for Interventional Pain Management and Regenerative Medicines. At Nivaan, we help people move beyond musculoskeletal pain through evidence-based protocols and structured, non-surgical care. Our focus is not temporary relief. It is understanding the root cause of pain and addressing it with precision, coordination, and continuity.</p><p>Care at Nivaan is designed to be connected, thoughtful, and centred around the individual. Integrated, people-centric pain solution is not an exception here. It is the standard.</p>"
                buttonText="Take The Next Step"
                onButtonClick="/contct-us"
            />
            <ProblemSection
                title="The Problem We Refuse To Accept"
                paragraphs={[
                    "Most pain care approaches force patients into an unfair choice.",
                    "Get intermittent relief from painkillers or move quickly toward surgery, else, live with ongoing pain."
                ]}
                highlightText="For many patients, neither option feels right."
                highlightText2="We believed there had to be a better way."
                conclusionText="Pain is complex. Treating it in fragments often leads to partial relief, repeated flare-ups, and uncertainty about what to do next."
                buttonText="LEARN MORE"
                imageSrc="/images/about-1.webp"
                onButtonClick=""
            />

            <ResultsSection
                image="https://www.hclient.in/nivaan/wp-content/uploads/2025/12/nivaan-slideshow.mp4"
                title="Results You Can Feel and Trust"
                info="<p>Nivaan was built as an alternative to fragmented pain treatment.</p><p>We deliver integrated pain treatment, where interventional pain specialists, physiotherapists, pain counselors, nutritionists, and care managers work together as one coordinated team. Each decision is shared. Each step follows a clear plan.</p><p>This integrated approach has demonstrated significantly better outcomes compared to single-mode pain treatments, based on structured care pathways and continuous outcome tracking.</p><p>There are no silos. No disconnected opinions. Just coordinated, evidence-led care that treats the root cause and delivers lasting relief.</p>"
                subtitle=""
                lists={[]}
            />
            <JourneySection journey={journey} />
            <WhatMakesNivaanDifferent
                heading="What Makes Nivaan Different?"
                description="Nivaan specializes in advanced, non-surgical care for knee pain and chronic musculoskeletal conditions. Our goal is to help patients move with confidence, without unnecessary surgery, heavy medication, or trial-and-error treatment cycles."
                image="/images/nivaan-clinic.webp"
                sectionTitle="Why Patients Choose Nivaan"
                features={[
                    {
                        title: "Integrated Non-Surgical Care",
                        description:
                            "Interventional pain specialists, physiotherapists, psychologists, nutritionists, and care counsellors collaborate under one unified plan.",
                        icon: "https://www.hclient.in/nivaan/wp-content/uploads/2025/12/precise-diagnosis-icon.svg",
                    },
                    {
                        title: "Evidence Based Protocols",
                        description:
                            "Structured care pathways designed to deliver measurable improvement, not short-term relief alone.",
                        icon: "https://www.hclient.in/nivaan/wp-content/uploads/2025/12/precise-diagnosis-icon.svg",
                    },
                    {
                        title: "36,000+ Patients Treated",
                        description:
                            "Trusted by patients across India who have returned to work, movement, and daily life beyond pain.",
                        icon: "https://www.hclient.in/nivaan/wp-content/uploads/2025/12/precise-diagnosis-icon.svg",
                    },
                    {
                        title: "4,000+ Advanced Procedures",
                        description:
                            "Extensive experience in image-guided and advanced non-surgical pain interventions.",
                        icon: "https://www.hclient.in/nivaan/wp-content/uploads/2025/12/precise-diagnosis-icon.svg",
                    },
                    {
                        title: "150+ Years of Collective Clinical Expertise",
                        description:
                            "A multidisciplinary team dedicated to evidence-based pain science and patient-centered care.",
                        icon: "https://www.hclient.in/nivaan/wp-content/uploads/2025/12/precise-diagnosis-icon.svg",
                    },
                ]}
            />
            <BuiltByPeopleSection
                title="Built By People Who Saw The Gap"
                paragraphs={[
                    "Founded in 2023 by Nivesh Khandelwal and Vishwas Singh, Nivaan was created to address what was missing in conventional pain treatment.",
                    "Rather than adding another clinic, the goal was to redesign the experience of pain care itself. One where patients are not passed between disconnected services but guided through a clear, coordinated pathway.",
                    "At Nivaan, every patient follows a structured approach that focuses on identifying the root cause of chronic pain and supporting long-term recovery, not temporary fixes."
                ]}
                imageSrc="/images/about-1.webp"
            />

            <ExpertsSection title="Care Led by Experts Who Work as One" description="At Nivaan, recovery does not depend on a single opinion. It depends on collaboration. Our specialists work closely together, sharing insights, reviewing progress, and adjusting care plans as needed. This team-based approach ensures that nothing important is missed and every decision supports meaningful, sustained improvement." button={{ url: "/doctors", title: "Meet Our Team of Pain Specialists" }} doctordata={data1?.data} />
            <BetterWayCTA
                title="A Better Way to Live Beyond Pain"
                description="You do not have to accept pain as normal. And you do not have to navigate recovery alone. Nivaan offers clarity, coordination, and care that works, so you can return to living fully and confidently."
            // buttonText="BOOK YOUR CONSULTATION"
            // onButtonClick={() => console.log("CTA clicked")}
            />
        </>
    )
}

export default aboutpage