import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex pb-5 lg:pb-5 xl:pb-0">
      <h1 className="font-graffiti text-6xl w-full m-0 text-center text-black underline underline-offset-5 decoration-black decoration-2 tracking-tight">{title}</h1>
    </div>
  );
}

export default SectionTitle;