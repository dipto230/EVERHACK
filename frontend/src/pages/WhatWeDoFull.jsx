import React from "react";
import { motion } from "framer-motion";
import { FaPuzzlePiece, FaBrain } from "react-icons/fa";
import { GiTargetShot } from "react-icons/gi";
import { BsChatDotsFill } from "react-icons/bs";

const items = [
  {
    title: "Workshops & Webinars",
    icon: <FaPuzzlePiece className="text-6xl text-[#00FFD1]" />,
    desc: `
      Our workshops and webinars provide immersive, hands-on learning experiences 
      covering cybersecurity, AI, coding, and emerging technologies. 
      Every session is guided by experts who bring real industry knowledge straight to you.
    `
  },
  {
    title: "Hackathons & Challenges",
    icon: <GiTargetShot className="text-6xl text-[#ff4ecd]" />,
    desc: `
      Compete in high-intensity hackathons that challenge your creativity, 
      logical thinking, and teamwork skills. Solve real-world tech problems, 
      innovate new solutions, and collaborate with talented peers.
    `
  },
  {
    title: "Community Discussions",
    icon: <BsChatDotsFill className="text-6xl text-[#a7e3ff]" />,
    desc: `
      Engage with a thriving tech community through weekly discussions, 
      topic-based chat rooms, and expert Q&A sessions. Stay updated with the latest 
      cybersecurity and tech innovations happening around the world.
    `
  },
  {
    title: "Skill Development",
    icon: <FaBrain className="text-6xl text-[#ff9ae1]" />,
    desc: `
      Access mentorship programs, guided learning paths, code reviews, and 
      practical activities designed to enhance your technical and soft skills. 
      Whether you're a beginner or advanced learner, we help you grow continuously.
    `
  }
];

export default function WhatWeDoFull() {
  return (
    <div className="min-h-screen bg-[#050a19] text-white pt-[120px] px-[8%] pb-32">

      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-extrabold text-center neonGlow"
      >
        <span className="text-[#00FFD1]">What</span> We Do
      </motion.h1>

      <p className="text-center text-gray-300 mt-4 mb-16 text-lg max-w-3xl mx-auto">
        At EverHack, we build a powerful ecosystem of learning, innovation, and growth.  
        Explore the pillars of what makes our community thrive.
      </p>

      {/* Blog-style sections */}
      <div className="flex flex-col gap-20">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.2, duration: 0.7 }}
            className="w-full"
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-6">
              {item.icon}
              <h2 className="text-4xl font-bold neonGlow">{item.title}</h2>
            </div>

            {/* Description */}
            <p className="text-gray-300 mt-6 text-lg leading-relaxed max-w-4xl">
              {item.desc}
            </p>

            {/* Neon Divider */}
            <div className="w-full h-[2px] bg-gradient-to-r from-[#00FFD1] via-[#00FFD1]/40 to-transparent mt-10" />
          </motion.div>
        ))}
      </div>

      {/* Neon Glow Style */}
      <style>{`
        .neonGlow {
          text-shadow: 
            0 0 8px #00FFD1,
            0 0 14px #00FFD1,
            0 0 20px #00FFD1;
        }
      `}</style>
    </div>
  );
}
