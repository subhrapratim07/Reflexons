import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Events from "./pages/Events";
import OfficialAttire from "./pages/OfficialAttire";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/OfficialAttire" element={<OfficialAttire />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;