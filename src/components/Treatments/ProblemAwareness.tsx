import Image from "next/image";
import RequestCallbackModal from "../RequestCallbackModal";

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
            unoptimized
          />
        </div>
        {/* Content */}
        <div className="max-w-xl">
          {description && (
            <div
              className="text-gray-700 overview-list text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-4 mb-6"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}

          {buttonText &&
            <div>
              <RequestCallbackModal buttonText={buttonText} id={buttonText} />
            </div>
          }
        </div>
      </div>
    </div>
  );
}
