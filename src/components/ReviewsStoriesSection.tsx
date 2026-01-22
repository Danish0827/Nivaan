"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

interface Review {
  name: string;
  time: string;
  comments: string;
}

interface Story {
  name: string;
  age: string;
  place: string;
  type: string;
  video?: { url: string };
  video_image?: { url: string };
}

interface ReviewsProps {
  start_number: number | string;
  google_logo: { url: string };
  start_image: { url: string };
  reviews_numbers_counts: number | string;
  lists: Review[];
}

interface StoriesProps {
  title: string;
  info: string;
  items: Story[];
}

interface Props {
  reviews: ReviewsProps;
  stories: StoriesProps;
}

export default function ReviewsStoriesSection({ reviews, stories }: Props) {
  const [count, setCount] = useState<String>();

  useEffect(() => {
    let start = 0;
    const end = parseFloat(String(reviews.start_number));
    const duration = 800;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Number(start).toFixed(1));
    }, 16);

    return () => clearInterval(timer);
  }, [reviews.start_number]);

  return (
    <section className="py-16 bg-gradient-to-b from-[#F3F7FF] to-white">
      <div className="container mx-auto px-4">
        <div className="lg:flex items-start gap-6 xl:gap-10">
          {/* Google Reviews */}
          <div className="lg:w-1/2">
            <div className="flex justify-center items-center gap-3">
              <Image
                src={reviews.google_logo.url}
                alt="Google Logo"
                width={130}
                height={100}
                unoptimized
              />
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0852A0]">
                Reviews
              </h2>
            </div>

            <div className="flex justify-center items-center gap-3 mt-3">
              <span className="text-[#0852A0] text-2xl font-semibold">{count}</span>
              <Image
                src={reviews.start_image.url}
                alt="Stars"
                width={120}
                height={30}
                className="object-contain"
                unoptimized
              />
              <span className="text-[#0852A0]">({reviews.reviews_numbers_counts})</span>
            </div>
            <ReviewSlider lists={reviews.lists} star={reviews.start_image.url} />
          </div>
          <div className="lg:w-1/2 mt-10 lg:-mt-2 xl:mt-0">
            <h2 className="text-xl md:text-2xl font-bold text-[#004A86] text-center">
              {stories.title}
            </h2>
            <p className="text-gray-600 mt-2 mb-6 max-w-2xl xl:pb-3 text-center font-mono">{stories.info}</p>

            <StoriesSlider items={stories.items} />
          </div>
        </div>
      </div>
    </section>
  );
}

function useItemsToShow() {
  const [items, setItems] = useState(1)

  useEffect(() => {
    const update = () => {
      setItems(window.innerWidth >= 768 ? 2 : 1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return items
}

function ReviewSlider({ lists, star }: { lists: Review[]; star: string }) {
  const [index, setIndex] = useState(0)
  const itemsToShow = useItemsToShow()

  const next = () =>
    setIndex((prev) => (prev + itemsToShow) % lists.length)

  const prev = () =>
    setIndex((prev) => (prev - itemsToShow + lists.length) % lists.length)

  return (
    <div className="relative mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 xl:gap-6 transition-all duration-500">
        {Array.from({ length: itemsToShow }).map((_, i) => {
          const current = (index + i) % lists.length
          return (
            <ReviewCard key={current} item={lists[current]} star={star} />
          )
        })}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button onClick={prev} className="cursor-pointer w-10 h-10 rounded-full border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
          ←
        </button>
        <button onClick={next} className="cursor-pointer w-10 h-10 rounded-full border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
          →
        </button>
      </div>
    </div>
  )
}


function ReviewCard({ item, star }: { item: Review; star: string }) {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const el = textRef.current;
    if (!el) return;

    el.classList.remove("line-clamp-3");
    const fullHeight = el.scrollHeight;
    const lineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const threeLineHeight = lineHeight * 3;

    el.classList.add("line-clamp-3");

    if (fullHeight > threeLineHeight + 1) {
      setShowToggle(true);
    }
  }, []);

  return (
    <div className="bg-white rounded-[50px] p-5 xl:p-6 2xl:p-8 shadow-[0_3px_20px_rgba(0,0,0,0.1)]">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
          {item.name[0]}
        </div>

        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 xl:text-lg line-clamp-1">
            {item.name}
          </h4>
          <p className="text-gray-500 text-sm xl:text-base">{item.time}</p>
        </div>
        <Image
          src="/images/google.svg"
          alt="Google Icon"
          width={35}
          height={35}
          className="ml-auto"
          unoptimized
        />
      </div>
      <Image src={star} alt="Stars" width={100} height={20} className="mb-3" unoptimized/>
      <p
        ref={textRef}
        className={`text-gray-700 text-sm xl:text-base leading-relaxed ${!expanded ? "line-clamp-3" : ""
          }`}
      >
        {item.comments}
      </p>
      {showToggle && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-sm font-semibold text-blue-600 hover:underline cursor-pointer"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}

function StoriesSlider({ items }: { items: Story[] }) {
  const [index, setIndex] = useState(0)
  const itemsToShow = useItemsToShow()

  const next = () =>
    setIndex((prev) => (prev + itemsToShow) % items.length)

  const prev = () =>
    setIndex((prev) => (prev - itemsToShow + items.length) % items.length)

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500">
        {Array.from({ length: itemsToShow }).map((_, i) => {
          const current = (index + i) % items.length
          return <StoryCard key={current} item={items[current]} />
        })}
      </div>
      <div className="flex gap-4 justify-center mt-6">
        <button onClick={prev} className="cursor-pointer w-10 h-10 rounded-full border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
          ←
        </button>
        <button onClick={next} className="cursor-pointer w-10 h-10 rounded-full border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white">
          →
        </button>
      </div>
    </div>
  )
}

function StoryCard({ item }: { item: Story }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div className="relative rounded-[50px] overflow-hidden shadow-[0_3px_20px_rgba(0,0,0,0.15)]">
        <div className="bg-black/30 absolute w-full h-full"></div>
        {item.video_image ? (
          <Image
            src={item.video_image.url}
            alt="Video Preview"
            width={600}
            height={350}
            className="w-full h-[270px] object-cover"
            unoptimized
          />
        ) : (
          <video
            src={item.video?.url}
            className="w-full h-[270px] object-cover"
            muted
            loop
            playsInline
          />
        )}

        {/* Play Button */}
        {item.video?.url && (
          <button
            onClick={() => setOpen(true)}
            className="cursor-pointer absolute right-4 bottom-4 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg text-blue-700 text-xl hover:scale-105 transition"
          >
            ▶
          </button>
        )}

        <div className="absolute bottom-6 left-4 text-white">
          <p className="font-semibold">
            {item.name}, {item.age} {item.place}
          </p>
          <p className="text-sm opacity-90">{item.type}</p>
        </div>
      </div>

      {open && item.video?.url && (
        <div
          className="fixed inset-0 z-999 bg-black/70 flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer absolute top-3 right-3 z-10 text-white text-2xl"
            >
              ✕
            </button>

            {/* Video */}
            <video
              src={item.video.url}
              controls
              autoPlay
              className="w-full h-auto max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </>
  );
}