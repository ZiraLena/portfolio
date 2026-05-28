import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  Layers,
  Sparkles,
  Play,
  X,
  Send,
  CheckCircle,
  FileText
} from "lucide-react";
import "./index.css";

// Asset declarations
const A = {
  bgIndex:          "public/assets/BG-Index-design.png",
  cutout:           "public/assets/Cutout-Design.png",
  title:            "public/assets/title.png",
  desc:             "public/assets/Desc.png",
  face:             "public/assets/face.png",
  star1:            "public/assets/Star1.png",
  star2:            "public/assets/Star2.png",
  star3:            "public/assets/Star3.png",
  lines:            "public/assets/Lines.png",
  contactIcon:      "public/assets/Contact-Icon.png",
  homeActive:       "public/assets/HOME-Active.png",
  homeInactive:     "public/assets/HOME-Inactive.png",
  contactsInactive: "public/assets/CONTACTS-Inactive.png",
  contactsActive:   "public/assets/CONTACTS-Active.png",
  worksActive:      "public/assets/WORKS-Active.png",
  worksInactive:    "public/assets/WORKS-Inactive.png",
  worksBg:          "public/assets/WORKS-Bg.png",
  worksCutout:      "public/assets/WORKS-cutout-design.png",
  worksLine:        "public/assets/WORKS-line-design.png",
  ws2Card:          "public/assets/WORKS-SECTION-2-card.png",
  ws2Cutout:        "public/assets/WORKS-SECTION-2-cutout-design.png",
};

// ─── NAV ─────────────────────────────────────────────────────────────────────
function Nav({ active }: { active: string }) {
  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-4 right-4 z-[100] flex flex-col items-end gap-1 select-none pointer-events-auto">
      <button
        onClick={() => scroll("home")}
        className="relative group focus:outline-none transition-transform active:scale-95"
        style={{ transform: "rotate(-1deg)" }}
      >
        <img
          src={active === "home" ? A.homeActive : A.homeInactive}
          alt="HOME"
          className="h-9 w-auto object-contain transition-all group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(212,184,0,0.5)]"
        />
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-white font-mono text-[10px] uppercase rounded opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
          Home
        </span>
      </button>

      <button
        onClick={() => scroll("works")}
        className="relative group focus:outline-none transition-transform active:scale-95 -mt-1.5"
        style={{ transform: "rotate(1.5deg)" }}
      >
        <img
          src={active === "works" ? A.worksActive : A.worksInactive}
          alt="WORKS"
          className="h-11 w-auto object-contain transition-all group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(212,184,0,0.5)]"
        />
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-white font-mono text-[10px] uppercase rounded opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
          Works
        </span>
      </button>

      <button
        onClick={() => scroll("contacts")}
        className="relative group focus:outline-none transition-transform active:scale-95 -mt-2"
        style={{ transform: "rotate(-3deg)" }}
      >
        <img
          src={active === "contacts" ? A.contactsActive : A.contactsInactive}
          alt="CONTACTS"
          className="h-9 w-auto object-contain transition-all group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(212,184,0,0.5)]"
          style={{ filter: active === "contacts" ? "brightness(1.5)" : "none" }}
        />
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/80 text-white font-mono text-[10px] uppercase rounded opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
          Contact
        </span>
      </button>
    </nav>
  );
}

