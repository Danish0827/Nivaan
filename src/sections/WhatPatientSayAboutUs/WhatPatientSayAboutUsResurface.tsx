// components/Testimonials.tsx
import { Star } from "lucide-react";
import Image from 'next/image';

const testimonials = [
  {
    name: "Anubhav Yadav",
    review:
      "My knee cartilage damage made walking difficult. I was worried I’d need a full replacement. Knee resurfacing at Nivaan helped preserve my knee and gave me back my mobility.",
    time: "1 week ago",
    stars: 4.5,
    image: "/images/anubhav.png", // replace with real path
  },
  {
    name: "Bhoomi Devi",
    review:
      "I underwent resurfacing procedure at Nivaan. Within 3 weeks, I was walking comfortably again, and now I can even sit cross-legged during pooja. I feel like I’ve got my freedom back.",
    time: "5 weeks ago",
    stars: 5,
    image: "/images/bhoomi.png",
  },
  {
    name: "Kushal Singh",
    review:
      "I couldn’t focus on work or travel because of my knee pain. After my resurfacing procedure, I can move around with ease and without hesitation. I am truly grateful to Nivaan.",
    time: "5 weeks ago",
    stars: 5,
    image: "/images/kushal.png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-1 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          What Our Patients Say About Us!
        </h2>

        {/* Rating Section */}
        <div
          className="flex flex-col items-center gap-2 mb-6 px-4 sm:px-8 md:px-20 lg:px-40"
        >
          <Image
            src={require("../../../public/googlereview.png")}
            className="block mx-2"
            alt="doctor img"
            unoptimized
          />
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
        <Image
              src={require('../../../public/anubhavall.png')}
              className="block mr-2 ml-2"
              alt="anubhav"
              unoptimized              
            />
        <Image
              src={require('../../../public/bhoomiall.png')}
              className="block mr-2 ml-2"
              alt="bhoomi"
              unoptimized
            />
        <Image
              src={require('../../../public/kushalall.png')}
              className="block mr-2 ml-2"
              alt="kushal"
              unoptimized
            />
        </div>
      </div>
    </section>
  );
}
