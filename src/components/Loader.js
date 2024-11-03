import React from "react";

function Loader() {
    return (
        <div className="h-screen flex items-center justify-center fixed inset-0 bg-image bg-contain z-[10000]">
            <div className="flex gap-5 text-6xl font-semibold sm:text-3xl">
                <h1 className="font-graffiti lg:text-8xl text-black a">A</h1>
                <h1 className="font-graffiti lg:text-8xl text-black r">R</h1>
                <h1 className="font-graffiti lg:text-8xl text-black n">N</h1>

            </div>
        </div>
    )
};

export default Loader;