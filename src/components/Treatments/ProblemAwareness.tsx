import Image from "next/image";

interface ProblemAwarenessProps {
  subtitle?: string;
  title?: string;
  description?: string;
  image?: string;
  buttonText?: string;
}

export default function ProblemAwareness({
  subtitle = "Problem Awareness",
  title = "Why Does Your Knee Pain Keep Returning?",
  description,
  image,
  buttonText = "Book Consultation",
}: ProblemAwarenessProps) {
  return (
      <div className="container mr-auto overview-section py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-0 items-center">
          {/* Image */}
          <div className="relative w-full">
            <Image
              src={image || "/images/dummy/knee-pain.webp"}
              alt="Knee Pain"
              width={1000}
              height={1000}
              className="rounded-[40px] object-cover w-full 2xl:w-[90%]"
              priority
            />
          </div>
          {/* Content */}
          <div className="max-w-xl">
            {description && (
              <div
                className="text-gray-700 text-lg lg:text-sm xl:text-base 2xl:text-xl leading-relaxed font-mono space-y-4 mb-6"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}
            {buttonText &&
           <button
            // onClick={onCTAClick}
            className="inline-block rounded-full bg-orange-500 px-8 py-3 text-white font-semibold hover:bg-orange-600 transition"
          >
              {buttonText}
            </button>
}
          </div>
        </div>
      </div>
  );
}
