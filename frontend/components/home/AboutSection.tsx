"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / (duration * 1000), 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({
  num, suffix, label, desc, delay, visible,
}: { num: number; suffix: string; label: string; desc: string; delay: number; visible: boolean }) {
  const count = useCountUp(num, 1.6, visible);
  return (
    <div
      className="glow-card"
      style={{
        padding: "2.25rem 2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      <div
        style={{
          fontSize: "2.75rem",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          marginBottom: "0.2rem",
          background: "linear-gradient(135deg, #ffffff 0%, var(--gold-light) 70%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {count}{suffix}
      </div>
      <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--gold)", marginBottom: "0.45rem" }}>
        {label}
      </div>
      <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.55 }}>{desc}</p>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section"
      style={{
        background: "var(--black)",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle glow */}
      <div className="glow-spot-gold" style={{ top: "30%", right: "-15%", opacity: 0.5 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginBottom: "4rem",
            alignItems: "end",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
          className="about-header-grid"
        >
          <div>
            <span className="section-badge" style={{ marginBottom: "1rem", display: "inline-flex" }}>
              About DSSC 2005 OBA
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-0.035em",
                marginTop: "0.75rem",
              }}
            >
              Our Proven <br />
              <span className="gold-gradient-text">Track Record</span>
            </h2>
            {/* Animated gold line */}
            <div
              style={{
                marginTop: "1rem",
                height: "2px",
                width: visible ? "60px" : "0px",
                background: "linear-gradient(90deg, var(--gold-vivid), transparent)",
                borderRadius: "2px",
                transition: "width 1s cubic-bezier(0.16,1,0.3,1) 300ms",
              }}
            />
          </div>
          <div>
            <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.75 }}>
              Within years, our association has hosted major reunions, funded vital school
              developments, and connected hundreds of DSSC graduates across the globe with
              zero friction.
            </p>
          </div>
        </div>

        {/* Cards row */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "1.75rem" }}
          className="about-cards-grid"
        >
          {/* Left: stat cards 2×2 */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}
            className="stats-cards-grid"
          >
            <StatCard num={2005} suffix=""  label="Batch Year"      desc="Our proud graduation class year."               delay={0}   visible={visible} />
            <StatCard num={20}   suffix="+" label="Years of Legacy" desc="A two-decade history of school support."         delay={80}  visible={visible} />
            <StatCard num={500}  suffix="+" label="Members"         desc="An active registry spanning continents."         delay={160} visible={visible} />
            <StatCard num={100}  suffix="%" label="DSSC Pride"      desc="Committed to the values of our Alma Mater."     delay={240} visible={visible} />
          </div>

          {/* Right: Interested block */}
          <div
            className="glass-card"
            style={{
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "420px",
              opacity: visible ? 1 : 0,
              transform: visible ? "scale(1)" : "scale(0.96)",
              transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 200ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) 200ms",
            }}
          >
            {/* Top glow accent */}
            <div
              style={{
                position: "absolute",
                top: 0, left: "20%", right: "20%",
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 800,
                  color: "#ffffff",
                  letterSpacing: "-0.025em",
                }}
              >
                Interested in us?
              </h3>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
                Our team quickly sets up connections, coordinates meetings, and organises
                batches. Reach out now to start.
              </p>
            </div>

            {/* Reunion image */}
            <div
              style={{
                position: "relative",
                height: "170px",
                margin: "1.5rem 0",
                borderRadius: "0.85rem",
                overflow: "hidden",
                border: "1px solid rgba(212,175,55,0.12)",
              }}
            >
              <Image
                src="/dssc-reunion.png"
                alt="Reunion Event"
                fill
                style={{ objectFit: "cover", opacity: 0.75 }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0.75rem",
                  left: "0.85rem",
                  right: "0.85rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "0.72rem", color: "var(--gold)", fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase" }}>
                  Active Batch Community
                </span>
                <span style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>2005 Reunion</span>
              </div>
            </div>

            <Link href="/contact" className="btn-gold" style={{ justifyContent: "center" }}>
              Get Started →
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 991px) {
          .about-header-grid { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .about-cards-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 575px) {
          .stats-cards-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
