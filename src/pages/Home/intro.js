import React from "react";

function Intro() {
  const handleButtonClick = () => {
    const aboutElement = document.getElementById("about-section");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-4 px-4">
      {/* Main Card Container */}
      <div className="relative w-full max-w-lg mx-auto  my-auto">
        <div className="bg-white rounded-2xl lg:h-[450px] lg:w-[450px] border-4 border-black p-1">
          <div className="bg-red-600 box-content h-full flex flex-col rounded-2xl">
            <h1 className="text-white text-9xl text-center font-bold m-0">
              HI!
            </h1>
            <h1 className="text-white text-6xl text-center font-bold m-0">
              MY NAME IS
            </h1>
            <div className="bg-white flex-grow flex items-center justify-center mb-8">
              <h1 className="font-graffiti lg:text-8xl text-black mt-12 tracking- text-nowrap -rotate-6">
                ALI RAIHAN
              </h1>
            </div>
          </div>
        </div>
      </div>
      <button
        className="font-graffiti text-4xl text-black font-bold tracking-wide  self-end  mt-16 -rotate-6"
        onClick={handleButtonClick}
      >
        Let's get started!
      </button>
    </section>
  );
}

export default Intro;
