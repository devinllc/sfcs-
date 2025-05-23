import React, { useState } from "react";
import logo from "../assets/image.png";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import AuthForm from "./Auth";
import Dashboard from "./Dashboard";
import { getCurrentUserId } from "../services/api";
import About from "./About";
import Featured from "./Featured";
import Trust from "./Trust";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Protected Route component
  const ProtectedRoute = ({ children }) => {
    const userId = getCurrentUserId();
    if (!userId) {
      return <Navigate to="/auth" replace />;
    }
    return children;
  };

  return (
    <>
      <nav className="h-[14vh] sticky top-0 w-full flex justify-center items-center pt-4 pb-4 bg-transparent relative z-20">
        <div
          className="bg-gradient-to-br from-[#0e2d3c] to-[#116466] hidden sm:flex backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl rounded-full items-center px-2 py-2 gap-2 animate-border"
          style={{
            // minWidth: 3,
            // minHeight: 20,
            maxHeight : 60,
            boxShadow: "0 4px 32px 0 rgba(0,0,0,0.18), 0 1.5px 6px 0 rgba(0,0,0,0.10)",
          }}
        >
          <div className="flex items-center pr-4 border-r border-white/20">
            <img src={logo} alt="Logo" className="w-20 h-10 object-fit object-contain" />
          </div>
          <div className="flex space-x-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `relative px-2 py-1 rounded-full text-sm uppercase font-semibold transition-all duration-200
                ${isActive ? "bg-white/80 text-[#0a3d4d] shadow" : "text-white hover:bg-white/20 hover:text-[#d6ff4b]"}` 
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative px-2 py-1 rounded-full text-sm uppercase font-semibold transition-all duration-200
                ${isActive ? "bg-white/80 text-[#0a3d4d] shadow" : "text-white hover:bg-white/20 hover:text-[#d6ff4b]"}` 
              }
            >
              About
            </NavLink>
            <NavLink
              to="/featured"
              className={({ isActive }) =>
                `relative px-2 py-1 rounded-full text-sm uppercase font-semibold transition-all duration-200
                ${isActive ? "bg-white/80 text-[#0a3d4d] shadow" : "text-white hover:bg-white/20 hover:text-[#d6ff4b]"}` 
              }
            >
              Featured
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `relative px-2 py-1 rounded-full text-sm uppercase font-semibold transition-all duration-200
                ${isActive ? "bg-white/80 text-[#0a3d4d] shadow" : "text-white hover:bg-white/20 hover:text-[#d6ff4b]"}` 
              }
            >
              Services
            </NavLink>
          </div>
          <NavLink
            to="/auth"
            className={({ isActive }) =>
              `ml-2 px-3 py-1 rounded-full border border-white/40 text-sm uppercase font-bold text-white transition-all duration-200
              bg-gradient-to-r from-green-400/90 to-green-500/80 shadow-md hover:from-green-300 hover:to-green-400 hover:text-[#0a3d4d]
              ${isActive ? "ring-2 ring-green-400" : ""}` 
            }
          >
            Sign In
          </NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/services" element={<Trust />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <style>
        {`
          @keyframes borderMove {
            0% {
              border-color: #ff7eb3;
            }
            25% {
              border-color: #ffd700;
            }
            50% {
              border-color: #00ffab;
            }
            75% {
              border-color: #1e90ff;
            }
            100% {
              border-color: #ff7eb3;
            }
          }

          .animate-border {
            animation: borderMove 4s linear infinite;
          }
        `}
      </style>
    </>
  );
}
