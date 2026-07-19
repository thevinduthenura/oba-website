"use client";

import { useEffect, useRef, useState } from "react";

const MILESTONES = [
  {
    year: "1967",
    title: "School Founded",
    desc: "D.S. Senanayake College established by founding principal R. I. T. Alles on 10 February 1967.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    year: "2001",
    title: "We Joined",
    desc: "The 2005 batch entered the halls of DSSC — beginning six years of unforgettable memories.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/>
        <path d="M6 6h10M6 10h10"/>
      </svg>
    ),
  },
  {
    year: "2005",
    title: "We Graduated",
    desc: "A proud batch of Senanayakeans stepped into the world, carrying our motto with us.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
        <path d="M21.5 12v6"/>
      </svg>
    ),
  },
  {
    year: "Now",
    title: "We Serve",
    desc: "Our OBA gives back to school and community — funding projects, hosting events, and staying connected.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

export default function BatchIntroSection() {
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

  return (
    <section
      ref={sectionRef}
      id="batch"
      className="section"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Huge background number */}
      <div
        style={{
          position: "absolute",
          right: "-1rem",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "18rem",
          fontWeight: 900,
          color: "rgba(255, 255, 255, 0.006)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "-0.04em",
        }}
      >
        2005
      </div>

      {/* Background glow */}
      <div className="glow-spot-gold" style={{ bottom: "-20%", left: "-5%", opacity: 0.35 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
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
            Our School &amp; Batch
          </span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.75rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "1rem",
              letterSpacing: "-0.035em",
              marginTop: "0.85rem",
            }}
          >
            D.S. Senanayake College
          </h2>
          {/* Animated divider */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
            <div
              style={{
                height: "2px",
                width: visible ? "70px" : "0px",
                background: "linear-gradient(90deg, transparent, var(--gold-vivid), var(--gold), transparent)",
                borderRadius: "2px",
                transition: "width 1s cubic-bezier(0.16,1,0.3,1) 200ms",
              }}
            />
          </div>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            One of Sri Lanka&apos;s most prestigious national schools, D.S. Senanayake College
            has been a beacon of excellence in education, sports, and extracurricular achievement
            for nearly six decades.
          </p>
        </div>

        {/* Timeline cards */}
        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {/* Connector line (desktop) */}
          <div
            className="timeline-connector"
            style={{
              position: "absolute",
              top: "56px",
              left: "12.5%",
              right: "12.5%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, var(--gold-dark), var(--gold), var(--gold-vivid), var(--gold), var(--gold-dark), transparent)",
              opacity: visible ? 0.35 : 0,
              transition: "opacity 1s 400ms",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          {MILESTONES.map((item, i) => (
            <div
              key={item.year}
              className="glow-card"
              style={{
                padding: "2.5rem 1.5rem",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 100 + 200}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 100 + 200}ms`,
              }}
            >
              {/* Icon with glow */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(212,175,55,0.06)",
                  border: "1px solid rgba(212,175,55,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "var(--gold)",
                  boxShadow: "0 0 20px rgba(212,175,55,0.1)",
                }}
              >
                {item.icon}
              </div>

              <div
                className="gold-gradient-text"
                style={{
                  fontSize: "1.9rem",
                  fontWeight: 800,
                  marginBottom: "0.3rem",
                  letterSpacing: "-0.03em",
                }}
              >
                {item.year}
              </div>
              <div
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.6rem",
                }}
              >
                {item.title}
              </div>
              <div style={{ fontSize: "0.83rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-connector { display: none !important; }
        }
      `}</style>
    </section>
  );
}
