export interface Button {
  title: string;
  url?: string;
}
export interface Doctor {
  title: string;
  slug:string;
  featured_image: {url:string,alt:string};
  qualification:string;
  experience: string;
  place: string;
  hospital: string;
}

export interface ExpertsSectionProps {
  title: string;
  description: string;
  button?: Button;
  doctordata: Doctor[]
}