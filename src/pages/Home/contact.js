import React from "react";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center gap-0 mb-0 overflow-hidden">
      <h1 className="font-graffiti text-black text-5xl font-semibold m-0 pt-10">Your ideas, my inbox—let’s make it happen.</h1>

      <div className="flex">
      <img src="/arrows.png" alt="Logo Arrows" className="justify-items-center size-19 transform rotate-180" />
      <div className="bg-white h-[350px] w-[700px] self-center rounded-2xl border-2 border-black p-1">
        <div className="flex bg-blue-400 h-full rounded-2xl gap-0">
          <div className="grid p-5 gap-4 content-center pr-0 bg-blue-500 m-5 mr-0 rounded-l-3xl">
            <h1 className="text-white text-3xl font-bold m-0">Name</h1>
            <h1 className="text-white text-3xl font-bold m-0">Email</h1>
            <h1 className="text-white text-3xl font-bold m-0">LinkedIn</h1>
            <h1 className="text-white text-3xl font-bold m-0">Domicile</h1>
            <h1 className="text-white text-3xl font-bold m-0">Github</h1>
          </div>
          <div className="grid p-5 px-2 gap-4 content-center bg-blue-500 m-5 ml-0 mr-0">
            <h1 className="text-white text-3xl font-bold m-0">:</h1>
            <h1 className="text-white text-3xl font-bold m-0">:</h1>
            <h1 className="text-white text-3xl font-bold m-0">:</h1>
            <h1 className="text-white text-3xl font-bold m-0">:</h1>
            <h1 className="text-white text-3xl font-bold m-0">:</h1>
          </div>
          <div className="flex-grow bg-slate-100 rounded-3xl m-5 pt-1 ml-0 rounded-l-none">
            <div className="grid p-5 gap-4 px-0">
              <h1 className="font-graffiti text-black text-3xl indent-3 m-0 border-solid px-0 border-b-2 border-black">
                Ali Raihan Nashrullah
              </h1>
              <h1 className="font-graffiti text-black text-3xl indent-3 m-0 border-solid px-0 border-b-2 border-black">
                {" "}
                aliraihann@gmail.com
              </h1>
              <h1 className="font-graffiti text-black text-3xl indent-3 m-0 border-solid px-0 border-b-2 border-black">
                {" "}
                Ali Raihan Nashrullah
              </h1>
              <h1 className="font-graffiti text-black text-3xl indent-3 m-0 border-solid px-0 border-b-2 border-black">
                {" "}
                Bogor, Indonesia
              </h1>
              <h1 className="font-graffiti text-black text-3xl indent-3 m-0 border-solid px-0 border-b-2 border-black">
                {" "}
                aliraihann
              </h1>
            </div>
          </div>
        </div>
      </div>
      <img src="/arrows.png" alt="Logo Arrows" className="size-15" />
      </div>
    </div>
  );
}

export default Contact;