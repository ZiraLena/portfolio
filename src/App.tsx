import { useEffect, useRef, useState } from "react";
import "./index.css";

const A = {
  bgIndex:          "/assets/BG-Index-design.png",
  cutout:           "/assets/Cutout-Design.png",
  title:            "/assets/title.png",
  desc:             "/assets/Desc.png",
  face:             "/assets/Face.png",
  star1:            "/assets/Star1.png",
  star2:            "/assets/Star2.png",
  star3:            "/assets/Star3.png",
  lines:            "/assets/Lines.png",
  contactIcon:      "/assets/Contact-Icon.png",
  homeActive:       "/assets/HOME-Active.png",
  homeInactive:     "/assets/HOME-Inactive.png",
  contactsInactive: "/assets/CONTACTS-Inactive.png",
  contactsActive:   "/assets/CONTACTS-Active.png",
  worksActive:      "/assets/WORKS-Active.png",
  worksInactive:    "/assets/WORKS-Inactive.png",
  worksBg:          "/assets/WORKS-Bg.png",
  worksCutout:      "/assets/WORKS-cutout-design.png",
  worksLine:        "/assets/WORKS-line-design.png",
  ws2Card:          "/assets/WORKS-SECTION-2-card.png",
  ws2Cutout:        "/assets/WORKS-SECTION-2-cutout-design.png",
};

