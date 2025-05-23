import React from "react";
import GetStartedImg from '../assets/getstart.svg'
// bg-gradient-to-r from-[#0b2e3b] via-[#0f3d4c] to-[#0b2e3b]
const GetStarted = () => {
  return (
    <section className="w-full py-12 flex items-center justify-center  rounded-3xl my-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10">
        {/* Left: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            ARE YOU READY TO <br className="hidden md:block" /> START?
          </h2>
          <p className="text-gray-200 text-base md:text-lg mb-8 max-w-md">
            Personalize your settings, follow your progress, archive your highlights and notes automatically. Glose is the ultimate reading.
          </p>
          <button className="inline-flex items-center px-7 py-3 bg-green-500 text-white font-semibold rounded-full shadow hover:bg-green-600 transition">
            Get Started
            <span className="ml-2 bg-white bg-opacity-20 rounded-full p-1">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
        {/* Right: Phone Images */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end gap-4">
          {/* Phone 1 */}
          <img
            src={GetStartedImg}
            alt="Phone 1"
            className="w-80 h-150 object-fit object-contain rounded-2xl shadow-lg  z-10"
          />
         
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
