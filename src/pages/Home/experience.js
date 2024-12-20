import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;

  return (
    <section className="min-h-min overflow-hidden my-10 lg:py-15 xl:pl-7">
      {/* <SectionTitle title="Experiences" /> */}
      <div className="flex-col lg:flex lg:flex-row lg:p-5 lg:pt-0 lg:gap-5 xl:pt-4">
        <div className="flex flex-col lg:gap-5 lg:w-1/2 lg:justify-center">
      <SectionTitle title="Experiences" />

          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`font-graffiti-paragraph text-xl md:text-2xl lg:text-3xl px-5 py-5 lg:m-0
                            ${
                              selectedItemIndex === index
                                ? "text-white rounded-full text-center md:text-right lg:text-right xl:text-right bg-blue-500"
                                : " text-black text-center md:text-left lg:text-left xl:text-left"
                            }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:w-1/2 border-double border-red-700 border-8 p-2">
          <h1 className="font-graffiti-title text-black text-center text-xl md:text-4xl lg:text-4xl  xl:text-6xl mb-0 pt-5 xl:p-4 bg-yellow-400 ">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="font-graffiti-paragraph tracking-tigh text-lg md:text-3xl lg:text-3xl text-center text-white pb-5 bg-yellow-400">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="font-graffiti-paragraph tracking-tighter text-md md:text-lg lg:text-2xl xl:text-2xl justify-end text-center text-black">
            {experiences[selectedItemIndex].description}
          </p>
          <div className="flex justify-end">
            {experiences[selectedItemIndex].company.includes("Ernst") ? (
              <img
                src="/logoEy.png"
                alt="Logo EY"
                className="size-32 md:size-36 lg:size-40"
              />
            ) : experiences[selectedItemIndex].company.includes("Shopee") ? (
              <img
                src="/logoShopee.png"
                alt="Logo Shopee"
                className="size-32 md:size-36 lg:size-40"
              />
            ) : experiences[selectedItemIndex].company.includes("Kayu") ? (
              <img
                src="/logoFabelio.png"
                alt="Logo Fabelio"
                className="size-32 md:size-36 lg:size-40"
              />
            ) : experiences[selectedItemIndex].company.includes("Sinar") ? (
              <img
                src="/logoSinarMas.png"
                alt="Logo Sinar Mas"
                className="size-32 md:size-36 lg:size-40"
              />
            ) : experiences[selectedItemIndex].company.includes("Jakarta") ? (
              <img
                src="/LogoStockroom.png"
                alt="Logo Stockroom"
                className="size-32 md:size-36 lg:size-40"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;