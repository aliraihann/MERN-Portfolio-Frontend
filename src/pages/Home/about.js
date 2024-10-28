import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { imgUrl, description1, description2, skills } = about;

  return (
    <div id="about-section" className="h-[100vh]">
      {/* <SectionTitle title="About" /> */}
      <div className="flex w-full sm:flex-col">
        <div className="w-1/2 flex flex-col sm:w-full">
          <h1 className="font-graffiti-caption text-9xl text-left pl-10 text-blue-700 sm:text-3xl ">
            From <br />
            Back Office <br />
            to <br />
            Breakthrough Ideas!
          </h1>
        </div>
        <div className="flex flex-col w-1/2 sm:w-full">
          <p className="font-graffiti pt-10 text-3xl text-black">
            {description1 || "  "}
          </p>
          <div className="flex flex-col">
            <h1 className="font-graffiti justify-end text-black text-3xl">
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

// <div id="about-section">
// <SectionTitle title="About" />

// <div className="flex w-full items-center sm:flex-col">
//   <div className="h-[70vh] w-1/2 flex flex-col justify-center sm:w-full">
//     <h1 className="font-graffiti-caption text-9xl text-center sm:text-3xl text-black -rotate-12">
//       From Back Office <br/>2 <br/>Breakthrough Ideas!
//     </h1>
//     {/* <dotlottie-player
//       src={imgUrl}
//       background="transparent"
//       speed="1"
//       autoplay
//     ></dotlottie-player> */}
//   </div>
//   <div className="flex flex-col gap-5  w-1/2 sm:w-full">
//     <p className="font-graffiti-regular text-4xl text-black">
//       {description1 || "  "}
//     </p>
//     <p className="font-graffiti-regular text-4xl text-black">
//       {description2 || "  "}
//     </p>
//   </div>
// </div>
// <div className="py-5">
//   <h1 className="text-tertiary text-xl">
//     Here are a few technologies I've been working recently:
//   </h1>
//   <div className="flex flex-wrap gap-10 mt-5">
//     {skills.map((skill, index) => (
//       <div className="border border-tertiary py-3 px-5">
//         <h1 className="text-tertiary">{skill}</h1>
//       </div>
//     ))}
//   </div>
// </div>
// </div>
