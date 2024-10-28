import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";
import { useSelector } from "react-redux";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;

  return (
    <div className="h-[100vh] my-10">
      <SectionTitle title="Experiences" />
      <div className="flex pt-0 gap-5">
        <div className="flex flex-col gap-5 w-1/3">
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`font-graffiti-title text-3xl px-5 py-5
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
        <div className="flex flex-col w-2/3 border-double border-red-700 border-8 p-2">
          <h1 className="font-graffiti-title text-black  bg-yellow-400 text-center text-6xl mb-0 pt-5">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="font-graffiti bg-yellow-400  text-center text-4xl text-white pb-5">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="font-graffiti text-3xl justify-end text-center text-black">
            {experiences[selectedItemIndex].description}
          </p>
          <div className="flex justify-end">
            {selectedItemIndex === 0 ? (
              <img
                src="/logoEy.png"
                alt="Logo EY"
                className="size-40"
              />
            ) : selectedItemIndex === 1 ? (
              <img
                src="/logoShopee.png"
                alt="Logo Shopee"
                className="size-40"
              />
            ) : selectedItemIndex === 2 ? (
              <img
                src="/logoFabelio.png"
                alt="Logo Fabelio"
                className="size-40"
              />
            ) : selectedItemIndex === 3 ? (
              <img
                src="/logoSinarMas.png"
                alt="Logo Sinar Mas"
                className="size-40"
              />
            ) : selectedItemIndex === 4 ? (
              <img
                src="/logoStockroom.png"
                alt="Logo Stockroom"
                className="size-40"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;

{
  /* <div>
<SectionTitle title='Experiences' />
<div className="flex py-10 gap-20 sm:flex-col">
    <div className="flex flex-col gap-10 border-l-2 border-white w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
        {experiences.map((experience, index) => (
            <div 
                onClick={() => {
                    setSelectedItemIndex(index);
                }}
                className="cursor-pointer"
                >
                <h1 className={`text-xl px-5
                ${selectedItemIndex === index 
                    ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#a43c3c6c] py-3 sm:w-40' 
                    : ' text-white'}`}>
                        {experience.period}
                </h1>
            </div>
        )) }
    </div>
    <div className="flex flex-col gap-5">
        <h1 className="text-secondary text-xl">{experiences[selectedItemIndex].title}</h1>
        <h1 className="text-tertiary text-xl">{experiences[selectedItemIndex].company}</h1>
        <p className="text-white">{experiences[selectedItemIndex].description}</p>
    </div>
</div>
</div> */
}