// ─── NAV ─────────────────────────────────────────────────────────────────────
// Stacked ribbons, top-right, compact
function Nav({ active }: { active: string }) {
  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <nav className="fixed top-3 right-3 z-[100] flex flex-col items-end" style={{ gap: 0 }}>
      <button onClick={() => scroll("home")} className={`nav-btn ${active === "home" ? "nav-btn--active" : ""}`} style={{ "--nav-tilt": "0deg" } as React.CSSProperties}>
        <img src={active === "home" ? A.homeActive : A.homeInactive}
          alt="HOME" className="nav-img" style={{ height: 35, width: "auto", display: "block" }} />
      </button>
      <button onClick={() => scroll("works")} className={`nav-btn ${active === "works" ? "nav-btn--active" : ""}`} style={{ marginTop: -7, "--nav-tilt": "1deg" } as React.CSSProperties}>
        <img src={active === "works" ? A.worksActive : A.worksInactive}
          alt="WORKS" className="nav-img" style={{ height: 45, width: "auto", display: "block" }} />
      </button>
      <button onClick={() => scroll("contacts")} className={`nav-btn ${active === "contacts" ? "nav-btn--active" : ""}`} style={{ marginTop: -9, "--nav-tilt": "-8deg" } as React.CSSProperties}>
        <img src={active === "contacts" ? A.contactsActive : A.contactsInactive} alt="CONTACTS"
          className="nav-img"
          style={{ height: 35, width: "auto", display: "block",
            filter: active === "contacts" ? "brightness(2)" : "none" }} />
      </button>
    </nav>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
// Layout from reference:
//   LEFT HALF: cutout strip | title | desc | lines+social | contactCTA
//   RIGHT HALF: face (bottom-anchored) | stars near face shoulder
function HomeSection() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 80); return () => clearTimeout(t); }, []);

  const fade = (delay: number, y = 6) =>
    `transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : `opacity-0 translate-y-[${y}px]`}`;

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-[#1a1a1a]">

      {/* BG radial graphic — full cover, dimmed */}
      <img src={A.bgIndex} alt="" aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 0.35 }} />

      {/* Dot pattern */}
      <div className="dot-pattern absolute inset-0 pointer-events-none" />

      {/* ── LEFT: Cutout / tape strip — left edge, full height ── */}
      <img src={A.cutout} alt="" aria-hidden
        className="absolute left-0 top-0 z-20 pointer-events-none select-none"
        style={{
          height: "100%", width: "auto",
          transition: "opacity 0.7s, transform 0.7s",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateX(0)" : "translateX(-8px)",
          transitionDelay: "0.1s"
        }} />

      {/* ── LEFT: PORTFOLIO title graphic ── */}
      {/* Sits upper-left, roughly top 20–45% of height */}
      <img src={A.title} alt="PORTFOLIO"
        className="home-title"
        style={{
          transition: "opacity 0.7s 0.25s, transform 0.7s 0.25s",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(20px)",
        }} />

      {/* ── LEFT: DESC ribbon — directly below title, small gap ── */}
      <img src={A.desc} alt="Graphic Design | Game Art | Web/Frontend Dev | 3D Artist | Networking"
        className="home-desc"
        style={{
          transition: "opacity 0.7s 0.38s, transform 0.7s 0.38s",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(20px)",
        }} />

      {/* ── LEFT: Lines asset — horizontal, below desc, above social row ── */}
      {/* Reference: starts around x=30% to x=60%, thin horizontal bar */}
      <img src={A.lines} alt="" aria-hidden
        className="absolute z-20"
        style={{
          right: "0",
          bottom: "19%",
          width: "50%",
          transition: "opacity 0.7s 0.52s, transform 0.7s 0.52s",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(16px)",
        }} />

      {/* ── LEFT: 4 social link rounded rectangles ── */}
      {/* Below lines, sits bottom ~8-14% */}
      <div className="home-social home-social-links absolute z-20 flex gap-2"
        style={{
          transition: "opacity 0.7s 0.58s, transform 0.7s 0.58s",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(16px)",
        }}>
        {[
          { label: "GitHub",    icon: "⌥", href: "https://github.com/ZiraLena" },
          { label: "LinkedIn",  icon: "in", href: "https://www.linkedin.com/in/lexus-nama-a23b54269/" },
          { label: "Facebook",  icon: "f", href: "https://web.facebook.com/kiyotaka.ayanokoji.7792/" },
          { label: "Instagram", icon: "◎", href: "https://www.instagram.com/lexusnama/" },
        ].map(({ label, icon, href }) => (
          <a key={label} href={href}
            target="_blank"
            rel="noreferrer"
            title={label}
            className="social-pill home-social-link group flex items-center justify-center">
            <span className="home-social-icon text-white text-xs font-bold group-hover:text-[#d4b800] transition-colors">
              {icon}
            </span>
          </a>
        ))}
      </div>

      {/* ── RIGHT: Face — bottom-anchored, right of center ── */}
      <img src={A.face} alt="Portfolio owner"
        className="home-face"
        style={{
          transition: "opacity 0.7s 0.42s, transform 0.7s 0.42s",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(28px)",
        }} />

      {/* ── RIGHT: Contact CTA — bottom-right, left of face ── */}
      <div className="home-contact-cta absolute z-20 flex items-center gap-3"
        style={{
          left: "50%",
          right: "auto",
          bottom: "0%",
          transition: "opacity 0.7s 0.62s",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(16px)",
        }}>
        <img src={A.contactIcon} alt="Contact" className="home-contact-icon" />
        <div className="home-contact-copy">
          <p className="home-contact-text text-white font-bold leading-tight" style={{ fontSize: 13 }}>Contact</p>
          <p className="home-contact-text text-white font-bold leading-tight" style={{ fontSize: 13 }}>Let's Create</p>
        </div>
      </div>

      {/* ── Stars: near face shoulder / upper torso area ── */}
      {/* Star1 large — just left-of-face, upper area */}
      <img src={A.star1} alt="" aria-hidden
        className="home-star home-star1"
        style={{
          transition: "opacity 0.5s 0.7s, transform 0.5s 0.7s",
          opacity: vis ? 1 : 0,
          transform: vis ? "scale(1)" : "scale(0.4)",
        }} />
      {/* Star2 medium */}
      <img src={A.star2} alt="" aria-hidden
        className="home-star home-star2"
        style={{
          transition: "opacity 0.5s 0.85s, transform 0.5s 0.85s",
          opacity: vis ? 1 : 0,
          transform: vis ? "scale(1)" : "scale(0.4)",
        }} />
      {/* Star3 small */}
      <img src={A.star3} alt="" aria-hidden
        className="home-star home-star3"
        style={{
          transition: "opacity 0.5s 1s, transform 0.5s 1s",
          opacity: vis ? 1 : 0,
          transform: vis ? "scale(1)" : "scale(0.4)",
        }} />
    </section>
  );
}

