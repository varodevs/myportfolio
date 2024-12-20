"use client";

import React from "react";
import { jost } from "../fonts";
import Image from "next/image";

function Aboutme(){
    return(
        <div className="flex flex-col justify-between gap-1 lg:gap-5">
        <h2 id="about" className={`${jost.className} flex justify-start text-nowrap text-3xl px-10 py-2 ml-12 ease out after:w-2/3 after:-scale-x-0 after:origin-left after:border-b-2 after:border-slate-400 after:transition-transform after:duration-1000 after:hover:-scale-x-150 lg:py-4 lg:px-20 lg:text-6xl`}>About me</h2>
          <div className="flex flex-col justify-center gap-x-96 lg:flex-row lg:justify-start">
            <p className="text-wrap text-sm px-10 lg:text-left lg:text-lg lg:pl-12 max-w-xl">
            <span className="quote">&#34;</span>Hi! I&#39;m a passionate software developer who loves exploring new technologies and building meaningful projects.
            <br />
            <br />
            What drives me is the blend of creativity and problem-solving that comes with coding. Whether it&#39;s diving into a complex project or experimenting with new tools, I&#39;m all about continuous learning and making the tech world a bit more exciting.
            <br />
            <br />
            When I&#39;m not coding, you might find me exploring the latest trends in tech or just enjoying some downtime with a good book or game. Let&#39;s connect and create something amazing together!<span className="quote">&#34;</span>
            </p>
            <Image className="rounded-lg self-center w-44 pt-12 lg:pt-0 lg:w-72" src="/profileSmall.jpg" 
              alt="Alvaro Barba"
              width={829}
              height={940}
              priority={true}/>
          </div>
      </div>
    );
}

export default Aboutme;