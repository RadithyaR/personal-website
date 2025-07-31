import React from "react";
import { skillsData } from "../assets/assets";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full px-[5%] sm:px-[10%] lg:px-[20%] py-10">
      <h4 className="text-center mb-2 text-lg font-ovo dark:text-[#E0E0E0]">
        What I Offer
      </h4>
      <h2 className="text-center text-5xl font-ovo dark:text-[#E0E0E0]">
        My Skills
      </h2>

      <p className="text-center mx-auto mt-5 mb-12 lg:mb-10 max-w-2xl font-ovo dark:text-[#E0E0E0]">
        With sharp problem-solving skills and meticulous attention to detail, I
        transform complex ideas into intuitive digital experiences through
        collaborative development
      </p>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-10">
        {skillsData.map(({ icon, title, description }, index) => (
          <div
            className="border border-gray-400 rounded-lg px-10 py-12 ursor-pointer hover:bg-gray-100 hover:-translate-y-1 duration-500 group "
            key={index}
          >
            <div className="flex items-center justify-center sm:justify-start ">
              <Image
                src={icon}
                alt={title}
                width={28}
                height={28}
                className="w-10 "
              />
            </div>
            <h3 className="text-base sm:text-lg my-2 sm:my-4 text-gray-700 text-center sm:text-left dark:text-[#B0B0B0]  dark:group-hover:text-gray-900">
              {title}
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-4 sm:leading-5 text-center sm:text-left dark:text-[#B0B0B0]  dark:group-hover:text-gray-500">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
