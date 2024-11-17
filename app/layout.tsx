import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {  montserrat } from "./ui/fonts";
import Footer from "./ui/Footer/Footer";
import Head from "next/head";

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
      <Head>
        <link rel="preload" as="image" href="../public/bgmountains.jpg" />
      </Head>
      <body className={`${montserrat.className} antialiased bg-header-img bg-cover bg-center`}>
        <nav className="flex justify-between px-10 py-2 fixed w-full opacity-0 bg-neutral-500 bg-opacity-30 text-slate-950 font-semibold transition-opacity duration-500 ease-in-out hover:opacity-90 hover:bg-opacity-90">
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
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
