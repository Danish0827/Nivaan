import ConditionSection from '@/components/Condition/ConditionSection';
import { ConditionHeroSection } from '@/components/ConditionHeroSection';
import ConditionStatsBar from '@/components/ConditionStatsBar';
import { notFound } from 'next/navigation';
import React from 'react'

const conditionpage = async ({ params }: any) => {
    const slug = params.slug
    const res = await fetch(
        `https://www.hclient.in/nivaan/wp-json/site/v1/conditions/${slug}`,
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
    } catch (err) {
        console.error("JSON parse failed");
        return null;
    }

    const { acf } = data
    return (
        <>
            <ConditionHeroSection
                breadcrumbTitle={acf?.condition_type[0]}
                breadcrumbSub={data?.title}
                title={acf?.banner_title}
                description={acf?.banner_description}
                button={acf?.banner_button_name}
                image={data?.featured_image}
            />
            <ConditionStatsBar stats={acf?.banner_boxs} />
            <ConditionSection data={acf} />
        </>
    )
}

export default conditionpage