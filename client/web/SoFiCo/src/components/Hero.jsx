import React from "react";
import heroImage from "../assets/hero.png";
import { MdArrowOutward } from "react-icons/md";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-br from-[#0e2d3c] to-[#116466] h-screen px-6 md:px-16 py-12">
      {/* Text Content */}
      <div className="flex w-1/2 flex-col items-center md:items-start text-center md:text-left max-w-lg">
        <h1
  className="text-white font-bold text-3xl my-4 ml-2 relative animate-fadeIn"
  style={{
    textShadow: "0 4px 10px rgba(0, 255, 200, 0.8), 0 -2px 5px rgba(0, 150, 255, 0.7)",
  }}
>
  <span className="relative z-10">
    SOCIAL FINANCE CORPORATION
  </span>
  <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 blur-xl opacity-50 rounded-lg"></span>
</h1>
        <span className="bg-gray-800 text-xs rounded-full px-4 py-1 mb-4 text-green-300 font-semibold">
          100% TRUSTED PLATFORM
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          FINANCE WITH<br />
          FRIENDS, INVEST<br />
          <span className="text-lime-400">WITH INTENTION</span>
        </h1>
        <p className="text-sm text-gray-200 mb-6 leading-relaxed">
          No-Fee Checking Account With Cash Back Rewards.<br />
          Enjoy Fee-Free Banking And Earn Cash Back On Your Everyday Purchases.
        </p>
        <button className="bg-green-400 text-white font-bold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-green-300 transition">
          GET STARTED <MdArrowOutward className="text-lg" />
        </button>
      </div>

      {/* Image Content */}
      <div className="w-1/2 h-full md:w-auto">
        <img
          src={heroImage}
          alt="App Screenshot"
          className="w-full h-[80%] md:w-[400px] object-fit object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
