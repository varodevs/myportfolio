import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {  montserrat } from "./ui/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alvaro Barba - Fullstack developer",
  description: "This is my Portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased bg-header-img bg-cover bg-center`}>
        <nav className="flex justify-between px-10 py-2 fixed w-full opacity-0 bg-orange-500 text-slate-950 font-semibold transition-opacity duration-500 ease-in-out hover:opacity-90 hover:bg-opacity-90">
          <ul className="flex justify-evenly gap-3">
            <li>
              <a className="p-2 rounded-md hover:bg-slate-200 hover:text-gray-900 hover:opacity-70 transition-all" href="#">Home</a>
            </li>
            <li>
              <a className="p-2 rounded-md hover:bg-slate-200 hover:text-gray-900 hover:opacity-70 transition-all" href="#projects">Projects</a>
            </li>
            <li>
              <a className="p-2 rounded-md hover:bg-slate-200 hover:text-gray-900 hover:opacity-70 transition-all" href="#about">About me</a>
            </li>
            <li>
              <a className="p-2 rounded-md hover:bg-slate-200 hover:text-gray-900 hover:opacity-70 transition-all" href="#tech">Technologies</a>
            </li>
            <li>
              <a className="p-2 rounded-md hover:bg-slate-200 hover:text-gray-900 hover:opacity-70 transition-all" href="#contact">Contact</a>
            </li>
          </ul>
          <button>ES/ENG</button>
        </nav>
        {children}
        <footer id="contact" className="flex justify-center pt-10 pb-5">
          <ul className="flex flex-row w-full justify-evenly">
            <li className="hover:text-slate-300">
              <Link href="https://www.linkedin.com/in/álvaro-bf">LinkedIn</Link>
            </li>
            <li className="hover:text-slate-300">
              <Link href="https://github.com/varodevs">GitHub</Link>
            </li>
            <li className="hover:text-slate-300">
              <Link href="https://gitlab.com/varodevs">Gitlab</Link>
            </li>            
            <li className="hover:text-slate-300">
              <a>alvaro.barba@protonmail.com</a>
            </li>
          </ul> 
        </footer>
      </body>
    </html>
  );
}