// ─── HOME ────────────────────────────────────────────────────────────────────
function HomeSection() {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    setVis(true);
  }, []);

  const scrollContacts = () => {
    document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative w-full min-h-screen lg:h-screen flex items-center justify-center overflow-hidden bg-[#161616]">
      {/* Background Graphic Design */}
      <img
        src={A.bgIndex}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-30 mix-blend-screen"
      />
      <div className="dot-pattern absolute inset-0 pointer-events-none" />

      {/* Decorative LEFT Cutout Tape strip - hidden on tiny viewports */}
      <img
        src={A.cutout}
        alt=""
        aria-hidden
        className="absolute left-0 top-0 h-full w-auto z-10 pointer-events-none select-none hidden lg:block"
        style={{
          transition: "opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateX(0)" : "translateX(-20px)",
        }}
      />

      {/* Main Structural Flex Wrapper (Groups Title, Desc, and Face in a unified collage on the right, with Clean Typography on the left) */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 py-24 lg:py-0 flex flex-col lg:flex-row items-center justify-between z-20 gap-12 lg:gap-6 h-full">
        
        {/* LEFT COLUMN: Clean Typography Intro & Personal Context */}
        <div className="w-full lg:max-w-[44%] flex flex-col items-start gap-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={vis ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-gold font-mono tracking-[0.25em] text-xs sm:text-sm font-bold uppercase"
          >
            HELLO, I'M
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={vis ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-4xl sm:text-5xl font-display text-white uppercase tracking-wider leading-none"
          >
            LEXUS GABRIEL D. NAMA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={vis ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-gold/90 font-mono text-xs sm:text-sm uppercase tracking-[0.1em] font-semibold mt-1"
          >
            Multidisciplinary Developer & Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={vis ? { opacity: 0.8 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white text-xs sm:text-sm leading-relaxed max-w-md font-sans mt-2"
          >
            Currently pursuing an IT major in pamantasan. Focused on crafting distinctive user experiences, modeling tactile Blender designs, and orchestrating highly secure web systems.
          </motion.p>

          {/* Divider Graphic line */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={vis ? { opacity: 0.5, width: "100%" } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="my-3 max-w-sm"
          >
            <img src={A.lines} alt="" aria-hidden className="w-full h-0.5 object-cover" />
          </motion.div>

          {/* Social Rounded Button links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={vis ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-3 mt-1"
          >
            {[
              { label: "GitHub", href: "https://github.com/ZiraLena", icon: <Layers className="w-4 h-4" /> },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/lexus-nama-a23b54269/", icon: <span className="text-xs font-black uppercase">in</span> },
              { label: "Facebook", href: "https://web.facebook.com/kiyotaka.ayanokoji.7792/", icon: <span className="text-xs font-black uppercase">FB</span> },
              { label: "Instagram", href: "https://www.instagram.com/lexusnama/", icon: <Sparkles className="w-4 h-4" /> },
            ].map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:border-gold hover:text-gold text-neutral-300 transition-colors drop-shadow-md cursor-pointer"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The spectacular overlapping sticker collage of Title, Desc, and Face */}
        <div className="w-full lg:max-w-[53%] flex items-end justify-center relative aspect-[1.35/1] sm:aspect-[1.5/1] lg:aspect-auto h-[380px] sm:h-[480px] lg:h-[88%] min-h-[380px] md:min-h-[440px] lg:self-center">
          
          {/* Constellation of float/rotating stars */}
          <motion.img
            src={A.star1}
            alt=""
            aria-hidden
            animate={{ rotate: 360, y: [0, -6, 0] }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute z-20 w-10 sm:w-14 right-[12%] top-[8%] opacity-85 select-none pointer-events-none filter drop-shadow-[0_0_8px_rgba(212,184,0,0.3)]"
          />
          
          <motion.img
            src={A.star2}
            alt=""
            aria-hidden
            animate={{ rotate: -360, y: [0, 8, 0] }}
            transition={{
              rotate: { duration: 18, repeat: Infinity, ease: "linear" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute z-20 w-7 sm:w-9 left-[5%] top-[50%] opacity-80 select-none pointer-events-none filter drop-shadow-[0_0_8px_rgba(212,184,0,0.2)]"
          />

          <motion.img
            src={A.star3}
            alt=""
            aria-hidden
            animate={{ rotate: 180, scale: [1, 1.15, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-20 w-4 sm:w-5 right-[35%] top-[20%] opacity-75 select-none pointer-events-none"
          />

          {/* Spectacular Unified Overlapping Collage Image (pointing character, speech bubble, and slant text pre-composed in face.png) */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={vis ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-[4%] z-10 flex items-end justify-center select-none pointer-events-none"
          >
            <img
              src={A.face}
              alt="Lexus Gabriel D. Nama Portfolio Collage"
              className="h-full w-auto max-w-full object-contain object-bottom select-none drop-shadow-[0_12px_32px_rgba(0,0,0,0.65)]"
            />
          </motion.div>

          {/* Floating Contact CTA badge button */}
          <motion.button
            onClick={scrollContacts}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={vis ? { opacity: 1, scale: 1 } : {}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="absolute left-[4%] bottom-4 sm:bottom-6 z-40 flex items-center gap-3 px-5 py-3 rounded-2xl bg-neutral-900/90 backdrop-blur-md border border-neutral-800 text-left cursor-pointer shadow-lg hover:border-gold/50 active:border-gold"
          >
            <img src={A.contactIcon} alt="" className="w-8 h-8 object-contain pulse-animation" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-neutral-400 font-mono tracking-wider uppercase leading-none">Inquire info</span>
              <span className="text-sm font-black text-white leading-tight">LET'S CREATE!</span>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT BENTO GRID ────────────────────────────────────────────────────────
function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVis(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const expertise = [
    { title: "UI & UX Design", desc: "Crafting beautiful grids, visual hierarchy, and polished interfaces." },
    { title: "Frontend Engineering", desc: "Translating mockups to scalable React, Next.js, and CSS nodes." },
    { title: "Game & Pixel Art", desc: "Drawing tactile 2D designs, icons, sprite sheets and animations." },
    { title: "Blender 3D", desc: "Modeling modular items, keyframe rendering, and scenery." },
    { title: "Integrated Cloud Backends", desc: "Setting up real-time sync with Firebase & secure OAuth APIs." },
    { title: "Network Configuration", desc: "Cisco NetAcad validated topology blueprints, routing and security." },
  ];

  const education = [
    { school: "Pamantasan ng Lungsod ng Valenzuela", role: "BS in Information Technology", date: "2023 - Present" },
    { school: "Valenzuela City School of Mathematics and Science", role: "Senior High School - STEM", date: "2021 - 2023" },
    { school: "Valenzuela City School of Mathematics and Science", role: "Junior High School", date: "2017 - 2021" },
    { school: "Caruhatan East Elementary School", role: "Primary Education", date: "2011 - 2017" },
  ];

  return (
    <section id="about" ref={ref} className="relative w-full min-h-screen py-24 bg-[#111111] overflow-hidden">
      {/* Dimmed Background Design cues */}
      <div className="dot-pattern absolute inset-0 opacity-40 pointer-events-none" />
      <div className="absolute top-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-gold/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-5%] w-[280px] h-[280px] rounded-full bg-white/[0.03] blur-[80px] pointer-events-none" />

      <div
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10"
        style={{
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Section Heading */}
        <div className="mb-14 text-center sm:text-left">
          <p className="text-gold font-mono tracking-[0.25em] text-xs uppercase font-bold mb-2">Who/Bio info</p>
          <h2 className="text-2xl sm:text-3.5xl font-display uppercase tracking-wider text-white">About Lexus D. Nama</h2>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* CARD 1: Core Bio card (6/12 Columns) */}
          <div className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-white/[0.05] hover:border-gold/20 transition-all shadow-xl backdrop-blur-md">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-gold/10 border border-gold/30 rounded-lg text-gold font-mono text-[10px] tracking-wider uppercase font-bold">
                  IT Student & Artist
                </span>
                <span className="text-white/40 font-mono text-[10px]">PHILIPPINES</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-display tracking-wider text-white">
                LEXUS GABRIEL D. NAMA
              </h3>
              
              <p className="text-neutral-300 text-sm sm:text-[15px] leading-relaxed font-sans">
                I am a multidisciplinary developer and designer currently pursuing a Bachelor of Science in Information Technology at <strong>Pamantasan ng Lungsod ng Valenzuela</strong>.
              </p>
              
              <p className="text-neutral-400 text-sm leading-relaxed font-sans mt-1">
                Combining structural engineering logic with graphic tactile aesthetics, I write clean front-end application code, draw detailed 2D pixel animations, and build 3D virtual spaces in Blender. Always excited to tackle user experience problems from the ground up.
              </p>
            </div>

            {/* Quick Contacts lists */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/[0.05]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-950 flex items-center justify-center text-gold/80">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">Email inbox</span>
                  <a href="mailto:lexusnama@gmail.com" className="text-xs font-bold text-white hover:text-gold transition-colors break-all">
                    lexusnama@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-950 flex items-center justify-center text-gold/80">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">Telephone line</span>
                  <a href="tel:+639165741371" className="text-xs font-bold text-white hover:text-gold transition-colors">
                    +63 916 574 371
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:col-span-2">
                <div className="w-10 h-10 rounded-xl bg-neutral-950 flex items-center justify-center text-gold/80">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">Primary Location</span>
                  <span className="text-xs font-bold text-white">
                    Valenzuela City, Metro Manila, Philippines
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Areas of Expertise (6/12 Columns) */}
          <div className="lg:col-span-6 flex flex-col p-6 sm:p-8 rounded-3xl bg-neutral-900/60 border border-white/[0.05] hover:border-gold/20 transition-all shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-black tracking-wider uppercase font-sans text-neutral-200">
                Skills & Strengths
              </h3>
              <Award className="w-5 h-5 text-gold" style={{ filter: "drop-shadow(0 0 4px rgba(212,184,0,0.4))" }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {expertise.map(({ title, desc }) => (
                <div key={title} className="p-4 rounded-2xl bg-neutral-950/80 border border-white/[0.04] flex flex-col gap-1.5 hover:border-white/[0.08] transition-colors">
                  <span className="text-xs font-mono text-gold font-bold uppercase tracking-wider">{title}</span>
                  <p className="text-[11px] sm:text-xs text-neutral-400 font-sans leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 3: Academic Timeline (7/12 Columns) */}
          <div className="lg:col-span-7 flex flex-col p-6 sm:p-8 rounded-3xl bg-neutral-900/50 border border-white/[0.05] hover:border-gold/20 transition-all shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-black tracking-wider uppercase font-sans text-neutral-200">
                Educational Milestones
              </h3>
              <BookOpen className="w-5 h-5 text-gold/80" />
            </div>

            <div className="flex flex-col gap-6 relative pl-5 border-l-2 border-neutral-800">
              {education.map((item, idx) => (
                <div key={`${item.school}-${idx}`} className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  {/* Timeline bullet node */}
                  <div className="absolute -left-[27px] top-[6px] w-[12px] h-[12px] rounded-full bg-gold border-2 border-neutral-900 shadow-[0_0_8px_rgba(212,184,0,0.6)]" />
                  
                  <div className="flex flex-col">
                    <h4 className="text-sm font-bold text-white leading-snug">{item.school}</h4>
                    <p className="text-xs text-neutral-400 font-sans leading-tight mt-0.5">{item.role}</p>
                  </div>
                  
                  <span className="text-[10px] font-mono text-gold font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 4: Work Immersion and Selected projects (5/12 Columns) */}
          <div className="lg:col-span-5 flex flex-col p-6 sm:p-8 rounded-3xl bg-neutral-900/50 border border-white/[0.05] hover:border-gold/20 transition-all shadow-xl backdrop-blur-md justify-between gap-6">
            
            {/* WORK IMMERSION */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-neutral-250 border-b border-white/[0.05] pb-3">
                <Briefcase className="w-4.5 h-4.5 text-gold/80" />
                <h4 className="text-xs font-black uppercase font-mono tracking-wider">Work Immersion</h4>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-950/80 border border-white/[0.04]">
                <h5 className="text-xs font-black text-white">ICT Work Immersion Coordinator</h5>
                <p className="text-[11px] text-neutral-400 mt-1 font-sans">
                  Valenzuela City Information & Communications Technology Office (ICTO). Configured network maps and assisted with institutional system administration.
                </p>
                <span className="inline-block mt-3 text-[9px] font-mono font-bold tracking-wider text-gold uppercase">
                  March 2023 - April 2023
                </span>
              </div>
            </div>

            {/* UNITY PROJECTS */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-neutral-250 border-b border-white/[0.05] pb-3">
                <Layers className="w-4.5 h-4.5 text-gold/80" />
                <h4 className="text-xs font-black uppercase font-mono tracking-wider">Independent Builds</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-neutral-950 border border-white/[0.04] flex flex-col justify-between">
                  <span className="text-xs font-black text-white leading-tight">MATAYA-TAYA</span>
                  <p className="text-[10px] text-neutral-500 leading-relaxed mt-1 font-sans">Unity native 3D runner mechanics and item configuration flow.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-neutral-950 border border-white/[0.04] flex flex-col justify-between">
                  <span className="text-xs font-black text-white leading-tight">Ready-Set-Bag</span>
                  <p className="text-[10px] text-neutral-500 leading-relaxed mt-1 font-sans">Tactile simulation game published for Android system testing.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

// ─── WORKS PART 1: INTRO TITLE ───────────────────────────────────────────────
function WorksTitleSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVis(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="works" ref={ref} className="relative w-full h-[55vh] flex items-center justify-center overflow-hidden">
      {/* Absolute image fill background */}
      <img
        src={A.worksBg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none select-img-glow"
      />
      <div className="dot-pattern absolute inset-0 pointer-events-none" />

      {/* Structured animated center labels */}
      <div
        className="text-center px-6 relative z-10"
        style={{
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(35px)",
          transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <h2 className="text-3xl sm:text-5xl font-display uppercase tracking-[0.1em] text-white">
          WORKS AND PROJECTS
        </h2>
        
        {/* Centers the cool gold spacer lines */}
        <div className="max-w-[500px] w-full mx-auto my-4 opacity-75">
          <img src={A.worksLine} alt="" aria-hidden className="w-full h-auto" />
        </div>
        
        <p className="font-mono text-gold text-xs sm:text-sm tracking-[0.1em] uppercase font-bold text-center">
          Documentation of tasks and projects completed
        </p>
      </div>

      {/* Bottom paper cutout connector strip - eliminates pixel lines between grids */}
      <img
        src={A.worksCutout}
        alt=""
        aria-hidden
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-10"
      />
    </section>
  );
}

// ─── WORKS PART 2: THE CREAM FOLDER COMPONENT WITH LIGHTBOX ──────────────────
function WorksFolderSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<{ tab: number; card: number } | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVis(true);
      },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const categories = ["Graphic Design", "Game Art", "Web / Frontend", "3D Artist", "Networking"];
  const rotations = [2.5, -2, 1.8, -1.5];

  const isVideo = (src: string) => src ? (src.endsWith(".mp4") || src.endsWith(".webm")) : false;

  const tabData = [
    {
      featImg:  "/project/graphic-featured.jpg",
      featTitle: "GRAPHIC DESIGN SETS",
      featDesc:  "Creative publication layouts, product banners, typography posters, and branding designs drafted using Adobe Photoshop and Illustrator. Focused on high-contrast structures and clean typography pairing.",
      cards: [
        { img: "/project/graphic-1.png", label: "Brutalist Space Poster" },
        { img: "/project/graphic-2.png", label: "Vintage Cyber Layout" },
        { img: "/project/graphic-3.png", label: "Geometric Vector Logo" },
        { img: "/project/graphic-4.jpg", label: "Aesthetic Book Magazine Cover" },
      ],
    },
    {
      featImg:  "/project/gameart-featured.png",
      featTitle: "READY-SET-BAG ASSETS",
      featDesc:  "Clean Game-Art assets created for the Android-published Ready-Set-Bag simulator. Includes 2D sprite textures, item inventories, character outlines, and key animations crafted in Aseprite.",
      cards: [
        { img: "/project/gameart-1.png", label: "Character Model Sheet" },
        { img: "/project/gameart-2.gif", label: "Dribble Idle Loop Animation" },
        { img: "/project/gameart-3.gif", label: "Tactile UI Inventory Icons" },
        { img: "/project/gameart-4.png", label: "Complete In-Game Item Set" },
      ],
    },
    {
      featImg:  "/project/web-featured.png",
      featTitle: "ARTA COMPLIANCE SYSTEM",
      featDesc:  "A secure customer feedback registration pipeline built for the Valenzuela Government Office. Developed using Next.js framework, React triggers, Tailwind, and database synchronization.",
      cards: [
        { img: "/project/web-1.png", label: "Platform Splash Landing" },
        { img: "/project/web-2.png", label: "Compliance Staff Login Panel" },
        { img: "/project/web-3.png", label: "Administrative Statistics Hub" },
        { img: "/project/web-4.png", label: "Fluid Multi-step Feedback Form" },
      ],
    },
    {
      featImg:  "/project/3d-featured.png",
      featTitle: "BLENDER 3D MODELING",
      featDesc:  "TACTILE 3D models and lighting environments developed inside Blender. Includes keyframe asset rendering, camera sweeps, retro scene setups, and animation rendering output.",
      cards: [
        { img: "/project/3d-1.mp4", label: "Arch-Viz House Model" },
        { img: "/project/3d-2.mp4", label: "Atmospheric Room Scene Sweep" },
        { img: "/project/3d-3.mp4", label: "Game Main Menu Sweep" },
        { img: "/project/3d-4.webm", label: "Casino Card Shuffle Sweep" },
      ],
    },
    {
      featImg:  "/project/networking-featured.png",
      featTitle: "CISCO NETACAD TOPOGRAPHY",
      featDesc:  "Blueprinting corporate physical intranets. Includes configuring router gateways, setting up switch hierarchies, managing VLAN scopes, and setting port-security protocols.",
      cards: [
        { img: "/project/networking-1.png", label: "Cisco NetAcad Network Support Blueprint" },
        { img: "/project/networking-2.png", label: "Intranet Addressing & Router Gateways" },
        { img: "/project/networking-3.png", label: "Device initial configurations & port scopes" },
        { img: "/project/networking-4.png", label: "Cisco Networking Basics Certification" },
      ],
    },
  ];

  const active = tabData[activeTab];

  return (
    <section ref={ref} className="relative w-full py-16 bg-[#1a1a1a] overflow-hidden select-none">
      <div className="dot-pattern absolute inset-0 pointer-events-none opacity-20" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* TACTILE Folder Tabs Section */}
        <div
          className="flex flex-wrap gap-1.5 z-20 relative"
          style={{
            transform: vis ? "translateY(0)" : "translateY(20px)",
            opacity: vis ? 1 : 0,
            transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          {categories.map((cat, idx) => {
            const isTabActive = activeTab === idx;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(idx)}
                style={{ borderRadius: "12px 12px 0 0" }}
                className={`px-4 sm:px-6 py-3 font-sans text-xs sm:text-sm font-black uppercase tracking-wider relative transition-all duration-300 focus:outline-none cursor-pointer ${
                  isTabActive
                    ? "bg-warm-cream text-neutral-950 font-black shadow-md z-10"
                    : "bg-neutral-800/80 text-neutral-400 hover:text-neutral-200 border-b border-transparent hover:bg-neutral-800"
                }`}
              >
                {/* Framer motion active accent slider line on top */}
                {isTabActive && (
                  <motion.div
                    layoutId="activeFolderTabBorder"
                    className="absolute top-0 left-0 right-0 h-1 bg-gold rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* TACTILE Folder Body */}
        <div
          className="relative rounded-r-3xl rounded-bl-3xl border border-white/[0.04] bg-warm-cream text-black shadow-2xl overflow-hidden min-h-[440px]"
          style={{
            transform: vis ? "translateY(0)" : "translateY(30px)",
            opacity: vis ? 1 : 0,
            transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
          }}
        >
          {/* Subtle Vintage Cross-hatch folder grid line bg */}
          <div className="folder-cross-pattern absolute inset-0 pointer-events-none" />

          {/* Animate-presence active folder panel wrapper */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.35 }}
              className="relative z-10 p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-stretch h-full"
            >
              
              {/* LEFT FOLDER COLUMN: Highlight Banner */}
              <div className="w-full lg:max-w-[38%] flex flex-col gap-4">
                <div className="w-full aspect-[4/3] bg-neutral-300/40 border border-black/[0.08] rounded-2xl overflow-hidden shadow-inner flex items-center justify-center select-none">
                  {active.featImg ? (
                    <img
                      src={active.featImg}
                      alt={active.featTitle}
                      className="w-full h-full object-cover select-none"
                    />
                  ) : (
                    <span className="text-sm font-mono text-neutral-400 font-bold uppercase">[ PREVIEW SCREENSHOT ]</span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5 mt-2">
                  <h4 className="text-xl font-display uppercase tracking-wider text-neutral-900 leading-none">
                    {active.featTitle}
                  </h4>
                  <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-700 font-sans">
                    {active.featDesc}
                  </p>
                </div>
              </div>

              {/* RIGHT FOLDER COLUMN: 2x2 Polaroid cards display */}
              <div className="flex-1 grid grid-cols-2 md:grid-cols-2 gap-4 lg:gap-5">
                {active.cards.map((card, cardIdx) => (
                  <motion.div
                    key={cardIdx}
                    onClick={() => setLightboxIndex({ tab: activeTab, card: cardIdx })}
                    initial={{ rotate: rotations[cardIdx] }}
                    whileHover={{ rotate: 0, scale: 1.04, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative cursor-pointer select-none polaroid-shadow transition-shadow"
                    style={{ zIndex: 10 + cardIdx }}
                  >
                    {/* Polaroid paper backing card layout */}
                    <img
                      src={A.ws2Card}
                      alt=""
                      aria-hidden
                      className="w-full h-auto object-contain pointer-events-none select-none filter brightness-105"
                    />

                    {/* Integrated image boundingbox within polaroid graphic spacing */}
                    <div className="absolute top-[18%] left-[19.5%] right-[16.5%] bottom-[19%] flex flex-col justify-between">
                      <div className="w-full aspect-[4/3.1] bg-neutral-800/20 border border-black/[0.04] rounded-sm overflow-hidden flex items-center justify-center relative shadow-inner">
                        {card.img ? (
                          isVideo(card.img) ? (
                            <div className="w-full h-full relative flex items-center justify-center bg-black">
                              <video
                                src={card.img}
                                muted
                                playsInline
                                loop
                                autoPlay
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute right-1.5 bottom-1.5 w-5 h-5 rounded-md bg-black/70 flex items-center justify-center text-white text-[9px]">
                                <Play className="w-2.5 h-2.5 fill-white" />
                              </div>
                            </div>
                          ) : (
                            <img
                              src={card.img}
                              alt={card.label}
                              className="w-full h-full object-cover object-center"
                            />
                          )
                        ) : (
                          <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase">[ PREVIEW ]</span>
                        )}
                      </div>

                      {/* Polaroid handwriting note label */}
                      <p className="text-[10px] sm:text-[11px] font-black uppercase text-neutral-900 border-none truncate font-sans tracking-tight pr-1 leading-none mt-2.5">
                        {card.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* TACTILE Folder Connector bottom layout cutouts */}
      <img
        src={A.ws2Cutout}
        alt=""
        aria-hidden
        className="w-full pointer-events-none select-none h-auto z-10 bottom-0 block mt-12 filter brightness-[1.03]"
      />

      {/* ── LIGHTBOX POPUP DIALOG DIORAMA ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            
            {/* Backdrop Blur overlay - closes on click */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-neutral-950/85 backdrop-blur-md"
            />

            {/* Main Lightbox window wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-4xl bg-neutral-900/90 border border-white/[0.08] glow-gold rounded-3xl overflow-hidden z-10 flex flex-col lg:flex-row shadow-2xl"
            >
              {/* Close Button top-right corner */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 z-[220] w-10 h-10 rounded-full bg-black/60 hover:bg-gold/80 hover:text-neutral-950 text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Media viewer block (Left) */}
              <div className="flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[400px] relative">
                {tabData[lightboxIndex.tab].cards[lightboxIndex.card].img ? (
                  isVideo(tabData[lightboxIndex.tab].cards[lightboxIndex.card].img) ? (
                    <video
                      src={tabData[lightboxIndex.tab].cards[lightboxIndex.card].img}
                      controls
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-full max-h-[550px] object-contain"
                    />
                  ) : (
                    <img
                      src={tabData[lightboxIndex.tab].cards[lightboxIndex.card].img}
                      alt={tabData[lightboxIndex.tab].cards[lightboxIndex.card].label}
                      className="w-full h-full max-h-[550px] object-contain"
                    />
                  )
                ) : (
                  <span className="text-white text-sm font-mono">[ PREVIEW BLANK ]</span>
                )}
              </div>

              {/* Details and categories summaries (Right) */}
              <div className="w-full lg:max-w-[340px] p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.06] bg-neutral-950/60 max-h-[550px] overflow-y-auto">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-gold/10 border border-gold/30 rounded text-gold font-mono text-[9px] uppercase tracking-wider font-bold">
                      {categories[lightboxIndex.tab]}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-display text-white uppercase tracking-wider">
                      {tabData[lightboxIndex.tab].cards[lightboxIndex.card].label}
                    </h3>
                    <p className="text-[10px] font-mono text-neutral-500 uppercase leading-none">Category Project documentation</p>
                  </div>

                  <p className="text-xs text-neutral-400 font-sans leading-relaxed mt-1">
                    This pixel render showcases multidisciplinary details created by Lexus Gabriel D. Nama for his personal designs, academic coursework, and system-administration testing.
                  </p>
                </div>

                <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-white/[0.04]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase">
                    <span>Tool environment</span>
                    <span className="text-white font-bold">Photoshop / NextJS / Web</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase">
                    <span>Role details</span>
                    <span className="text-gold font-bold">Artist / Developer</span>
                  </div>
                  
                  {/* Action Link Button */}
                  <button
                    onClick={() => setLightboxIndex(null)}
                    className="w-full py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-850 text-white font-mono text-xs font-bold border border-white/[0.05] hover:border-gold/30 transition-colors cursor-pointer text-center"
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ─── CONTACTS SECTION ────────────────────────────────────────────────────────
function ContactsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVis(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const links = [
    { icon: <Mail className="w-4 h-4" />,  label: "lexusnama@gmail.com", href: "mailto:lexusnama@gmail.com" },
    { icon: <span className="text-xs font-black uppercase leading-none">in</span>, label: "linkedin.com/in/lexus-nama", href: "https://www.linkedin.com/in/lexus-nama-a23b54269/" },
    { icon: <FileText className="w-4 h-4" />, label: "github.com/ZiraLena", href: "https://github.com/ZiraLena" },
    { icon: <Sparkles className="w-4 h-4" />, label: "@lexusnama (Instagram)", href: "https://www.instagram.com/lexusnama/" },
  ];

  const resumeHref = "/assets/NAMA CV Resume.pdf";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const body = [
      `Name: ${fullName}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:lexusnama@gmail.com?subject=${encodeURIComponent(subject || "Portfolio inquiry")}&body=${encodeURIComponent(body)}`;
    
    // Smooth transition simulation for high-tech feeling
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      window.location.href = mailto;
      
      // Auto-revert success banner after some seconds
      setTimeout(() => setSuccess(false), 8000);
    }, 1200);
  };

  return (
    <section id="contacts" ref={ref} className="relative w-full min-h-screen py-24 flex items-center justify-center overflow-hidden">
      {/* Dimmed background fills */}
      <img
        src={A.worksBg}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none select-img-glow scale-105"
      />
      <div className="dot-pattern absolute inset-0 pointer-events-none opacity-40" />

      {/* Framer-motion entrance layout */}
      <div
        className="max-w-5xl w-full mx-auto px-6 relative z-10"
        style={{
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(35px)",
          transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Title center banner */}
        <div className="text-center mb-14">
          <p className="text-gold font-mono tracking-[0.25em] text-xs uppercase font-bold mb-2">Engage info</p>
          <h2 className="text-3xl sm:text-5.5xl font-display uppercase tracking-wider text-white">GET IN TOUCH</h2>
        </div>

        {/* Contacts Sidebar and actual Form panel (Flex side-by-side or mobile stacked) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 w-full">
          
          {/* Side links block (5/12 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-lg font-black tracking-wider uppercase font-sans text-neutral-100 pb-2 border-b border-white/[0.05]">
              Contact parameters
            </h3>
            
            <p className="font-mono text-xs sm:text-sm text-neutral-400 leading-relaxed uppercase">
              Send an organic message directly through the custom mailbox form, or pull a copy of my physical resume sheet below.
            </p>

            {/* PDF Resume Download Button */}
            <a
              href={resumeHref}
              download
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-warm-cream hover:bg-neutral-100 text-neutral-950 text-sm font-black tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg glow-gold select-none font-sans justify-center sm:justify-start"
            >
              <Download className="w-4 h-4 stroke-[3px]" />
              DOWNLOAD MY RESUME
            </a>

            {/* List entries with elegant underlines */}
            <div className="flex flex-col gap-4 mt-4">
              {links.map(({ icon, label, href }, idx) => (
                <a
                  key={label}
                  href={href}
                  className="contact-row group flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-950 border border-neutral-800 text-white flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:text-neutral-950 transition-colors">
                    {icon}
                  </div>
                  <span className="font-mono text-xs sm:text-sm text-neutral-400 group-hover:text-gold transition-colors truncate">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Form container side block (7/12 Columns) */}
          <div className="lg:col-span-7 w-full relative">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-neutral-900/75 border border-white/[0.06] backdrop-blur-md shadow-2xl flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Your Name</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Lexus Gabriel D. Nama"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-white/[0.08] text-white text-sm focus:border-gold focus:outline-none transition-colors"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Your Email Address</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="client@corporate.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-white/[0.08] text-white text-sm focus:border-gold focus:outline-none transition-colors"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 w-full">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Subject Headline</span>
                <input
                  name="subject"
                  type="text"
                  placeholder="UI Design & Blender Project Inquiries"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-white/[0.08] text-white text-sm focus:border-gold focus:outline-none transition-colors"
                />
              </label>

              <label className="flex flex-col gap-2 w-full">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Detailed Message</span>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Hey Lexus, love your retro aesthetic! Let's get together and build something spectacular..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-neutral-950/80 border border-white/[0.08] text-white text-sm focus:border-gold focus:outline-none resize-none transition-colors"
                />
              </label>

              {/* Submit Buttons */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-2xl bg-gold hover:bg-gold/90 text-neutral-950 font-sans font-black text-sm uppercase tracking-wider transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 shadow-lg select-none"
              >
                <Send className="w-4 h-4 fill-neutral-905" />
                Launch Mail Client
              </button>
            </form>

            {/* SUBMISSION SUCCESS/PENDING OVERLAYS */}
            <AnimatePresence>
              {submitting && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 rounded-3xl bg-neutral-950/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center gap-4 text-center p-6 border border-white/[0.05]"
                >
                  <div className="w-12 h-12 rounded-full border-4 border-gold border-r-transparent animate-spin" />
                  <div className="flex flex-col gap-1.5 mt-2">
                    <span className="text-sm font-black uppercase text-white tracking-widest">FORMULATING MESSAGE</span>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase">Synchronizing mail parameters...</span>
                  </div>
                </motion.div>
              )}

              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 rounded-3xl bg-neutral-950/95 backdrop-blur-sm z-30 flex flex-col items-center justify-center gap-4 text-center p-6 border border-white/[0.05]"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center text-gold shadow-[0_0_15px_rgba(212,184,0,0.3)] animate-pulse">
                    <CheckCircle className="w-6 h-6 stroke-[2.5px]" />
                  </div>
                  <div className="flex flex-col gap-1 mt-1 max-w-sm">
                    <h4 className="text-lg font-display uppercase tracking-wider text-white">MESSAGE DISPATCHED!</h4>
                    <p className="text-xs text-neutral-400 font-sans leading-relaxed px-4">
                      Your form parameters were wrapped successfully. If your custom mail composer client did not open automatically, simply click the dispatch trigger.
                    </p>
                  </div>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-2 px-4 py-1.5 rounded-lg bg-neutral-900 border border-white/[0.05] hover:border-gold/30 text-xs font-mono font-bold text-white transition-colors cursor-pointer"
                  >
                    Close Banner
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </div>
    </section>
  );
}

// ─── ROOT CONTAINER ──────────────────────────────────────────────────────────
export default function App() {
  const [activeNav, setActiveNav] = useState("home");

  useEffect(() => {
    // Dynamically tracks active scroll coordinates via observer
    const sections = ["home", "works", "contacts"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveNav(id);
          }
        },
        // Comfort margin triggers active state cleanly as header/body enters center of viewport
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="flex flex-col w-full h-auto overflow-y-auto selection:bg-gold selection:text-neutral-950">
      {/* Scroll navigation controller links */}
      <Nav active={activeNav} />
      
      {/* Main coordinate layers */}
      <HomeSection />
      
      {/* Bento Grid layout credentials */}
      <AboutSection />
      
      {/* Projects portfolio layout layers */}
      <WorksTitleSection />
      <WorksFolderSection />
      
      {/* Inbox mail contact dispatcher cards */}
      <ContactsSection />
    </div>
  );
}
