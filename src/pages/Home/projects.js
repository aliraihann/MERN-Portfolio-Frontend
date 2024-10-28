import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";
import { useSelector } from "react-redux";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;

  return (
    <div className="h-[100vh] my-10">
      <SectionTitle title="Projects" />
      <div className="flex pt-0 pb-10 gap-5 sm:flex-col mt-0">
        <div className="order-2 flex flex-col w-1/3 gap-1">
          {projects.map((project, index) => (
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
                                ? "text-white bg-blue-500 rounded-full"
                                : " text-black"
                            }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="order-1 flex flex-col gap-5 w-2/3 border-solid border-red-600 border-8 rounded-full p-1">
          <div className="flex flex-grow border-double border-8 border-yellow-400 rounded-full p-1">
            <div className="flex flex-grow border-double border-8 rounded-full">
              <div className="flex flex-grow border-double border-8 border-yellow-400 rounded-full p-1">
                <div className="flex-grow border-solid border-8 border-red-600 p-2 rounded-full">
                  <h1 className="font-graffiti-title text-black text-center text-5xl pt-16 mb-0">
                    {projects[selectedItemIndex].title}
                  </h1>
                  <p className="text-black font-graffiti text-center text-3xl mb-0 px-5 py-5">
                    {projects[selectedItemIndex].description}
                  </p>
                  <h1 className="font-graffiti-title text-center text-black px-5 text-5xl mb-0 mt-5">
                    GitHub Repo:
                  </h1>
                  <h1 className="text-black font-graffiti text-center text-3xl px-5 pb-16">
                    {projects[selectedItemIndex].link}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

{
  /* <div>
<SectionTitle title='Projects'/>

<div className="flex py-10 gap-20 sm:flex-col">
    <div className="flex flex-col gap-10 border-l-2 border-white w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
        {projects.map((project, index) => (
            <div 
                onClick={() => {
                    setSelectedItemIndex(index);
                }}
                className="cursor-pointer"
                >
                <h1 className={`text-xl px-5
                ${selectedItemIndex === index 
                    ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#ffffff6c] py-3 sm:w-40' 
                    : ' text-white'
                }`}>
                    {project.title}
                </h1>
            </div>
        )) }
    </div>
    <div className="flex flex-col gap-5">
        <h1 className="text-secondary text-xl">
            {projects[selectedItemIndex].title}
        </h1>
        <p className="text-white">{projects[selectedItemIndex].description}</p>
        <h1 className="text-secondary text-xl">
            GitHub Repo:
        </h1>
        <h1 className="text-white text-xl">
            {projects[selectedItemIndex].link}
        </h1>
    </div>
</div>
</div> */
}
