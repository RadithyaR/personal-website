import React from "react";
import { experience } from "../assets/assets";

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full px-[5%] sm:px-[10%] lg:px-[20%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-ovo dark:text-[#E0E0E0]">
        What I Have Done
      </h4>
      <h2 className="text-center text-5xl font-ovo dark:text-[#E0E0E0] ">
        My Experience
      </h2>
      <p className="text-center mx-auto mt-5 mb-12 lg:mb-10 max-w-2xl  font-ovo dark:text-[#E0E0E0]">
        Thanks for stopping by! These experiences shaped me into the developer I
        am today - scroll down to see my career evolution.
      </p>

      <div className="relative">
        <div className="absolute left-[18px] h-full w-0.5 bg-gray-300 dark:bg-gray-600 "></div>

        {experience.map((exp, index) => (
          <div key={index} className="relative mb-10 pl-10 md:pl-12">
            <div
              className="absolute left-[18px] w-4 h-4 rounded-full bg-rose-500 dark:bg-rose-400 
                      transform -translate-x-1/2   dark:border-gray-800"
            ></div>

            <div className="bg-white dark:bg-gray-800 p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <span className="text-sm font-medium text-rose-500 dark:text-rose-400">
                {exp.year}
              </span>
              <h3 className="text-xl font-bold  dark:text-white">{exp.role}</h3>
              <p className="text-gray-600 dark:text-gray-300 font-medium mt-1">
                {exp.company}
              </p>
              <p className="text-gray-600 dark:text-gray-300 font-medium">
                {exp.responsibilities}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
