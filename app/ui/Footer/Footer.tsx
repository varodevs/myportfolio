"use client";

import React from "react";
import { jost } from "../fonts";
import Link from "next/link";

function Footer(){
    return(
        <footer id="contact" className="flex flex-col justify-center pt-10 pb-5 gap-3 lg:gap-9">
            <div className="flex flex-col justify-center gap-4">
                    <h3 className={`${jost.className} text-6xl text-center`}>Get in Touch</h3>
                    <p className="w-2/3 text-center text-sm lg:text-lg lg:text-center self-center">Have a project in mind or just want to say hi? Feel free to drop me a message. I&#39;m always excited to collaborate, brainstorm, or explore new opportunities.<br/> Let&#39;s connect!</p>
            </div>
            <div className="flex flex-col justify-center">
                <p className="hover:text-slate-300 text-center lg:text-xl">alvaro.barba@protonmail.com</p>
                <ul className="flex flex-row w-full justify-center gap-5 pt-5">
                    <li className="hover:text-slate-300">
                        <Link href="https://www.linkedin.com/in/álvaro-bf">LinkedIn</Link>
                    </li>
                    <li className="hover:text-slate-300">
                        <Link href="https://github.com/varodevs">GitHub</Link>
                    </li>
                    <li className="hover:text-slate-300">
                        <Link href="https://gitlab.com/varodevs">Gitlab</Link>
                    </li>
                </ul>
            </div>
             
        </footer>
    );
}

export default Footer;