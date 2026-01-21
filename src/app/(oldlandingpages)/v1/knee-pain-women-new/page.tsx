import React, { Suspense } from "react";

import KneePainWomen from "@/components/KneePainWomen";

const page = () => {
  return (
    <div>
      <Suspense>
        <KneePainWomen pathName="/v1/knee-pain-women-new" imgStyle="absolute bottom-0 -right-2 translate-y-14 lg:hidden translate-x-6 h-40 w-36" />
      </Suspense>
    </div>
  );
};

export default page;