import { useState } from "react";

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
      date: "Feb 18 (Wed)",
      venue: "206 & 207",
      description: "Competitive coding battle testing logic, speed, and accuracy.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },
    {
      id: 2,
      title: "Integration Bee",
      category: "Coding",
      date: "Feb 17 (Tue)",
      venue: "TBA",
      description: "Mathematics-based integration solving challenge.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },
    {
      id: 3,
      title: "Capture The Flag",
      category: "Coding",
      date: "Online",
      venue: "Online",
      description: "Cybersecurity challenge to exploit and defend systems.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },
    {
      id: 4,
      title: "Hackathon",
      category: "Coding",
      date: "Feb 23 (Mon)",
      venue: "206",
      description: "Build innovative solutions in a high-intensity hackathon.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },

    {
      id: 5,
      title: "Chess",
      category: "Brainstorming",
      date: "Feb 24 (Tue)",
      venue: "206 / 404 / 405",
      description: "Classic battle of minds and strategy.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },
    {
      id: 6,
      title: "Quiz",
      category: "Brainstorming",
      date: "Feb 25 (Wed)",
      venue: "206",
      description: "Fast-paced quiz testing knowledge across domains.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },
    {
      id: 7,
      title: "Debate",
      category: "Brainstorming",
      date: "Feb 24 (Tue)",
      venue: "206",
      description: "Showcase critical thinking and persuasive speaking.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },
    {
      id: 8,
      title: "Sudoku",
      category: "Brainstorming",
      date: "Feb 18 (Wed)",
      venue: "206 / 209 / 403",
      description: "Logic-based number puzzle competition.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },
    {
      id: 9,
      title: "Blood on the Clocktower",
      category: "Brainstorming",
      date: "Feb 17 (Tue)",
      venue: "TBA",
      description: "Social deduction game of lies, logic, and deception.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },

    {
      id: 10,
      title: "BGMI",
      category: "Gaming",
      date: "Feb 18 (Wed)",
      venue: "GF / 404 / 405 / 403",
      description: "Battle royale esports showdown.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },
    {
      id: 11,
      title: "Free Fire",
      category: "Gaming",
      date: "Feb 25 (Wed)",
      venue: "GF / 404 / 405 / 403",
      description: "Fast-paced mobile esports competition.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },
    {
      id: 12,
      title: "Valorant",
      category: "Gaming",
      date: "Feb 26–27",
      venue: "206",
      description: "Tactical shooter esports tournament.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },
    {
      id: 13,
      title: "EAFC",
      category: "Gaming",
      date: "Feb 26 (Thu)",
      venue: "209",
      description: "EA FC competitive football gaming.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },
    {
      id: 14,
      title: "eFootball",
      category: "Gaming",
      date: "Online",
      venue: "Online",
      description: "Competitive football esports tournament.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },

    {
      id: 15,
      title: "Robo Race",
      category: "Robotics",
      date: "Feb 27 (Fri)",
      venue: "TBA",
      description: "Race autonomous robots through challenging tracks.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },

    {
      id: 16,
      title: "Badminton",
      category: "Outdoor Games",
      date: "Feb 20 (Fri)",
      venue: "Campus Ground",
      description: "Fast-paced badminton matches testing agility and endurance.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },
    {
      id: 17,
      title: "Football",
      category: "Outdoor Games",
      date: "Feb 21 (Sat)",
      venue: "Campus Ground",
      description: "Inter-team football matches on the campus field.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/zVPWRxdp/VECTOR-STRIKE-3.png",
    },
    {
      id: 18,
      title: "Cricket",
      category: "Outdoor Games",
      date: "Feb 22 (Sun)",
      venue: "Campus Ground",
      description: "Full-scale cricket tournament at campus ground.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },

    {
      id: 19,
      title: "Treasure Hunt",
      category: "Misc",
      date: "Feb 19 (Thu)",
      venue: "206 / 207",
      description: "Solve clues and race against time to uncover the treasure.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },
    {
      id: 20,
      title: "Band Contest",
      category: "Cultural",
      date: "TBA",
      venue: "Stage",
      description: "Live band performances competing for glory.",
      formLink: "https://forms.gle/xxx",
      image: "https://i.ibb.co/TDHQb4Kf/HACKATHON-POSTER.png",
    },
  ];

  const filteredEvents = events.filter(
    (e) =>
      (activeCategory === "All" || e.category === activeCategory) &&
      e.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-slate-950 min-h-screen px-4 py-14 text-white">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-center text-4xl md:text-5xl font-black uppercase mb-10">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Explore Events
          </span>
        </h1>

        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-4 mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
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
            ))}
          </div>
        </div>

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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredEvents.map((event) => {
            const isActive = activeEvent === event.id;

            return (
              <div
                key={event.id}
                onClick={() => setActiveEvent(isActive ? null : event.id)}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden
                           border border-slate-800 hover:border-cyan-500 cursor-pointer"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
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
              </div>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <p className="text-center text-slate-500 mt-10">
            No events found.
          </p>
        )}
      </div>
    </div>
  );
}
