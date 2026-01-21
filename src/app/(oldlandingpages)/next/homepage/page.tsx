import HomePage from "@/components/HomePage";
import { Suspense } from "react";

const page = () => (
  <Suspense>
    <HomePage />
  </Suspense>
);

export default page;
