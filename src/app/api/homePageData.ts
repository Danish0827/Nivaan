import type { StaticImageData } from "next/image";
import FiveStar from "../../../public/5Star.webp";
import Vishesh from "../../../public/homepage/Vishesh.webp";
import Wedding from "../../../public/homepage/Weddingraphy.webp";
import Naina from "../../../public/homepage/Naina.webp";
import Critika from "../../../public/homepage/Critika.webp";
import Ritika from "../../../public/homepage/Ratika.webp";
import drNaveen from "../../../public/homepage/dr-navin.webp";
import drGarima from "../../../public/homepage/dr-garima.webp";
import drGulati from "../../../public/homepage/dr-gulati.webp";
import drRana from "../../../public/homepage/dr-rana.webp";
import drJyotsna from "../../../public/homepage/drJyotsna.png"
import drPraneet from "../../../public/homepage/drPraneet1.png"
import drSagar from "../../../public/homepage/drSagarRakesh.png"
import drVidula from "../../../public/homepage/drVidula.png"
import drAmol from "../../../public/homepage/drAmol.png"
import center1 from "../../../public/homepage/center1.webp";
import center2 from "../../../public/homepage/center2.webp";
import center3 from "../../../public/homepage/center3.webp";
import center4 from "../../../public/homepage/center4.webp";
import blog1 from "../../../public/homepage/blogs/blog-1.webp";
import blog2 from "../../../public/homepage/blogs/blog-2.webp";
import blog3 from "../../../public/homepage/blogs/blog-3.webp";
import blog4 from "../../../public/homepage/blogs/blog-4.webp";
import blog5 from "../../../public/homepage/blogs/blog-5.webp";
import blog6 from "../../../public/homepage/blogs/blog-6.webp";
import blog7 from "../../../public/homepage/blogs/blog-7.webp";
import blog8 from "../../../public/homepage/blogs/blog-8.webp";
import blog9 from "../../../public/homepage/blogs/blog-9.webp";
import blog10 from "../../../public/homepage/blogs/blog-10.webp";
import blog11 from "../../../public/homepage/blogs/blog-11.webp";
import blog12 from "../../../public/homepage/blogs/blog-12.webp";
import blog13 from "../../../public/homepage/blogs/blog-13.webp";
import blog14 from "../../../public/homepage/blogs/blog-14.webp";
import blog15 from "../../../public/homepage/blogs/blog-15.webp";
import blog16 from "../../../public/homepage/blogs/blog-16.webp";

export type HappyPatientCardDataType = {
    id: number,
    img: StaticImageData,
    name: string,
    postedOn: string,
    starImg: StaticImageData,
    description: string
}

export type Doctor = {
    id: number;
    img: StaticImageData;
    name: string;
    field: string;
    degree: string;
    experience: string;
    url?: string;
};

export type whyOurCenterDataType = {
    id: number,
    img: StaticImageData,
    title: string,
    description?: string
    descListArr?: string[]
}

export type FeaturedBlogDataType = {
    id: number,
    img: StaticImageData,
    title: string,
    description: string,
    url: string
}

export const HappyPatientCardData: HappyPatientCardDataType[] = [
    {id: 1, img: Vishesh, name: 'Vishesh Arora', postedOn: 'August 9, 2023', starImg: FiveStar, description: 'Well managed, detailed advice on treatment as one would expect'},
    {id: 2, img: Wedding, name: 'Weddingraphy - Luxury Wedding Photographers', postedOn: 'August 2, 2023', starImg: FiveStar, description: 'Nivaan Clinic, as a team - they have come up with an amazing concept overall, specially when it comes to Pain Therapy and packages are also affordable. Highly recommended to the people who are in pain and wants the solution without surgery & with painless treatment.'},
    {id: 3, img: Naina, name: 'Naina Shrivastava', postedOn: 'August 2, 2023', starImg: FiveStar, description: 'I brought my father to pain clinic with severe pain in the arm , pain in the shoulder and pain in the hand .This pain started after an accident and it persisted for one year even after the surgery. Before meeting doctor, my father used to have sleepless nights. He had severe pain. But after the treatment,his pain got controlled to a significant extent. We are very thankful to Dr and the whole professional Nivaan team for being very nice to us throughout the treatment. They really took care of us in all possible ways. I recommend Dr to any patient having chronic pains like shoulder pain , arm pain or hand Pain. He is the Best Pain specialist in Gurgaon. Thank you'},
    {id: 4, img: Critika, name: 'Critika Agrawal', postedOn: 'March 27, 2023', starImg: FiveStar, description: 'The atmosphere at the pain clinic is calm and welcoming. It makes a big difference in how patients feel about their care. They make their patients feel comfortable'},
    {id: 5, img: Ritika, name: 'Ratika Garg', postedOn: 'July 22, 2023', starImg: FiveStar, description: "I was suffering from sever lower back pain that had started radiating to my left leg as well. I tried a couple of doctors and 15 sessions of physiotherapy, however there was hardly any relief from the pain. That's when I found out more about Nivaan clinic and Dr. Dureja. Doctor heard me out patiently and diagnosed the root cause of the issue. He explained in detail about the problem and prescribed minimal medication. The main focus was to make lifestyle changes that can completely eliminate the need for medicines or interventions. It has been a very positive experience for me and I have seen a drastic improvement in my pain. Can highly recommend the holistic approach adopted by Nivaan clinic and Dr. dureja"}
]

