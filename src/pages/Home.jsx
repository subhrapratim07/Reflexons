import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

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

      

{/* ================= EVENT TIMELINE ================= */}
<section className="py-10 bg-gradient-to-b from-slate-950 to-slate-900 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-black uppercase mb-14 text-center">
      Event <span className="text-cyan-500">Timeline</span>
    </h2>

    {/* Timeline Wrapper */}
    <div className="relative overflow-x-auto pb-10">
      <div className="min-w-[2200px] md:min-w-[2200px] relative">

        {/* TIMELINE LINE */}
        <div
          className="
            absolute top-1/2
            left-[65px] right-[65px]
            h-[1px] bg-slate-700
          "
        />

        {/* Timeline Items */}
        <div className="flex justify-between items-center relative gap-8 md:gap-8">
          {[
            { date: "FEB 27", events: ["Integration Bee", "BOTC"] },
            { date: "FEB 28", events: ["Code Combat", "Sudoku" ] },
            { date: "MAR 05", events: ["Treasure Hunt","BGMI"] },
            { date: "MAR 06", events: ["Badminton"] },
            { date: "MAR 07", events: ["Football"] },
            { date: "MAR 08", events: ["Cricket"] },
            { date: "MAR 09", events: ["Hackathon"] },
            { date: "MAR 10", events: ["Debate", "Chess"] },
            { date: "MAR 11", events: ["Quiz", "Free Fire"] },
            { date: "MAR 12", events: ["Valorant", "EAFC"] },
            { date: "MAR 13", events: ["Valorant", "Robo Race"] },
            { date: "MAR 14", events: ["Internal Event"] },
            { date: "MAR 15", events: ["External Event"] },
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

{/* ================= SPONSORS SCROLL ================= */}
<section className="py-10 bg-slate-900/50 overflow-hidden">
  <h3 className="text-xl uppercase tracking-widest text-slate-400 text-center mb-6">
    Previous Sponsors
  </h3>

  <div className="relative w-full overflow-hidden">
    <div className="flex w-max animate-scroll gap-14 items-center">
      {[
        "/src/assets/Sponsors/919fm.png",
        "/src/assets/Sponsors/amd.png",
        "/src/assets/Sponsors/apollo.png",
        "/src/assets/Sponsors/Calcutta_times.png",
        "/src/assets/Sponsors/Eilm.png",
        "/src/assets/Sponsors/mdcomputers.png",
        
        "/src/assets/Sponsors/nimbus.png",
        
        "/src/assets/Sponsors/Redfm.png",
        "/src/assets/Sponsors/Rene.png",
        "/src/assets/Sponsors/RiceEdu.png",
        "/src/assets/Sponsors/Sangbad_Pratidin.png",
        "/src/assets/Sponsors/SUSE.png",
        "/src/assets/Sponsors/The_Telegraph.png",
        "/src/assets/Sponsors/ZenMobile.png",

        /* duplicate for seamless loop */
        "/src/assets/Sponsors/919fm.png",
        "/src/assets/Sponsors/amd.png",
        "/src/assets/Sponsors/apollo.png",
        "/src/assets/Sponsors/Calcutta_times.png",
        "/src/assets/Sponsors/Eilm.png",
        "/src/assets/Sponsors/mdcomputers.png",
        
        "/src/assets/Sponsors/nimbus.png",
        
        "/src/assets/Sponsors/Redfm.png",
        "/src/assets/Sponsors/Rene.png",
        "/src/assets/Sponsors/RiceEdu.png",
        "/src/assets/Sponsors/Sangbad_Pratidin.png",
        "/src/assets/Sponsors/SUSE.png",
        "/src/assets/Sponsors/The_Telegraph.png",
        "/src/assets/Sponsors/ZenMobile.png",
      ].map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Sponsor"
          className="
            h-12 sm:h-14 md:h-16
            w-auto object-contain
            opacity-90
            hover:opacity-100
            transition
          "
          loading="lazy"
        />
      ))}
    </div>
  </div>
</section>





{/* ================= ABOUT THE DEPARTMENT ================= */}

