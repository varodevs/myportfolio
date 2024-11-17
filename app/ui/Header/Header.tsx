"use client";

import React from "react";
import Image from "next/image";
import { jost } from "../fonts";
import Terminal from "../Terminal/Terminal";
import StackIcon from "tech-stack-icons";
import Link from "next/link";
import HorizontalWrapperStart from "../HorizontalWrapperStart/HorizontalWrapperStart";
import AnimatedList from "../AnimatedList/AnimatedList";

function Header(){

    const listItems = [
        { name: "csharp", icon: StackIcon },
        { name: "java", icon: StackIcon },
        { name: "php", icon: StackIcon },
        { name: "reactjs", icon: StackIcon },
        { name: "js", icon: StackIcon },
        { name: "nodejs", icon: StackIcon },
        { name: "html5", icon: StackIcon },
        { name: "css3", icon: StackIcon }
      ];

    return(
            <nav className="_header flex lg:min-h-screen sm:min-h-screen flex-col items-center justify-evenly">       
                <div className="wrapper-start flex flex-col w-3/4 h-max items-center justify-start font-mono text-sm md:flex-row lg:flex-row lg:gap-7 lg:p-3">
                    <HorizontalWrapperStart heigh="20rem">   
                        <Image className="flex rounded-full border-2 border-slate-400 justify-center w-28 lg:w-48" src="/profile.jpg" 
                        alt="Alvaro Barba"
                        width={1368}
                        height={1368}
                        priority={true}
                        />
                        <div className="pt-5 lg:pt-0">         
                            <h1 className={`${jost.className}items-center text-center lg:text-5xl lg:text-left text-2xl px-3`}>Alvaro Barba <br/> <span className="text-center text-2xl">Full-stack developer</span></h1>
                            <ul className="flex justify-center gap-3 pt-4 px-3 lg:text-lg ">
                                <li className="pr-5 hover:text-cyan-900">
                                    <Link href="https://www.linkedin.com/in/álvaro-bf">LinkedIn</Link>
                                </li>
                                <li className="pr-5 hover:text-cyan-900">
                                    <Link href="https://github.com/varodevs">GitHub</Link>
                                </li>
                                <li>
                                    <Link className="pr-5 hover:text-cyan-900" href="https://gitlab.com/varodevs">Gitlab</Link>
                                </li>
                            </ul>
                        </div>
                    </HorizontalWrapperStart>
                    <AnimatedList items={listItems} />
                </div>
                <div className="flex justify-center flex-wrap lg:flex-nowrap font-medium font-sans w-full invisible lg:w-2/3 lg:visible py-5">
                    <Terminal />
                    <p className="text-left w-full lg:w-1/2 text-slate-300 text-2xl">Creating <span className="text-3xl text-emerald-300">Innovative</span> solutions under <span className="text-3xl text-sky-400">Clean Code</span> and <span className="text-3xl text-orange-400">Scalability</span> principles, maxing <span className="text-3xl text-lime-400">User Experience</span>.</p>
                </div>
            </nav>
    );
}

export default Header;