export const commonCausesData: string[] = [
    'Injury',
    'Obesity',
    'Muscle pain and strains',
    'Autoimmune diseases',
    'Nerve damage',
    'Broken bones',
    'Surgery',
    'Cancer'
]

export const OurCoreteamData: Doctor[] = [
    // {
    //     id: 1,
    //     img: drNaveen,
    //     name: "Dr. Naveen Talwar",
    //     field: "Orthopaedic Surgeon,",
    //     degree: "MBBS, MS – Orthopaedics",
    //     experience: "32+ Years Experience  ",
    //     // url: "https://www.nivaancare.com/dr-naveen-talwar/"
    // },
    {
        id: 1,
        img: drGulati,
        name: "Dr. Rohit Gulati ",
        field: "Pain Management Specialist",
        degree: "MBBS, DA, DNB",
        experience: "18+ Years Experience ",
        url: "https://www.nivaancare.com/dr-rohit-gulati/"
    },
    {
      id: 2,
      img: drGarima,
      name: "Dr. Garima Gupta",
      field: "Pain Management Specialist",
      degree: "M.B.B.S, DA, FIPM (Germany)",
      experience: "15+ Years Of Experience ",
      url: "https://www.nivaancare.com/dr-garima-gupta-2/"
    },
    {
         id: 3,
        img: drJyotsna,
        name: "Dr. Jyotsna Jain",
        field: "Pain Management Specialist",
        degree: "MBBS, MD, FIPM, DHM",
        experience: "17+ Years Of Experience"
    },
    {
        id: 4,
        img: drPraneet,
        name: "Dr. Praneet Singh",
        field: "Pain Management Specialist",
        degree: "MBBS (MAMC Delhi), MD, FIPP, CIPS (WIP USA), FIAPM",
        experience: "16+ Years Of Experience"
    },
    {
      id: 5,
      img: drRana,
      name: "Dr. Abhimanyu Rana",
      field: "Pain Management Specialist",
      degree: "MBBS, DNB, DA, FIPM",
      experience: "12+ Years Of Experience ",
      url: "https://www.nivaancare.com/dr-abhimanyu-rana/"
    },
    {
         id: 6,
        img: drSagar,
        name: "Dr. Sagar Rakesh Tyagi",
        field: "Pain Management Specialist",
        degree: "MBBS, MD, IDRA, FIPM",
        experience: "7+ Years Of Experience"
    },
    {
        id: 7,
        img: drAmol,
        name: "Dr. Amol Bansal",
        field: "Pain Management Specialist",
        degree: "MBBD, MD, FIPM, & CCEPC",
        experience: "11+ Years Of Experience"
    },
    {
        id: 8,
        img: drVidula,
        name: "Dr. Vidula Bansal",
        field: "Pain Management Specialist",
        degree: "MBBS, MD, PDAF & CCEPC",
        experience: "5+ Years Of Experience"
    }
  ];

export const whyOurCenterData: whyOurCenterDataType[] = [
    {
        id: 1,
        img: center1,
        title: "Expert Multidisciplinary Care Team",
        description: "",
        descListArr: [
            "Led by a pain specialist, our care team has super specialists in physiotherapy, psychology, and nutrition",
            "Receive relief through minimally invasive procedures",
            "Feel comfortable through your journey as a dedicated Care Manager guides you through the process"
        ]
    },
    {
        id: 2,
        img: center2,
        title: "Measurable Outcomes",
        description: "",
        descListArr: [
            "Goals for your treatment are specifically designed in consultation with you as per your specific needs and lifestage",
            "Constant tracking through the program to help you monitor your own day-to-day progress, as you move closer to achieving your goals."
        ]
    },
    {
        id: 3,
        img: center3,
        title: "Extraordinary success of our methodology",
        description: "",
        descListArr: ["Clinical studies prove that an integrated approach to treating pain is 9.3X more effective versus other unimodal pain management methods. Clinical results prove that our patients are significantly more likely to resume their daily lives and doing the things they love after they start their journey with us."]
    },
    {
        id: 4,
        img: center4,
        title: "Conservative-first approach",
        description: "Our program focuses on making you pain-free with minimal intervention",
        descListArr: [
            "Safe medication and timely tapering",
            "Emotional support",
            "Safe, non-surgical procedures in severe cases to provide immediate relief"
        ]
    }
]

