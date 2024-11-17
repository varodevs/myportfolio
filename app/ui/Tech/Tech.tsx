"use client";

import React from "react";
import StackIcon from "tech-stack-icons";
import { jost } from "../fonts";

function Tech(){
    return(
        <div className="flex flex-col justify-between gap-5">
            <h2 id="tech" className={`${jost.className} flex justify-start text-3xl px-10 py-4 ml-12 ease out after:w-2/3 after:-scale-x-0 after:origin-left after:border-b-2 after:border-slate-400 after:transition-transform after:duration-1000 after:hover:-scale-x-150 lg:px-20 lg:text-6xl`}>Technologies</h2>
                <p className="text-wrap text-center px-10 lg:text-left lg:pl-12 max-w-xl">
                <span className="quote">&#34;</span>These are the technologies I love working with and frequently incorporate into my projects to bring ideas to life.<span className="quote">&#34;</span>
                </p>
            <div className="grid grid-cols-1 p-12 gap-5 lg:grid-cols-2">
                    <div className="p-3 border-2 border-slate-400 rounded-md">
                    <h3>Backend</h3>
                    <div className="grid grid-cols-7 justify-items-center gap-5 w-full">
                        <StackIcon name="csharp" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-1 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="java" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="php" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="python" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="nodejs" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="mysql" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="postgresql" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="mongodb" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                    </div>
                </div>
                <div className="p-3 border-2 border-slate-400 rounded-md">
                    <h3>Frontend</h3>
                    <div className="grid grid-cols-7 justify-items-center gap-5 w-full">
                        <StackIcon name="html5" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="css3" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="js" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="typescript" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="bootstrap5" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="jquery" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="nextjs" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="reactjs" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="sass" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                    </div>
                </div>
                <div className="p-3 border-2 border-slate-400 rounded-md">
                    <h3>Frameworks</h3> 
                    <div className="grid grid-cols-7 justify-items-center gap-5 w-full">
                        <StackIcon name="laravel" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="angular" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="django" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="spring" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        {/* <StackIcon name="" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0" />
                        <StackIcon name="" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0" />
                        <StackIcon name="" className="bg-slate-400 bg-opacity-20 rounded-md w-20 p-3 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0" />
                        <StackIcon name="" className="bg-slate-400 bg-opacity-20 rounded-md w-20 p-3 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0" />
                        <StackIcon name="" className="bg-slate-400 bg-opacity-20 rounded-md w-20 p-3 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0" /> */}
                    </div>
                </div>
                <div className="p-3 border-2 border-slate-400 rounded-md">
                    <h3>Other</h3>
                    <div className="grid grid-cols-7 justify-items-center gap-5 w-full">
                        <StackIcon name="atlassian" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="aws" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="azure" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="bitbucket" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="cloudflare" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="docker" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="git" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="kubernetes" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                        <StackIcon name="npm" className="bg-slate-400 bg-opacity-20 rounded-md w-8 p-2 hover:p-2 hover:shadow-md hover:shadow-slate-300 hover:bg-slate-100 transition-all ease-out delay-0 lg:w-20 lg:p-3" />
                    </div>                    
                </div>
            </div> 
        </div>
    );
}

export default Tech; 