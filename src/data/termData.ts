export interface TermItem {
  title: string;
  description: string;
}

export interface TermSectionData {
  number: number;
  heading: string;
  intro?: string;
  items: TermItem[];
}

export const termSections: TermSectionData[] = [
  {
    number: 1,
    heading: "THE AGREEMENT",
    intro: "",
    items: [
      {
        title: "Binding Nature: ",
        description:
          "These Terms of Use, together with the Nivaan Privacy Policy and any service-specific terms, constitute a legally binding Agreement between you and Nivaan.",
      },
      {
        title: "Acceptance: ",
        description:
          "By clicking 'I Accept' or using the Application, you agree to be bound by this Agreement. If you do not agree, please do not use the Application.",
      },
      {
        title: "User Definitions: ",
        description:
          '"You" refers to any user, whether a Registered User (paid subscribers) or a Non-Registered User (browsing guests).',
      },
      {
        title: "Acting on Behalf: ",
        description:
          'If you use the Application on behalf of another person, "You" includes that third party.',
      },
      {
        title: "Modification: ",
        description:
          "Nivaan may modify the Agreement from time to time. Continued use after updates constitutes acceptance of the modified terms.",
      },
    ],
  },
  {
    number: 2,
    heading: "ACCESS AND USAGE RIGHTS",
    intro: "",
    items: [
      {
        title: "Geographic Restriction: ",
        description:
          "Services are available to Registered Users only in India. You should not use the Application from outside India.",
      },
      {
        title: "Non-Registered Users: ",
        description:
          "May browse the website, share content via social media, and access eligibility questionnaires.",
      },
      {
        title: "Registered Users: ",
        description:
          "Enjoy full access to subscribed Services, subject to the Agreement and payment of applicable fees.",
      },
    ],
  },
  {
    number: 3,
    heading: "SERVICES OFFERED",
    intro:
      "The Application facilitates various healthcare services provided by Nivaan or third-party contractors:",
    items: [
      { title: "Consultations: ", description: "Online coaching and tele-consultations via call, chat, or video." },
      { title: "Diagnostics: ", description: "Lab services including sample collections." },
      { title: "Digital Health Records: ", description: "Storage and display of medical history, prescriptions, and radiology reports." },
      { title: "Care Kits: ", description: "Provision of physical devices or instruments necessary for care." },
      { title: "Pharmacy Coordination: ", description: "Delivery of medicines from third-party suppliers on behalf of the patient." },
    ],
  },
  {
    number: 4,
    heading: "TELEMEDICINE & CLINICAL TERMS",
    intro: "",
    items: [
      { title: "Eligibility: ", description: "Registered Users must be at least 18 years of age and of sound mind." },
      { title: "Emergency Disclaimer: ", description: "Tele-consultations are not for emergencies. In life-threatening situations, visit the nearest physical healthcare facility." },
      { title: "Professional Discretion: ", description: "Healthcare Service Providers may halt a tele-consultation and require an in-person visit if a physical examination is needed." },
      { title: "Restricted Prescriptions: ", description: "Doctors will not prescribe Schedule X drugs or narcotic/psychotropic substances via this platform." },
    ],
  },
  {
    number: 5,
    heading: "DATA PRIVACY & CONSENT (DPDP COMPLIANCE)",
    intro: "",
    items: [
      { title: "Informed Consent: ", description: "By accepting these terms, you grant informed consent to Nivaan’s Privacy Policy, including data collection and transfer to third parties." },
      { title: "Revocability: ", description: "You may withdraw consent at any time. The withdrawal mechanism will be as simple as the initial consent process." },
      { title: "Right to Nominate: ", description: "You may nominate an individual to exercise your data rights in case of death or incapacity." },
      { title: "Retention: ", description: "Data is stored for at least three years or as legally required. You may request erasure once medical purposes are fulfilled." },
    ],
  },
  {
    number: 6,
    heading: "INTELLECTUAL PROPERTY RIGHTS",
    intro: "",
    items: [
      { title: "Ownership: ", description: "All software, techniques, logos, and Nivaan Content are the exclusive property of Nivaan or its licensors." },
      { title: "Limited License: ", description: "Users are granted a limited, royalty-free, non-commercial license to use Nivaan Content in India during the Agreement term." },
      { title: "User Content: ", description: "You retain ownership of your content but grant Nivaan a perpetual, worldwide license to use it for service improvements." },
    ],
  },
  {
    number: 7,
    heading: "USER RESPONSIBILITIES",
    intro: "",
    items: [
      { title: "Accuracy: ", description: "You must provide true and accurate information during registration." },
      { title: "Security: ", description: "You are responsible for maintaining the confidentiality of your login credentials." },
      { title: "Compliance: ", description: "You agree to comply with all applicable Indian laws and not misuse the Application." },
      { title: "Communications: ", description: "You consent to receive SMS, phone, and email communications related to your account and transactions." },
    ],
  },
  {
    number: 8,
    heading: "GRIEVANCE REDRESSAL",
    intro: "For concerns related to the Application, data, or these Terms, contact:",
    items: [
      { title: "Grievance Officer: ", description: "Nikita Dhadwal" },
      { title: "Email: ", description: "nikita.dhadwal@nivaancare.com" },
      { title: "Timeline: ", description: "Complaints will be acknowledged within 48 hours and resolved within one month." },
    ],
  },
];
