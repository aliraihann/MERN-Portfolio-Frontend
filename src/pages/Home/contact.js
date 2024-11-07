import React from "react";

function Contact() {
  return (
    <div className=" min-h-min w-full py-10 lg:py-0 lg:min-h-min flex flex-col justify-center items-center gap-5 lg:gap-0 mb-0 overflow-hidden">
      <h1 className="font-graffiti text-black text-xl md:text-3xl lg:text-5xl font-semibold m-0">
        Your ideas, my inbox—let’s make it happen.
      </h1>
      <div className="flex flex-row justify-center">
        <img
          src="/arrows.png"
          alt="Logo Arrows"
          className="hidden lg:block lg:justify-items-center lg:size-3/12 lg:transform rotate-180"
        />
        <div className="bg-white h-[220px] w-[320px] md:h-[240px] md:w-[430px] lg:h-[350px] lg:w-[550px] self-center rounded-2xl border-2 border-black p-1">
          <div className="flex bg-blue-400 h-full rounded-2xl gap-0">
            <div className="grid p-2 md:p-3 lg:p-5 lg:pr-0 gap-1 lg:gap-4 m-2 md:gap-2 lg:m-5 mr-0 lg:mr-0 content-center pr-0 rounded-l-2xl bg-blue-500 ">
              <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold m-0">
                Name
              </h1>
              <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold m-0">
                Email
              </h1>
              <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold m-0">
                Domicile
              </h1>
              <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold m-0">
                LinkedIn
              </h1>
              <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-bold m-0">
                Github
              </h1>
            </div>
            <div className="grid p-2 md:p-3 lg:p-5 gap-1 md:gap-3 px-1 md:px-1 lg:px-2 lg:gap-4 m-2 lg:my-5 mx-0 content-center bg-blue-500 ">
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
            <div className="grid p-2 md:p-3 lg:p-5 gap-1 m-2 lg:m-5 lg:pl-0 w-full ml-0 lg:ml-0 rounded-r-2xl auto-cols-max bg-slate-100">
              <div className="grid gap-1 lg:gap-4 content-center lg:w-full  px-0">
                <h1 className="font-graffiti text-black text-lg md:text-2xl lg:text-3xl m-0 indent-1 lg:indent-3 border-solid border-b-2 border-black">
                  Ali Raihan Nashrullah
                </h1>
                <h1 className="font-graffiti text-black text-lg  md:text-2xl lg:text-3xl m-0 indent-1 lg:indent-3 border-solid px-0 border-b-2 border-black">
                  {" "}
                  aliraihann@gmail.com
                </h1>
                <h1 className="font-graffiti text-black text-lg  md:text-2xl lg:text-3xl m-0 indent-1 lg:indent-3 border-solid px-0 border-b-2 border-black">
                  {" "}
                  Bogor, Indonesia
                </h1>
                <a
                  href={
                    "https://www.linkedin.com/in/ali-raihan-nashrullah-430236183/"
                  }
                  target="_blank"
                  className="font-graffiti text-black  md:text-2xl lg:text-3xl m-0 indent-1 tracking-tighter lg:indent-3 border-solid px-0 border-b-2 hover:text-red-600 border-black"
                >
                  {" "}
                  Ali Raihan Nashrullah
                </a>
                <a
                  href={"https://github.com/aliraihann"}
                  target="_blank"
                  className="font-graffiti text-black  md:text-2xl lg:text-3xl m-0 indent-1 lg:indent-3 border-solid px-0 border-b-2 hover:text-red-600 border-black"
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
          className="hidden lg:block lg:justify-items-center lg:size-3/12"
        />
      </div>
    </div>
  );
}

export default Contact;
