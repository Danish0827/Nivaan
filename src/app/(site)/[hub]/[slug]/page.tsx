import LocationOptimizationSection from '@/components/Location/LocationOptimizationSection';
import LocationTargetingSection from '@/components/Location/LocationTargetingSection';
import { LocationHeroSection } from '@/components/LocationHeroSection';
import LocationStatsBar from '@/components/LocationStatsBar';
import { getLocalOptimization, getLocalTargeting } from '@/lib/api';
import { notFound } from 'next/navigation';

const DynamicLocationPage = async ({ params }: any) => {
  const resolvedParams = await params
  const slug = resolvedParams.slug;
  let data: any = null;
  let type: 'targeting' | 'optimization' | null = null;

  const tarRes = await getLocalTargeting(slug)
  if (tarRes && tarRes.acf) {
    data = tarRes;
    type = "targeting";
  }
  if (!data) {
    const optRes = await getLocalOptimization(slug)
    if (optRes && optRes.acf) {
      data = optRes
      type = "optimization"
    }
  }

  if (!data || !type) return notFound();
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
          <LocationTargetingSection data={acf} breadcrumbTitle={data?.locations?.[0] || ""} />
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
          <LocationOptimizationSection data={acf} breadcrumbTitle={data?.locations?.[0] || ""} />
        </>
      )}
    </>
  );
};

export default DynamicLocationPage;
