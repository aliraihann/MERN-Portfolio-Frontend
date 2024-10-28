import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex py-10 ml-7">
      <h1 className="font-graffiti items-center text-5xl text-black">{title}</h1>
    </div>
  );
}

export default SectionTitle;

// <div className="flex gap-5 items-center py-2">
// <h1 className="font-graffiti text-5xl text-black">
//     {title}
// </h1>
// <div className="w-60 h-[1px] bg-tertiary">

// </div>
// </div>
