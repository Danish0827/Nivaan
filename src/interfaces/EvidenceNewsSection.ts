export interface ImageMeta {
  url: string;
  title: string;
}

export interface EvidenceBox {
  logo: ImageMeta;
  details: string;
}

export interface EvidenceSection {
  title: string;
  info: string;
  boxs: EvidenceBox[];
}

export interface NewsSection {
  title: string;
  info: string;
  logos: {
    url: string;
    image: {
      url: string;
      alt: string;
    };
  }[];
}

export interface EvidenceNewsSectionProps {
  evidence: EvidenceSection;
  news: NewsSection;
}

export interface EvidenceCardProps {
  item: EvidenceBox;
}
