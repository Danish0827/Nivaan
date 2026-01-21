import React, { Suspense } from "react";

import KneePainWomen from "@/components/KneePainWomen";
import KneepainwomenLucknow from "@/components/KneepainwomenLucknow";

const page = () => {
  return (
    <div>
      <Suspense>
        <KneepainwomenLucknow pathName="/v1/mumbai/knee-pain-women-new" imgStyle="absolute bottom-0 -right-2 translate-y-14 lg:hidden translate-x-6 h-40 w-36" />
      </Suspense>
    </div>
  );
};

export default page;