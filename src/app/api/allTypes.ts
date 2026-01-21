import type { StaticImageData } from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

// Type definitions
export type Review = {
    id: number;
    name: string;
    designation?:string;
    reviewText: string;
    postedWhen: string;
    img: StaticImageData | "";
    isVideo?: boolean;
    videoUrl?: string;
    starImg?: StaticImageData;
    isFourStar?: boolean;
  };
  
  export type faqData = {
    title: string;
    desc: string;
  };

  export type faqArrData = {
    title: string;
    slug: string;
    desc: string[];
  };
  
  export type TreatmentData = {
    id: number;
    name: string;
    img?: StaticImageData;
    process: string;
    benefits: string[];
  };
  
  export type Link = {
    subTitle: string;
    url: string;
  };
  
  export type FooterLinkSection = {
    id: number;
    titleIcon?: StaticImport | string;
    title: string;
    links: Link[];
  };
  
  export type Doctor = {
    id: number;
    img: StaticImageData;
    name: string;
    field: string;
    degree: string;
    experience: string;
  };
  
  export type ThankYou = {
    img: StaticImageData;
    mobImg: StaticImageData;
    title: string;
  };
  
  export type Treatment = {
    heading: string;
    para: string;
  };
  
  export type ChronicExperienceField = {
    id: number;
    title: string;
  };
  //Radhika
  export type FeatureListCardDataType = {
    id: number;
    desc: string;
  };
  
  export type ComparisonTableDataType = {
    advantage: string;
    nivaan: boolean;
    other: boolean;
  };


  export type PhysioTableDataType = {
    advantage: string;
    nivaan: boolean;
    other: boolean;
  };

  export type ComparisonTableResurfacingDataType = {
    advantage: string;
    nivaan: boolean;
    other: boolean;
  };

  export type SpineDataType = {
    advantage: string;
    nivaan: boolean;
    other: boolean;
  };
  
  export type listArr = {
    title: string;
    desc: string;
  };
  
  export type WhatIsCarouselCardType = {
    id: number;
    heading: string;
    icon: StaticImageData;
    para: string;
    listArr: listArr[];
  };
  
  export type ConditionsTreatedType = {
    id: number;
    image: StaticImageData;
    content: string;
    imgStyle?: string;
  };
  
  export type outcomeBoxType = {
    id: number;
    image: StaticImageData;
    content: string;
  };
  
  export type ConditionsTreatedCardDataType = {
    heading: string;
    listArr: string[];
    icon: StaticImageData;
  };
  
  export type FeatureListCardProps = {
    title: string;
    data: FeatureListCardDataType[];
  };
  
  export type FeatureListSectionProps = {
    featureContents: FeatureListCardProps[];
  };
  
  export type Navbar2Type = {
    id: number;
    title: string;
    titleHindi: string;
    link: string;
  };
  
  export type overlaySlideDataType = {
    img: StaticImageData;
    imgMob?: StaticImageData;
    title: string;
    desc: string;
  };
  
  export type teamCardDataType = {
    img: StaticImageData;
    title: string;
    desc: string;
  };
  
  export type GraphCardType = {
    id: number;
    title: string;
    img: StaticImageData;
    imgMob: StaticImageData;
  };
  
  export type IconGridData = {
    id: number | string;
    icon: StaticImageData | string;
    description: string;
  };
  
  export type ImportantStudiesType = {
    id: number;
    heading: string;
    subHeading: string;
    img: StaticImageData;
    url: string;
  };