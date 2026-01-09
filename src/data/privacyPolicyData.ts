export interface PolicyItem {
  title: string;
  description: string;
}

export interface PolicySectionData {
  number: number;
  heading: string;
  intro?: string;
  items: PolicyItem[];
}

export const privacyPolicySections: PolicySectionData[] = [
  {
    number: 1,
    heading: "CONSENT AND ACCEPTANCE",
    intro: "",
    items: [
      {
        title: "Agreement: ",
        description:
          'By accessing the Website/Application, clicking "I accept," providing Personal Information, or using our Services, you consent to the collection, storage, processing, disclosure, and transfer of your data as per this policy.',
      },
      {
        title: "Free Will: ",
        description:
          "You acknowledge that you provide your Personal Information out of your free will and that its collection is necessary for the purposes identified.",
      },
      {
        title: "No Wrongful Loss: ",
        description:
          "You consent that such data handling shall not cause any wrongful loss to you if done in accordance with this policy.",
      },
      {
        title: "Right to Withdraw: ",
        description:
          "You have the option not to provide information. You may withdraw consent at any time by writing to care@nivaancare.com.",
      },
      {
        title: "Consequences of Withdrawal: ",
        description:
          "If you withdraw consent, we may not fulfill the purposes for which data was sought and may restrict your use of the Website, Application, or Services.",
      },
    ],
  },
  {
    number: 2,
    heading: "PERSONAL INFORMATION COLLECTED",
    intro: "We collect various types of information, including but not limited to:",
    items: [
      { title: "Personal Identifiers: ", description: "Name of patient, caregiver, doctor, or health coach; birth date/age; gender." },
      { title: "Contact Details: ", description: "Address (including country/pin code), phone/mobile number, and email address." },
      { title: "Health Information: ", description: "Physical, physiological, and mental health conditions; medical records, history, and reports." },
      { title: "Account & Finance: ", description: "Valid financial information for purchases, Login ID, and password." },
      { title: "Technical & Usage Data: ", description: "IP address, browser type/language, referring URL, files accessed, errors, time zone, operating system, and log files." },
      { title: "Interaction Records: ", description: "Details of interactions with Nivaan representatives and usage patterns." },
      { title: "Other: ", description: "Any other information willingly shared by you." },
    ],
  },
  {
    number: 3,
    heading: "COLLECTION & USAGE PURPOSES",
    intro: 'We collect and use your information for the following "Purposes":',
    items: [
      { title: "Operations: ", description: "To operate and improve the platform, build your profile, and provide effective services." },
      { title: "Research: ", description: "To perform studies, analysis, research, and aggregate non-personally identifiable data." },
      { title: "Communications: ", description: "To contact you via phone, SMS, WhatsApp, or email for appointments, issues, or reminders." },
      { title: "Marketing: ", description: "To send promotional materials and customize advertising based on preferences." },
      { title: "Legal & Corporate: ", description: "To respond to legal requests, investigate fraud, or transfer data during mergers or acquisitions." },
    ],
  },
  {
    number: 4,
    heading: "HOW WE COLLECT DATA",
    intro: "Data is collected through several methods:",
    items: [
      { title: "", description: "Registration on the Website or Application." },
      { title: "", description: "Direct provision of information during services." },
      { title: "", description: "Tracking usage of platform features." },
      { title: "", description: "Use of temporary or permanent cookies." },
    ],
  },
  {
    number: 5,
    heading: "SHARING AND TRANSFERS",
    intro: "",
    items: [
      { title: "International Transfers: ", description: "You authorize sharing of data across borders with third parties, affiliates, agents, or banks." },
      { title: "Jurisdiction Acknowledgment: ", description: "Some countries may have less stringent data protection laws." },
      { title: "Contractual Protections: ", description: "Nivaan will impose contractual obligations to ensure adherence to this policy." },
    ],
  },
  {
    number: 6,
    heading: "SECURITY AND STORAGE",
    intro: "",
    items: [
      { title: "Security Standards: ", description: "Role-based access, password protection, and encryption are used." },
      { title: "Authorized Access: ", description: "Access is limited to employees, agents, and partners on a need-to-know basis." },
      { title: "Retention: ", description: "Data is stored for at least three years or as required by law." },
    ],
  },
  {
    number: 7,
    heading: "COOKIES AND THIRD-PARTY LINKS",
    intro: "",
    items: [
      { title: "Cookies: ", description: "You may block or erase cookies, which may affect certain features." },
      { title: "External Links: ", description: "We are not responsible for third-party websites linked on our platform." },
    ],
  },
  {
    number: 8,
    heading: "UPDATES AND COMPLIANCE",
    intro: "",
    items: [
      { title: "Policy Changes: ", description: "Updates will be communicated and consent will be required upon your next visit." },
      { title: "Compliance: ", description: "You may not use services if this policy violates your local laws." },
      { title: "Grievances: ", description: "Contact care@nivaancare.com or Nikita Dhadwal at nikita.dhadwal@nivaancare.com." },
    ],
  },
];
