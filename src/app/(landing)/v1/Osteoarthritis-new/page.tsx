import React, { Suspense } from "react";
import Osteoarthritis from "@/components/Osteoarthritis";

const page = () => {
  return (
    <Suspense>
      <Osteoarthritis />
    </Suspense>
  );
};

export default page;
