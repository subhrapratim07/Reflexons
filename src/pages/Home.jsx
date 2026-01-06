import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

/* ================= COUNTDOWN COMPONENT ================= */
function Countdown() {
  const targetDate = new Date("2026-02-17T00:00:00").getTime();
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
        Final Day Countdown • 17 Feb 2026
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

/* ================= HOME PAGE ================= */
export default function Home() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden font-sans selection:bg-cyan-500/30">

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

      {/* ================= ALL SECTIONS GRID ================= */}
      <section className="py-5 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black uppercase mb-16 text-center">
          All <span className="text-cyan-500">Sections</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            "Coding",
            "Robotics",
            "Gaming",
            "Hackathon",
            "Talks",
            "Finance",
            "Workshops",
            "Cultural",
          ].map((item) => (
            <div
              key={item}
              className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 text-center hover:border-cyan-500 transition"
            >
              <p className="uppercase tracking-widest text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

{/* ================= EVENT TIMELINE ================= */}
<section className="py-10 bg-gradient-to-b from-slate-950 to-slate-900 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-black uppercase mb-14 text-center">
      Event <span className="text-cyan-500">Timeline</span>
    </h2>

    {/* Timeline Wrapper */}
    <div className="relative overflow-x-auto pb-10">
      <div className="min-w-[2000px] md:min-w-[2200px] relative">

        {/* TIMELINE LINE */}
        <div
          className="
            absolute top-1/2
            left-[65px] right-[65px]
            h-[1px] bg-slate-700
          "
        />

        {/* Timeline Items */}
        <div className="flex justify-between items-center relative gap-6 md:gap-8">
          {[
            { date: "FEB 17", events: ["Integration Bee", "BOTC"] },
            { date: "FEB 18", events: ["Code Combat", "Sudoku", "BGMI"] },
            { date: "FEB 19", events: ["Treasure Hunt"] },
            { date: "FEB 20", events: ["Badminton"] },
            { date: "FEB 21", events: ["Football"] },
            { date: "FEB 22", events: ["Cricket"] },
            { date: "FEB 23", events: ["Hackathon"] },
            { date: "FEB 24", events: ["Debate", "Chess"] },
            { date: "FEB 25", events: ["Quiz", "Free Fire"] },
            { date: "FEB 26", events: ["Valorant", "EAFC"] },
            { date: "FEB 27", events: ["Valorant", "Robo Race"] },
            { date: "FEB 28", events: ["Internal Event"] },
            { date: "MAR 01", events: ["External Event"] },
          ].map((item, index) => (
            <button
              key={index}
              type="button"
              className="
                relative flex flex-col items-center text-center
                min-w-[130px]
                cursor-pointer group focus:outline-none
              "
            >
              {/* EVENTS */}
              <div
                className="
                  mb-6 space-y-1 transition-all duration-300
                  group-hover:scale-105
                  group-focus-within:scale-105
                "
              >
                {item.events.map((ev, i) => (
                  <p
                    key={i}
                    className="
                      text-xs font-semibold uppercase tracking-wide whitespace-nowrap
                      text-slate-300
                      group-hover:text-cyan-400
                      group-focus-within:text-cyan-400
                      transition-all duration-300
                    "
                  >
                    {ev}
                  </p>
                ))}
              </div>

              {/* DOT */}
              <div
                className="
                  absolute top-1/2 -translate-y-1/2
                  w-4 h-4 rounded-full bg-cyan-500 z-10
                  shadow-[0_0_15px_rgba(6,182,212,0.6)]
                  transition-all duration-300
                  group-hover:w-6 group-hover:h-6
                  group-hover:shadow-[0_0_30px_rgba(6,182,212,1)]
                  group-hover:animate-pulse
                  group-focus-within:w-6 group-focus-within:h-6
                  group-focus-within:shadow-[0_0_30px_rgba(6,182,212,1)]
                  group-focus-within:animate-pulse
                "
              />

              {/* DATE */}
              <p
                className="
                  mt-6 text-xs uppercase tracking-widest text-slate-400
                  transition-all duration-300
                  group-hover:text-cyan-400
                  group-hover:scale-110
                  group-focus-within:text-cyan-400
                  group-focus-within:scale-110
                "
              >
                {item.date}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>



      {/* ================= EXPLORE CTA ================= */}
      <section className="py-10 text-center px-6">
        <h2 className="text-4xl font-black mb-6">
          Ready to <span className="text-cyan-500">Explore?</span>
        </h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          Dive into competitions, workshops, talks, and unforgettable experiences.
        </p>
        <Link
          to="/events"
          className="inline-block bg-cyan-600 px-10 py-4 rounded-full font-bold hover:bg-cyan-500 transition shadow-lg"
        >
          Explore All Events
        </Link>
      </section>

{/* ================= SPONSORS ================= */}
<section className="py-10 bg-slate-900/50 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-xl uppercase tracking-widest text-slate-400 mb-8">
      Our Sponsors
    </h3>

    <div className="flex flex-wrap justify-center items-center gap-12">
      {[
        "https://i.ibb.co/ycSKjWrf/mdcomputers.png",
        "https://i.ibb.co/dwrxCdfc/redbull.png",
        "https://i.ibb.co/PG0YNq7z/919fm.png",
        "https://i.ibb.co/4Zf85h1L/mioamore.png",
      ].map((img, index) => (
        <img
          key={index}
          src={`${img}?q=80&w=400`}
          alt={`Sponsor ${index + 1}`}
          className="
            h-12 sm:h-14 md:h-16
            w-auto
            object-contain
            drop-shadow-[0_0_12px_rgba(255,255,255,0.45)]
            drop-shadow-[0_0_28px_rgba(255,255,255,0.45)]
          "
          loading="lazy"
        />
      ))}
    </div>
  </div>
</section>


      {/* ================= GALLERY ================= */}
<section className="py-10 px-6 bg-slate-950">
  <div className="max-w-7xl mx-auto">
    
    <h2 className="text-3xl md:text-4xl font-black uppercase mb-16 text-center">
      Fest <span className="text-cyan-500">Gallery</span>
    </h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
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
        "https://i.ibb.co/G3C93yv0/DSC-7932.jpg"
      ].map((img, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40"
        >
          <img
            src={`${img}?q=80&w=800`}
            alt="Reflexons Gallery"
            className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

          {/* Glow */}
          <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-cyan-500/40 rounded-2xl transition-all" />
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
    
  );
  <Footer />
}
