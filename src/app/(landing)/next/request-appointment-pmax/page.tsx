import RequestAppointment from "@/components/RequestAppointment";
import { Suspense } from "react";
import { Metadata } from 'next';
import RequestAppointmentPmax from "@/components/RequestAppointmentPmax";
 
export const metadata: Metadata = {
  title: "Best Pain Clinic Delhi NCR",
  description: "Looking for the best pain clinic in Delhi NCR? Experience comprehensive pain management and expert care for all types of chronic pain. Book your consultation now!",
  keywords: [
    "Book appointment for pain treatment Delhi NCR",
    "Schedule consultation with pain specialist",
    "pain clinic",
    "head specialist doctor",
    "headache doctor",
    "physiotherapist",
    "joint pain doctor near me",
    "chiropractor near me"
  ]
};

const page = () => (
  <Suspense>
    <RequestAppointmentPmax formLocation='request appointment pmax' />
  </Suspense>
);

export default page;
