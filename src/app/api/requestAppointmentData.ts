import { GraphCardType, Review, overlaySlideDataType, teamCardDataType } from "./allTypes";
import RangeOfTreatment from "../../../public/RangeOfTreatment.webp";
import RangeOfTreatmentMob from "../../../public/RangeOfTreatmentMob.webp";
import MultidisciplinaryApproach from "../../../public/MultidisciplinaryApproach.webp";
import MultidisciplinaryApproachMob from "../../../public/MultidisciplinaryApproachMob.webp";
import Experts from "../../../public/Experts.webp";
import graph1 from "../../../public/graph/graph1.webp";
import graph2 from "../../../public/graph/graph2.webp";
import graph1Mob from "../../../public/graph/graph1Mob.webp";
import graph2Mob from "../../../public/graph/graph2Mob.webp";
import team1 from "../../../public/team/team1.webp";
import team2 from "../../../public/team/team2.webp";
import team3 from "../../../public/team/team3.webp";
import team4 from "../../../public/team/team4.webp";
import team5 from "../../../public/team/team5.webp";
import team1Mob from "../../../public/teammob/team1Mob.webp";
import team2Mob from "../../../public/teammob/team2Mob.webp";
import team3Mob from "../../../public/teammob/team3Mob@2x.webp";
import team4Mob from "../../../public/teammob/team4Mob@2x.webp";
import team5Mob from "../../../public/teammob/team5Mob@2x.webp";