export const featuredBlogData: FeaturedBlogDataType[] = [
    {
        id: 1,
        img: blog1,
        title: "Chronic Pain",
        description: "Understanding Transforaminal Lumbar Interbody Fusion (TLIF) Procedure", 
        url: "https://www.nivaancare.com/blog/chronic-pain-management/tlif-spine-sugery-spinal-fusion/"
    },
    {
        id: 2,
        img: blog2,
        title: "Chronic Pain",
        description: "Understanding The Difference Between Scoliosis, Kyphosis, And Lordosis",
        url: "https://www.nivaancare.com/blog/chronic-pain-management/difference-scoliosis-kyphosis-lordosis/"
    },
    {
        id: 3,
        img: blog3,
        title: "Chronic Pain", 
        description: "Understanding Shoulder Nerve Pain: Causes, Symptoms, And Treatment Options", 
        url: "https://www.nivaancare.com/blog/chronic-pain-management/shoulder-nerve-pain-causes-treatments/"
    },
    {
        id: 4,
        img: blog4,
        title: "Neck Pain",
        description: "Your Ultimate Guide To Neck Spondylosis Exercises For A Pain-Free Life",
        url: "https://www.nivaancare.com/blog/neck-pain/neck-spondylosis-exercises/"
    },
    {
        id: 5,
        img: blog5,
        title: "Chronic Pain", 
        description: "Seronegative Spondyloarthritis: What You Need To Know In 2023?",
        url: "https://www.nivaancare.com/blog/chronic-pain-management/understanding-seronegative-spondyloarthritis/"
    },
    {
        id: 6,
        img: blog6,
        title: "Chronic Pain", 
        description: "Osteoarthritis Vs Rheumatoid Arthritis: 2023 Guide",
        url: "https://www.nivaancare.com/blog/chronic-pain-management/osteoarthritis-vs-rheumatoid-arthritis/"
    },
    {
        id: 7,
        img: blog7,
        title: "Neck Pain",
        description: "Types Of Back Pain And How To Deal With Them In 2023",
        url: "https://www.nivaancare.com/blog/chronic-pain-management/types-of-back-pain/"
    },
    {
        id: 8,
        img: blog8,
        title: "Chronic Pain", 
        description: "Is Cervical Spondylosis Curable In 2023?",
        url: "https://www.nivaancare.com/blog/neck-pain/is-cervical-spondylosis-curable/"
    },
    {
        id: 9,
        img: blog9,
        title: "Chronic Pain", 
        description: "Living With Osteoarthritis: Understanding Treatments & Alternatives To Surgery",
        url: "https://www.nivaancare.com/blog/chronic-pain-management/osteoarthritis-treatments-alternatives/"
    },
    {
        id: 10,
        img: blog10,
        title: "Chronic Pain", 
        description: "Osgood Schlatter Disease In Adults: How To Find Relief Faster In 2023",
        url: "https://www.nivaancare.com/blog/chronic-pain-management/osgood-schlatter-disease-adults-find-relief-faster-2023/"
    },
    {
        id: 11,
        img: blog11,
        title: "Chronic Pain", 
        description: "How You Sleep Matters – Ideal Sleeping Position For Back Pain",
        url: "https://www.nivaancare.com/blog/chronic-pain-management/sleep-matters-ideal-sleeping-position-back-pain/"
    },
    {
        id: 12,
        img: blog12,
        title: "Chronic Pain", 
        description: "What Is Acute Pain? How Is It Different From Chronic Pain?",
        url: "https://www.nivaancare.com/blog/chronic-pain-management/acute-pain-causes-treatments/"
    },
    {
        id: 13,
        img: blog13,
        title: "Chronic Pain", 
        description: "How To Cure Sciatica Permanently? Things You Should Know In 2023",
        url: "https://www.nivaancare.com/blog/chronic-pain-management/how-cure-sciatica-permanently-things-must-know-2023/"
    },
    {
        id: 14,
        img: blog14,
        title: "Chronic Pain", 
        description: "Finding Back Pain Relief: Your Ultimate Guide To A Pain-Free Life",
        url: "https://www.nivaancare.com/blog/chronic-pain-management/finding-back-pain-relief-ultimate-guide-pain-free-life/"
    },
    {
        id: 15,
        img: blog15,
        title: "Chronic Pain", 
        description: "Non-Pharmacological Strategies For Effective Pain Relief: A Game-Changer",
        url: "https://www.nivaancare.com/blog/chronic-pain-management/non-pharmacological-pain-management-strategies/"
    },
    {
        id: 16,
        img: blog16,
        title: "Chronic Pain", 
        description: "Understanding Types Of Pain Management: A Comprehensive Guide",
        url: "https://www.nivaancare.com/blog/chronic-pain-management/understanding-types-pain-management-comprehensive-guide/"
    }
]