import Image from "next/image";
import parse from "html-react-parser";

interface WhyBox {
  icon: {
    url: string;
    alt?: string;
  };
  title: string;
  description: string;
}

interface WhyNivaanProps {
  data?: {
    why_subtitle?: string;
    why_title?: string;
    why_description?: string;
    why_list_text?: string;
    why_boxs_lists?: WhyBox[];
  };
}

export default function WhyNivaan({ data }: WhyNivaanProps) {
  if (!data) return null;

  return (
    <section className="bg-white overview-section">
      <div className="container mr-auto">
        
        {/* Header */}
        <div className="my-5">
        
          {data.why_description && (
            <div className="prose max-w-none text-gray-600">
              {parse(data.why_description)}
            </div>
          )}
        </div>

        {/* Card */}
        <div className="bg-white border rounded-[40px] shadow-xs px-6 py-6 lg:px-8">
          
          {data.why_list_text && (
            <h3 className="text-lg lg:text-xl font-semibold text-[#003B73] mb-8">
              {data.why_list_text}
            </h3>
          )}

          {/* List */}
          <div className="space-y-8">
            {data.why_boxs_lists && data.why_boxs_lists?.map((item, index) => (
              <div key={index} className="flex gap-5 items-start">
                
                {/* Icon */}
                <div className="w-20 h-20 rounded-full bg-[#284599] flex items-center justify-center shrink-0">
                  <Image
                    src={item.icon.url}
                    alt={item.icon.alt || item.title}
                    width={50}
                    height={50}
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-base lg:text-xl font-bold text-black mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
