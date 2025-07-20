import React from "react";
import { projectData } from "../assets/assets";
import Image from "next/image";

const Project = () => {
  return (
    <div id="portofolio" className="w-full px-[10%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo dark:text-[#E0E0E0]">
        My Portofolio
      </h4>
      <h2 className="text-center text-5xl font-ovo dark:text-[#E0E0E0]">
        My Latest Work
      </h2>

      <p className="text-center mx-auto mt-5 mb-12 lg:mb-10 max-w-2xl  font-ovo dark:text-[#E0E0E0]">
        Welcome to my creative space! Here you'll find a collection of my
        proudest projects, each crafted with passion and precision.
      </p>

      <div className="flex snap-x snap-mandatory overflow-x-auto gap-5 py-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:my-10 md:overflow-visible">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[80vw] snap-center aspect-square rounded-lg relative cursor-pointer group overflow-hidden md:w-full"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            ></div>
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 dark:bg-gray-100">
              <div>
                <h2 className="font-semibold dark:text-gray-900">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-gray-300 transition">
                <Image
                  src="/asset/send-icon.png"
                  alt="send-icon"
                  width={20}
                  height={20}
                  className="w-5"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
