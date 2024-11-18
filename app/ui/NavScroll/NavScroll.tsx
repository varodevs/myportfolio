"use client"

import { useState, useEffect } from 'react';

    function NavScroll() {
  const [showNav, setShowNav] = useState(false);

  const handleScroll = () => {
    setShowNav(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`flex justify-between w-full px-3 py-2 fixed opacity-0 bg-neutral-500 bg-opacity-30 text-slate-950 font-semibold transition-opacity duration-500 ease-in-out  ${
          showNav ? 'opacity-90 bg-opacity-90' : 'hover:opacity-90 hover:bg-opacity-90'
        }`}>
          <ul className="flex justify-evenly gap-1 md:gap-3 lg:gap-3">
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
  );
}

export default NavScroll;