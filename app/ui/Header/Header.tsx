"use client";

import React from "react";
import Image from "next/image";
import { jost } from "../fonts";
import Terminal from "../Terminal/Terminal";
import StackIcon from "tech-stack-icons";
import Link from "next/link";
import HorizontalWrapper from "../HorizontalWrapper/HorizontalWrapper";
import HorizontalWrapperStart from "../HorizontalWrapperStart/HorizontalWrapperStart";
import AnimatedList from "../AnimatedList/AnimatedList";

function Header(){

    const listItems = [
        { name: "csharp", icon: StackIcon },
        { name: "java", icon: StackIcon },
        { name: "php", icon: StackIcon },
        { name: "react", icon: StackIcon },
        { name: "js", icon: StackIcon },
        { name: "nodejs", icon: StackIcon },
        { name: "html5", icon: StackIcon },
        { name: "css3", icon: StackIcon }
      ];

    return(
            <nav className="flex lg:min-h-screen flex-col items-center justify-evenly">       
                <div className="flex w-3/4 max-w-5xl h-max items-center justify-start font-mono text-sm lg:flex gap-7 p-3">
                    <HorizontalWrapperStart heigh="20rem">   
                        <Image className="flex rounded-full border-2 border-slate-400 justify-center w-28 lg:w-48" src="/profile.jpg" 
                        alt="Alvaro Barba"
                        width={1368}
                        height={1368}
                        priority={true}
                        />
                        <div>         
                            <h1 className={`${jost.className} text-3xl px-3`}>Alvaro Barba \n full-stack developer!</h1>
                            <ul className="flex pt-4 px-3">
                                <li className="pr-5">
                                    <Link href="https://www.linkedin.com/in/álvaro-bf">LinkedIn</Link>
                                </li>
                                <li className="pr-5">
                                    <Link href="https://github.com/varodevs">GitHub</Link>
                                </li>
                                <li><Link href="https://gitlab.com/varodevs">Gitlab</Link></li>
                            </ul>
                        </div>
                    </HorizontalWrapperStart>
                    <AnimatedList items={listItems} />
                </div>
                <div className="flex justify-center flex-wrap lg:flex-nowrap font-medium font-sans w-full lg:w-2/3 py-5">
                    <Terminal />
                    <p className="text-left w-full lg:w-1/2">Creating <span className="text-2xl text-emerald-500">Innovative</span> solutions under <span className="text-2xl text-sky-500">Clean Code</span> and <span className="text-2xl text-orange-500">Scalability</span> principles, maxing <span className="text-2xl text-lime-400">User Experience</span>.</p>
                </div>
            </nav>
    );
}

export default Header;