import Image from "next/image";
import React from "react";
import { socmed } from "../assets/assets";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[5%] sm:px-[10%] lg:px-[20%] py-10 scroll-mt-20"
    >
      <h4 className="text-center mb-2 text-lg font-ovo dark:text-[#E0E0E0]">
        Connect With Me
      </h4>
      <h2 className="text-center text-5xl font-ovo dark:text-[#E0E0E0] ">
        Get In Touch
      </h2>
      <p className="text-center mx-auto mt-5 mb-12 lg:mb-10 max-w-2xl  font-ovo dark:text-[#E0E0E0]">
        I'd love to hear from you! Whether it's a project inquiry or just to say
        hello, this is the place to do it.
      </p>

      <div className="max-w-lg mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            required
          ></input>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            required
          ></input>
        </div>

        <div className="mb-6">
          <textarea
            placeholder="Enter your Message"
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 dark:bg-gray-700 dark:hover:bg-gray-800"
        >
          Send Message
        </button>

        <div className="flex items-center mt-5 ">
          <ul className="flex items-center gap-3 sm:gap-5 mx-auto">
            {socmed.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-100 rounded-full cursor-pointer  hover:bg-gray-200 hover:-translate-y-1 duration-500"
                key={index}
              >
                <a href={tool.link} target="_blank">
                  <Image
                    src={tool.icon}
                    alt="socmed icon"
                    width={20}
                    height={20}
                    className="w-5 sm:w-7"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
