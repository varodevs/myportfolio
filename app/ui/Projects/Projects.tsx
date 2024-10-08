"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/utils/constants";
import StackIcon from "tech-stack-icons";
import { jost } from "../fonts";

const name = ""

function Slider(){
    return(
        <div className="flex flex-col justify-between w-full">
            <h2 id="projects" className={`${jost.className} flex justify-start text-6xl px-20 py-4 ml-12 ease out after:w-2/3 after:-scale-x-0 after:origin-left after:border-b-2 after:border-slate-400 after:transition-transform after:duration-1000 after:hover:-scale-x-150`}>Projects</h2>
          <div className="grid items-center grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-2 w-full pt-4 pb-4 pl-10 pr-10">
            {projects.map((project, index) => (
                <div key={index} className="flex flex-col p-5 bg-slate-400 bg-opacity-20 rounded-md">
                    <h2>{project.title}</h2>
                    <Link href={project.link}>
                        <Image
                            src={project.imgsrc} 
                            alt={project.title} 
                            width={300} 
                            height={300}
                            className="flex justify-center m-2 rounded-2xl border-2 border-gray-800 hover:shadow-lg hover:shadow-slate-300 transition-shadow"
                        />
                    </Link>
                    
                    <div className="flex flex-row justify-start gap-2 p-2">
                            {project.techimg.map((tech, index) => (
                                <div key={index} className="flex justify-evenly">                                                  
                                    <StackIcon name={tech} className="bg-zinc-800 w-7" />
                                </div>
                                
                            ))}
                    </div>
                    <article className="p-2">
                        <p className="text-sm pl-20">{project.desc}</p>    
                    </article>
                </div>
            ))}
            
          </div>
        </div>
    );
}

export default Slider;

