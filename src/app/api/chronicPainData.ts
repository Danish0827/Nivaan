import { ChronicExperienceField, Review, Treatment, TreatmentData, faqData } from "./allTypes";
import kneePainElderlyMenTestimonial1 from "../../../public/desktop/kneepainnewmen_review1.webp";
import kneePainElderlyMenTestimonial2 from "../../../public/desktop/kneepainnewmen_review2.webp";
import ShivShankar from "../../../public/desktop/shivShankar.webp";
import NeeruBanga from "../../../public/desktop/Nitin-Singh 1 (2).webp";

export const chronicPainExperienceField: ChronicExperienceField[] = [
    { id: 1, title: "Knee Pain" },
    { id: 1, title: "Back Pain" },
    { id: 1, title: "Hip Pain" },
    { id: 1, title: "Joint Pain" },
    { id: 1, title: "Osteoarthritis" },
    { id: 1, title: "Herniated Disc" },
  ];
  
  export const chronicPainTreatmentAtNivan: TreatmentData[] = [
    {
      id: 1,
      name: "Radiofrequency Ablation",
      process:
        "Doctor uses Radiofrequency waves to eliminate pain sensations in the nerves.",
      benefits: [
        "Minimises inflammation",
        "Quick recovery time",
        "Immediate pain relief",
        "Reduces reliance on painkillers",
      ],
    },
    {
      id: 2,
      name: "Genicular Nerve Block",
      process:
        "Doctor injects anaesthesia and steroids near Genicular Nerves to block the pain signals from being sent to the brain.",
      benefits: ["No scars or stitches", "Helps identify the source of pain"],
    },
    {
      id: 3,
      name: "Ozone Injection",
      process:
        "Doctor injects Ozone gas into the knee joint. This helps in reducing inflammation and pain.",
      benefits: [
        "Quick Daycare Procedure",
        "Mobility Improvement",
        "Promotes Long Term Healing",
        "Reduces reliance on painkillers",
      ],
    },
    {
      id: 4,
      name: "Intra Articular Injection",
      process:
        "Doctor injects corticosteroids directly into the joint space. This method targets the source of knee pain effectively and efficiently.",
      benefits: ["Targeted Pain Relief", "Reduces Inflammation"],
    },
    {
      id: 5,
      name: "Prolotherapy",
      process:
        "Doctor injects a saline/dextrose solution into damaged knee tendons, joints, ligaments, or adjacent joint spaces.",
      benefits: [
        "Promotes tissue repair and growth",
        "Long-term pain relief",
        "Improves Mobility",
        "Helps identify the source of pain",
      ],
    },
  ];
  
  export const chronicPainTreatmentAtNivanHeading: Treatment = {
    heading: "Our Procedures",
    para: "We use the most advanced pain-relief technologies to ensure maximum pain relief",
  };
  
  export const chronicPainWomenReviewData: Review[] = [
    {
      id: 1,
      name: "Neeru Banga",
      reviewText:
        "Had a wonderful experience with Dr Rohit Gulati and Nivaan Care team. I had pain in my back, after following the procedure and physiotherapy I am feeling much better.",
      postedWhen: "2 weeks ago",
      img: NeeruBanga,
      isVideo: false,
      videoUrl: "",
    },
    {
      id: 2,
      name: "Shiv Shankar Sharma",
      reviewText:
        "After so many years, My Mother finally found relief from her pain. We consulted Dr Rohit Gulati virtually, he told us about procedure and how it is going to help my Mother's condition - spinal cord cage fixation.",
      postedWhen: "7 weeks ago",
      img: ShivShankar,
      isVideo: false,
      videoUrl: "",
    },
    {
      id: 3,
      name: "",
      reviewText: "",
      postedWhen: "",
      img: "",
      isVideo: true,
      videoUrl: "jCoIVbcHsWw", //"S_MGVv6bR1M",
    },
    {
      id: 4,
      name: "Parineeti",
      reviewText:
        "I was suffering with my knee and lower back pain last 2-3 years for which I consulted Nivaan care team . Dr Ritu had been very supportive in treating me.",
  
      postedWhen: "1 week ago",
      img: kneePainElderlyMenTestimonial2,
      isVideo: false,
      videoUrl: "",
    },
    {
      id: 5,
      name: "Riya Kumari",
      reviewText:
        "I came to Nivaan with my mother, she was suffering with severe shoulder pain, because of the treatment plan given by Dr Rohit Gulati she is feeling alot better and is happy doing her daily chores.",
      postedWhen: "5 weeks ago",
      img: kneePainElderlyMenTestimonial1,
      isVideo: false,
      videoUrl: "",
    },
  ];
  
  export const chronicPainFaqData: faqData[] = [
    {
      title: "What should I expect in my first session at Nivaan?",
      desc: "Your first session will include a consultation with the Pain Management Specialist who will diagnose the root cause of your pain & together with their Multidisciplinary team will suggest a pain relief plan for you.",
    },
    {
      title: "How is Nivaan different from others?",
      desc: "Our team of 4 experts suggest pain relief solutions addressing all aspects of pain - biological, psychological and social. A comprehensive solution led by the Pain Management Specialist is what makes us different.",
    },
    {
      title: "Will I ever need surgery after the procedure?",
      desc: "Depending upon your pain concern and the stage of pain, our solutions can delay or completely avoid the need for a surgery.",
    },
    {
      title: "Will I have to spend a lot of money?",
      desc: "Our comprehensive care solutions are cost effective compared to other available solutions. Moreover, most of our procedures are covered under insurance.",
    },
    {
      title: "Why do I need a nutritionist for pain relief?",
      desc: "A poor diet can lead to increased body weight, nutritional deficiencies, gut issues & inflammation, all of which might lead to pain. Our nutritionist suggests dietary changes to help you build healthy eating habits.",
    },
    {
      title: "Do I really need to consult a psychologist for pain relief?",
      desc: "Yes, emotional well-being can have a direct impact on how you perceive, tolerate & cope with pain.",
    },
    {
      title: "How long is the recovery phase after the Nivaan procedure?",
      desc: "You can walk home on the day of the procedure. All our procedures are non-surgical and don’t require hospitalisation. However, the recovery after every procedure may differ from patient to patient.",
    },
  ];
  
  export const chronicPainMenFaqData: faqData[] = [
    {
      title: "What should I expect in my first session at Nivaan?",
      desc: "Your first session will include a consultation with the Pain Management Specialist who will diagnose the root cause of your pain & together with their Multidisciplinary team will suggest a pain relief plan for you.",
    },
    {
      title: "How is Nivaan different from others?",
      desc: "Our team of 4 experts suggest pain relief solutions addressing all aspects of pain - biological, psychological and social. A comprehensive solution led by the Pain Management Specialist is what makes us different.",
    },
    {
      title: "Will I ever need surgery after the procedure?",
      desc: "Depending upon your pain concern and the stage of pain, our solutions can delay or completely avoid the need for a surgery.",
    },
    {
      title: "Will I have to spend a lot of money?",
      desc: "Our comprehensive care solutions are cost effective compared to other available solutions. Moreover, most of our procedures are covered under insurance.",
    },
    {
      title: "Why do I need a nutritionist for pain relief?",
      desc: "A poor diet can lead to increased body weight, nutritional deficiencies, gut issues & inflammation, all of which might lead to pain. Our nutritionist suggests dietary changes to help you build healthy eating habits.",
    },
    {
      title: "Do I really need to consult a psychologist for pain relief?",
      desc: "Yes, emotional well-being can have a direct impact on how you perceive, tolerate & cope with pain.",
    },
    {
      title: "How long is the recovery phase after the Nivaan procedure?",
      desc: "You can walk home on the day of the procedure. All our procedures are non-surgical and don’t require hospitalisation. However, the recovery after every procedure may differ from patient to patient.",
    },
  ];