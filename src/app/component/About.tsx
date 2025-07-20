import Image from "next/image";
import React from "react";
import { infoList, toolsData } from "../assets/assets";

const About = () => {
  return (
    <div id="about" className="w-full px-[10%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo dark:text-[#E0E0E0]">
        Introduction
      </h4>
      <h2 className="text-center text-5xl font-ovo dark:text-[#E0E0E0]">
        About Me
      </h2>

      <div className="flex w-full flex-col lg:flex-row items-start justify-center gap-20 my-20">
        <div className="w-full lg:w-auto flex justify-center lg:block">
          <div className="w-64 sm:w-80 sm:h-80 rounded-2xl flex-none">
            <Image
              src="/me.png"
              alt="profile_photo"
              width={320}
              height={400}
              className="w-full rounded-2xl"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <p className="mb-8 lg:mb-10 max-w-2xl font-ovo dark:text-[#E0E0E0]">
            As a fresh Computer Science graduate with a passion for web
            development, I specialize in building modern full-stack applications
            using React, Next.js, Node.js, and PostgreSQL. Through academic
            projects and personal explorations, I've developed strong
            problem-solving skills and attention to detail in writing clean,
            efficient code. I thrive in collaborative environments and am
            committed to continuous learning to stay updated with emerging
            technologies. My goal is to create impactful digital solutions that
            deliver seamless user experiences.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer  hover:bg-gray-100 hover:-translate-y-1 duration-500 group"
                key={index}
              >
                <Image
                  src={icon}
                  alt={title}
                  width={28}
                  height={28}
                  className="w-7 mt-3 "
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-[#B0B0B0]  dark:group-hover:text-gray-900">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-[#B0B0B0]  dark:group-hover:text-gray-900">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 font-ovo dark:text-[#E0E0E0]">
            Tools I Use
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-100 rounded-lg cursor-pointer  hover:bg-gray-400 hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image
                  src={tool}
                  alt="Tool"
                  width={20}
                  height={20}
                  className="w-5 sm:w-7"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
