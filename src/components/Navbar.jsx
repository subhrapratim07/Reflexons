import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Refelxons'26.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-slate-950/80 backdrop-blur-md sticky top-0 left-0 w-full z-[50] border-b border-slate-800">
        <div className="flex justify-between items-center px-6 md:px-10 h-14">

          {/* LOGO */}
          <Link
            to="/"
            className="relative flex items-center gap-3 text-xl md:text-2xl font-black tracking-tighter text-white group"
          >
            {/* Cyan Glow Background */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-cyan-500/20 blur-[28px] rounded-full group-hover:bg-cyan-500/40 transition-all duration-300" />

            {/* Logo Border Wrapper */}
            <div
              className="relative z-10 p-1 rounded-full 
                         border border-cyan-500/60 
                         shadow-[0_0_15px_rgba(6,182,212,0.6)] 
                         group-hover:shadow-[0_0_25px_rgba(6,182,212,0.9)]
                         transition-all duration-300"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-8 md:h-10 w-auto object-contain rounded-full bg-slate-950"
              />
            </div>

            {/* Logo Text */}
            <div className="z-10 uppercase italic">
              REFLEXONS<span className="text-cyan-500">'26</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 items-center font-medium">

            <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-cyan-400 transition "
              >
                Home
              </Link>
            <Link
              to="/events"
              className="text-slate-300 hover:text-cyan-400 transition"
            >
              Events
            </Link>

            <Link
              to="/OfficialAttire"
              className="bg-cyan-600/10 border border-cyan-500/50 text-cyan-400 px-5 py-2 rounded-full hover:bg-cyan-600 hover:text-white transition shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            >
              Official Attire
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 z-[60]"
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-cyan-500 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-cyan-500 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-cyan-500 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-slate-950 border-t border-slate-800">
            <div className="flex flex-col p-6 gap-6 text-center font-medium">

              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-cyan-400 "
              >
                Home
              </Link>

              <Link
                to="/events"
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-cyan-400 "
              >
                Events
              </Link>

              <Link
                to="/OfficialAttire"
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-cyan-400 transition"
              >
                Official Attire
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
