import { LocationHeroSection } from '@/components/LocationHeroSection';
import LocationStatsBar from '@/components/LocationStatsBar';
import { notFound } from 'next/navigation';
import React from 'react';

const DynamicLocationPage = async ({ params }: any) => {
  const slug = params.slug;

  let data: any = null;
  let type: 'targeting' | 'optimization' | null = null;

  // First try hub API
  try {
    const tarRes = await fetch(`https://hclient.in/nivaan/wp-json/site/v1/local-targeting/${slug}`, {
      next: { revalidate: 60 },
    });
    
    if (tarRes.ok) {
      data = await tarRes.json();
        console.log(data,"data");
      
      type = 'targeting';
    }
  } catch (err) {
    console.error("Hub API failed", err);
  }
  console.log(data, "data danish");
  
  // If hub not found, try location API
  if (!data) {
    try {
      const optRes = await fetch(`https://hclient.in/nivaan/wp-json/site/v1/local-optimization/${slug}`, {
        next: { revalidate: 60 },
      });
      
      console.log(optRes, "ajlaf optima danish dsadsa");
      if (optRes.ok) {
        data = await optRes.json();
        type = 'optimization';
      }
    } catch (err) {
      console.error("Location API failed", err);
    }
  }

  if (!data || !type) {
    notFound();
  }
  console.log(data, "data danish dsadsa");

  const acf = data?.acf;

  return (
    <>
      {type === 'targeting' && (
        <>
          <LocationHeroSection
            breadcrumbTitle={data?.locations?.[0] || ""}
            breadcrumbSub={data?.title}
            title={acf?.banner_title}
            description={acf?.banner_description}
            button={acf?.banner_button_name}
            button1={acf?.banner_button}
            image={data?.featured_image}
          />
          <LocationStatsBar stats={acf?.banner_numbers} />
          {/*   <LocationStatsBar data={acf}/> */}
        </>
      )}

      {type === 'optimization' && (
        <>
          <LocationHeroSection
            breadcrumbTitle={data?.locations?.[0] || ""}
            breadcrumbSub={data?.title}
            title={acf?.banner_title}
            description={acf?.banner_description}
            button={acf?.banner_button_name}
            button1={acf?.banner_button}
            image={data?.featured_image}
          />
          <LocationStatsBar stats={acf?.banner_numbers} />
        </>
      )}
    </>
  );
};

export default DynamicLocationPage;
