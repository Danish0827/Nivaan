import boneGrafting from "../../../public/boneGrafting.webp";
import cellHarvesting from "../../../public/cellHarvesting.webp";
import coreDecompression from "../../../public/coreDecompression.webp";
import fasterPainRelief from "../../../public/desktop/faster-pain-relief.webp";
import swellingAndStiffness from "../../../public/desktop/swelling-and-stiffness.webp";
import damagedTissues from "../../../public/desktop/damaged-tissues.webp";
import stressAnxiety from "../../../public/desktop/stress-Anxiety.webp";
import mobilityBalance from "../../../public/desktop/mobility-balance.webp";
import muscleStrength from "../../../public/desktop/muscle-strength.webp";
import bloodCirculation from "../../../public/desktop/blood-circulation.webp";
import improvedImmunity from "../../../public/desktop/improved-immunity.webp";
import { ComparisonTableDataType,PhysioTableDataType, IconGridData, Navbar2Type, outcomeBoxType } from "./allTypes";

export const ComparisonTableData: ComparisonTableDataType[] = [
  { advantage: "Multi-Disciplinary Approach", nivaan: true, other: false },
  { advantage: "Comprehensive Recovery Plan", nivaan: true, other: false },
  {
    advantage: "30+ Years of Pain Specialist Experience",
    nivaan: true,
    other: false,
  },
  { advantage: "End to End Insurance Support", nivaan: true, other: false },
  { advantage: "Cost-Effective Treatments", nivaan: true, other: false },
  { advantage: "1-1 Personalised Care", nivaan: true, other: false },
];

export const ComparisonTableData2: ComparisonTableDataType[] = [
  { advantage: "Multi-Disciplinary Approach", nivaan: true, other: false },
  { advantage: "Comprehensive Recovery Plan", nivaan: true, other: false },
  {
    advantage: "20+ Years of Pain Specialist Experience",
    nivaan: true,
    other: false,
  },
  { advantage: "End to End Insurance Support", nivaan: true, other: false },
  { advantage: "Cost-Effective Treatments", nivaan: true, other: false },
  {
    advantage: "Standardized care with international protocols",
    nivaan: true,
    other: false,
  },
];

export const PhysiotherapyTableData: PhysioTableDataType[] = [
  { advantage: "PAIN SPECIALIST-SUPERVISED", nivaan: true, other: false },
  { advantage: "EVIDENCE-BASED PERSONALISED PLANS", nivaan: true, other: false },
  {
    advantage: "PROGRESS CHECK WITH Superspecialists",
    nivaan: true,
    other: false,
  },
  { advantage: "ADVANCED TECHNIQUES (LASER, DRY NEEDLING, CUPPING, TAPING)", nivaan: true, other: false },
  { advantage: "FOCUS ON LIFESTYLE AND ERGONOMICS", nivaan: true, other: false },
  { advantage: "HOLISTIC INTEGRATION WITH NON-SURGICAL TREATMENTS", nivaan: true, other: false },
];

export const regenerativeOrthopedics: IconGridData[] = [
  {
    id: 1,
    icon: cellHarvesting,
    description: "Bone Graft Harvesting",
  },
  {
    id: 2,
    icon: coreDecompression,
    description: "Core Decompression",
  },
  {
    id: 3,
    icon: boneGrafting,
    description: "Bone Grafting",
  },
];

export const outcomeBox: outcomeBoxType[] = [
  {
    id: 1,
    image: fasterPainRelief,
    content: "Faster Pain Relief",
  },
  {
    id: 2,
    image: swellingAndStiffness,
    content: "Reduced Swelling & Stiffness",
  },
  {
    id: 3,
    image: damagedTissues,
    content: "Regenerated Damaged Tissues",
  },
  {
    id: 4,
    image: stressAnxiety,
    content: "Reduced Stress and Anxiety",
  },
  {
    id: 5,
    image: bloodCirculation,
    content: "Improved Blood Circulation",
  },
  {
    id: 6,
    image: muscleStrength,
    content: "Improved Skeletal Muscle Strength",
  },
  {
    id: 7,
    image: improvedImmunity,
    content: "Improved Immunity",
  },
  {
    id: 8,
    image: mobilityBalance,
    content: "Improved Mobility and Balance",
  },
];

export const Navbar2Links: Navbar2Type[] = [
  {
    id: 1,
    title: "Home",
    titleHindi: "होम",
    link: "/",
  },
  {
    id:2,
    title:"Pain Areas",
    titleHindi:"दर्द वाले क्षेत्र",
    link:"/"
  },
  {
    id: 3,
    title: "The Care Team",
    titleHindi: "देखभाल टीम",
    link: "/how-it-works/#meet-your-care-team",
  },
  {
    id: 4,
    title: "How It Works",
    titleHindi: "यह कैसे होता है",
    link: "/how-it-works",
  },
  {
    id: 5,
    title: "Blog",
    titleHindi: "ब्लॉग",
    link: "https://www.nivaancare.com/blog/",
  },
  {
    id: 6,
    title: "Contact Us",
    titleHindi: "हमसे संपर्क करें",
    link: "/contact",
  },
];

export const Navbar2LinksMob: Navbar2Type[] = [
  {
    id: 1,
    title: "Home",
    titleHindi: "होम",
    link: "/",
  },
    {
    id:2,
    title:"Pain Areas",
    titleHindi:"दर्द वाले क्षेत्र",
    link:"/"
  },
  {
    id: 3,
    title: "The Care Team",
    titleHindi: "देखभाल टीम",
    link: "/how-it-works/#meet-your-care-team-mob",
  },
  {
    id: 4,
    title: "How It Works",
    titleHindi: "यह कैसे होता है",
    link: "/how-it-works",
  },
  // {
  //   id: 4,
  //   title: 'FAQ',
  //   link: 'https://www.nivaancare.com/faq/'
  // },
  {
    id: 5,
    title: "Blog",
    titleHindi: "ब्लॉग",
    link: "https://www.nivaancare.com/blog/",
  },
  {
    id: 5,
    title: "Contact Us",
    titleHindi: "हमसे संपर्क करें",
    link: "/contact",
  },
];