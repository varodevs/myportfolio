"use client";

import React from "react";
import { jost } from "../fonts";

function Aboutme(){
    return(
        <div className="flex flex-col justify-between gap-5">
        <h2 className={`${jost.className} flex justify-start text-6xl px-20 py-4 ml-12 ease out after:w-2/3 after:-scale-x-0 after:origin-left after:border-b-2 after:border-slate-400 after:transition-transform after:duration-1000 after:hover:-scale-x-150`}>About me</h2>
          <p className="text-wrap pl-12 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
      </div>
    );
}

export default Aboutme;