export interface DoctorsDataProps {
  experts: Doctor[];
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
