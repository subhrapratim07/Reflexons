import { useState } from "react";
import { motion } from "framer-motion";
import Magnetic from "../components/Magnetic";
import Reveal from "../components/Reveal";

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [activeEvent, setActiveEvent] = useState(null);

  const categories = [
    "All",
    "Coding",
    "Gaming",
    "Brainstorming",
    "Robotics",
    "Outdoor Games",
    "Cultural",
    "Misc",
  ];

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
    },
    {
      id: 3,
      title: "Capture The Flag",
      category: "Coding",
      date: "Mar 01 (Sun)",
      venue: "Online",
      description: "Cybersecurity challenge to exploit and defend systems.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
    },
    {
      id: 4,
      title: "Hackathon",
      category: "Coding",
      date: "Mar 07 (Sat)",
      venue: "206",
      description: "Build innovative solutions in a high-intensity hackathon.",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLScQGdLgD49HjMhYIduyOpQ8YV46qF0My4VzDyHPOhz7qZBqEg/viewform",
      image: "https://i.ibb.co/77057XB/nextgenhack.png",
    },
    {
      id: 5,
      title: "Chess",
      category: "Brainstorming",
      date: "Mar 06 (Fri)",
      venue: "206 / 404 / 405",
      description: "Classic battle of minds and strategy.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
    },
    {
      id: 6,
      title: "Quiz",
      category: "Brainstorming",
      date: "Feb 28 (Sat)",
      venue: "206",
      description: "Fast-paced quiz testing knowledge across domains.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
    },
    {
      id: 7,
      title: "Debate",
      category: "Brainstorming",
      date: "Mar 05 (Thu)",
      venue: "206",
      description: "Showcase critical thinking and persuasive speaking.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
    },
    {
      id: 8,
      title: "Sudoku",
      category: "Brainstorming",
      date: "Feb 27 (Fri)",
      venue: "206 / 209 / 403",
      description: "Logic-based number puzzle competition.",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLScOjxKeb_uJOO7A_PhV1svBnGlVCWEDgtlodRgGW_GflNWr1g/viewform",
      image: "https://i.ibb.co/27n6q51N/Nine-x-nine-sudoko.jpg",
    },
    {
      id: 9,
      title: "Blood on the Clocktower",
      category: "Brainstorming",
      date: "Mar 02 (Mon)",
      venue: "TBA",
      description: "Social deduction game of lies, logic, and deception.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
    },
    {
      id: 10,
      title: "BGMI",
      category: "Gaming",
      date: "Mar 05 (Thu)",
      venue: "GF / 404 / 405 / 403",
      description: "Battle royale esports showdown.",
      formLink: "https://docs.google.com/forms/d/e/1FAIpQLSdhoW2e0ezFSeqKYmgZOCBJOdjPUJnqZDAgEbtBIJNKlDzNxg/viewform",
      image: "https://i.ibb.co/ZzYrs6g7/BGMI.jpg",
    },
    {
      id: 11,
      title: "Free Fire",
      category: "Gaming",
      date: "Mar 10 (Tue)",
      venue: "GF / 404 / 405 / 403",
      description: "Fast-paced mobile esports competition.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
    },
    {
      id: 12,
      title: "Valorant",
      category: "Gaming",
      date: "Mar 12–13",
      venue: "206",
      description: "Tactical shooter esports tournament.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
    },
    {
      id: 13,
      title: "EAFC",
      category: "Gaming",
      date: "Mar 12 (Thu)",
      venue: "209",
      description: "EA FC competitive football gaming.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
    },
    {
      id: 14,
      title: "eFootball",
      category: "Gaming",
      date: "Mar 08–09",
      venue: "Online/Offline",
      description: "Competitive football esports tournament.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
    },
    {
      id: 15,
      title: "Robo Race",
      category: "Robotics",
      date: "Mar 13 (Fri)",
      venue: "TBA",
      description: "Race autonomous robots through challenging tracks.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
    },
    {
      id: 16,
      title: "Badminton",
      category: "Outdoor Games",
      date: "Mar 09 (Mon)",
      venue: "Campus Ground",
      description: "Fast-paced badminton matches testing agility and endurance.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
    },
    {
      id: 17,
      title: "Football",
      category: "Outdoor Games",
      date: "Mar 01 (Sun)",
      venue: "Campus Ground",
      description: "Inter-team football matches on the campus field.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
    },
    {
      id: 18,
      title: "Cricket",
      category: "Outdoor Games",
      date: "Mar 08 (Sun)",
      venue: "Campus Ground",
      description: "Full-scale cricket tournament at campus ground.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
    },
    {
      id: 19,
      title: "Treasure Hunt",
      category: "Misc",
      date: "Mar 11 (Wed)",
      venue: "206 / 207",
      description: "Solve clues and race against time to uncover the treasure.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/wFdgxbF4/Gemini-Generated-Image-fbg8n0fbg8n0fbg8.png",
    },
  ];

  const filteredEvents = events.filter(
    (e) =>
      (activeCategory === "All" || e.category === activeCategory) &&
      e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="bg-slate-950 min-h-screen px-4 py-14 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <Reveal>
          <h1 className="text-center text-4xl md:text-5xl font-black uppercase mb-10">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Explore Events
            </span>
          </h1>
        </Reveal>

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

        {/* EVENTS GRID (1:1 SQUARE CARDS) */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filteredEvents.map((event) => {
            const isActive = activeEvent === event.id;

            return (
              <motion.div
                layout
                key={event.id}
                onClick={() => setActiveEvent(isActive ? null : event.id)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-square rounded-2xl overflow-hidden
                           border border-slate-800 hover:border-cyan-500 cursor-pointer"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover
                             group-hover:scale-105 transition duration-500"
                />

                <div
                  className={`absolute inset-0 bg-slate-950/90 p-4 flex flex-col
                    transition-opacity duration-300
                    ${isActive ? "opacity-100" : "opacity-0"}
                    md:group-hover:opacity-100`}
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

                  <a
                    href={event.formLink}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-3 text-sm font-semibold text-cyan-400"
                  >
                    Register →
                  </a>
                </div>
              </motion.div>
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
