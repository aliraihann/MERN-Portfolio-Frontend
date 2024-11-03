import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;

  return (
    <section className="min-h-screen overflow-hidden my-10">
      <div className="flex pt-0 pb-10 gap-5">
        <div className="order-2 flex flex-col w-1/3 gap-1 justify-center">
          <SectionTitle title="Projects" />

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
                <div className="flex-grow border-solid border-8 border-red-600 rounded-full p-20">
                  <h1 className="font-graffiti-title text-black text-center text-5xl m-0 ">
                    {projects[selectedItemIndex].title}
                  </h1>
                  <p className="text-black font-graffiti text-center text-3xl">
                    {projects[selectedItemIndex].description}
                  </p>
                  <h1 className="font-graffiti-title text-center text-black px-5 text-5xl mb-0 mt-5">
                    GitHub Repo:
                  </h1>
                  <a
                    href={projects[selectedItemIndex].link}
                    target="_blank"
                    className="text-black font-graffiti text-3xl text-center block hover:text-blue-500"
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
