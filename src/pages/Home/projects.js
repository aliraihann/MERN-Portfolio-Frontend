import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;

  return (
    <section className="min-h-screen overflow-hidden my-10">
      <div className="flex-col lg:flex lg:flex-row lg:pt-0 lg:pb-10">
        <div className="lg:order-2 flex flex-col lg:w-1/3 gap-1 pb-10 lg:pb-0 lg:px-3 justify-center">
          <SectionTitle title="Projects" />

          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer text-center"
            >
              <h1
                className={`font-graffiti-title text-xl md:text-2xl lg:text-3xl px-5 py-5 lg:m-0
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
        <div className="lg:order-1 flex flex-col gap-5 lg:w-2/3 border-solid border-red-600 border-2 lg:border-8 rounded-full p-1">
          <div className="flex flex-grow flex-col border-double border-2 lg:border-8 border-yellow-400 rounded-full p-1">
            <div className="flex flex-grow  flex-col border-double border-2 lg:border-8 rounded-full">
              <div className="flex flex-grow flex-col border-double border-2 lg:border-8 border-yellow-400 rounded-full p-1">
                <div className="flex-grow flex-col border-solid border-2 lg:border-8 border-red-600 rounded-full py-8 md:p-10 lg:p-20">
                  <h1 className="font-graffiti-title text-black text-center text-4xl md:text-5xl lg:text-5xl m-0 ">
                    {projects[selectedItemIndex].title}
                  </h1>
                  <p className="text-black font-graffiti text-center text-xl md:text-2xl lg:text-3xl">
                    {projects[selectedItemIndex].description}
                  </p>
                  <h1 className="font-graffiti-title text-center text-black px-5 text-xl md:text-5xl  lg:text-5xl mb-0 mt-5">
                    GitHub Repo:
                  </h1>
                  <a
                    href={projects[selectedItemIndex].link}
                    target="_blank"
                    className="text-black font-graffiti text-xl md:text-2xl lg:text-3xl text-center block hover:text-blue-500"
                  >
                    {projects[selectedItemIndex].link}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
