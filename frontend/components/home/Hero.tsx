"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { SITE } from "@/lib/constants";

/* Floating ambient dot */
function AmbientDot({ x, y, size, delay, duration }: { x: string; y: string; size: number; delay: number; duration: number }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,175,55,0.6) 0%, transparent 70%)",
        animation: `dotFloat ${duration}s ease-in-out ${delay}s infinite`,
        pointerEvents: "none",
        filter: "blur(1px)",
      }}
    />
  );
}

const DOTS = [
  { x: "8%",  y: "20%", size: 4, delay: 0,   duration: 5 },
  { x: "15%", y: "65%", size: 3, delay: 1.2, duration: 6.5 },
  { x: "75%", y: "15%", size: 5, delay: 0.5, duration: 7 },
  { x: "85%", y: "70%", size: 3, delay: 2,   duration: 5.5 },
  { x: "50%", y: "85%", size: 4, delay: 1,   duration: 6 },
  { x: "90%", y: "40%", size: 3, delay: 2.5, duration: 5 },
];

export default function Hero() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  // Use IntersectionObserver-style entrance — just mount timing
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/committee/members?q=${encodeURIComponent(search)}`);
    }
  };

  const delay = (ms: number) => ({ transitionDelay: mounted ? `${ms}ms` : "0ms" });

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "var(--black)",
        padding: "8rem 0 5rem",
      }}
      className="tech-grid hero-section"
    >
      {/* Ambient dots */}
      {DOTS.map((d, i) => <AmbientDot key={i} {...d} />)}

      {/* Glow spots */}
      <div className="glow-spot-gold" style={{ top: "-15%", right: "-8%", opacity: 0.8 }} />
      <div className="glow-spot-gold" style={{ bottom: "-20%", left: "-10%", opacity: 0.5 }} />
      <div className="glow-spot-white" style={{ top: "30%", left: "40%", opacity: 0.6 }} />

      {/* Huge background text */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "clamp(8rem, 20vw, 24rem)",
          fontWeight: 900,
          color: "rgba(255, 255, 255, 0.012)",
          letterSpacing: "-0.04em",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 0,
        }}
      >
        DSSC
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* ── Left Content ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>

            {/* Pill Badge */}
            <div
              className="section-badge"
              style={{
                alignSelf: "flex-start",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                ...delay(0),
              }}
            >
              Old Boys&apos; Association 2005 Batch
            </div>

            {/* Heading */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(28px)",
                transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                ...delay(120),
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(2.6rem, 5.5vw, 4.75rem)",
                  fontWeight: 800,
                  lineHeight: 1.04,
                  color: "#ffffff",
                  letterSpacing: "-0.035em",
                }}
              >
                United In{" "}
                <span className="shimmer-text">Brotherhood</span>
                <br />
                Leading With Excellence
              </h1>
              {/* Animated gold accent line */}
              <div
                style={{
                  marginTop: "1rem",
                  height: "2px",
                  width: mounted ? "80px" : "0px",
                  background: "linear-gradient(90deg, var(--gold-vivid), var(--gold), transparent)",
                  borderRadius: "2px",
                  transition: "width 1s cubic-bezier(0.16,1,0.3,1)",
                  transitionDelay: "400ms",
                }}
              />
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
                lineHeight: 1.75,
                maxWidth: "520px",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                ...delay(220),
              }}
            >
              Connecting former Senanayakeans across the globe. Together we uphold
              our school legacy, support our community, and build a stronger future
              for the batch of 2005.
            </p>

            {/* Search Input */}
            <form
              onSubmit={handleSearch}
              style={{
                display: "flex",
                alignItems: "center",
                maxWidth: "460px",
                marginTop: "0.5rem",
                borderRadius: "0.85rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "0.35rem 0.35rem 0.35rem 1.1rem",
                boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                transition: "border-color 0.3s, box-shadow 0.3s",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transitionProperty: "opacity, transform, border-color, box-shadow",
                transitionDuration: "0.7s, 0.7s, 0.3s, 0.3s",
                transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                transitionDelay: "320ms, 320ms, 0ms, 0ms",
              }}
              onFocus={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.4)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.4), 0 0 0 3px rgba(212,175,55,0.1)";
              }}
              onBlur={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.4)";
              }}
            >
              <input
                suppressHydrationWarning
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search members, events…"
                style={{
                  background: "none",
                  border: "none",
                  outline: "none",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  flex: 1,
                  fontFamily: "inherit",
                }}
              />
              <button
                type="submit"
                className="btn-gold"
                style={{ padding: "0.55rem 1.2rem", borderRadius: "0.6rem", fontSize: "0.82rem" }}
              >
                Search
              </button>
            </form>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                flexWrap: "wrap",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
                ...delay(420),
              }}
              className="hero-ctas"
            >
              <Link href="/committee/office-bearers" className="btn-gold" style={{ padding: "0.65rem 1.6rem" }}>
                Meet Committee →
              </Link>
              <Link href="/events/upcoming" className="btn-outline" style={{ padding: "0.65rem 1.6rem" }}>
                View Events
              </Link>
            </div>
          </div>

          {/* ── Right Content: School image ── */}
          <div
            className="hero-logo-col"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "scale(1)" : "scale(0.93)",
              transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: "200ms",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "460px",
                height: "330px",
                borderRadius: "1.25rem",
                overflow: "hidden",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                boxShadow:
                  "0 30px 60px rgba(0,0,0,0.7), inset 0 0 30px rgba(212, 175, 55, 0.04), 0 0 0 1px rgba(255,255,255,0.03)",
                background: "var(--surface)",
                animation: "floatY 8s ease-in-out 0.5s infinite",
              }}
            >
              {/* Golden corner accents */}
              {[
                { top: 0, left: 0, borderTop: "2px solid var(--gold)", borderLeft: "2px solid var(--gold)" },
                { top: 0, right: 0, borderTop: "2px solid var(--gold)", borderRight: "2px solid var(--gold)" },
                { bottom: 0, left: 0, borderBottom: "2px solid var(--gold)", borderLeft: "2px solid var(--gold)" },
                { bottom: 0, right: 0, borderBottom: "2px solid var(--gold)", borderRight: "2px solid var(--gold)" },
              ].map((s, i) => (
                <div key={i} style={{ position: "absolute", width: "18px", height: "18px", ...s }} />
              ))}

              <Image
                src="/dssc-main.png"
                alt="D.S. Senanayake College"
                fill
                priority
                style={{ objectFit: "cover", opacity: 0.88, transition: "opacity 0.3s", transform: "scale(1.02)" }}
              />

              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.05) 55%)",
                }}
              />

              {/* Glow shimmer overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(120deg, transparent 30%, rgba(212,175,55,0.04) 50%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* School badge overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.25rem",
                  left: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{
                    background: "rgba(0,0,0,0.85)",
                    border: "1px solid var(--gold)",
                    borderRadius: "50%",
                    padding: "0.3rem",
                    width: "52px",
                    height: "52px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 15px rgba(212,175,55,0.25)",
                  }}
                >
                  <Image
                    src="/dssc-2005.png"
                    alt="DSSC Logo"
                    width={34}
                    height={34}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#ffffff", textShadow: "0 2px 8px rgba(0,0,0,0.9)" }}>
                    D.S. Senanayake College
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.02em" }}>
                    Established 1967 • Country Before Self
                  </div>
                </div>
              </div>

              {/* Live tag */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  background: "rgba(0,0,0,0.75)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  borderRadius: "2rem",
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  color: "var(--gold-light)",
                  letterSpacing: "0.08em",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", animation: "orbPulse 2s ease-in-out infinite", display: "inline-block" }} />
                DSSC 2005
              </div>
            </div>
          </div>
        </div>

        {/* Partners strip */}
        <div
          style={{
            marginTop: "5rem",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            paddingTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            opacity: mounted ? 1 : 0,
            transition: "opacity 1s",
            transitionDelay: "600ms",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              color: "var(--text-muted)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Our Partners &amp; Affiliates
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "3.5rem",
              flexWrap: "wrap",
              opacity: 0.45,
            }}
          >
            {["OBA Connect", "DSSC OBA", "Batch of 2005", "Senate Council", "DSSC Media"].map((p) => (
              <span
                key={p}
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.01em",
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section { padding: 5.5rem 0 3.5rem !important; min-height: auto !important; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .hero-logo-col { display: flex !important; height: 240px !important; }
          .hero-logo-col > div { height: 240px !important; }
          .hero-ctas { flex-direction: column !important; align-items: stretch !important; }
          .hero-ctas a { text-align: center !important; justify-content: center !important; }
        }
        @media (max-width: 480px) {
          .hero-section { padding: 5rem 0 3rem !important; }
          .hero-logo-col { height: 200px !important; }
          .hero-logo-col > div { height: 200px !important; }
        }
      `}</style>
    </section>
  );
}
