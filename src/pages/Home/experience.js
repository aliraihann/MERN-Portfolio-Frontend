import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;

  return (
    <section className="h-screen min-h-min overflow-hidden my-10">
      <SectionTitle title="Experiences" />
      <div className="flex-col lg:flex lg:pt-0 lg:gap-5">
        <div className="flex flex-col lg:gap-5 lg:w-1/3">
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`font-graffiti-title text-xl lg:text-3xl px-5 py-5
                            ${
                              selectedItemIndex === index
                                ? "text-white rounded-full text-right bg-blue-500"
                                : " text-black"
                            }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:w-2/3 border-double border-red-700 border-8 p-2">
          <h1 className="font-graffiti-title text-black  bg-yellow-400 text-center text-5xl lg:text-6xl mb-0 pt-5">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="font-graffiti bg-yellow-400 text-xl lg:text-4xl text-center text-white pb-5">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="font-graffiti text-xl lg:text-3xl justify-end text-center text-black">
            {experiences[selectedItemIndex].description}
          </p>
          <div className="flex justify-end">
            {experiences[selectedItemIndex].company.includes("Ernst") ? (
              <img
                src="/logoEy.png"
                alt="Logo EY"
                className="size-32 lg:size-40"
              />
            ) : experiences[selectedItemIndex].company.includes("Shopee") ? (
              <img
                src="/logoShopee.png"
                alt="Logo Shopee"
                className="size-32 lg:size-40"
              />
            ) : experiences[selectedItemIndex].company.includes("Kayu") ? (
              <img
                src="/logoFabelio.png"
                alt="Logo Fabelio"
                className="size-32 lg:size-40"
              />
            ) : experiences[selectedItemIndex].company.includes("Sinar") ? (
              <img
                src="/logoSinarMas.png"
                alt="Logo Sinar Mas"
                className="size-32 lg:size-40"
              />
            ) : experiences[selectedItemIndex].company.includes("Jakarta") ? (
              <img
                src="/LogoStockroom.png"
                alt="Logo Stockroom"
                className="size-32 lg:size-40"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;