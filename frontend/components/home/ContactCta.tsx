"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/constants";

export default function ContactCta() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact-cta"
      className="section"
      style={{
        background: "var(--black)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
        padding: "9rem 0",
      }}
    >
      {/* Large animated gold orb */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.09) 0%, rgba(212,175,55,0.03) 40%, transparent 70%)",
          filter: "blur(60px)",
          animation: "orbPulse 5s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />

      {/* Rotating ring accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1px solid rgba(212,175,55,0.06)",
          animation: "rotateSlow 30s linear infinite",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          border: "1px solid rgba(212,175,55,0.04)",
          animation: "rotateSlow 50s linear infinite reverse",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <span className="section-badge" style={{ marginBottom: "1.25rem" }}>
            Get in Touch
          </span>

          <h2
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              marginTop: "0.85rem",
            }}
          >
            Join the{" "}
            <span className="shimmer-text">DSSC 2005</span>
            <br />
            Brotherhood
          </h2>

          {/* Animated divider */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}>
            <div
              style={{
                height: "2px",
                width: visible ? "80px" : "0px",
                background: "linear-gradient(90deg, transparent, var(--gold-vivid), var(--gold), transparent)",
                borderRadius: "2px",
                transition: "width 1.2s cubic-bezier(0.16,1,0.3,1) 300ms",
              }}
            />
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              marginBottom: "3rem",
            }}
          >
            Are you a former student of D.S. Senanayake College from the 2005 batch?
            Connect with us — we&apos;d love to hear from you and welcome you back to the family.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "3rem",
            }}
          >
            <Link
              href="/contact"
              id="contact-cta-btn"
              className="btn-gold"
              style={{ padding: "1rem 2.5rem", fontSize: "0.95rem" }}
            >
              Contact Us
            </Link>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              id="facebook-cta-btn"
              className="btn-outline"
              style={{ padding: "1rem 2.25rem", fontSize: "0.95rem" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Visit Facebook
            </a>
          </div>

          {/* Contact details */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2.5rem",
              flexWrap: "wrap",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            <a
              href={`mailto:${SITE.email}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold-light)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              {SITE.email}
            </a>
            <a
              href={SITE.domain}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "0.9rem",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold-light)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-muted)")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              ds2005.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
