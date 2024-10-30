import React from "react";

function Intro() {

  const handleButtonClick = () => {
    const aboutElement = document.getElementById("about-section");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="lg:h-[100vh] flex flex-col justify-center items-center gap-10">
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