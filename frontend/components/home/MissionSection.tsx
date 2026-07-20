"use client";

import { useEffect, useRef, useState } from "react";

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const cards = [
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      title: "Our Mission",
      body: "To foster lifelong bonds among the 2005 batch, support our alma mater through active contributions, and empower members through networking, mentorship, and community initiatives that reflect the values of D.S. Senanayake College.",
      delay: 0,
    },
    {
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      title: "Our Vision",
      body: "To be a vibrant, globally connected alumni family that proudly carries the legacy of D.S. Senanayake College — inspiring the next generation, serving the community, and staying united as Senanayakeans forever.",
      delay: 120,
    },
  ];

  const values = [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      label: "Brotherhood",
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
      label: "Education",
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
      label: "Community",
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z"/></svg>,
      label: "Excellence",
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
      label: "Global Unity",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="mission"
      className="section"
      style={{
        background: "var(--black)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div className="glow-spot-gold" style={{ top: "-10%", left: "15%", opacity: 0.4 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <span className="section-badge" style={{ marginBottom: "1rem" }}>
            Our Purpose
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.75rem)",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.035em",
              marginTop: "0.85rem",
            }}
          >
            Mission &amp; Vision
          </h2>
          {/* Animated divider */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "1.25rem" }}>
            <div
              style={{
                height: "2px",
                width: visible ? "80px" : "0px",
                background: "linear-gradient(90deg, transparent, var(--gold-vivid), var(--gold), transparent)",
                borderRadius: "2px",
                transition: "width 1s cubic-bezier(0.16,1,0.3,1) 300ms",
              }}
            />
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "1.25rem",
              padding: "0.45rem 1.1rem",
              background: "rgba(197, 155, 39, 0.12)",
              border: "1px solid rgba(197, 155, 39, 0.3)",
              borderRadius: "2rem",
              fontSize: "0.82rem",
              fontWeight: 600,
              color: "var(--gold-light)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Motto: Country Before Self (තමනට පෙර රට)
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.75rem", marginBottom: "2.5rem" }}
          className="mission-grid"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="dark-card"
              style={{
                padding: "2.5rem",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${card.delay + 200}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${card.delay + 200}ms`,
              }}
            >
              {/* Icon with glow ring */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "0.9rem",
                  background: "rgba(197,155,39,0.12)",
                  border: "1px solid rgba(197,155,39,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  color: "var(--gold-vivid)",
                  boxShadow: "0 0 20px rgba(197,155,39,0.15)",
                  transition: "box-shadow 0.3s, border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(197,155,39,0.35)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(197,155,39,0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(197,155,39,0.15)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(197,155,39,0.3)";
                }}
              >
                {card.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {card.title}
              </h3>
              <p style={{ color: "#a1a1a6", lineHeight: 1.8, fontSize: "0.95rem" }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1rem",
          }}
        >
          {values.map((v, i) => (
            <div
              key={v.label}
              className="glow-card"
              style={{
                padding: "1.6rem 1rem",
                textAlign: "center",
                cursor: "default",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${400 + i * 80}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${400 + i * 80}ms`,
              }}
            >
              <div
                style={{
                  color: "var(--gold)",
                  marginBottom: "0.75rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {v.icon}
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>
                {v.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mission-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .mission-grid .glass-card { padding: 1.75rem !important; }
        }
        @media (max-width: 480px) {
          .mission-grid .glass-card { padding: 1.5rem 1.1rem !important; }
        }
      `}</style>
    </section>
  );
}
