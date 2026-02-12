import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Magnetic from "../components/Magnetic";

import Reveal from "../components/Reveal";
/* ================= COUNTDOWN COMPONENT ================= */
function Countdown() {
  const targetDate = new Date("2026-02-27T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-10">
      <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-slate-400 mb-6">
        Final Day Countdown • 27 Feb 2026
      </p>

      <div className="flex justify-center gap-3 sm:gap-6 flex-wrap">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div
            key={label}
            className="bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3 min-w-[70px] sm:min-w-[90px]"
          >
            <p className="text-2xl sm:text-3xl font-black text-cyan-400">
              {value}
            </p>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 mt-1">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MouseTrace({ children, className = "" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const translateX = useTransform(x, [-150, 150], [-12, 12]);
  const translateY = useTransform(y, [-150, 150], [-12, 12]);

  function handleMove(e) {
    const point = e.touches ? e.touches[0] : e;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(point.clientX - rect.left - rect.width / 2);
    y.set(point.clientY - rect.top - rect.height / 2);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onTouchMove={handleMove}
      onTouchEnd={reset}
      style={{ x: translateX, y: translateY }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
const galleryContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const galleryItem = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const contactContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const contactItem = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ================= PAGE TRANSITION ================= */
const pageVariants = {
  initial: { opacity: 0, y: 60, filter: "blur(12px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -40,
    filter: "blur(12px)",
    transition: { duration: 0.6 },
  },
};

/* ================= HOME PAGE ================= */
export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-x-hidden"
    >

      <section className="relative px-4 overflow-hidden md:min-h-[calc(100svh-56px)]">
        <div className="absolute inset-0 pointer-events-none bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-slate-950/70 via-transparent to-slate-950" />

        <div className="relative z-10 grid grid-rows-[1fr_auto] pt-14 pb-10 md:pt-0 md:pb-0 md:min-h-[calc(100svh-56px)]">
          <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 fade-up">

            {/* Institution */}
            <div className="space-y-2 fade-up-delay">
              <h4 className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.3em] text-cyan-500 uppercase">
                University of Calcutta
              </h4>
              <p className="text-[9px] sm:text-xs tracking-[0.4em] text-slate-400 uppercase">
                Technology Campus
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.3em]">
                Department of Computer Science and Engineering
              </p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.5em] text-cyan-400">
                Presents
              </p>
            </div>

            {/* Title */}
            <h1 className="font-black italic uppercase text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] glow-pulse fade-up-delay">
              Reflexons<span className="text-cyan-500">'26</span>
            </h1>

            {/* Tagline */}
            <p className="text-xs sm:text-sm md:text-base tracking-[0.3em] border border-white/10 px-6 py-3 bg-white/5 backdrop-blur fade-up-slow">
              40th Annual Tech Fest & Reunion
            </p>

            <Countdown />
          </div>
        </div>
      </section>

      

{/* ================= EVENT TIMELINE ================= */}
<Reveal>
<section className="py-10 bg-gradient-to-b from-slate-950 to-slate-900 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">
    
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-3xl md:text-4xl font-black uppercase mb-14 text-center"
    >
      Event <span className="text-cyan-500">Timeline</span>
    </motion.h2>

    {/* Timeline Wrapper */}
    <div className="relative overflow-x-auto pb-10">
      <div className="min-w-[2400px] relative">

        {/* TIMELINE LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
            absolute top-1/2 left-[65px] right-[65px]
            h-[1px] bg-slate-700 origin-left
          "
        />

        {/* Timeline Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="flex justify-between items-center relative gap-8"
        >
          {[
    { date: "FEB 27", events: ["Code Combat", "Sudoku"] },
    { date: "MAR 01", events: ["Football","Capture the Flag"] },
    { date: "MAR 02", events: ["Blood on the Clocktower"] },
    { date: "MAR 05", events: ["Debate", "BGMI"] },
    { date: "MAR 06", events: ["Chess"] },
    { date: "MAR 07", events: ["Free Fire","Quiz"] },
    { date: "MAR 08", events: ["Cricket"] },
    { date: "MAR 09", events: ["Badminton", "eFootball"] },
    { date: "MAR 10", events: ["Hackathon"] },
    { date: "MAR 11", events: ["Treasure Hunt"] },
    { date: "MAR 12", events: ["Valorant", "eAFC"] },
    { date: "MAR 13", events: ["Valorant"] },
    { date: "MAR 14", events: ["Internal Event"] },
    { date: "MAR 15", events: ["External Event"] }
].map((item, index) => (
            
            <motion.button
              key={index}
              type="button"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{
                y: -12,
                scale: 1.06
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="
                relative flex flex-col items-center text-center
                min-w-[130px] cursor-pointer group focus:outline-none
              "
            >
              {/* EVENTS */}
              <div className="mb-6 space-y-1">
                {item.events.map((ev, i) => (
                  <motion.p
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="
                      text-xs font-semibold uppercase tracking-wide whitespace-nowrap
                      text-slate-300 group-hover:text-cyan-400 transition
                    "
                  >
                    {ev}
                  </motion.p>
                ))}
              </div>

              {/* DOT */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.05, type: "spring" }}
                whileHover={{
                  scale: 1.5,
                  boxShadow: "0 0 30px rgba(6,182,212,1)"
                }}
                className="
                  absolute top-1/2 -translate-y-1/2
                  w-4 h-4 rounded-full bg-cyan-500 z-10
                  shadow-[0_0_15px_rgba(6,182,212,0.6)]
                "
              />

              {/* DATE */}
              <motion.p
                whileHover={{ scale: 1.1 }}
                className="
                  mt-6 text-xs uppercase tracking-widest text-slate-400
                  group-hover:text-cyan-400 transition
                "
              >
                {item.date}
              </motion.p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  </div>
