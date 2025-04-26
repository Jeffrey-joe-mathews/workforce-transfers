'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnDarkSection, setIsOnDarkSection] = useState(false);
  const iconSrc = isOpen
      ? ( isOnDarkSection ? "./close-white.svg" : "./close.svg" )
      : ( isOnDarkSection ? "./menu-white.svg" : "./menu.svg" );
  

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const contactSection = document.querySelector("#contact");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnDarkSection(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: "0px 0px -200px 0px",
      }
    );

    observer.observe(contactSection);

    return () => {
      if (contactSection) observer.unobserve(contactSection);
    };
  }, []);

  const navLinkStyle = isOnDarkSection ? "text-white" : "text-black/70";

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="p-5 flex justify-center items-center">
        <div className="container ">
          <div className="flex justify-between items-center ">
            <Image src="/logo.svg" alt="Company Logo" width={50} height={50} priority />

            <div onClick={toggleMenu} className="cursor-pointer md:hidden">
              <Image
                // src={isOpen ? "/close.svg" : "/menu.svg"}
                src={iconSrc}
                alt="Menu"
                width={50}
                height={50}
              />
            </div>

            <nav className="hidden md:flex gap-8 items-center text-black/70">
              <a href="#">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#features">Features</a>
              <a href="#testimonials">Testimonials</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                <a href="#contact">Contact Us</a>
              </button>
            </nav>
          </div>

          {/* Mobile Nav */}
          <div
            className={`
              md:hidden transition-all duration-500 overflow-hidden
              ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
              flex flex-col gap-4 mt-4 ${navLinkStyle}
            `}
          >
            <a href="#" onClick={toggleMenu}>Home</a>
            <a href="#about" onClick={toggleMenu}>About</a>
            <a href="#services" onClick={toggleMenu}>Services</a>
            <a href="#features" onClick={toggleMenu}>Features</a>
            <a href="#testimonials" onClick={toggleMenu}>Testimonials</a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
