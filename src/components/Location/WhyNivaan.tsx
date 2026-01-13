import Image from 'next/image'
import React from 'react'

interface Props {
  data: any
}
const WhyNivaan = ({ data }: Props) => {
  return (
    <>
      <section className="w-full bg-white overview-section my-10">
        <div className="container mr-auto">
            {data.why_lists && data.why_lists.map((item: any, index: any) => (
              <div key={index} className="pl-4 relative mb-3 last:mb-0 bg-[#EBF9FF] border rounded-[40px] shadow-xs px-6 py-6 lg:px-8">
                <div className="flex gap-4 items-start">
                  {item.icon.url &&
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#1E3A8A] flex items-center justify-center">
                    <Image
                      src={item.icon.url}
                      alt={item.title.alt || ""}
                      width={60}
                      height={60}
                      style={{ filter: 'brightness(100)' }}
                      className="p-2"
                      unoptimized
                    />
                  </div>}
                  {/* Text */}
                  <div>
                    <h4 className="text-sm md:text-base lg:text-lg xl:text-xl mb-2 font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  )
}

export default WhyNivaan