</section>
</Reveal>





 {/* ================= EXPLORE CTA ================= */}
<Reveal>
<section className="relative py-10 sm:py-14 text-center px-4 sm:px-6 overflow-hidden">

  {/* ===== IMAGE BACKGROUND ONLY ===== */}
  <div className="absolute inset-0 -z-10">

    {/* Blurred Image */}
    <img
      src="https://i.ibb.co/HLFWfg2C/bk.png"
      alt="background"
      className="
        absolute inset-0
        w-full h-full
        object-cover
        blur-[10px]
        scale-125
        opacity-40
      "
    />

    {/* Dark Overlay (for text visibility) */}
    <div className="absolute inset-0 bg-[#020617]/75" />

    {/* Optional Blue Tint */}
    <div className="absolute inset-0 bg-cyan-900/20" />

  </div>

  {/* ================= CONTENT ================= */}
  {/* Content */}
  <div className="relative z-10">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-white"
    >
      Ready to{" "}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="text-cyan-400 inline-block drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]"
      >
        Explore?
      </motion.span>
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, duration: 0.7 }}
      className="text-slate-200 mb-10 max-w-xl mx-auto text-sm sm:text-base font-medium"
    >
      Hosting a powerhouse lineup of esports, athletic challenges, and strategic competitions.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, type: "spring", stiffness: 180 }}
      className="inline-block"
    >
      <Magnetic>
        <Link
          to="/events"
          className="
            inline-block bg-cyan-600 px-8 sm:px-10 py-3 sm:py-4
            rounded-full font-bold shadow-xl text-white
            hover:bg-cyan-500 transition-all active:scale-95
          "
        >
          Explore All Events
        </Link>
      </Magnetic>
    </motion.div>
  </div>

</section>
</Reveal>

