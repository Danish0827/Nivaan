import RequestAppointment from "@/components/RequestAppointment";
import BackPainEdw from "@/sections/BackPainEDW/BackPainEdw";
import { Suspense } from "react";

const page = () => (
  <Suspense>
    <RequestAppointment formLocation="Request Appointment Meta" />
  </Suspense>
);

export default page;
