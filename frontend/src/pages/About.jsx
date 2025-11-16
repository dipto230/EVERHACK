import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Shield, Users, Star, Terminal, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#020617] text-white">
      {/* Glow Grid Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)] opacity-60"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15]"></div>

      {/* HEADER SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center py-28 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-3"
        >
          <Sparkles className="text-cyan-300" size={34} />
          <h1 className="text-5xl font-extrabold tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">EverHack</span>
          </h1>
          <p className="max-w-2xl text-lg text-gray-300 mt-2">
            Building India's premier cybersecurity community—empowering learners one workshop at a time.
          </p>
          <div className="mt-6 h-[3px] w-36 rounded-full bg-cyan-400 shadow-[0_0_20px_6px_rgba(0,255,255,0.5)]"></div>
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative grid grid-cols-1 md:grid-cols-2 gap-10 px-6 lg:px-24 py-16">
        {[{
          icon: <Shield size={42} />, title: "Our Mission", text:
            "To democratize cybersecurity education by providing accessible, hands-on learning to students and professionals across India."
        },{
          icon: <Zap size={42} />, title: "Our Vision", text:
            "To become India's most impactful cybersecurity community, fostering innovation and collaboration."
        }].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl p-10 bg-[#0a0f24]/70 border border-cyan-400/20 shadow-[0_0_25px_rgba(0,255,255,0.15)] hover:shadow-[0_0_45px_rgba(0,255,255,0.4)] transition-all backdrop-blur-xl"
          >
            <div className="mb-5 text-cyan-300">{item.icon}</div>
            <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
            <p className="text-gray-300 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* WHAT WE DO */}
      <section className="relative py-24 px-6 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-3">What We Do</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive cybersecurity education through multiple engaging channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[{
            icon: <Terminal size={34} />, title: "Workshops & Webinars", text:
              "Hands-on penetration testing, web security, and expert-led sessions."
          },{
            icon: <Star size={34} />, title: "Capture The Flag", text:
              "Regular CTF events from beginner to advanced levels."
          },{
            icon: <Users size={34} />, title: "Community Support", text:
              "A 500+ active cybersecurity community helping each other grow."
          }].map((box, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-[#0c122e]/60 border border-blue-400/20 shadow-[0_0_20px_rgba(0,150,255,0.2)] hover:shadow-[0_0_35px_rgba(0,150,255,0.5)] transition-all backdrop-blur-xl"
            >
              <div className="text-blue-300 mb-4">{box.icon}</div>
              <h3 className="text-xl font-bold mb-2">{box.title}</h3>
              <p className="text-gray-300">{box.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="relative py-24 px-6 lg:px-24">
        <h2 className="text-4xl font-extrabold text-center mb-3">Our Journey</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          From humble beginnings to a thriving community.
        </p>

        <div className="relative border-l-2 border-cyan-400/40 ml-6 md:ml-20">
          {[
            {
              title: "Foundation",
              date: "October 2025",
              text: "Started with a vision to create a community where cybersecurity enthusiasts could learn, share & grow together."
            },
            {
              title: "First Workshop",
              date: "October 2025",
              text: "Launched first major event—Web Pentesting Workshop in collaboration with WhiteDavid23 Academy."
            },
            {
              title: "Community Growth",
              date: "Present",
              text: "Growing rapidly with 500+ active members and expanding across India."
            },
            {
              title: "Future Plans",
              date: "Upcoming",
              text: "Bigger events, collaborations, and nationwide cybersecurity awareness initiatives."
            }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mb-12 ml-6"
            >
              <div className="absolute -left-4 top-2 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.8)]" />
              <div className="p-6 rounded-xl bg-[#0a0f24]/70 border border-cyan-400/20 shadow-[0_0_15px_rgba(0,255,255,0.1)] w-full md:w-[70%]">
                <h3 className="text-2xl font-bold text-cyan-300">{step.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{step.date}</p>
                <p className="text-gray-300">{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 px-6 lg:px-24 grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
        {[{
          number: "500+", label: "Community Members"
        },{
          number: "50+", label: "Workshops Conducted"
        },{
          number: "20+", label: "Events Organized"
        },{
          number: "40+", label: "Team Members"
        }].map((stat, i) => (
          <div key={i} className="p-10 rounded-2xl bg-[#0c122e]/60 border border-blue-400/20 shadow-[0_0_15px_rgba(0,150,255,0.2)]">
            <h3 className="text-4xl font-extrabold text-cyan-400">{stat.number}</h3>
            <p className="text-gray-300 mt-2 uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* CORE VALUES */}
      <section className="relative py-24 px-6 lg:px-24">
        <h2 className="text-4xl font-extrabold text-center mb-3">Our Core Values</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          The principles that guide everything we do.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[{
            title: "Education First",
            text: "We believe in accessible quality education for everyone.",
            icon: "🎓"
          },{
            title: "Community Driven",
            text: "Collaboration, peer learning & mutual support are our strength.",
            icon: "🤝"
          },{
            title: "Hands-On Learning",
            text: "Practical exposure is at the heart of our teaching.",
            icon: "⚡"
          },{
            title: "Ethical Standards",
            text: "We promote responsible disclosure & ethical hacking.",
            icon: "🛡️"
          },{
            title: "Innovation",
            text: "We stay updated with the latest cybersecurity technologies.",
            icon: "🚀"
          },{
            title: "Excellence",
            text: "We strive for quality in all our initiatives.",
            icon: "🌟"
          }].map((value, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[#0c122e]/60 border border-blue-400/20 shadow-[0_0_20px_rgba(0,150,255,0.2)]">
              <div className="text-3xl mb-3">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cyan-500/20 to-transparent blur-3xl" />
    </div>
  );
}

// --- Added Sections: Journey Timeline, Stats, Core Values ---

{/* JOURNEY TIMELINE */}
<section className="relative py-24 px-6 lg:px-24">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-extrabold mb-3">Our Journey</h2>
    <p className="text-gray-300 max-w-2xl mx-auto">
      From humble beginnings to a thriving community
    </p>
  </div>

  <div className="relative border-l-4 border-cyan-400/50 pl-10 space-y-16">
    {[{
      title: "Foundation",
      date: "October 2025",
      text: "Started with a vision to create a community where cybersecurity enthusiasts could learn, share, and grow together."
    },{
      title: "First Workshop",
      date: "October 2025",
      text: "Launched our first major event — Web Pentesting Workshop focusing on privilege escalation."
    },{
      title: "Community Growth",
      date: "Present",
      text: "Growing rapidly with 500+ active members, multiple workshops planned, and expanding across India."
    },{
      title: "Future Plans",
      date: "Upcoming",
      text: "Expanding into global cybersecurity programs, internships, and advanced red-team training modules."
    }].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative ml-4"
      >
        <div className="absolute -left-8 top-1 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.8)]"></div>
        <div className="bg-[#0c122e]/70 p-6 rounded-xl border border-cyan-400/20 shadow-[0_0_25px_rgba(0,255,255,0.15)]">
          <h3 className="text-2xl font-bold text-cyan-300">{item.title}</h3>
          <p className="text-sm text-gray-400 mb-2">{item.date}</p>
          <p className="text-gray-300">{item.text}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

{/* STATS SECTION */}
<section className="py-24 px-6 lg:px-24 bg-[#0b112b]/50 backdrop-blur-xl">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    {[{
      num: "500+",
      label: "Community Members"
    },{
      num: "50+",
      label: "Workshops Conducted"
    },{
      num: "20+",
      label: "Events Organized"
    },{
      num: "40+",
      label: "Team Members"
    }].map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8 rounded-2xl border border-cyan-400/20 bg-[#0f1738]/40 shadow-[0_0_20px_rgba(0,255,255,0.1)]"
      >
        <h3 className="text-4xl font-extrabold text-cyan-300">{stat.num}</h3>
        <p className="text-gray-300 mt-2 uppercase text-sm tracking-wide">{stat.label}</p>
      </motion.div>
    ))}
  </div>
</section>

{/* CORE VALUES */}
<section className="relative py-24 px-6 lg:px-24">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-extrabold mb-3">Our Core Values</h2>
    <p className="text-gray-300 max-w-2xl mx-auto">
      The principles that guide everything we do
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {[{
      title: "Education First",
      text: "We believe in making cybersecurity education accessible to everyone.",
    },{
      title: "Community Driven",
      text: "Our strength lies in collaboration, peer learning, and mutual support.",
    },{
      title: "Hands-On Learning",
      text: "Theory is important, but practical application is everything.",
    },{
      title: "Ethical Standards",
      text: "We promote responsible disclosure and ethical hacking practices.",
    },{
      title: "Innovation",
      text: "We stay ahead with the latest technologies, trends, and cybersecurity threats.",
    },{
      title: "Excellence",
      text: "We strive for excellence in quality, community engagement, and event execution.",
    }].map((box, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-8 rounded-2xl bg-[#0c122e]/60 border border-blue-400/20 shadow-[0_0_20px_rgba(0,150,255,0.2)] hover:shadow-[0_0_35px_rgba(0,150,255,0.5)] transition-all backdrop-blur-xl"
      >
        <h3 className="text-xl font-bold mb-2 text-cyan-300">{box.title}</h3>
        <p className="text-gray-300">{box.text}</p>
      </motion.div>
    ))}
  </div>
</section>

