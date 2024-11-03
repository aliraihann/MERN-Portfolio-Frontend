import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex pt-10 ml-7">
      <h1 className="font-graffiti items-center text-6xl text-black underline underline-offset-5 decoration-black decoration-2 tracking-tight">{title}</h1>
    </div>
  );
}

export default SectionTitle;