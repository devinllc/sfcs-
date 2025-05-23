import React from "react";
import heroImage from "../assets/hero.png";
import { MdArrowOutward } from "react-icons/md";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-br from-[#0e2d3c] to-[#116466] h-screen px-6 md:px-16 py-12">
      {/* Text Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-lg">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
          SOCIAL FINANCE CORPORATION
        </h2>
        <span className="bg-gray-800 text-xs rounded-full px-4 py-1 mb-4 text-green-300 font-semibold">
          100% TRUSTED PLATFORM
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          FINANCE WITH<br />
          FRIENDS, INVEST<br />
          <span className="text-lime-400">WITH INTENTION</span>
        </h1>
        <p className="text-gray-200 mb-6 leading-relaxed">
          No-Fee Checking Account With Cash Back Rewards.<br />
          Enjoy Fee-Free Banking And Earn Cash Back On Your Everyday Purchases.
        </p>
        <button className="bg-green-400 text-white font-bold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-green-300 transition">
          GET STARTED <MdArrowOutward className="text-lg" />
        </button>
      </div>

      {/* Image Content */}
      <div className="w-full md:w-auto">
        <img
          src={heroImage}
          alt="App Screenshot"
          className="w-80 md:w-[400px] object-contain drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
