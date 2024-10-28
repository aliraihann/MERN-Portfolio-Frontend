import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;

  const handleButtonClick = () => {
    const aboutElement = document.getElementById("about-section");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center gap-10">
      <div className="bg-white box-content h-[450px] w-[500px] rounded-2xl border-4 border-black p-2">
        <div className="bg-red-600 box-content h-full flex flex-col rounded-2xl">
          <h1 className="text-white text-9xl text-center font-bold m-0">HI!</h1>
          <h1 className="text-white text-6xl text-center font-bold m-0">
            MY NAME IS
          </h1>
          <div className="bg-white flex-grow flex items-center justify-center mb-8">
            <h1 className="font-graffiti text-9xl text-black mt-12 tracking- text-nowrap -rotate-6">
              ALI RAIHAN
            </h1>
          </div>
        </div>
      </div>
      <button
        className="font-graffiti text-4xl text-black font-bold tracking-wide  self-end  mt-16 -rotate-6"
        onClick={handleButtonClick}
      >
        Let's get started!
      </button>
    </div>
  );
}

export default Intro;

// return (
//   // <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-2 py-10">
//   <div className="h-[80vh] bg-primary flex flex-col gap-2 py-10">
//     <h1 className="text-white text-7xl font-bold text-center">HI!</h1>
//     {/* <h1 className="text-white text-7xl text-center font-bold">{welcomeText || " "}</h1> */}
//     <h1 className="text-white text-7xl text-center font-bold">My name is</h1>

//     <h1 className="font-graffiti text-9xl text-center sm:text-3xl text-black font-semibold">
//       ALI RAIHAN
//     </h1>
// {/*
//     <h1 className="text-7xl text-center sm:text-3xl text-black font-semibold">
//       {firstName || " "} {lastName || " "}
//     </h1>
//     <h1 className="text-7xl text-center sm:text-3xl text-secondary font-semibold">
//       {caption || " "}
//     </h1> */}
//     <p className="text-white w-2/3">{description || " "}</p>
//     <button
//       className="border-2 border-tertiary text-tertiary px-10 py-3 rounded"
//       onClick={handleButtonClick}
//     >
//       Get started
//     </button>
//   </div>
