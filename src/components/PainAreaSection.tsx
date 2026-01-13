"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type PainKeys = keyof typeof CONTENT;
type ScreenSize = "lg" | "xl";

interface PainArea {
    key: PainKeys;
    label: string;
}

const PAIN_AREAS: PainArea[] = [
    { key: "face", label: "Face/Head" },
    { key: "neck", label: "Neck" },
    { key: "shoulder", label: "Shoulder" },
    { key: "upper_back", label: "Upper Back / Mid Back" },
    { key: "lower_back", label: "Lower Back" },
    { key: "elbow", label: "Elbow / Wrist / Hand" },
    { key: "hip", label: "Hip / Pelvis" },
    { key: "knee", label: "Knee" },
    { key: "ankle", label: "Ankle / Foot" },
];

const CONTENT = {
    face: {
        title: "Face Pain",
        desc: "Head or facial pain may stem from nerve irritation, jaw joint issues, or referred pain from the neck and often causes recurring headaches, facial discomfort, or sharp nerve-like sensations.",
        items: [
            "Migraine",
            "Cervicogenic Headache",
            "Trigeminal Neuralgia",
            "Tension Type Headache",
            "Greater Occipital Neuralgia",
            "Temporo-Mandibular Joint Dysfunction",
        ],
    },
    neck: {
        title: "Neck Pain",
        desc: "Neck pain often appears as stiffness, muscle tightness, or sharp discomfort that makes turning your head difficult. It commonly comes from posture issues, cervical disc problems, or nerve irritation that specialists can diagnose and treat effectively.",
        items: [
            "Neck stiffness",
            "Cervical spondylosis",
            "Cervical radiculopathy",
            "Neck Sprain",
            "Text neck syndrome (posture related pain)",
            "Cervical disc bulge / herniation",
            "Facet joint pain in the neck",
        ],
    },
    shoulder: {
        title: "Shoulder Pain",
        desc: "Shoulder pain can limit lifting, reaching, or simple daily movements due to stiffness, tendon injuries, or inflammation. Early treatment helps restore mobility and prevent the pain from becoming long-term.",
        items: [
            "Frozen Shoulder",
            "Shoulder Stiffness",
            "Rotator Cuff Injury",
            "Shoulder Tendonitis",
            "Shoulder Impingement",
            "Shoulder Arthritis",
            "Shoulder Instability",
            "Shoulder Bursitis",
        ],
    },
    upper_back: {
        title: "Upper Back Pain",
        desc: "Upper and mid-back pain is often linked to muscle tension, poor posture, or spinal strain, especially in people who sit for long hours. It may feel like tight knots or aching pressure and improves significantly with specific interventions.",
        items: [
            "Upper back stiffness",
            "Mid back pain",
            "Poor posture related pain",
            "Upper back knots (myofascial pain)",
            "Thoracic disc discomfort",
        ],
    },
    lower_back: {
        title: "Lower Back Pain",
        desc: "Lower back pain is one of the most common complaints and may arise from disc issues, nerve irritation, muscle spasms, or age related wear and tear. It can affect movement, sitting, or sleep but is highly treatable with the right approach.",
        items: [
            "Lower back pain",
            "Slip disc/disc bulge",
            "Lower back strain/spasm",
            "Sciatica pain",
            "Tailbone pain ",
            "Lumbar Radiculopathy",
            "Lumbar canal stenosis",
            "Lumbar spondylosis",
        ],
    },
    elbow: {
        title: "Elbow Pain",
        desc: "Pain in the elbow, wrist, or hand often comes from overuse, tendon strain, or nerve compression. These conditions can cause discomfort while gripping, typing, or performing repetitive tasks, but respond well to targeted treatment.",
        items: [
            "Tennis elbow",
            "Golfer’s elbow",
            "Wrist pain",
            "Carpal tunnel pain (numbness and tingling)",
            "De Quervain’s tenosynovitis",
        ],
    },
    hip: {
        title: "Hip Pain",
        desc: "Hip or pelvic pain may show up as stiffness, sharp discomfort, or difficulty walking and standing. It often comes from joint degeneration, tendon inflammation, or SI joint issues and usually improves with focused care.",
        items: [
            "Hip joint pain",
            "Hip stiffness",
            "SI joint pain (back and buttock pain)",
            "Hip arthritis",
            "Pain while walking or standing",
        ],
    },
    knee: {
        title: "Knee Pain",
        desc: "Knee pain can result from cartilage wear, ligament strain, or tendon irritation and often worsens with walking, climbing stairs, or standing for long periods. Early evaluation helps prevent further damage and supports long-term recovery.",
        items: [
            "Knee osteoarthritis",
            "Ligament injuries (ACL, PCL, MCL)",
            "Knee replacement recovery",
            "Knee pain & stiffness",
            "Meniscal tears",
            "Patellar Tendinitis",
            "Knee joint fractures",
            "Knee RA",
            "Chondromalacia patella"
        ],
    },
    ankle: {
        title: "Ankle Pain",
        desc: "Ankle or foot pain commonly comes from sprains, heel conditions, or tendon overload and may make daily walking uncomfortable. With the right treatment, most cases improve quickly and allow you to return to normal movement.",
        items: [
            "Heel pain",
            "Plantar fasciitis",
            "Ankle sprain pain",
            "Pain on the side of the foot",
            "Achilles tendon pain",
            "Flat foot related pain",
        ],
    },
};

