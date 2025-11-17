import React, { useState } from "react";
import { eventsData } from "../data/eventsData";
import { FaCalendarAlt, FaClock, FaUser } from "react-icons/fa";

function EventsPage() {
  const [filter, setFilter] = useState("All");

  const filteredEvents = eventsData.filter((event) => {
    if (filter === "All") return true;
    if (filter === "Upcoming" && event.status === "Upcoming") return true;
    if (filter === "Completed" && event.status === "Completed") return true;
    if (filter === "Workshops" && event.category === "WORKSHOP") return true;
    if (filter === "Webinars" && event.category === "WEBINAR") return true;
    return false;
  });

  const tabs = ["All", "Upcoming", "Completed", "Workshops", "Webinars"];

  return (
    <section className="relative w-full py-24 bg-[#020617] text-white overflow-hidden">
      
      {/* 🔥 Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-[120px] animate-pulse-slow rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 blur-[150px] animate-pulse-slower rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/20 blur-[130px] animate-pulse-slow mix-blend-screen rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 mt-10">

        {/* ⭐ ADVANCED GLOWING TITLE WITH UNDERLINE */}
        <h2 className="text-center font-extrabold text-5xl md:text-6xl tracking-wide leading-tight">
          <span className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,.5)] animate-glow">
            Events
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 animate-gradient-x drop-shadow-[0_0_12px_rgba(0,255,255,.5)]">
            {" "} & Workshops
          </span>
        </h2>

        {/* Neon Underline */}
        <div className="flex justify-center mt-4">
          <div className="w-40 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full animate-glow-pulse"></div>
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-300 mt-4 text-lg animate-fade-in">
          <span className="drop-shadow-[0_0_6px_rgba(0,255,255,.4)]">
            Explore community events, workshops & webinars.
          </span>
        </p>

        {/* -------- Filter Tabs -------- */}
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-6 py-2 rounded-xl border transition font-semibold backdrop-blur
                ${
                  filter === tab
                    ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/40"
                    : "bg-transparent border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* -------- Events Grid -------- */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-[#0c1122] p-6 rounded-2xl border border-gray-800 shadow-xl 
              hover:border-cyan-400 transition relative overflow-hidden group
              hover:shadow-[0_0_25px_#00eaff50]"
            >
              {/* Neon Glow Hover Aura */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition bg-gradient-to-br from-cyan-500/10 to-purple-700/10 blur-xl"></div>

              {/* Top Glow Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-80"></div>

              {/* Badges */}
              <div className="flex justify-between mb-4 relative z-10">
                <span className="px-4 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-400/20">
                  {event.category}
                </span>
                <span className="px-4 py-1 text-xs rounded-full bg-orange-500/20 text-orange-300 border border-orange-300/20">
                  {event.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 leading-tight group-hover:text-cyan-300 transition relative z-10">
                {event.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 relative z-10">{event.desc}</p>

              <div className="w-full h-px bg-gray-700 my-4"></div>

              {/* Info */}
              <div className="flex flex-col gap-3 text-gray-300 text-sm relative z-10">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-gray-400" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-gray-400" />
                  {event.duration}
                </div>
                <div className="flex items-center gap-2">
                  <FaUser className="text-gray-400" />
                  {event.mentor}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                {event.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-[#11172e] border border-gray-700 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Register Button */}
              <button className="w-full mt-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition shadow-md shadow-cyan-500/30 relative z-10">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventsPage;
