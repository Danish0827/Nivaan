export interface DoctorsDataProps {
  experts: Doctor[];
}

export interface Doctor {
  name: string;
  degree: string;
  experience: string;
  subtitle: string;
  image: string;
}