/* ---------------- DOT POSITION ---------------- */

const POSITIONS: Record<
    ScreenSize,
    Record<PainKeys, { top: string; left: string }>
> = {
    xl: {
        face: { top: "-60px", left: "134px" },
        neck: { top: "0px", left: "134px" },
        shoulder: { top: "48px", left: "78px" },
        upper_back: { top: "100px", left: "135px" },
        lower_back: { top: "170px", left: "135px" },
        elbow: { top: "160px", left: "16px" },
        hip: { top: "210px", left: "100px" },
        knee: { top: "340px", left: "110px" },
        ankle: { top: "508px", left: "110px" },
    },
    lg: {
        face: { top: "-56px", left: "115px" },
        neck: { top: "-3px", left: "115px" },
        shoulder: { top: "40px", left: "70px" },
        upper_back: { top: "83px", left: "117px" },
        lower_back: { top: "150px", left: "117px" },
        elbow: { top: "145px", left: "10px" },
        hip: { top: "200px", left: "90px" },
        knee: { top: "315px", left: "95px" },
        ankle: { top: "440px", left: "95px" },
    },
};

function getDotPosition(key: PainKeys, screen: ScreenSize) {
    return POSITIONS[screen][key];
}

/* ---------------- COMPONENT ---------------- */

export default function PainAreaSection() {
    const [active, setActive] = useState<PainKeys | null>(null);

    const [screenSize, setScreenSize] = useState<ScreenSize>("xl");
    const accordionRefs = useRef<Record<string, HTMLButtonElement | null>>({});
    const HEADER_OFFSET = 80; // <-- yahan header ki height set karo (px)


    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth >= 1280 ? "xl" : "lg");
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    // const [active, setActive] = useState<number | null>(2); // Shoulder open by default
    const activeKey = active ?? "shoulder";
    useEffect(() => {
    if (window.innerWidth >= 1024) return;

    if (active && accordionRefs.current[active]) {
        const element = accordionRefs.current[active];
        const y =
            element.getBoundingClientRect().top +
            window.scrollY -
            HEADER_OFFSET;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    }
}, [active]);


    return (
        <div className="max-w-[1500px] mx-auto px-6 xl:px-10 2xl:px-0 relative -mt-96 lg:mb-10 overflow-hidden">
            <div className="w-full p-4 bg-gradient-to-b from-[#0AA2DC] to-[#115CAB] rounded-[60px] shadow-xl grid grid-cols-1 lg:grid-cols-[27%_35%_35%] xl:grid-cols-[27%_34%_35%] 2xl:grid-cols-[27%_33.5%_36%] gap-4 xl:gap-6">

                {/* LEFT MENU */}
                <div className="hidden lg:block bg-white text-[#0852A0] rounded-[50px] lg:px-1 xl:px-3 2xl:px-6 py-10">
                    <h2 className="text-3xl font-bold text-center mb-4">Pain Areas</h2>

                    <div className="flex flex-col gap-1">
                        {PAIN_AREAS.map((area) => (
                            <button
                                key={area.key}
                                onClick={() => setActive(area.key)}
                                className={`text-sm xl:text-base w-full font-semibold px-8 py-3 cursor-pointer rounded-[50px] transition-all flex justify-between items-center 
                                ${active === area.key ? "bg-[#06A1DC21]" : "hover:bg-[#06A1DC21]"}`}
                            >
                                {area.label}
                                <Image
                                    className="group-hover:-rotate-45 w-8 h-8 duration-700 rounded-full p-2"
                                    src="/images/leftarrow.svg"
                                    width={20}
                                    height={20}
                                    alt="arrow"
                                    unoptimized
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* BODY IMAGE + DOTS */}
                <div className="h-[550px] lg:h-auto relative top-20 left-8 md:left-20 lg:left-10 xl:left-12 2xl:left-20">
                    <img
                        src="/images/body.webp"
                        className="w-[250px] h-[440px] lg:w-[250px] lg:h-[440px] xl:w-72 xl:h-[500px] scale-125 select-none"
                        alt="Body Map"
                    />

                    {PAIN_AREAS.map((area) => (
                        <div
                            key={area.key}
                            className={`absolute w-5 h-5 rounded-full border-[3px] border-white cursor-pointer transition-all 
                            ${active === area.key ? "bg-orange-500" : "bg-white/30"}`}
                            style={getDotPosition(area.key, screenSize)}
                            onClick={() => setActive(area.key)}
                        />
                    ))}
                </div>

                {/* CONTENT PANEL */}
                <div className="hidden lg:block bg-white rounded-[50px] p-10">
                    <h2 className="text-2xl xl:text-3xl font-bold text-[#0852A0] mb-4">
                        {CONTENT[activeKey].title}
                    </h2>

                    <p className="text-gray-700 text-base xl:text-lg font-light mb-4">
                        {CONTENT[activeKey].desc}
                    </p>

                    <ul className="list-disc marker:text-orange-500 lg:marker:text-base xl:marker:text-2xl pl-6 space-y-2 pb-2">
                        {CONTENT[activeKey].items.map((item) => (
                            <li
                                key={item}
                                className="text-black text-lg"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white mt-4 px-7 py-3.5 cursor-pointer rounded-full shadow-md hover:scale-105 duration-500">
                        LEARN MORE
                    </button> */}
                </div>

                <div className="block mt-10 lg:hidden max-w-fullw-full rounded-[50px] border border-gray-300 overflow-hidden bg-white shadow-sm">
                    <div className="text-[#0852A0] bg-white text-center py-6 text-lg font-semibold border-b border-gray-300">
                        Pain Areas
                    </div>

                    <div className="divide-y">
                        {PAIN_AREAS.map((area) => {
                            const isOpen = active === area.key;
                            return (
                                <div key={area.key}>
                                    <button
                                        ref={(el) => {
                                            accordionRefs.current[area.key] = el;
                                        }}

                                        onClick={() => setActive(isOpen ? null : area.key)}
                                        className="w-full flex items-center justify-between px-5 py-5.5 text-left font-medium text-gray-900"
                                    >
                                        {area.label}
                                        <ChevronDown
                                            className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[700px]" : "max-h-0"
                                            }`}
                                    >
                                        {isOpen && (
                                            <div className="px-5 pb-6 text-sm text-gray-700">
                                                <p className="mb-4">{CONTENT[area.key].desc}</p>

                                                <ul className="space-y-2 mb-5">
                                                    {CONTENT[area.key].items.map((item) => (
                                                        <li key={item} className="flex items-start gap-2">
                                                            <span className="mt-2 h-2 w-2 rounded-full bg-orange-500"></span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* <button className="w-full rounded-full bg-orange-500 py-3 text-white font-semibold">
                                                    LEARN MORE
                                                </button> */}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}