{/* ================= SPONSORS ================= */}
<section className="py-16 sm:py-20 bg-slate-900/50 overflow-hidden">

  {/* Heading */}
  <Reveal>
    <h3 className="text-xl uppercase tracking-widest text-slate-400 text-center mb-12">
      Previous Sponsors
    </h3>
  </Reveal>

  {/* Scroll Wrapper */}
  <div className="relative w-full overflow-hidden">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.06 }
        }
      }}
      className="flex gap-14 sm:gap-16 w-max px-6 sm:px-10 animate-scroll"
    >
      {[
        "919fm","amd","apollo","Calcutta_times","Eilm","mdcomputers",
        "nimbus","Redfm","Rene","RiceEdu","Sangbad_Pratidin",
        "SUSE","The_Telegraph","ZenMobile",

        /* duplicate for seamless loop */
        "919fm","amd","apollo","Calcutta_times","Eilm","mdcomputers",
        "nimbus","Redfm","Rene","RiceEdu","Sangbad_Pratidin",
        "SUSE","The_Telegraph","ZenMobile"
      ].map((s, i) => (
        <motion.img
          key={i}
          src={`/Sponsors/${s}.png`}

          alt={s}
          loading="lazy"
          variants={{
            hidden: { opacity: 0, scale: 0.92 },
            visible: {
              opacity: 0.85,
              scale: 1,
              transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          whileHover={{
            opacity: 1,
            scale: 1.08,
          }}
          whileTap={{ scale: 0.95 }}
          className="
            h-12 sm:h-14 md:h-16
            w-auto object-contain
            transition
            cursor-default
          "
        />
      ))}
    </motion.div>
  </div>
</section>




{/* ================= ABOUT THE DEPARTMENT ================= */}
<section className="py-20 sm:py-24 px-4 sm:px-6 relative bg-slate-950 overflow-hidden">

  {/* ===== IMAGE BACKGROUND — DEPARTMENT ===== */}
  <img
    src="https://i.ibb.co/cXVngG7c/compsc.jpg"
    alt="Department"
    className="
      absolute top-0 left-0 w-full h-[55%]
      object-cover
      opacity-[0.08]
      blur-[2px]
      pointer-events-none
      select-none
    "
  />

  {/* Blue Overlay */}
  <div className="absolute top-0 left-0 w-full h-[55%] bg-gradient-to-b from-blue-600/20 via-cyan-500/10 to-transparent pointer-events-none" />



  {/* ===== IMAGE BACKGROUND — REFLEXONS ===== */}
  <img
    src="https://i.ibb.co/Ndp4xhKN/refelxons25.png"
    alt="Reflexons"
    className="
      absolute bottom-0 right-0 w-full h-[55%]
      object-cover
      opacity-[0.08]
      blur-[2px]
      pointer-events-none
      select-none
    "
  />

  {/* Blue Overlay */}
  <div className="absolute bottom-0 right-0 w-full h-[55%] bg-gradient-to-t from-blue-600/20 via-cyan-500/10 to-transparent pointer-events-none" />



  {/* Ambient Glow */}
  <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
  <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />



  <div className="relative max-w-7xl mx-auto space-y-24 sm:space-y-32">

    {/* ================= SECTION 1 ================= */}
    <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">

      {/* TEXT – MOUSE TRACING */}
      <MouseTrace className="space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight">
          Legacy of <br />
          <span className="text-cyan-500">Excellence</span>
        </h2>

        <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p>
            Established in <span className="text-white font-bold">1980</span>,
            the Department of Computer Science and Engineering at the University
            of Calcutta stands as a cornerstone of Indian technological
            research.
          </p>

          <p>
            Recognized nationally for its academic rigor, the department has
            enjoyed multiple phases of{" "}
            <span className="text-cyan-400 font-semibold">
              UGC-SAP (DRS/DSA)
            </span>{" "}
            and{" "}
            <span className="text-cyan-400 font-semibold">
              DST-FIST
            </span>.
          </p>
        </div>
      </MouseTrace>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4">
        {[
          { label: "Founded", val: "1980" },
          { label: "UGC Recognition", val: "DSA-II" },
          { label: "Legacy", val: "40+ Yrs" },
          { label: "Tech Campus", val: "Salt Lake" }
        ].map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="
              p-6 bg-slate-900/40 border border-slate-800
              rounded-2xl flex flex-col items-center text-center
              hover:border-cyan-500/40 transition
              backdrop-blur-md
            "
          >
            <span className="text-2xl sm:text-3xl font-black text-white">
              {stat.val}
            </span>
            <span className="text-[10px] uppercase tracking-tighter text-slate-500 mt-1">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* ================= SECTION 2 ================= */}
    <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">

      {/* FEATURE LIST */}
      <div className="space-y-4 order-2 lg:order-1">
        {[
          { id: "01", title: "Tech Arena", desc: "Hackathons, Robotics, and Dev-talks." },
          { id: "02", title: "Grand Reunion", desc: "Connecting 40+ years of tech leaders." },
          { id: "03", title: "Cultural Pulse", desc: "Nights of music, drama, and memories." }
        ].map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ x: 6 }}
            className="
              p-5 bg-slate-900/40 border border-slate-800
              rounded-2xl hover:bg-slate-900/60 transition
              backdrop-blur-md
            "
          >
            <div className="flex items-center gap-5">
              <div className="text-2xl font-black text-cyan-500/20">
                {item.id}
              </div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* EXPERIENCE TEXT */}
      <MouseTrace className="space-y-6 order-1 lg:order-2">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
          The <span className="text-cyan-500">Reflexons</span> <br />
          Experience
        </h2>

        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            Born in <span className="text-white font-semibold">1985</span>,
            Reflexons is the signature Annual Tech Fest and Reunion of CUCSE.
          </p>
          <p>
            From <span className="text-cyan-400">Coding Combat</span> to
            <span className="text-cyan-400"> Robotics</span>, it unites students,
            alumni, and industry.
          </p>
        </div>
      </MouseTrace>

    </div>
  </div>
</section>


{/* ================= COMMITTEE SECTION ================= */}
<section className="py-20 sm:py-24 bg-slate-950 px-4 sm:px-6 relative overflow-hidden">

  {/* Ambient glow */}
  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

  <div className="max-w-7xl mx-auto relative z-10">

    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mb-16 text-center italic tracking-tighter"
    >
      The <span className="text-cyan-500">Committee</span>
    </motion.h2>

    {/* ================= EXECUTIVE TIER ================= */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-20 max-w-4xl mx-auto">

      {[
        { name: "Richik Mallick", role: "General Secretary" },
        { name: "Subhashish Mukherjee & Arkopravo Saha", role: "Asst. General Secretary" }
      ].map((member, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          whileHover={{ y: -8 }}
          className="
            relative text-center p-8
            bg-slate-900/40 border border-slate-800
            rounded-3xl transition
            hover:border-cyan-500/40
          "
        >
          {/* Mouse / Touch trace on name */}
          <MouseTrace>
            <h3 className="text-lg sm:text-xl font-bold uppercase tracking-widest text-white">
              {member.name}
            </h3>
          </MouseTrace>

          <p className="text-xs text-slate-500 uppercase tracking-[0.3em] mt-3">
            {member.role}
          </p>
        </motion.div>
      ))}
    </div>

    {/* ================= WORKING COMMITTEE ================= */}
<motion.h3
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="text-center text-slate-400 uppercase tracking-[0.4em] text-xs sm:text-sm mb-12 font-bold"
>
  Secretaries & Leads
</motion.h3>

<div
  className="
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-3 
    gap-6
    max-w-5xl
    mx-auto
  "
>
  {[
    { name: "Soumili Ray", role: "Treasurer" },
    { name: "Debasmita Sen & Tirtharoop Banerjee", role: "Asst. Treasurer" },
    { name: "Shashwata Mukherjee", role: "Indoor Games Secretary" },
    { name: "Mafyul Islam", role: "Outdoor Games Secretary" },
    { name: "Chayan Maity & Subhra Pratim Mondal", role: "Cultural Secretary" },
    { name: "Debmalya Ghosh", role: "Graphics Designer" }
  ].map((member, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: idx * 0.07 }}
      whileHover={{ y: -10 }}
      className="
        p-7
        h-[130px]
        flex flex-col justify-center
        bg-slate-900/40
        border border-slate-800
        rounded-2xl
        text-center
        backdrop-blur-md
        transition-all duration-300
        hover:border-cyan-500/50
        hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]
      "
    >
      <MouseTrace>
        <p className="text-base font-semibold uppercase tracking-wide text-white">
          {member.name}
        </p>
      </MouseTrace>

      <p className="text-[11px] uppercase tracking-[0.25em] text-cyan-500 font-semibold mt-2">
        {member.role}
      </p>
    </motion.div>
  ))}
