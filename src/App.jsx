import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Events from "./pages/Events";
import OfficialAttire from "./pages/OfficialAttire";
import AdminDashboard from "./pages/AdminDashboard";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import Loader from "./components/Loader";

export default function App() {

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    let current = 0;

    const timer = setInterval(() => {

      current += Math.random() * 10;

      if (current >= 100) {
        current = 100;
        clearInterval(timer);

        setTimeout(() => {
          setLoading(false);
        }, 400);
      }

      setProgress(Math.floor(current));

    }, 120);

    return () => clearInterval(timer);

  }, []);

  if (loading) {
    return <Loader progress={progress} />;
  }

  return (
    <Router>

      <SmoothScroll />

      <div className="min-h-screen bg-slate-950 text-white">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/OfficialAttire" element={<OfficialAttire />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>

        <Footer />

      </div>

    </Router>
  );
}
