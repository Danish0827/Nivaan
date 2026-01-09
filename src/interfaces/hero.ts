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

export interface MenuItem {
  id: number;
  title: string;
  url?: string;
  target?: string;
  icon?: {
    url: string;
  };
  children?: MenuItem[];
}
