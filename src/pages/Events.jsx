
import { useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "../components/Magnetic";
import Reveal from "../components/Reveal";

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "Coding",
    "Gaming",
    "Brainstorming",
    "Outdoor Games",
    "Cultural",
    "Misc",
  ];

  // ⭐ KEEP YOUR FULL 20 EVENTS HERE
  const events = [
  {
    id: 1,
    title: "Code Combat",
    category: "Coding",
    date: "Feb 27 (Fri)",
    venue: "206 & 207",
    description: "Competitive coding battle testing logic, speed, and accuracy.",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSeiIwkcfak1olPtcgSFTz7q82UIMUWHJakoBIPaOppVywm43Q/viewform",
    image: "https://i.ibb.co/hR0PKfc2/code-combat.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Sudoku",
    category: "Brainstorming",
    date: "Feb 27 (Fri)",
    venue: "206 / 209",
    description: "Logic-based puzzle competition.",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLScOjxKeb_uJOO7A_PhV1svBnGlVCWEDgtlodRgGW_GflNWr1g/viewform",
    image: "https://i.ibb.co/27n6q51N/Nine-x-nine-sudoko.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Football",
    category: "Outdoor Games",
    date: "Mar 01 (Sun)",
    venue: "Campus Ground",
    description: "Inter-team football matches.",
    formLink: "/",
    image: "https://i.ibb.co/VYHyWT4X/football.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "Capture The Flag",
    category: "Coding",
    date: "Mar 01 (Sun)",
    venue: "Online",
    description: "Cybersecurity challenge to exploit systems.",
    formLink: "https://shellctf.me/",
    image: "https://i.ibb.co/rKMgFjGJ/ctf.jpg",
    featured: true,
  },
  {
    id: 5,
    title: "Blood on the Clocktower",
    category: "Brainstorming",
    date: "Mar 02 (Mon)",
    venue: "TBA",
    description: "Social deduction game.",
    formLink: "/",
    image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
  },
  {
    id: 6,
    title: "Debate",
    category: "Brainstorming",
    date: "Mar 05 (Thu)",
    venue: "206",
    description: "Showcase critical thinking.",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSf407Tys1tiX8NwOsNYY4JgFUEBbLtxUfMnr01B786s0jJ_4g/viewform",
    image: "https://i.ibb.co/k2BYx8TQ/Debate.jpg",
    featured: true,
  },
  {
    id: 7,
    title: "BGMI",
    category: "Gaming",
    date: "Mar 05 (Thu)",
    venue: "GF / 404",
    description: "Battle royale esports showdown.",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdhoW2e0ezFSeqKYmgZOCBJOdjPUJnqZDAgEbtBIJNKlDzNxg/viewform",
    image: "https://i.ibb.co/ZzYrs6g7/BGMI.jpg",
    featured: true,
  },
  {
    id: 8,
    title: "Chess",
    category: "Brainstorming",
    date: "Mar 06 (Fri)",
    venue: "206 / 404",
    description: "Classic battle of minds.",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdBnFGmWVukZn_Se4paYHexoQQc9I5DT9mDvZtK6yOWx2wfkg/viewform",
    image: "https://i.ibb.co/73yTDjN/chess.jpg",
    featured: true,
  },
  {
    id: 9,
    title: "Free Fire",
    category: "Gaming",
    date: "Mar 07 (Sat)",
    venue: "GF",
    description: "Mobile esports competition.",
    formLink: "/",
    image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
  },
  {
    id: 10,
    title: "Quiz",
    category: "Brainstorming",
    date: "Mar 07 (Sat)",
    venue: "206",
    description: "Fast-paced quiz competition.",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdRKvefa-pdSjCuByZEjV3R7j9mW3i3uGFwQ-Uk_se6XunCnA/viewform",
    image: "https://i.ibb.co/fVxd7yf2/Chaturanga.jpg",
    featured: true,
  },
  {
    id: 11,
    title: "Cricket",
    category: "Outdoor Games",
    date: "Mar 08 (Sun)",
    venue: "Campus Ground",
    description: "Full-scale cricket tournament.",
    formLink: "/",
    image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
  },
  {
    id: 13,
    title: "Badminton",
    category: "Outdoor Games",
    date: "Mar 09 (Mon)",
    venue: "Campus Ground",
    description: "Agility and endurance matches.",
    formLink: "/",
    image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
  },
  {
    id: 14,
    title: "eFootball",
    category: "Gaming",
    date: "Mar 09 (Mon)",
    venue: "Offline",
    description: "Competitive football esports.",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSc5UkzzWXOri9JdvnDR2F7_rn-bFAmzdPSyn62XF0AxKkTPOA/viewform",
    image: "https://i.ibb.co/PsGcQjnm/e-Football.jpg",
    featured: true,
  },
  {
    id: 15,
    title: "Hackathon",
    category: "Coding",
    date: "Mar 10 (Tue)",
    venue: "206",
    description: "Build innovative solutions in a high-intensity hackathon.",
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLScQGdLgD49HjMhYIduyOpQ8YV46qF0My4VzDyHPOhz7qZBqEg/viewform",
    image: "https://i.ibb.co/5xGXvLJ5/nexgenhack.jpg",
    featured: true,
  },
  {
    id: 16,
    title: "Treasure Hunt",
    category: "Misc",
    date: "Mar 11 (Wed)",
    venue: "206 / 207",
    description: "Solve clues and uncover treasure.",
    formLink: "/",
    image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
  },
  {
    id: 17,
    title: "Valorant",
    category: "Gaming",
    date: "Mar 12-13 (Thu-Fri)",
    venue: "206",
    description: "Tactical shooter tournament.",
    formLink: "/",
    image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
  },
  {
    id: 18,
    title: "EAFC",
    category: "Gaming",
    date: "Mar 12 (Thu)",
    venue: "209",
    description: "Football gaming competition.",
    formLink: "/",
    image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
  },
  {
    id: 20,
    title: "External Event",
    category: "Cultural",
    date: "Mar 15 (Sun)",
    venue: "Campus Ground",
    description: "External performances and attractions.",
    comingSoon: true,
    image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
  },
];

 const filteredEvents = events .filter( (e) => (activeCategory === "All" || e.category === activeCategory) && e.title.toLowerCase().includes(search.toLowerCase()) ) .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <motion.div className="bg-slate-950 min-h-screen px-5 sm:px-6 lg:px-8 py-14 text-white">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <Reveal>
          <h1 className="text-center text-4xl md:text-5xl font-black uppercase mb-10">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Explore Events
            </span>
          </h1>
        </Reveal>

        {/* CATEGORY FILTER */}
        <Reveal>
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 mb-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <Magnetic key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition
                    ${
                      activeCategory === cat
                        ? "bg-cyan-500 text-black"
                        : "bg-slate-900 text-slate-300 hover:text-cyan-400"
                    }`}
                  >
                    {cat}
                  </button>
                </Magnetic>
              ))}
            </div>
          </div>
        </Reveal>

        {/* SEARCH */}
        <Reveal>
          <div className="flex justify-center mb-10">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events..."
              className="w-full max-w-md px-5 py-3 rounded-full bg-slate-900
              border border-slate-800 text-sm focus:border-cyan-500
              focus:outline-none"
            />
          </div>
        </Reveal>

        {/* EVENTS GRID */}
        <motion.div
          layout
          className="
            grid 
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-4
            gap-5
          "
        >
          {filteredEvents.map((event) => {
            const CardContent = (
              <motion.div
                layout
                className="group relative aspect-square rounded-2xl overflow-hidden
                border border-slate-800 hover:border-cyan-500
                hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
              >
                {/* POSTER */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover
                  group-hover:scale-105 transition duration-500"
                />

                {/* COMING SOON BADGE */}
                {event.comingSoon && (
                  <div className="absolute top-3 right-3 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                    Coming Soon
                  </div>
                )}

                {/* MOBILE INFO BAR */}
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900/95 p-3 md:hidden">
                  <h3 className="text-sm font-bold">{event.title}</h3>
                  <p className="text-xs text-slate-400">
                    📅 {event.date}
                  </p>
                </div>

                {/* DESKTOP HOVER OVERLAY */}
                <div
                  className="
                    hidden md:flex
                    absolute inset-0
                    bg-slate-950/90
                    p-4
                    flex-col
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                >
                  <span className="text-xs text-cyan-400 uppercase">
                    {event.category}
                  </span>

                  <h3 className="font-black uppercase mt-1">
                    {event.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-1">
                    {event.description}
                  </p>

                  <div className="mt-auto text-xs text-slate-400">
                    <p>📅 {event.date}</p>
                    <p>📍 {event.venue}</p>
                  </div>

                  {!event.comingSoon && (
                    <div className="mt-3 text-sm font-semibold text-cyan-400">
                      Register →
                    </div>
                  )}
                </div>
              </motion.div>
            );

            return event.comingSoon ? (
              <div key={event.id}>{CardContent}</div>
            ) : (
              <a
                key={event.id}
                href={event.formLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CardContent}
              </a>
            );
          })}
        </motion.div>

        {filteredEvents.length === 0 && (
          <p className="text-center text-slate-500 mt-10">
            No events found.
          </p>
        )}
      </div>
    </motion.div>
  );
}

