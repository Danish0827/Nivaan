import RequestAppointmentHindi from "@/components/RequestAppointmentHindi";
import BackPainEdw from "@/sections/BackPainEDW/BackPainEdw";
import { Suspense } from "react";

const page = () => (
  <Suspense>
    <RequestAppointmentHindi formLocation="Request Appointment Hindi" />
  </Suspense>
);

export default page;
