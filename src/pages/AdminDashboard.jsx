import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ title: '', category: 'Cultural', date: '', venue: '', description: '', image: '' });

  const fetchEvents = () => axios.get('http://localhost:5000/api/events').then(res => setEvents(res.data));
  useEffect(() => { fetchEvents(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/events', form);
    setForm({ title: '', category: 'Cultural', date: '', venue: '', description: '', image: '' });
    fetchEvents();
  };

  const deleteEvent = async (id) => {
    await axios.delete(`http://localhost:5000/api/events/${id}`);
    fetchEvents();
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-cyan-500 mb-8 tracking-tighter">ADMIN CONTROL CENTER</h1>
      
      {/* Input Form */}
      <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl mb-12 grid grid-cols-1 md:grid-cols-2 gap-4 shadow-2xl">
        <input className="bg-slate-800 p-3 rounded-lg outline-none focus:ring-2 ring-cyan-500" placeholder="Event Name" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
        <select className="bg-slate-800 p-3 rounded-lg" value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
          <option value="Cultural">Cultural</option>
          <option value="Alumni Meet">Alumni Meet</option>
          <option value="Technical">Technical</option>
        </select>
        <input className="bg-slate-800 p-3 rounded-lg" placeholder="Date (e.g., March 15)" value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
        <input className="bg-slate-800 p-3 rounded-lg" placeholder="Venue" value={form.venue} onChange={e => setForm({...form, venue: e.target.value})} />
        <textarea className="bg-slate-800 p-3 rounded-lg md:col-span-2 h-24" placeholder="Event Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
        <button className="bg-cyan-600 hover:bg-cyan-500 p-3 rounded-lg font-bold transition-all md:col-span-2">PUBLISH TO WEBSITE</button>
      </form>

      {/* Live List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold border-b border-slate-800 pb-2">Active Events</h2>
        {events.map(ev => (
          <div key={ev._id} className="flex justify-between items-center bg-slate-900/50 p-4 rounded-xl border border-slate-800">
            <div>
              <p className="font-bold">{ev.title}</p>
              <p className="text-xs text-cyan-400 uppercase tracking-widest">{ev.category}</p>
            </div>
            <button onClick={() => deleteEvent(ev._id)} className="text-red-500 hover:bg-red-500/10 px-3 py-1 rounded-lg transition">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}