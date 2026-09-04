"use client";

import { useEffect, useState } from "react";

const TABS = [
  { href: "#hero", label: "Cover" },
  { href: "#apropos", label: "À propos" },
  { href: "#competences", label: "Compétences" },
  { href: "#experience", label: "experience.log" },
  { href: "#projets", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Toolbar() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = TABS.map((t) => document.querySelector(t.href));
    function onScroll() {
      const pos = window.scrollY + 130;
      let idx = 0;
      sections.forEach((s, i) => {
        if (s && (s as HTMLElement).offsetTop <= pos) idx = i;
      });
      setActive(idx);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="toolbar">
      <div className="toolbar-top">
        <div className="tb-left">
          <div className="tb-icons" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4l7 16 2-7 7-2z" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h18M3 16h18M8 3v18M16 3v18" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 3l4 4L7 21H3v-4z" />
            </svg>
          </div>
          <div className="tb-file">
            Tsima.fig <span>Fichier</span>
          </div>
        </div>
        <a className="tb-cta" href="#contact">
          Me contacter
        </a>
      </div>
      <nav className="tabbar-inner" aria-label="Navigation principale">
        {TABS.map((t, i) => (
          <a key={t.href} className={`tab${i === active ? " active" : ""}`} href={t.href}>
            <span className="sq" />
            {t.label}
          </a>
        ))}
      </nav>
    </div>
  );
}