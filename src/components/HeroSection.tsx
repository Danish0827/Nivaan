import parse from "html-react-parser";
import he from "he";

export function HeroSection({ title, subtitle, description, primaryBtn, secondaryBtn, image }: any) {
  const decodedTitle = he.decode(title);
  const decodedDescription = he.decode(description);

  const parsedTitle = parse(decodedTitle, {
    replace: (domNode: any) => {
      if (domNode.name === "spam") {
        return (
          <span className="text-[#06A1DC] font-bold">
            {domNode.children[0]?.data}
          </span>
        );
      }
      if (domNode.name === "space") {
        return " "; 
      }
    },
  });


  const parsedDescription = parse(decodedDescription, {
    replace: (domNode: any) => {
      if (domNode.name === "spam") {
        return (
          <span className="text-blue-600 font-semibold">
            {domNode.children[0]?.data}
          </span>
        );
      }
      if (domNode.name === "space") {
        return " ";
      }
    },
  });

  return (
    <section className="home-main-section bg-gradient-to-r from-[#EEF8FD] to-[#b6cdd8] relative overflow-hidden w-full pb-8">
      <img
        src="/images/watermark.webp"
        className="absolute top-60 left-0 w-[800px] pointer-events-none"
      />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
        <div className="relative mt-2 lg:mt-0 pt-6 pb-10 bg-gradient-to-b lg:bg-none from-[#fff] to-transparent  px-4 lg:pl-8 lg:pr-3 2xl:pl-16 2xl:pr-5 lg:pt-40 lg:pb-10 xl:pt-28 xl:pb-20 2xl:pt-0 2xl:pb-10 order-2 lg:order-1">
          <h1 className="text-[32px] lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-blue-900 leading-tight">
            {parsedTitle}
          </h1>
          <p className="text-black lg:mt-3 2xl:mt-6 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed font-light">
            {parsedDescription}
          </p>
          <div className="flex items-center gap-4 mt-6 2xl:mt-12 flex-wrap">
            <button className="bg-gradient-to-r w-full lg:w-fit from-orange-500 to-orange-600 text-white px-4 py-3 2xl:px-7 2xl:py-4 rounded-full font-semibold shadow-md hover:scale-105 duration-500 cursor-pointer">
              {primaryBtn.title}
            </button>
            <button className="border-2 w-full lg:w-fit border-orange-500 text-orange-600 px-4 py-2.5 2xl:px-7 2xl:py-4 rounded-full font-semibold flex items-center gap-2 hover:scale-105 duration-500 cursor-pointer">
              {secondaryBtn.title}
            </button>
          </div>
        </div>
        <div className="relative z-20 order-1 lg:order-2">
          <img src={image} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}
