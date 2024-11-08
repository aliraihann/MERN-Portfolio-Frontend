import React from "react";

function Footer() {
    return (
        <div className="py-5 lg:pt-0 lg:pb-2">
            <div className="flex items-center justify-center flex-col">
                <h1 className="font-graffiti-paragraph text-sm lg:text-2xl xl:text-2xl m-0 text-black">
                    Designed and Developed By
                </h1>
                <h className='text-white'>
                    <span className="font-graffiti text-lg lg:text-2xl xl:text-3xl text-black bg-red-600 bg-opacity-80">Ali Raihan Nashrullah</span>
                </h>
            </div>
        </div>
    )
};

export default Footer;