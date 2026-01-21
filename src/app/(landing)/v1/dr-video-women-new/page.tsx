import ChronicPainWomenNew from "@/components/ChronicPainWomenNew";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Suspense>
        <ChronicPainWomenNew pathName="/v1/dr-video-women-new" />
      </Suspense>
    </div>
  );
};

export default page;