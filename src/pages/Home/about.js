import React from "react";
import { useSelector } from "react-redux";

function About() {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { description1, skills } = about;

  return (
    <div id="about-section" className="h-screen">
      <div className="flex lg:w-full">
        <div className="w-1/2 flex flex-col">
          <h1 className="font-graffiti-caption lg:text-9xl text-left pl-10 text-blue-700">
            From <br />
            Back Office <br />
            to <br />
            Breakthrough Ideas!
          </h1>
        </div>
        <div className="flex flex-col w-1/2">
          <p className="font-graffiti pt-10 lg:text-3xl text-black">
            {description1 || "  "}
          </p>
          <div className="flex flex-col">
            <h1 className="font-graffiti justify-end text-black lg:text-3xl">
              Here are a few technologies I've been working recently:
            </h1>
            <div className="flex flex-wrap justify-center gap-10 mb-11">
              {skills.map((skill, index) => (
                <div className="">
                  <h1 className="font-graffiti text-4xl -rotate-2 text-black bg-red-600">
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
