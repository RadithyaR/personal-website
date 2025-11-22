import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="relative  w-[120px] h-[120px] sm:w-[158px] sm:h-[158px] my-4">
        <Image
          src="/me_circle.webp"
          alt="me_circle"
          fill
          className="object-cover"
        />
      </div>

      <h3 className="font-ovo text-xl sm:text-2xl font-normal leading-relaxed dark:text-[#E0E0E0]">
        Hi! I am Radithya Romero Al Giffary
      </h3>

      <div className="h-auto min-h-[100px] w-full max-w-[847px] flex justify-center items-center ">
        <h1 className="font-ovo text-3xl sm:text-6xl lg:text-[66px] font-normal leading-[85px] text-center dark:text-[#E0E0E0]">
          Full Stack Web Developer
        </h1>
      </div>

      <p className="max-w-2xl mx-auto font-ovo text-base sm:text-lg leading-relaxed dark:text-[#E0E0E0]">
        I am a full stack developer who builds web applications from front to
        back. I work with React, Next JS, Express JS, Laravel and databases like
        mySQL or PostgreSQL to create fast, user-friendly apps. Lets make
        something great together.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-6">
        <a
          href="#contact"
          className="px-10 py-3 border-white rounded-full bg-black text-white flex items-center"
        >
          Contact Me
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center dark:text-[#E0E0E0]"
        >
          My Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
