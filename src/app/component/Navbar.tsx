import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const sideMenuRef = useRef<null | HTMLUListElement>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <div>
      <nav
        className={`fixed w-full px-5 lg:px-8 xl:px-[8%] py-4 flex justify-center items-center z-50 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-6 py-3 ${
            isScroll ? "" : "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm"
          }`}
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portofolio">My Work</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#testimony">Testimony</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            className="absolute right-6 top-6 block md:hidden"
            onClick={openMenu}
          >
            <Image
              src="/asset/menu-black.png"
              alt="menu-black"
              width={24}
              height={24}
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src="/asset/close-black.png"
              alt="close-black"
              width={24}
              height={24}
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#portofolio" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="#testimony" onClick={closeMenu}>
              Testimony
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
