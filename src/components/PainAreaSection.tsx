"use client";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";

/* ---------------- TYPES ---------------- */

type PainKeys = keyof typeof CONTENT;
type ScreenSize = "lg" | "xl";

interface PainArea {
    key: PainKeys;
    label: string;
}

/* ---------------- DATA ---------------- */

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
    neck: {
        title: "Neck Pain",
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
    lower_back: {
        title: "Lower Back Pain",
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
    elbow: {
        title: "Elbow Pain",
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
    hip: {
        title: "Hip Pain",
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
    knee: {
        title: "Knee Pain",
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
    ankle: {
        title: "Ankle Pain",
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
    const [active, setActive] = useState<PainKeys | null>("shoulder");

    const [screenSize, setScreenSize] = useState<ScreenSize>("xl");

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

    return (
        <div className="max-w-[1500px] mx-auto px-6 xl:px-10 2xl:px-0 relative -mt-96 lg:mb-10">
            <div className="w-full p-4 bg-gradient-to-b from-[#0AA2DC] to-[#115CAB] rounded-[60px] shadow-xl grid grid-cols-1 lg:grid-cols-[27%_35%_35%] xl:grid-cols-[27%_34%_35%] 2xl:grid-cols-[27%_33.5%_36%] gap-4 xl:gap-6">

                {/* LEFT MENU */}
                <div className="hidden lg:block bg-white text-[#0852A0] rounded-[50px] lg:px-1 xl:px-3 xl:px-6 py-10">
                    <h2 className="text-3xl font-bold text-center mb-4">Pain Areas</h2>

                    <div className="flex flex-col gap-1">
                        {PAIN_AREAS.map((area) => (
                            <button
                                key={area.key}
                                onClick={() => setActive(area.key)}
                                className={`text-sm xl:text-base w-full font-semibold px-8 py-4 rounded-[50px] transition-all flex justify-between items-center 
                                ${active === area.key ? "bg-[#06A1DC21]" : "hover:bg-[#06A1DC21]"}`}
                            >
                                {area.label} <span>→</span>
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
                            className="underline underline-offset-[6px] cursor-pointer text-black text-lg"
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                    <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white mt-4 px-7 py-3.5 cursor-pointer rounded-full shadow-md hover:scale-105 duration-500">
                        LEARN MORE
                    </button>
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

                                                <button className="w-full rounded-full bg-orange-500 py-3 text-white font-semibold">
                                                    LEARN MORE
                                                </button>
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
