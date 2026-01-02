import HubSection from '@/components/Hub/HubSection';
import { HubHeroSection } from '@/components/HubHeroSection';
import HubStatsBar from '@/components/HubStatsBar';
import { notFound } from 'next/navigation';
import React from 'react'

const hubpage = async ({ params }: any) => {
    const slug = params.hub
    const res = await fetch(
        `https://www.hclient.in/nivaan/wp-json/site/v1/hub/${slug}`,
        {
            next: { revalidate: 60 },
        }
    );
    if (res.status === 404) {
        notFound();
    }
    if (!res.ok) {
        console.error("API failed", res.status);
        return null;
    }

    let data;
    try {
        data = await res.json();
        // console.log(data);

    } catch (err) {
        console.error("JSON parse failed");
        return null;
    }

    const { acf } = data
    return (
        <>
            <HubHeroSection
                breadcrumbTitle={data?.title}
                title={acf?.banner_title}
                description={acf?.banner_info}
                button={acf?.banner_button}
                image={acf?.overview_image}
            />
            <HubStatsBar stats={acf?.banner_list} />
            <HubSection breadcrumbTitle={data?.title} data={acf}/>
        </>
    )
}

export default hubpage