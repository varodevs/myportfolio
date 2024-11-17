import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {  montserrat } from "./ui/fonts";
import Footer from "./ui/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alvaro Barba - Fullstack developer",
  description: "This is my Portfolio!",
  icons: '/favicon.ico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased bg-header-img bg-cover bg-center`}>
        <nav className="flex justify-between px-3 py-2 fixed w-1/2 opacity-0 bg-neutral-500 bg-opacity-30 text-slate-950 font-semibold transition-opacity duration-500 ease-in-out hover:opacity-90 hover:bg-opacity-90 md:w-full lg:w-full">
          <ul className="flex justify-evenly gap-2 md:gap-3 lg:gap-3">
            <li>
              <a className="p-1 text-xs rounded-md hover:bg-slate-200 hover:text-gray-900 hover:opacity-70 transition-all md:p-2 lg:p-2 lg:text-lg" href="#">Home</a>
            </li>
            <li>
              <a className="p-1 text-xs rounded-md hover:bg-slate-200 hover:text-gray-900 hover:opacity-70 transition-all md:p-2 lg:p-2 lg:text-lg" href="#projects">Projects</a>
            </li>
            <li>
              <a className="p-1 text-xs rounded-md hover:bg-slate-200 hover:text-gray-900 hover:opacity-70 transition-all md:p-2 lg:p-2 lg:text-lg" href="#about">About me</a>
            </li>
            <li>
              <a className="p-1 text-xs rounded-md hover:bg-slate-200 hover:text-gray-900 hover:opacity-70 transition-all md:p-2 lg:p-2 lg:text-lg" href="#tech">Technologies</a>
            </li>
            <li>
              <a className="p-1 text-xs rounded-md hover:bg-slate-200 hover:text-gray-900 hover:opacity-70 transition-all md:p-2 lg:p-2 lg:text-lg" href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
