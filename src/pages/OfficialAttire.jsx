import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import Magnetic from "../components/Magnetic";

import frontImg from "../assets/frontside.png";
import backImg from "../assets/backside.png";

/* ================= PAGE TRANSITION ================= */
const pageVariants = {
  initial: { opacity: 0, y: 40, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -40,
    filter: "blur(10px)",
    transition: { duration: 0.6 },
  },
};

export default function OfficialAttire() {
  const [rotation, setRotation] = useState(0);
  const startX = useRef(0);

  const handleStart = (e) => {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const handleMove = (e) => {
    if (!startX.current) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const delta = x - startX.current;
    setRotation((prev) => prev + delta * 0.3);
    startX.current = x;
  };

  const handleEnd = () => {
    startX.current = 0;
  };

  const handleWheel = (e) => {
    setRotation((prev) => prev + e.deltaY * 0.1);
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-slate-950 text-white min-h-screen px-4 sm:px-6 py-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <Reveal>
          <h1 className="text-center text-4xl md:text-5xl font-black uppercase mb-10">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Official Attire
            </span>
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ================= LEFT : PRODUCT PREVIEW ================= */}
          <Reveal delay={0.1}>
            <div className="space-y-6">

              <motion.div
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
                onWheel={handleWheel}
                whileHover={{ y: -4 }}
                className="relative h-[420px] bg-slate-900/40 border border-slate-800
                           rounded-3xl flex items-center justify-center
                           cursor-grab select-none overflow-hidden"
              >
                {/* Glow */}
                <div className="absolute w-[300px] h-[300px] rounded-full bg-cyan-500/25 blur-[120px]" />

                {/* Price */}
                <div className="absolute top-4 right-4 z-20 bg-slate-950/90
                                backdrop-blur border border-cyan-500/40
                                px-4 py-2 rounded-xl">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400">
                    Price
                  </p>
                  <p className="text-lg font-black text-cyan-400">
                    ₹249
                  </p>
                </div>

                {/* 3D Shirt */}
                <div
                  className="relative w-[260px] h-[360px] z-10"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${rotation}deg)`,
                    transition: "transform 0.05s linear",
                  }}
                >
                  <img
                    src={frontImg}
                    alt="Tshirt Front"
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{ backfaceVisibility: "hidden" }}
                  />

                  <img
                    src={backImg}
                    alt="Tshirt Back"
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  />
                </div>

                <p className="absolute bottom-4 text-xs text-slate-400">
                  Drag / Swipe / Scroll to rotate
                </p>
              </motion.div>

              {/* REGISTER CTA */}
              <Magnetic>
                <a
                  href="https://forms.gle/your-attire-registration-link"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center bg-cyan-600 hover:bg-cyan-500
                             text-black font-black uppercase tracking-widest
                             py-4 rounded-2xl transition
                             shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                >
                  Register & Order Now →
                </a>
              </Magnetic>

            </div>
          </Reveal>

          {/* ================= RIGHT : DETAILS ================= */}
          <Reveal delay={0.2}>
            <div className="space-y-8">

              {/* PRODUCT DETAILS */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8"
              >
                <h3 className="text-cyan-500 font-black italic uppercase mb-4">
                  Product Details
                </h3>
                <ul className="text-slate-400 text-sm space-y-2">
                  <li>• Official Reflexons’26 T-Shirt</li>
                  <li>• Premium fabric & print</li>
                  <li>• Unisex fit</li>
                  <li>• Limited stock available</li>
                  <li>• Payment details shared after registration</li>
                </ul>
              </motion.div>

              {/* IMPORTANT DATES */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8"
              >
                <h3 className="text-cyan-500 font-black italic uppercase mb-6">
                  Important Dates
                </h3>

                <div className="space-y-5 border-l-2 border-slate-800 pl-6">
                  <div className="relative">
                    <span className="absolute -left-[30px] top-1 w-4 h-4 bg-cyan-500 rounded-full" />
                    <p className="text-xs uppercase text-cyan-400 font-bold">
                      Order by Feb 5
                    </p>
                    <p className="text-sm text-slate-400">
                      Expected delivery by Feb 15
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 border border-cyan-500/30
                                bg-cyan-500/5 rounded-2xl text-center">
                  <p className="text-cyan-400 font-bold uppercase text-sm italic">
                    Hurry Up!
                  </p>
                  <p className="text-slate-400 text-xs">
                    Limited quantity available.
                  </p>
                </div>
              </motion.div>

            </div>
          </Reveal>

        </div>
      </div>
    </motion.div>
  );
}
