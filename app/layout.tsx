import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { actor, montserrat } from "./ui/fonts";

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
              <a className="p-2 rounded-md hover:bg-slate-200 hover:text-gray-900 hover:opacity-70 transition-all" href="">About me</a>
            </li>
            <li>
              <a className="p-2 rounded-md hover:bg-slate-200 hover:text-gray-900 hover:opacity-70 transition-all" href="">Technologies</a>
            </li>
            <li>
              <a className="p-2 rounded-md hover:bg-slate-200 hover:text-gray-900 hover:opacity-70 transition-all" href="">Contact</a>
            </li>
          </ul>
          <button>ES/ENG</button>
        </nav>
        {children}
        <footer className="flex justify-center pt-10 pb-5">
          <ul className="flex flex-row w-full justify-evenly">
            <li>
              <a>LinkedIn</a>
            </li>
            <li>
              <a>GitHub</a>
            </li>
            <li>
              <a>9485279857</a>
            </li>
            <li>
              <a>email@email.com</a>
            </li>
          </ul> 
        </footer>
      </body>
    </html>
  );
}
