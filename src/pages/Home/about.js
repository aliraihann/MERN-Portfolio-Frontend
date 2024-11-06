import React from "react";
import { useSelector } from "react-redux";

function About() {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { description1, skills } = about;

  return (
    <section id="about-section" className="min-h-screen overflow-hidden lg:pt-1 px-4">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-8">
        {/*left column */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-graffiti-caption text-5xl md:text-8xl lg:text-8.5xl text-center lg:text-left  text-blue-700 leading-tight">
          <span className="block">From</span>
            <span className="block">Back Office</span>
            <span className="block">to</span>
            <span className="block lg:hidden">Break</span>
            <span className="block lg:hidden">through</span>
            <span className="hidden lg:block lg:break-keep">Breakthrough</span>
            <span className="block">Ideas!</span>
          </h1>
        </div>
        {/*right column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-0">
          <p className="font-graffiti text-xl md:text-2xl lg:text-2.5xl text-black lg:pt-5">
            {description1 || "  "}
          </p>
          <div className="flex flex-col gap-2">
            <h1 className="font-graffiti justify-end text-xl md:text-2xl lg:text-2xl text-black">
              Here are a few technologies I've been working recently:
            </h1>
            <div className="flex flex-wrap justify-center gap-3 m-0">
              {skills.map((skill, index) => (
                <div key={index} >
                  <h1 className="font-graffiti text-xl md:text-2xl lg:text-2xl lg:-rotate-2 mt-0 text-black bg-red-600/90">
                    {skill}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
