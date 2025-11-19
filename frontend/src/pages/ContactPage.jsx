import React, { useState } from "react";
import { databases, DATABASE_ID, COLLECTION_ID } from "../appwrite";
import Nav from "../component/Nav";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        "unique()",
        form
      );
      alert("Message sent successfully!");
    } catch (error) {
      console.log(error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* GRID GLOW BACKGROUND */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(0,255,255,0.15), transparent 60%), url('/grid.svg')",
          backgroundSize: "cover",
        }}
      />

      {/* SOFT CYAN GLOW */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-emerald-500/10 blur-[150px] rounded-full"></div>

      {/* NAVIGATION */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Nav />
      </div>

      {/* HEADER */}
      <div className="pt-40 pb-10 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-400 mb-3 tracking-wide drop-shadow-lg"
        >
          Let’s Connect
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold mb-4 drop-shadow-xl"
        >
          Get In <span className="text-cyan-400">Touch</span>
        </motion.h1>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          We'd love to hear from you. Reach out with collaborations, queries, or just to say hello!
        </p>
      </div>

      {/* FORM CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto p-10 bg-[#0b1224]/90 border border-gray-700/60 rounded-3xl shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl z-10"
      >
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* FULL NAME */}
          <input
            type="text"
            name="fullName"
            required
            placeholder="Full Name *"
            className="p-4 rounded-xl bg-[#0d1a33] border border-gray-700 outline-none text-white placeholder-gray-500 focus:border-cyan-400 transition shadow-inner"
            onChange={handleChange}
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            required
            placeholder="Email Address *"
            className="p-4 rounded-xl bg-[#0d1a33] border border-gray-700 outline-none text-white placeholder-gray-500 focus:border-cyan-400 transition shadow-inner"
            onChange={handleChange}
          />

          {/* PHONE */}
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="p-4 rounded-xl bg-[#0d1a33] border border-gray-700 outline-none text-white placeholder-gray-500 focus:border-cyan-400 transition shadow-inner"
            onChange={handleChange}
          />

          {/* SUBJECT */}
          <select
            name="subject"
            required
            className="p-4 rounded-xl bg-[#0d1a33] border border-gray-700 outline-none text-white placeholder-gray-500 focus:border-cyan-400 transition shadow-inner"
            onChange={handleChange}
          >
            <option value="">Select a Subject *</option>
            <option>General Inquiry</option>
            <option>Collaboration</option>
            <option>Event Query</option>
            <option>Technical Support</option>
          </select>

          {/* MESSAGE */}
          <textarea
            name="message"
            required
            placeholder="Your Message *"
            className="p-4 col-span-2 rounded-xl bg-[#0d1a33] border border-gray-700 h-40 outline-none text-white placeholder-gray-500 focus:border-cyan-400 transition shadow-inner"
            onChange={handleChange}
          ></textarea>

          {/* BUTTON */}
          <button
            disabled={loading}
            className="col-span-2 py-4 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 text-black hover:scale-[1.03] transition-all shadow-lg shadow-cyan-400/20"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <div className="h-32"></div>
    </div>
  );
};

export default ContactPage;