// ─── ABOUT ──────────────────────────────────────────────────────────────────
function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVis(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const expertise = [
    { title: "UI Design", desc: "Clean layouts, visual hierarchy, and interface systems." },
    { title: "Frontend", desc: "HTML, CSS, JavaScript, and responsive implementation." },
    { title: "Game Art", desc: "2D assets, pixel art, sprites, and visual polish." },
    { title: "Blender", desc: "3D modeling and render-ready scene composition." },
    { title: "Firebase / Supabase", desc: "Database-backed workflows and app integration." },
    { title: "Problem Solving", desc: "Structured troubleshooting and collaborative thinking." },
  ];

  const education = [
    { school: "Pamantasan ng Lungsod ng Valenzuela", role: "Bachelor of Science in Information Technology", date: "2023 - Present" },
    { school: "Valenzuela City School of Mathematics and Science", role: "Senior High School - STEM", date: "2021 - 2023" },
    { school: "Valenzuela City School of Mathematics and Science", role: "Junior High School", date: "2017 - 2021" },
    { school: "Caruhatan East Elementary School", role: "Elementary Education", date: "2011 - 2017" },
  ];

  const experience = [
    { title: "ICT Work Immersion", meta: "Valenzuela Information & Communication Office", date: "March 20, 2023 - March 31, 2023" },
  ];

  const projects = [
    { title: "MATAYA-TAYA", meta: "Endless runner built in Unity with responsive gameplay flow." },
    { title: "Ready-Set-Bag!", meta: "2D interactive simulation for Android focused on user interaction." },
  ];

  return (
    <section id="about" ref={ref} className="about-section">
      <div className="dot-pattern about-dots" />
      <div className="about-orb about-orb-one" />
      <div className="about-orb about-orb-two" />

      <div className="about-shell"
        style={{
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s, transform 0.7s",
        }}>
        <div className="about-grid">
          <section className="about-intro-card about-card about-card--intro">
          <p className="about-kicker">HELLO, I&apos;M</p>
          <h2 className="about-name">LEXUS GABRIEL D. NAMA</h2>
          <h3 className="about-role">Multidisciplinary Developer & Designer</h3>
          <p className="about-bio">
            Multidisciplinary developer and designer currently pursuing a Bachelor of Science in
            Information Technology at Pamantasan ng Lungsod ng Valenzuela. I create functional
            digital interfaces and immersive game assets with a hands-on approach to UI design,
            pixel art, and responsive web architecture.
          </p>

          <div className="about-contact-grid">
            <div className="about-contact-item">
              <span className="about-contact-label">Email</span>
              <a href="mailto:lexusnama@gmail.com">lexusnama@gmail.com</a>
            </div>
            <div className="about-contact-item">
              <span className="about-contact-label">Phone</span>
              <a href="tel:+639165741371">+63 916 574 371</a>
            </div>
            <div className="about-contact-item">
              <span className="about-contact-label">Location</span>
              <span>Valenzuela City, Philippines</span>
            </div>
          </div>
          </section>

          <section className="about-panel about-card about-card--expertise">
            <div className="about-panel-head">
              <p>Area of Expertise</p>
              <span>Core skills and strengths</span>
            </div>
            <div className="about-expertise-grid">
              {expertise.map((item) => (
                <article key={item.title} className="about-expertise-item">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="about-panel about-card about-card--education">
            <div className="about-panel-head">
              <p>Educational Background</p>
              <span>Academic progression and milestones</span>
            </div>
            <div className="about-timeline">
              {education.map((item) => (
                <article key={`${item.school}-${item.date}`} className="about-timeline-item">
                  <div className="about-timeline-dot" />
                  <div>
                    <h4>{item.school}</h4>
                    <p>{item.role}</p>
                  </div>
                  <span>{item.date}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="about-panel about-card about-card--experience about-panel-split">
            <article>
              <div className="about-panel-head">
                <p>Experience</p>
                <span>Hands-on industry exposure</span>
              </div>
              <div className="about-mini-list">
                {experience.map((item) => (
                  <div key={item.title} className="about-mini-item">
                    <h4>{item.title}</h4>
                    <p>{item.meta}</p>
                    <span>{item.date}</span>
                  </div>
                ))}
              </div>
            </article>

            <article>
              <div className="about-panel-head">
                <p>Selected Projects</p>
                <span>Personal and academic work</span>
              </div>
              <div className="about-mini-list">
                {projects.map((item) => (
                  <div key={item.title} className="about-mini-item">
                    <h4>{item.title}</h4>
                    <p>{item.meta}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </div>
      </div>
    </section>
  );
}

// ─── WORKS SECTION 1 ─────────────────────────────────────────────────────────
// Full screen, WORKS-Bg.png fills it. Title centered.
// Bottom edge: WORKS-cutout-design.png full-width, zero pixel gap into section 2.
function WorksTitleSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="works" ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}>

      {/* BG — full cover */}
      <img src={A.worksBg} alt="" aria-hidden
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none" />
      <div className="dot-pattern absolute inset-0 pointer-events-none" />

      {/* Title — vertically centered in the flex-1 space above the cutout */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div style={{
          textAlign: "center",
          transition: "opacity 0.7s, transform 0.7s",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(40px)",
        }}>
          <h2 className="works-title text-white">WORKS AND PROJECTS</h2>
          <img src={A.worksLine} alt="" aria-hidden
            className="mx-auto"
            style={{ width: 700, marginTop: 12, opacity: 0.65 }} />
          <p className="works-subtitle text-gray-300" style={{ marginTop: 8 }}>
            Documentation of tasks and projects completed
          </p>
        </div>
      </div>

      {/* Bottom cutout — pinned to absolute bottom, full width, no gap */}
      <img src={A.worksCutout} alt="" aria-hidden
        className="absolute bottom-0 left-0 w-full pointer-events-none select-none z-10"
        style={{
          display: "block",
          transition: "opacity 0.7s 0.4s",
          opacity: vis ? 1 : 0,
        }} />
    </section>
  );
}

// ─── WORKS SECTION 2 — folder + 4 equal polaroid cards ──────────────────────
// No folder image asset. Cream-bg folder body, cross-hatch, coded.
// Left: smaller project image + description. Right: 2x2 grid of 4 equal polaroid cards.
// Each card has image placeholder + description placeholder inside.
// Project images live at /project/ (maps to D:\portfolio\public\project)
function WorksFolderSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const categories = ["Graphic Design", "Game Art", "Web / Frontend", "3D Artist", "Networking"];
  const rotations = [2, -1.5, 3, -2];

  const isVideo = (src: string) => src.endsWith(".mp4") || src.endsWith(".webm");

  // Project data per tab — images in /project/  (D:\portfolio\public\project)
  // Replace filenames with your actual files; placeholders shown as empty strings.
  const tabData = [
    {
      featImg:  "/project/graphic-featured.jpg",
      featTitle: "Graphic Designs",
      featDesc:  "Posters, logos, and publication layouts with a focus on clean hierarchy and print-ready presentation. Tools: Photoshop, Canva, Illustrator.",
      cards: [
        { img: "/project/graphic-1.png", label: "Poster" },
        { img: "/project/graphic-2.png", label: "Poster" },
        { img: "/project/graphic-3.png", label: "Logo" },
        { img: "/project/graphic-4.jpg", label: "Book Cover" },
      ],
    },
    {
      featImg:  "/project/gameart-featured.png",
      featTitle: "Ready-Set-Bag Project",
      featDesc:  "2D character assets, UI elements, and environment tiles created for the Ready-Set-Bag project. Tools: Aseprite, Photoshop.",
      cards: [
        { img: "/project/gameart-1.png", label: "Character Sheet" },
        { img: "/project/gameart-2.gif", label: "Character Sample Animation" },
        { img: "/project/gameart-3.gif", label: "UI Icon Bag Sample" },
        { img: "/project/gameart-4.png", label: "Item Icons IN GAME" },
      ],
    },
    {
      featImg:  "/project/web-featured.png",
      featTitle: "ARTA CSS PROJECT",
      featDesc:  "A responsive ARTA-compliant customer satisfaction and data gathering platform for the City Government of Valenzuela. Built with Next.js, React, Tailwind, and Figma.",
      cards: [
        { img: "/project/web-1.png", label: "Landing Page" },
        { img: "/project/web-2.png", label: "Login Page" },
        { img: "/project/web-3.png", label: "Dashboard" },
        { img: "/project/web-4.png", label: "Survey" },
      ],
    },
    {
      featImg:  "/project/3d-featured.png",
      featTitle: "3D Art Projects",
      featDesc:  "3D modeling and scene rendering work created in Blender and 3ds Max.",
      cards: [
        { img: "/project/3d-1.mp4", label: "House 3d Model" },
        { img: "/project/3d-2.mp4", label: "House Scene Render" },
        { img: "/project/3d-3.mp4", label: "Main Menu Render" },
        { img: "/project/3d-4.webm", label: "Card Shuffle Render" },
      ],
    },
    {
      featImg:  "/project/networking-featured.png",
      featTitle: "Networking",
      featDesc:  "Networking fundamentals, device configuration, troubleshooting, and security coursework from Cisco NetAcad.",
      cards: [
        { img: "/project/networking-1.png", label: "Network Support and Security Cisco NetAcad Badge" },
        { img: "/project/networking-2.png", label: "Network Addressing and Basic Troubleshooting Cisco NetAcad Badge" },
        { img: "/project/networking-3.png", label: "ConfigNetworking Devices and Initial Configuration Cisco NetAcad Badge" },
        { img: "/project/networking-4.png", label: "Networking Basics Cisco NetAcad Badge" },
      ],
    },
  ];

  const active = tabData[activeTab];

  return (
    <section ref={ref} className="works2-section">
      <div className="dot-pattern works2-dots" />

      <div className="works2-inner">

        {/* Folder tabs */}
        <div className="works2-tabs"
          style={{
            transition: "opacity 0.7s 0.15s, transform 0.7s 0.15s",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(24px)",
          }}>
          {categories.map((cat, i) => (
            <button key={cat} onClick={() => setActiveTab(i)}
              className={`folder-tab ${activeTab === i ? "folder-tab--active" : "folder-tab--inactive"}`}>
              {cat}
            </button>
          ))}
        </div>

        {/* Folder body */}
        <div className="folder-body"
          style={{
            transition: "opacity 0.7s 0.25s, transform 0.7s 0.25s",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(28px)",
          }}>
          <div className="folder-cross-pattern works2-crosshatch" />

          <div className="works2-content">

            {/* LEFT: featured project image + description */}
            <div className="works2-featured"
              style={{
                transition: "opacity 0.5s 0.35s, transform 0.5s 0.35s",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateX(0)" : "translateX(-20px)",
              }}>
              <div className="works2-img-wrap">
                {active.featImg && (
                  <img src={active.featImg} alt={active.featTitle} className="works2-img" />
                )}
                {!active.featImg && (
                  <span className="works2-img-placeholder">[ Project Image ]</span>
                )}
              </div>
              <div className="works2-feat-text">
                <p className="works2-feat-title">{active.featTitle}</p>
                <p className="works2-feat-desc">{active.featDesc}</p>
              </div>
            </div>

            {/* RIGHT: 2×2 polaroid cards */}
            <div className="works2-cards"
              style={{
                transition: "opacity 0.5s 0.45s, transform 0.5s 0.45s",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(24px)",
              }}>
              {active.cards.map(({ img, label }, i) => (
                <div key={i}
                  className="works2-card"
                  style={{ "--rot": `${rotations[i]}deg` } as React.CSSProperties}
                  onMouseEnter={e => (e.currentTarget.style.transform = "rotate(0deg) scale(1.04)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = `rotate(${rotations[i]}deg)`)}
                >
                  <div style={{ position: "relative" }}>
                    <img src={A.ws2Card} alt={label} className="works2-card-bg" />
                    <div className="works2-card-inner">
                      <div className="works2-card-imgwrap">
                        {img && isVideo(img) && (
                          <video
                            src={img}
                            className="works2-card-img"
                            muted
                            playsInline
                            loop
                            autoPlay
                          />
                        )}
                        {img && !isVideo(img) && (
                          <img src={img} alt={label} className="works2-card-img" />
                        )}
                        {!img && <span className="works2-card-imgplaceholder">[ img ]</span>}
                      </div>
                      <p className="works2-card-label">{label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom cutout — full width, zero gap with contacts */}
      <img src={A.ws2Cutout} alt="" aria-hidden
        className="works2-cutout"
        style={{
          transition: "opacity 0.7s 0.6s",
          opacity: vis ? 1 : 0,
        }} />
    </section>
  );
}

// ─── CONTACTS ─────────────────────────────────────────────────────────────────
// Same WORKS-Bg. Content perfectly centered horizontally AND vertically.
function ContactsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const links = [
    { icon: "✉",  label: "lexusnama@gmail.com",         href: "mailto:lexusnama@gmail.com" },
    { icon: "🔗", label: "www.linkedin.com/in/lexus-nama",   href: "https://www.linkedin.com/in/lexus-nama-a23b54269/" },
    { icon: "⬛", label: "github.com/ZiraLena",        href: "https://github.com/ZiraLena" },
    { icon: "📷", label: "@lexusnama",                href: "https://www.instagram.com/lexusnama/" },
  ];

  const resumeHref = "/assets/NAMA CV Resume.pdf";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    window.location.href = mailto;
  };

  return (
    <section id="contacts" ref={ref}
      className="contacts-section"
      style={{
        overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>

      <img src={A.worksBg} alt="" aria-hidden
        className="contacts-bg" />
      <div className="dot-pattern contacts-dots" />

      {/* Centered content wrapper */}
      <div className="contacts-inner"
        style={{
        transition: "opacity 0.7s, transform 0.7s",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(32px)",
      }}>
        <h2 className="works-title text-white contacts-heading">CONTACTS</h2>

        <div className="contacts-panel">
          <div className="contacts-sidebar">
            <p className="contacts-copy">
              Send a message through the form or download my resume below.
            </p>

            <a href={resumeHref} download className="resume-btn">
              Download Resume
            </a>

            <div className="contacts-links">
              {links.map(({ icon, label, href }, i) => (
                <a key={label} href={href}
                  style={{
                    transition: `opacity 0.5s ${0.2 + i * 0.1}s, transform 0.5s ${0.2 + i * 0.1}s`,
                    opacity: vis ? 1 : 0,
                    transform: vis ? "translateX(0)" : "translateX(-24px)",
                  }}
                  className="contact-row group">
                  <div className="contact-icon-box">
                    <span style={{ fontSize: 16 }}>{icon}</span>
                  </div>
                  <span className="contact-label">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-field">
              <span>Name</span>
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label className="contact-field">
              <span>Email</span>
              <input name="email" type="email" placeholder="you@example.com" required />
            </label>
            <label className="contact-field">
              <span>Subject</span>
              <input name="subject" type="text" placeholder="Project inquiry" required />
            </label>
            <label className="contact-field contact-field--message">
              <span>Message</span>
              <textarea name="message" placeholder="Write your message here" rows={6} required />
            </label>

            <button type="submit" className="contact-submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [activeNav, setActiveNav] = useState("home");
  useEffect(() => {
    const sections = ["home", "works", "contacts"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveNav(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Nav active={activeNav} />
      <HomeSection />
      <AboutSection />
      <WorksTitleSection />
      <WorksFolderSection />
      <ContactsSection />
    </div>
  );
}
