import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google";

const VideoSection = ({ videoUrl }: { videoUrl: string }) => {
  const videoId = videoUrl.split("v=")[1];
  return (
    <section>
      <div className="mt-12 video-wrapper w-full h-[189px] md:w-[649px] md:h-[450px] md:mx-auto">
        <YouTubeEmbed videoid={videoId} params="controls=0" height={189} />
      </div>
    </section>
  );
};

export default VideoSection;
