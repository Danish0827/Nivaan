import HubSection from '@/components/Hub/HubSection';
import { HubHeroSection } from '@/components/HubHeroSection';
import HubStatsBar from '@/components/HubStatsBar';
import LocationGrid from '@/components/locationGrid';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
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

    if (hubRes.ok) {
      data = await hubRes.json();

      type = 'hub';
    }
  } catch (err) {
    console.error("Hub API failed", err);
  }

  // If hub not found, try location API
  if (!data) {
    try {
      const locRes = await fetch(`https://www.hclient.in/nivaan/wp-json/site/v1/locations/${slug}`, {
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
          <PageBreadcrumb title={data.name} />
          <div className='px-3 md:px-6 lg:px-10 xl:px-14 2xl:px-24 pb-20'>
            <h2 className='text-center lg:text-left text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl font-semibold text-[#284599] lg:pl-2 pb-8'>Pain Treatment in <span className='capitalize'>{slug}</span></h2>
            <LocationGrid posts={data.local_targeting} url="" cat={slug} />
          </div>
          <div className='px-3 md:px-6 lg:px-10 xl:px-14 2xl:px-24 pb-20'>
            <h2 className='text-center lg:text-left text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl font-semibold text-[#284599] lg:pl-2 pb-8'>Best Pain Specialists in <span className='capitalize'>{slug}</span></h2>
            <LocationGrid posts={data.local_optimization} url="" cat={slug} />
          </div>
        </>
      )}
    </>
  );
};

export default DynamicPage;
