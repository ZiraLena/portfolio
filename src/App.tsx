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
      <button onClick={() => scroll("home")} className="nav-btn">
        <img src={active === "home" ? A.homeActive : A.homeInactive}
          alt="HOME" style={{ height: 30, width: "auto", display: "block" }} />
      </button>
      <button onClick={() => scroll("contacts")} className="nav-btn" style={{ marginTop: -2 }}>
        <img src={active === "contacts" ? A.contactsActive : A.contactsInactive} alt="CONTACTS"
          style={{ height: 30, width: "auto", display: "block",
            filter: active === "contacts" ? "brightness(2)" : "none" }} />
      </button>
      <button onClick={() => scroll("works")} className="nav-btn" style={{ marginTop: -6 }}>
        <img src={active === "works" ? A.worksActive : A.worksInactive}
          alt="WORKS" style={{ height: 40, width: "auto", display: "block" }} />
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
      <div className="absolute z-20 flex gap-2"
        style={{
          right: "32%",
          bottom: "8%",
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
            className="social-pill group flex items-center justify-center"
            style={{ width: 42, height: 42 }}>
            <span className="text-white text-xs font-bold group-hover:text-[#d4b800] transition-colors">
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
      <div className="absolute z-20 flex items-center gap-3"
        style={{
          right: "45%",
          bottom: "0%",
          transition: "opacity 0.7s 0.62s",
          opacity: vis ? 1 : 0,
        }}>
        <img src={A.contactIcon} alt="Contact" style={{ width: 36, height: 36, objectFit: "contain" }} />
        <div>
          <p className="text-white font-bold leading-tight" style={{ fontSize: 13 }}>Contact</p>
          <p className="text-white font-bold leading-tight" style={{ fontSize: 13 }}>Let's Create</p>
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
      featDesc:  "layout, and print design. Tools: Photoshop, Canva, Illustrator.",
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
      featDesc:  "Character sprites, UI assets, and environment tiles. Tools: Aseprite, Photoshop.",
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
      featDesc:  "City Government of Valenzuela Automation of ARTA-Compliant Customer Satisfaction Survey with Data Gathering and Analysis." + " Responsive web apps and UI components. Tools: Next.js, React, Tailwind, Figma.",
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
      featDesc:  "3D models and renders. Tools: Blender, 3ds Max.",
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
      featDesc:  "Network setup, troubleshooting, and Security in Networking Academy Online Courses.",
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

  return (
    <section id="contacts" ref={ref}
      style={{
        position: "relative", width: "100%", height: "100vh",
        overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>

      <img src={A.worksBg} alt="" aria-hidden
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", pointerEvents: "none", userSelect: "none" }} />
      <div className="dot-pattern" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

      {/* Centered content wrapper */}
      <div style={{
        position: "relative", zIndex: 10,
        display: "flex", flexDirection: "column", alignItems: "center",
        transition: "opacity 0.7s, transform 0.7s",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(32px)",
      }}>
        <h2 className="works-title text-white" style={{ marginBottom: 32, textAlign: "center" }}>CONTACTS</h2>

        {/* Contact rows — left-aligned list, centered as a block */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {links.map(({ icon, label, href }, i) => (
            <a key={label} href={href}
              style={{
                display: "flex", alignItems: "center", gap: 14,
                textDecoration: "none",
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
      <WorksTitleSection />
      <WorksFolderSection />
      <ContactsSection />
    </div>
  );
}