</div>

  </div>
</section>

  {/* ================= GALLERY ================= */}
<section className="py-16 px-6 bg-slate-950">
  <div className="max-w-7xl mx-auto">

    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-black uppercase mb-14 text-center"
    >
      Fest <span className="text-cyan-500">Gallery</span>
    </motion.h2>

    {/* Grid */}
    <motion.div
      variants={galleryContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
    >
      {[
        "https://i.ibb.co/GvcFWWvM/482588403-17895851718159722-4924959788168103349-n.jpg",
        "https://i.ibb.co/cMTx0Lf/DSC-9030.jpg",
        "https://i.ibb.co/N69pBwfv/DSC-9410.jpg",
        "https://i.ibb.co/LdPfYsY3/DSC-0417.jpg",
        "https://i.ibb.co/NgMd6JK0/DSC-0375.jpg",
        "https://i.ibb.co/rGK28PDm/DSC-9825.jpg",
        "https://i.ibb.co/H38TzBZ/DSC-9478.jpg",
        "https://i.ibb.co/sJbVJP23/DSC-8687.jpg",
        "https://i.ibb.co/n8gNLyRD/DSC-8302.jpg",
        "https://i.ibb.co/MkZDYg44/DSC-8164.jpg",
        "https://i.ibb.co/q30sV2JJ/DSC-8038.jpg",
        "https://i.ibb.co/G3C93yv0/DSC-7932.jpg",
      ].map((img, index) => (
        <motion.div
          key={index}
          variants={galleryItem}
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.97 }}
          className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40"
        >
          <img
            src={`${img}?q=80&w=800`}
            alt="Reflexons Gallery"
            loading="lazy"
            className="w-full h-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Glow */}
          <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-cyan-500/40 rounded-2xl transition-all duration-300" />
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>




  {/* ================= CONTACT US ================= */}
<section className="py-24 px-6 bg-slate-950 relative">
  <motion.div
    variants={contactContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    style={{ pointerEvents: "auto" }}
    className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12"
  >

    {/* LEFT : CONTACT DETAILS */}
    <motion.div variants={contactItem} className="space-y-8">
      <motion.h2
        variants={contactItem}
        className="text-4xl font-black uppercase italic"
      >
        Contact <span className="text-cyan-500">Us</span>
      </motion.h2>

      <div className="grid gap-6">
        {/* Event Inquiries */}
        <motion.div
          variants={contactItem}
          whileHover={{ y: -4 }}
          className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition"
        >
          <p className="text-cyan-500 text-xs font-bold uppercase tracking-widest mb-4">
            Event Inquiries
          </p>

          {/* Shashwata */}
          <a
            href="tel:+919330129904"
            className="flex justify-between items-center mb-4 w-full touch-manipulation"
          >
            <div>
              <p className="font-bold">Shashwata Mukherjee</p>
              <p className="text-slate-400 text-sm">
                +91 93301 29904
              </p>
            </div>

            <div className="p-4 bg-cyan-500/10 rounded-full text-cyan-500 hover:bg-cyan-500/20 active:scale-95 transition">
              📞
            </div>
          </a>

          {/* Soumili */}
          <a
            href="tel:+919433169204"
            className="flex justify-between items-center w-full touch-manipulation"
          >
            <div>
              <p className="font-bold">Soumili Ray</p>
              <p className="text-slate-400 text-sm">
                +91 94331 69204
              </p>
            </div>

            <div className="p-4 bg-cyan-500/10 rounded-full text-cyan-500 hover:bg-cyan-500/20 active:scale-95 transition">
              📞
            </div>
          </a>
        </motion.div>

        {/* PR Inquiries */}
        <motion.div
          variants={contactItem}
          whileHover={{ y: -4 }}
          className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition"
        >
          <p className="text-cyan-500 text-xs font-bold uppercase tracking-widest mb-4">
            PR Inquiries
          </p>

          <a
            href="tel:+919903783336"
            className="flex justify-between items-center w-full touch-manipulation"
          >
            <div>
              <p className="font-bold">Debmalya Ghosh</p>
              <p className="text-slate-400 text-sm">
                +91 99037 83336
              </p>
            </div>

            <div className="p-4 bg-cyan-500/10 rounded-full text-cyan-500 hover:bg-cyan-500/20 active:scale-95 transition">
              📞
            </div>
          </a>
        </motion.div>
      </div>
    </motion.div>

    {/* RIGHT : ADDRESS */}
    <motion.div
      variants={contactItem}
      whileHover={{ y: -4 }}
      className="p-8 bg-cyan-900/20 backdrop-blur-xl border border-cyan-500/20 rounded-3xl flex flex-col justify-center transition"
    >
      <h3 className="text-2xl font-black uppercase mb-6 tracking-tighter">
        Address
      </h3>

      {/* Clickable Google Maps */}
      <a
        href="https://maps.google.com/?q=JD-2,Sector+3,Salt+Lake+City,Kolkata+700098"
        target="_blank"
        rel="noopener noreferrer"
        className="space-y-4 text-slate-300 touch-manipulation"
      >
        <p>JD-2, Sector 3,</p>
        <p>Salt Lake City, Calcutta University (Technology Campus),</p>
        <p className="font-bold text-white">
          Kolkata - 700098, West Bengal, India
        </p>
      </a>

      <div className="mt-10 pt-10 border-t border-white/10">
        <p className="text-xs uppercase text-slate-500 tracking-widest mb-2">
          General Secretary
        </p>

        <p className="text-xl font-bold">Richik Mallick</p>

        {/* Clickable Phone */}
        <a
          href="tel:+918906743263"
          className="block text-cyan-400 hover:text-cyan-300 transition touch-manipulation"
        >
          +91 89067 43263
        </a>

        {/* Clickable Email */}
        <a
          href="mailto:reflexonscucse.tech@gmail.com"
          className="block text-slate-400 text-sm hover:text-cyan-400 transition touch-manipulation"
        >
          reflexonscucse.tech@gmail.com
        </a>
      </div>
    </motion.div>

  </motion.div>
</section>



    </motion.div>
    
  );
  <Footer />
}
