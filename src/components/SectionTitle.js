import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex items-center justify-center pb-5 lg:pb-2 xl:pb-0">
      <h1 className="font-graffiti-title2 text-6xl md:text-8xl lg:text-8xl xl:text-9xl  my-1 w-full text-center text- decoration-black decoration-2">{title}</h1>
    </div>
  );
}

export default SectionTitle;

// <h1 className="font-graffiti-title2 text-6xl w-full m-0 text-center text-black underline underline-offset-5 decoration-black decoration-2 tracking-tight">{title}</h1>
