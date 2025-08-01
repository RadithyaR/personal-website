import React from "react";
import { testimony } from "../assets/assets";
import Image from "next/image";

const Testimony = () => {
  return (
    <div
      id="testimony"
      className="w-full px-[5%] sm:px-[10%] lg:px-[20%] py-10"
    >
      <h4 className="text-center mb-2 text-lg font-ovo dark:text-[#E0E0E0]">
        Kind Words
      </h4>
      <h2 className="text-center text-5xl font-ovo dark:text-[#E0E0E0] ">
        Testimonial
      </h2>
      <p className="text-center mx-auto mt-5 mb-12 lg:mb-10 max-w-2xl  font-ovo dark:text-[#E0E0E0]">
        Welcome to my testimonial section! Here you'll find genuine feedback
        from colleagues and clients about our work together.
      </p>

      <div className="relative">
        <div className="flex snap-x snap-mandatory overflow-x-auto gap-6 pb-8">
          {testimony.map((test, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] snap-start bg-local rounded-xl border border-gray-300 bg-white dark:bg-gray-800 shadow-md p-6 cursor-pointer transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col h-full">
                <p className="text-gray-600 text-[16px] dark:text-gray-300 mb-5 flex-grow">
                  "{test.message}"
                </p>

                <div className="flex flex-row justify-between gap-5">
                  <div className="mt-2 text-center">
                    <h3 className="font-bold text-lg dark:text-white">
                      - {test.name} -
                    </h3>
                  </div>
                  <div className="relative bottom-4 right-4 w-14 h-14">
                    <Image
                      src={test.photo}
                      alt={test.name}
                      fill
                      className="w-full h-full rounded-full object-cover border-2 border-white dark:border-gray-600 shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimony;
