// import HubSection from '@/components/Hub/HubSection';
// import { HubHeroSection } from '@/components/HubHeroSection';
// import HubStatsBar from '@/components/HubStatsBar';
// import { notFound } from 'next/navigation';
// import React from 'react'

// const hubpage = async ({ params }: any) => {
//     const slug = params.hub
//     const res = await fetch(
//         `https://www.hclient.in/nivaan/wp-json/site/v1/hub/${slug}`,
//         {
//             next: { revalidate: 60 },
//         }
//     );
//     if (res.status === 404) {
//         notFound();
//     }
//     if (!res.ok) {
//         console.error("API failed", res.status);
//         return null;
//     }

//     let data;
//     try {
//         data = await res.json();
//         // console.log(data);

//     } catch (err) {
//         console.error("JSON parse failed");
//         return null;
//     }

//     const { acf } = data
//     return (
//         <>
//             <HubHeroSection
//                 breadcrumbTitle={data?.title}
//                 title={acf?.banner_title}
//                 description={acf?.banner_info}
//                 button={acf?.banner_button}
//                 image={data?.featured_image}
//             />
//             <HubStatsBar stats={acf?.banner_list} />
//             <HubSection breadcrumbTitle={data?.title} data={acf}/>
//         </>
//     )
// }

// export default hubpage

import HubSection from '@/components/Hub/HubSection';
import { HubHeroSection } from '@/components/HubHeroSection';
import HubStatsBar from '@/components/HubStatsBar';
// import LocationSection from '@/components/Location/LocationSection';
// import { LocationHeroSection } from '@/components/LocationHeroSection';
// import LocationStatsBar from '@/components/LocationStatsBar';
import { notFound } from 'next/navigation';
import React from 'react';

const DynamicPage = async ({ params }: any) => {
  const slug = params.hub;

  let data: any = null;
  let type: 'hub' | 'location' | null = null;

  // First try hub API
  try {
    const hubRes = await fetch(`https://www.hclient.in/nivaan/wp-json/site/v1/hub/${slug}`, {
      next: { revalidate: 60 },
    });
      console.log(hubRes,"data");

    if (hubRes.ok) {
      data = await hubRes.json();
      console.log(data,"data");
      
      type = 'hub';
    }
  } catch (err) {
    console.error("Hub API failed", err);
  }

  // If hub not found, try location API
  if (!data) {
    try {
      const locRes = await fetch(`https://www.hclient.in/nivaan/wp-json/site/v1/treatments/${slug}`, {
        next: { revalidate: 60 },
      });

      if (locRes.ok) {
        data = await locRes.json();
        type = 'location';
      }
    } catch (err) {
      console.error("Location API failed", err);
    }
  }

  if (!data || !type) {
    notFound();
  }

  const acf = data?.acf;

  return (
    <>
      {type === 'hub' && (
        <>
          <HubHeroSection
            breadcrumbTitle={data?.title}
            title={acf?.banner_title}
            description={acf?.banner_info}
            button={acf?.banner_button}
            image={data?.featured_image}
          />
          <HubStatsBar stats={acf?.banner_list} />
          <HubSection breadcrumbTitle={data?.title} data={acf} />
        </>
      )}

      {type === 'location' && (
        <>
        dasfdsadsa
          {/* <LocationHeroSection
            breadcrumbTitle={data?.title}
            title={acf?.banner_title}
            description={acf?.banner_info}
            button={acf?.banner_button}
            image={data?.featured_image}
          />
          <LocationStatsBar stats={acf?.banner_list} />
          <LocationSection breadcrumbTitle={data?.title} data={acf} /> */}
        </>
      )}
    </>
  );
};

export default DynamicPage;
