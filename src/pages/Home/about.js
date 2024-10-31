import React from "react";
import { useSelector } from "react-redux";

function About() {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { description1, skills } = about;

  return (
    <div id="about-section" className="h-screen">
      <div className="flex lg:w-full">
        <div className="flex flex-col lg:w-1/2">
          <h1 className="font-graffiti-caption text-left text-blue-700 lg:text-9xl  lg:pl-10 ">
            From <br />
            Back Office <br />
            to <br />
            Breakthrough Ideas!
          </h1>
        </div>
        <div className="flex flex-col lg:w-1/2">
          <p className="font-graffiti text-black lg:text-3xl lg:pt-10">
            {description1 || "  "}
          </p>
          <div className="flex flex-col">
            <h1 className="font-graffiti justify-end text-black lg:text-3xl">
              Here are a few technologies I've been working recently:
            </h1>
            <div className="flex flex-wrap justify-center gap-10 lg:mb-11">
              {skills.map((skill, index) => (
                <div className="">
                  <h1 className="font-graffiti text-black bg-red-600 lg:text-4xl lg:-rotate-2">
                    {skill}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
