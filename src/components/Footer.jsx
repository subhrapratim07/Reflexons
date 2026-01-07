import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 px-6 pt-12 pb-6 overflow-hidden">

      {/* Glow Accent */}
      <div className="absolute inset-x-0 -top-20 h-40 bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm text-slate-400">

        {/* ================= BRAND ================= */}
        <div className="space-y-4">
          <h3 className="text-white font-black tracking-widest uppercase text-lg">
            Reflexons<span className="text-cyan-500">'26</span>
          </h3>

          <p className="leading-relaxed">
            40th Annual Tech Fest & Reunion<br />
            Department of Computer Science & Engineering<br />
            University of Calcutta
          </p>

          <p className="text-xs tracking-widest uppercase text-cyan-400">
            Innovate • Compete • Celebrate
          </p>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <h4 className="text-white uppercase tracking-widest mb-4">
            Explore
          </h4>
          <ul className="space-y-2">
            <li><Link to="/events" className="hover:text-cyan-400">Events</Link></li>
            <li><Link to="/OfficialAttire" className="hover:text-cyan-400">Official Attire</Link></li>
            <li><Link to="/admin" className="hover:text-cyan-400">Admin Portal</Link></li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <h4 className="text-white uppercase tracking-widest mb-4">
            Contact
          </h4>
          <p>📧 reflexonscucse.tech@gmail.com</p>
          <p className="mt-2">
            📍 Technology Campus,<br />
            University of Calcutta,<br />
            Salt Lake, Kolkata – 700098
          </p>
        </div>

        {/* ================= SOCIAL (SVG ICONS) ================= */}
        <div>
          <h4 className="text-white uppercase tracking-widest mb-4">
            Follow Us
          </h4>

          <div className="flex gap-4">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/reflexons4u/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.5a1 1 0 11-2 0 1 1 0 012 0z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1BzSaETcmG/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7H8v-3h2.4V9.5a3.3 3.3 0 013.6-3.6h2.5v3h-2c-.6 0-1 .4-1 1v2h3l-.5 3h-2.5v7A10 10 0 0022 12z"/>
              </svg>
            </a>

            
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 pt-4 border-t border-slate-800 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} REFLEXONS • CSE • UNIVERSITY OF CALCUTTA
      </div>

      {/* Social Button Style */}
      <style>
        {`
          .social-btn {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 9999px;
            border: 1px solid #334155;
            color: #cbd5f5;
            transition: all 0.3s;
          }
          .social-btn:hover {
            border-color: #22d3ee;
            color: #22d3ee;
            box-shadow: 0 0 20px rgba(6,182,212,.35);
          }
        `}
      </style>
    </footer>
  );
}
