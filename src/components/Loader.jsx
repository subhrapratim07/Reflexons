import { motion } from "framer-motion";
import logo from "../assets/Refelxons'26.png";

export default function Loader({ progress }) {

  return (
    <div className="fixed inset-0 z-[9999] bg-[#020617] flex items-center justify-center overflow-hidden">

      {/* background glow */}
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full"
      />

      {/* outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-[240px] h-[240px] border border-cyan-500/30 rounded-full"
      />

      {/* inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute w-[180px] h-[180px] border border-cyan-400/20 rounded-full"
      />

      {/* Logo */}
      <motion.img
        src={logo}
        alt="Reflexons Logo"
        animate={{
          scale: [1, 1.08, 1],
          filter: [
            "drop-shadow(0 0 10px rgba(6,182,212,0.4))",
            "drop-shadow(0 0 30px rgba(6,182,212,0.9))",
            "drop-shadow(0 0 10px rgba(6,182,212,0.4))"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="w-24 sm:w-28 md:w-32 relative z-10"
      />

      {/* Progress section */}
      <div className="absolute bottom-[28%] flex flex-col items-center">

        <div className="w-52 sm:w-64 h-[3px] bg-slate-800 rounded-full overflow-hidden">

          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-cyan-500"
            style={{ width: `${progress}%` }}
          />

        </div>

        <p className="text-cyan-400 text-xs tracking-[0.3em] mt-3">
          {progress}%
        </p>

        <motion.p
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-slate-500 text-[10px] tracking-[0.4em] mt-2"
        >
          INITIALIZING REFLEXONS
        </motion.p>

      </div>

    </div>
  );
}
