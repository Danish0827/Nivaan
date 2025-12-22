export interface Button {
  title: string;
  url?: string;
}

export interface HeroSectionProps {
  title: string;
  description: string;
  primaryBtn: Button;
  secondaryBtn: Button;
  image: string;
  mobile: string;
}