export const requestAppointmentReviewData: Review[] = [
    {
      id: 1,
      name: "Deep Anmol Singh Sodhi",
      reviewText:
        "I consulted them for treatment for my mother's tennis elbow. Their doctor carefully examined her and also asked his subordinates to carefully check her condition. They also recommended diet plan and exercises to help with her pain.",
      postedWhen: "a month ago",
      img: "",
    },
    {
      id: 2,
      name: "Garima Sinha",
      reviewText:
        "Highly recommend this clinic. I've had lower back pain for many years and have visited multiple physiotherapists and ortho doctors. This is the first time I felt someone actually took the pain to do a thorough diagnosis and suggest the right options beyond surgery! Very grateful to the Nivaan team.",
      postedWhen: "a month ago",
      img: "",
    },
    {
      id: 3,
      name: "Manswi Garg",
      reviewText:
        "I had taken my mother to the clinic for her knee pain. Doctor listened very patiently for close to 40 mins. Physiotherapist recommend exercises during the consult which has helped my mom's pain. Very friendly staff. Good experience.",
      postedWhen: "a month ago",
      img: "",
    },
  ];

  export const overlaySlideData: overlaySlideDataType[] = [
    {
      img: RangeOfTreatment,
      imgMob: RangeOfTreatmentMob,
      title: "Range of Treatment",
      desc: "They have a wide range of treatments and therapies at their disposal including medications, injections, nerve blocks, and more. By having access to a wide range of treatments, they can help patients find the most effective treatment for their individual needs.",
    },
    {
      img: Experts,
      imgMob: Experts,
      title: "Experts",
      desc: "Understanding your pain is the first step towards getting rid of it. Our emotional counsellors will guide you and equip you with tools to manage your pain. They will support you to make meaningful changes in your daily lifestyle.",
    },
    {
      img: MultidisciplinaryApproach,
      imgMob: MultidisciplinaryApproachMob,
      title: "Multidisciplinary Approach",
      desc: "They often work in multidisciplinary teams that include physios, counsellors, and other medical specialists. This Allows them to address the different aspects of pain,including the physical,emotional,and psychological factors that contribute to pain.",
    },
  ];

  export const ourTeamData: overlaySlideDataType[] = [
    {
      img: team1,
      imgMob: team1Mob,
      title: "Pain Superspecialist",
      desc: "The pain specialists are dedicatedly trained to help treat your pain - they understand, evaluate and treat your pain's root cause. Our doctors are trained to improve the quality of your life through medications, rehabilitative therapy, pain relief interventions, and counseling.",
    },
    {
      img: team2,
      imgMob: team2Mob,
      title: "Mindset Counsellor",
      desc: "Understanding your pain is the first step towards getting rid of it. Our emotional counsellors will guide you and equip you with tools to manage your pain. They will support you to make meaningful changes in your daily lifestyle.",
    },
    {
      img: team3,
      imgMob: team3Mob,
      title: "Physiotherapist",
      desc: "The right exercises can go a long way in a non surgical treatment plan. Our highly experienced physiotherapists helps you get on the road to recovery with a plan that's tailored to your pain diagnosis and your recovery goals.",
    },
    {
      img: team4,
      imgMob: team4Mob,
      title: "Care Manager",
      desc: "Our care manager is here to hold your hand through your journey of pain relief. They are here to coordinate all your medical interactions and guide you towards a pain-free life.",
    },
    {
      img: team5,
      imgMob: team5Mob,
      title: "Nutritionist",
      desc: "We now understand that nutrition and pain are much more deeply connected than previously thought. Hence, we have world-class nutritionists who can help you nourish right, create the right diet and catapult your way to pain-free life.",
    }
  ];
  
  export const GraphCardData: GraphCardType[] = [
    {
      id: 1,
      title: "Patients able to return to work",
      img: graph1,
      imgMob: graph1Mob,
    },
    {
      id: 2,
      title: "Patients demonstrate increased activity level",
      img: graph2,
      imgMob: graph2Mob,
    },
  ];
  
  export const TeamCardData: teamCardDataType[] = [
    {
      img: team1,
      title: "Pain Management Specialist",
      desc: "The pain specialists are dedicatedly trained to help treat your pain - they understand, evaluate and treat your pain's root cause. Our doctors are trained to improve the quality of your life through medications, rehabilitative therapy, pain relief interventions, and counseling.",
    },
    {
      img: team2,
      title: "Pain Counsellor",
      desc: "Understanding your pain is the first step towards getting rid of it. Our emotional counsellors will guide you and equip you with tools to manage your pain. They will support you to make meaningful changes in your daily lifestyle.",
    },
    {
      img: team3,
      title: "Physiotherapist",
      desc: "The right exercises can go a long way in a non surgical treatment plan. Our highly experienced physiotherapists helps you get on the road to recovery with a plan that's tailored to your pain diagnosis and your recovery goals.",
    },
    {
      img: team4,
      title: "Care Manager",
      desc: "Our care manager is here to hold your hand through your journey of pain relief. They are here to coordinate all your medical interactions and guide you towards a pain-free life",
    },
    {
      img: team5,
      title: "Nutritionist",
      desc: "We now understand that nutrition and pain are much more deeply connected than previously thought. Hence, we have world-class nutritionists who can help you nourish right, create the right diet and catapult your way to pain-free life.",
    },
  ];
  
  export const TeamCardDataMob: overlaySlideDataType[] = [
    {
      img: team1Mob,
      title: "Pain Management Specialist",
      desc: "The pain specialists are dedicatedly trained to help treat your pain - they understand, evaluate and treat your pain's root cause. Our doctors are trained to improve the quality of your life through medications, rehabilitative therapy, pain relief interventions, and counseling.",
    },
    {
      img: team2Mob,
      title: "Pain Counsellor",
      desc: "Understanding your pain is the first step towards getting rid of it. Our emotional counsellors will guide you and equip you with tools to manage your pain. They will support you to make meaningful changes in your daily lifestyle.",
    },
    {
      img: team3Mob,
      title: "Physiotherapist",
      desc: "The right exercises can go a long way in a non surgical treatment plan. Our highly experienced physiotherapists helps you get on the road to recovery with a plan that's tailored to your pain diagnosis and your recovery goals.",
    },
    {
      img: team4Mob,
      title: "Care Manager",
      desc: "Our care manager is here to hold your hand through your journey of pain relief. They are here to coordinate all your medical interactions and guide you towards a pain-free life",
    },
    {
      img: team5Mob,
      title: "Nutritionist",
      desc: "We now understand that nutrition and pain are much more deeply connected than previously thought. Hence, we have world-class nutritionists who can help you nourish right, create the right diet and catapult your way to pain-free life.",
    },
  ];

  export const NivaanFeatureHeroSectionMob = [
    "Advanced Pain Procedure with No Hospitalisation",
    "Led by Super Pain Doctor",
    "Round the clock care",
    "4 Super Specialist - 1 Consult",
  ];

  export const weTreatHeroSectionMob = [
    "Knee Pain",
    "Back Pain",
    "Shoulder Pain",
    "Neck Pain",
  ];