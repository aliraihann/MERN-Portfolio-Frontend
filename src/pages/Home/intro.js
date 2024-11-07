import React from "react";

function Intro() {
  const handleButtonClick = () => {
    const aboutElement = document.getElementById("about-section");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen w-full md:lg:min-h-screen flex flex-col justify-center items-center p-20 lg:p-4">
      {/* Main Card Container */}
      <div className="relative w-full max-w-lg mx-auto my-auto">
        <div className="bg-white rounded-2xl justify-self-center h-[250px] w-[250px] md:h-[450px] md:w-[450px] lg:h-[450px] lg:w-[450px] xl:h-[480px] xl:w-[490px] border-4 border-black p-1">
          <div className="bg-red-600 box-content h-full flex flex-col rounded-2xl">
            <h1 className="text-white text-6xl md:text-9xl lg:text-9xl xl:text-9xl text-center font-bold m-0">
              HI!
            </h1>
            <h1 className="text-white text-4xl md:text-6xl lg:text-6xl text-center font-bold m-0">
              MY NAME IS
            </h1>
            <div className="bg-white flex-grow flex items-center justify-center mb-8">
              <h1 className="font-graffiti text-6xl md:text-8xl lg:text-8xl xl:text-9xl text-black mt-8 lg:mt-12 tracking- text-nowrap -rotate-6">
                ALI RAIHAN
              </h1>
            </div>
          </div>
        </div>
      </div>
      <button
        className="font-graffiti text-xl  md:text-4xl lg:text-4xl text-black font-bold tracking-wide md:self-end lg:self-end lg:mb-5 md:-rotate-6 lg:-rotate-6"
        onClick={handleButtonClick}
      >
        Let's get started!
      </button>
    </section>
  );
}

export default Intro;
