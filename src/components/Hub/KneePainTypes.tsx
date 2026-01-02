type TypeBox = {
  title: string;
  subtitle: string;
  description: string;
};

type TypeSection = {
  title: string;
  description: string;
  type_boxs: TypeBox[];
};

type KneePainTypesProps = {
  data: {
    type_description: string;
    type_description_boxs: TypeSection[];
  };
};

export default function KneePainTypes({ data }: KneePainTypesProps) {
  return (
    <section className="container mr-auto py-3 overview-section">
      {/* Intro Description */}
      <div
        className="text-gray-700 text-lg lg:text-sm xl:text-base 2xl:text-lg leading-relaxed font-mono space-y-4"
        dangerouslySetInnerHTML={{ __html: data.type_description }}
      />

      {/* Sections */}
      <div className="space-y-20 py-10">
        {data.type_description_boxs.map((section, index) => (
          <div key={index}>
            {/* Section Heading */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0852A0]">
                {section.title}
              </h2>
              <p className="mt-2 text-black text-base md:text-lg">
                {section.description}
              </p>
            </div>

            {/* Cards */}
            {section.type_boxs &&
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
                {section.type_boxs.map((box, i) => (
                  <div
                    key={i}
                    className="p-8 md:p-10 text-center flex flex-col justify-start"
                  >
                    <h4 className="text-xl xl:text-2xl font-bold text-black">
                      {box.title}
                    </h4>

                    <p className="mt-2 uppercase tracking-wide text-base font-semibold text-[#06A1DC]">
                      {box.subtitle}
                    </p>

                    <p className="mt-4 text-black text-base leading-relaxed">
                      {box.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            }
          </div>
        ))}
      </div>
    </section>
  );
}
