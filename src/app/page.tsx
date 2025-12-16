import { HeroSection } from "@/components/HeroSection";
import PainAreaSection from "@/components/PainAreaSection";
import RecoveryTeam from "@/components/RecoveryTeam";
import ResultsSection from "@/components/ResultsSection";
import StatsBar from "@/components/StatsBar";
import UnderstandPain from "@/components/UnderstandPain";
import JourneySection from "@/components/JourneySection"
import EvidenceNewsSection from "@/components/EvidenceNewsSection";
import ReviewsStoriesSection from "@/components/ReviewsStoriesSection";
import ExpertsSection from "@/components/ExpertsSection";

export default async function Home() {
  // console.log(process.env.NEXT_PUBLIC_BACKEND, "BACKEND");

  const res = await fetch(
    `https://hclient.in/nivaan/wp-json/site/v1/home`,
    {
      next: { revalidate: 60 }, // IMPORTANT
    }
  );

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

  const {
    banner,
    understand,
    recovery,
    results,
    journey,
    evidence,
    news,
    reviews,
    stories,
    experts,
  } = data;

  return (
    <>
      <HeroSection
        title={banner?.title}
        description={banner?.info}
        primaryBtn={banner?.button_one}
        secondaryBtn={banner?.button_two}
        image={banner?.video_image?.url}
        mobile={banner?.banner_videoimage_mobile?.url}
      />
      <StatsBar stats={banner?.counters} />
      <UnderstandPain
        imageUrl={understand?.video_image?.url}
        videoUrl={understand?.video?.url}
        title={understand?.title}
        description={understand?.info}
        buttonText={understand?.button?.title}
        onButtonClick={understand?.button?.url}
      />
      <RecoveryTeam
        sectionTitle={recovery?.subtitle}
        mainTitle={recovery?.title}
        subtitle={recovery?.info}
        roles={recovery?.lists}
        image={recovery?.image?.url}
        afterInfo={recovery?.after_info}
        button={recovery?.button}
      />
      <PainAreaSection />
      <ResultsSection
        image={results.image.url}
        title={results.title}
        subtitle={results.subtitle}
        info={results.info}
        lists={results.lists}
      />
      <JourneySection journey={journey} />
      <ExpertsSection title={experts.title} description={experts.info} button={experts.button}/>
      <EvidenceNewsSection evidence={evidence} news={news} />
      <ReviewsStoriesSection
        reviews={reviews}
        stories={stories}
      />
    </>
  );
}
