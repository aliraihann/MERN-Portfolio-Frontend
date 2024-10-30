import React from "react";

function Contact() {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center gap-0">
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

// <div className="mt-10 h-[100vh] my-10">
// <SectionTitle title="Say Hello" />
// <div className="flex flex-col sm:flex-col justify-center items-center">
//   <div className="flex flex-col items-center">
//     <p className="font-graffiti text-black text-4xl mb-0 ml-10">{"{"}</p>
//     {Object.keys(contact).map((key) => {
//       if (key !== "_id") {
//         return (
//           <div key={key}>
//             <p className="ml-20 mb-0">
//               <span className="font-graffiti text-black text-4xl">{key} : </span>
//               <span className="font-graffiti text-black text-4xl">{contact[key]}</span>
//             </p>
//           </div>
//         );
//       }
//       return null;
//     })}
//     <p className="font-graffiti text-black text-4xl mt-0 ml-10">{"}"}</p>
//   </div>
//   <div className="h-[700px]">
//     <dotlottie-player
//       src="https://lottie.host/1f473049-7a08-4242-899f-e8d3e8df056c/Uv4SJyJqN1.json"
//       background="transparent"
//       speed="1"
//       autoplay
//     ></dotlottie-player>
//   </div>
// </div>
// </div>

// <div className="h-[100vh] flex flex-col justify-center items-center gap-10">
// <SectionTitle title="Say Hello" />
// <div className="bg-white h-[400px] w-[600px] border-4 border-black p-2">
//   <div className="container flex bg-blue-600 h-full rounded-2xl">
//     <div className=" grid grid-cols-2">
//       <div className="flex gap-0">
//         <div className="grid p-5 pr-0 gap-0">
//           <h1 className="text-white text-2xl font-bold m-0">Name:</h1>
//           <h1 className="text-white text-2xl font-bold m-0">Email:</h1>
//           <h1 className="text-white text-2xl font-bold m-0">LinkedIn:</h1>
//           <h1 className="text-white text-2xl font-bold m-0">Domicile:</h1>
//           <h1 className="text-white text-2xl font-bold m-0">Github:</h1>
//         </div>
//         <div className="flex w-full">
//           <div className="grid p-5 flex-grow bg-white">
//             <h1 className="font-graffiti text-black text-2xl text-nowrap">
//               Ali Raihan Nashrullah
//             </h1>
//             <h1 className="font-graffiti text-black text-2xl">
//               aliraihann@gmail.com
//             </h1>
//             <h1 className="font-graffiti text-black text-2xl">
//               Ali Raihan Nashrullah
//             </h1>
//             <h1 className="font-graffiti text-black text-2xl">
//               Bogor
//             </h1>
//             <h1 className="font-graffiti text-black text-2xl">
//               aliraihann
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>