<section className="py-24 px-6 relative bg-slate-950 overflow-hidden">
  {/* Background Accents */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

  <div className="max-w-7xl mx-auto space-y-32">
    
    {/* 1. DEPARTMENT SECTION (Text Left, Cards Right) */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-6 order-1 lg:order-1">
        <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
          Legacy of <br />
          <span className="text-cyan-500">Excellence</span>
        </h2>
        <div className="space-y-4 text-slate-300 leading-relaxed text-sm md:text-base">
          <p>
            Established in <span className="text-white font-bold">1980</span>, the Department of Computer Science and Engineering at the University of Calcutta is a cornerstone of Indian technological research. Originally founded at Rajabazar Science College, it has played a vital role in shaping the nation's scientific landscape for over four decades.
          </p>
          <p>
            The department is recognized for its elite academic standards, enjoying multiple phases of 
            <span className="text-cyan-400 font-semibold"> UGC-SAP (DRS/DSA)</span> and <span className="text-cyan-400 font-semibold">DST-FIST</span> support.
          </p>
         
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 order-2 lg:order-2">
        {[
          { label: "Founded", val: "1980" },
          { label: "UGC Recognition", val: "DSA-II" },
          { label: "Legacy", val: "40+ Yrs" },
          { label: "Tech Campus", val: "Salt Lake" }
        ].map((stat) => (
          <div key={stat.label} className="p-6 bg-slate-900/40 border border-slate-800 rounded-2xl flex flex-col justify-center items-center text-center hover:border-cyan-500/50 transition">
            <span className="text-2xl md:text-3xl font-black text-white">{stat.val}</span>
            <span className="text-[10px] uppercase tracking-tighter text-slate-500 mt-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>

    {/* 2. REFLEXONS SECTION (Cards Left, Text Right) */}
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Feature List */}
      <div className="space-y-4 order-2">
        {[
          { id: "01", title: "Tech Arena", desc: "Hackathons, Robotics, and Dev-talks." },
          { id: "02", title: "Grand Reunion", desc: "Connecting 40+ years of tech leaders." },
          { id: "03", title: "Cultural Pulse", desc: "Nights of music, drama, and memories." }
        ].map((item) => (
          <div key={item.id} className="group p-5 bg-slate-900/40 border border-slate-800 rounded-2xl hover:bg-slate-900/60 transition-all">
            <div className="flex items-center gap-5">
              <div className="text-2xl font-black text-cyan-500/20 group-hover:text-cyan-500 transition-colors">{item.id}</div>
              <div>
                <h4 className="text-white font-bold uppercase tracking-widest text-sm">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="space-y-6 order-1">
        <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
          The <span className="text-cyan-500">Reflexons</span> <br />Experience
        </h2>
        <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
          <p>
            Born in <span className="text-white font-semibold">1985</span>, Reflexons is the signature Annual Tech Fest and Reunion of CUCSE. It is where the silence of the labs is replaced by the roar of competition.
          </p>
          <p>
            From the intense logic of <span className="text-cyan-400">Coding Combat</span> to the strategic battlegrounds of <span className="text-cyan-400">Robotics</span>, it is a homecoming that bridges generations of engineers under one roof.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>

{/* ================= COMMITTEE SECTION ================= */}
<section className="py-20 bg-slate-950 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-5xl font-black uppercase mb-16 text-center italic tracking-tighter">
      The <span className="text-cyan-500">Committee</span>
    </h2>
    
    {/* Executive Tier */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
      {[
        { name: "Richik Mallick", role: "General Secretary" },
        { name: "Subhashish Mukherjee & Arkopravo Saha", role: "Asst. General Secretary" }
      ].map((member, idx) => (
        <div key={idx} className="text-center p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:border-cyan-500/50 transition-all group">
          <h3 className="text-xl font-bold uppercase tracking-widest text-white group-hover:text-cyan-400 transition-colors">{member.name}</h3>
          <p className="text-xs text-slate-500 uppercase tracking-[0.3em] mt-2">{member.role}</p>
        </div>
      ))}
    </div>

    {/* Working Committee Tier */}
    <h3 className="text-center text-slate-400 uppercase tracking-[0.4em] text-sm mb-10 font-bold">Secretaries & Leads</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {[
        
        { name: "Soumili Saha", role: "Treasurer" },
        { name: "Debasmita Sen & Tirtharoop Banerjee", role: "Asst. Treasurer" },
        { name: "Shaswata Mukherjee", role: "Indoor Games Secretary" },
        { name: "Mafyul Islam", role: "Outdoor Games Secretary" },
        { name: "Chayan Maity & Subhra Pratim Mondal", role: "Cultural Secretary" },
        { name: "Debmalya Ghosh", role: "Graphics Designer" }
      ].map((member, idx) => (
        <div key={idx} className="px-6 py-5 bg-slate-900/30 border border-white/5 rounded-xl text-center min-w-[240px] hover:bg-slate-900/60 transition group">
          <p className="text-sm font-bold uppercase text-slate-200 group-hover:text-white transition-colors">
            {member.name}
          </p>
          <p className="text-[10px] uppercase tracking-wider text-cyan-600 font-semibold mt-1">
            {member.role}
          </p>
        </div>
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
  
  {/* ================= CONTACT US (MODIFIED) ================= */}
      <section className="py-24 px-6 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="text-4xl font-black uppercase italic">Contact <span className="text-cyan-500">Us</span></h2>
            
            <div className="grid gap-6">
              <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                <p className="text-cyan-500 text-xs font-bold uppercase tracking-widest mb-4">Event Inquiries</p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="font-bold">Shaswata Mukherjee</p>
                    <p className="text-slate-400 text-sm">+91 93301 29904</p>
                  </div>
                  <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-500">📞</div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold">Soumili Saha</p>
                    <p className="text-slate-400 text-sm">+91 94331 69204</p>
                  </div>
                  <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-500">📞</div>
                </div>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
                <p className="text-cyan-500 text-xs font-bold uppercase tracking-widest mb-4">PR Inquiries</p>
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="font-bold">Debmalya Ghosh</p>
                    <p className="text-slate-400 text-sm">+91 99037 83336</p>
                  </div>
                  <div className="p-3 bg-cyan-500/10 rounded-full text-cyan-500">📞</div>
                </div>
              </div>
            </div>
          </div>

          {/* Address Card */}
          <div className="p-8 bg-cyan-900/20 backdrop-blur-xl border border-cyan-500/20 rounded-3xl flex flex-col justify-center">
            <h3 className="text-2xl font-black uppercase mb-6 tracking-tighter">Address</h3>
            <div className="space-y-4 text-slate-300">
              <p>JD-2, Sector 3,</p>
              <p>Salt Lake City, Calcutta University (Technology Campus),</p>
              <p className="font-bold text-white">Kolkata - 700098, West Bengal, India</p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-white/10">
              <p className="text-xs uppercase text-slate-500 tracking-widest mb-2">General Secretary</p>
              <p className="text-xl font-bold">Richik Mallick</p>
              <p className="text-cyan-400">+91 89067 43263</p>
              <p className="text-slate-400 text-sm">reflexonscucse.tech@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

    </div>
    
  );
  <Footer />
}
