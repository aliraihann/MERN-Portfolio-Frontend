import React from "react";

function Contact() {
  return (
    <div className=" min-h-min w-full lg:min-h-screen flex flex-col justify-center items-center lg:p-0 gap-5 mb-0 overflow-hidden">
      <h1 className="font-graffiti text-black text-xl lg:text-5xl font-semibold m-0 lg:pt-10">
        Your ideas, my inbox—let’s make it happen.
      </h1>
      <div className="flex">
        <img
          src="/arrows.png"
          alt="Logo Arrows"
          className="hidden lg:block lg:justify-items-center lg:size-15 lg:transform rotate-180"
        />
        <div className="bg-white h-[220px] w-[320px] lg:h-[350px] lg:w-[700px] self-center rounded-2xl border-2 border-black p-1">
          <div className="flex bg-blue-400 h-full rounded-2xl gap-0">
            <div className="grid p-2 gap-1 lg:p-5 lg:gap-4 m-2 lg:m-5 mr-0 content-center pr-0 rounded-l-2xl bg-blue-500 ">
              <h1 className="text-white text-xl lg:text-3xl font-bold m-0">
                Name
              </h1>
              <h1 className="text-white text-xl lg:text-3xl font-bold m-0">
                Email
              </h1>
              <h1 className="text-white text-xl lg:text-3xl font-bold m-0">
                Domicile
              </h1>
              <h1 className="text-white text-xl lg:text-3xl font-bold m-0">
                LinkedIn
              </h1>
              <h1 className="text-white text-xl lg:text-3xl font-bold m-0">
                Github
              </h1>
            </div>
            <div className="grid p-2 gap-1 lg:p-5 px-1 lg:px-2 lg:gap-4 m-2 lg:m-5 mx-0 content-center bg-blue-500 ">
              <h1 className="text-white text-xl lg:text-3xl font-bold m-0">
                :
              </h1>
              <h1 className="text-white text-xl lg:text-3xl font-bold m-0">
                :
              </h1>
              <h1 className="text-white text-xl lg:text-3xl font-bold m-0">
                :
              </h1>
              <h1 className="text-white text-xl lg:text-3xl font-bold m-0">
                :
              </h1>
              <h1 className="text-white text-xl lg:text-3xl font-bold m-0">
                :
              </h1>
            </div>
            <div className="grid p-2 gap-1 w-full lg:flex-grow m-2 lg:m-5 lg:pt-1 ml-0 rounded-r-2xl auto-cols-max bg-slate-100">
              <div className="grid gap-1 lg:p-5 lg:gap-4  content-center px-0">
                <h1 className="font-graffiti text-black lg:text-3xl m-0 indent-1 lg:indent-3 border-solid border-b-2 border-black">
                  Ali Raihan Nashrullah
                </h1>
                <h1 className="font-graffiti text-black text-lg lg:text-3xl m-0 indent-1 lg:indent-3 border-solid px-0 border-b-2 border-black">
                  {" "}
                  aliraihann@gmail.com
                </h1>
                <h1 className="font-graffiti text-black text-lg lg:text-3xl m-0 indent-1 lg:indent-3 border-solid px-0 border-b-2 border-black">
                  {" "}
                  Bogor, Indonesia
                </h1>
                <a
                  href={
                    "https://www.linkedin.com/in/ali-raihan-nashrullah-430236183/"
                  }
                  target="_blank"
                  className="font-graffiti text-black text-lg  lg:text-3xl m-0 indent-1 tracking-tighter lg:indent-3 border-solid px-0 border-b-2 border-black"
                >
                  {" "}
                  Ali Raihan Nashrullah
                </a>
                <a
                  href={"https://github.com/aliraihann"}
                  target="_blank"
                  className="font-graffiti text-black text-lg lg:text-3xl m-0 indent-1 lg:indent-3 border-solid px-0 border-b-2 border-black"
                >
                  {" "}
                  aliraihann
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/arrows.png"
          alt="Logo Arrows"
          className="hidden lg:block lg:justify-items-center lg:size-15"
        />
      </div>
    </div>
  );
}

export default Contact;
