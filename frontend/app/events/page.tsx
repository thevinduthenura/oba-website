import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events & Gallery",
  description: "Explore upcoming and past events, and browse the DSSC 2005 OBA photo gallery.",
};

export default function EventsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
            Stay Updated
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
            Events &amp; <span className="gradient-text">Gallery</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "600px", lineHeight: 1.7 }}>
            From annual reunions to charity drives - stay connected with everything happening in the DSSC 2005 community.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                href: "/events/upcoming",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold-dark)", margin: "0 auto" }}>
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                ),
                title: "Upcoming Events",
                desc: "Register for our next events and reunions."
              },
              {
                href: "/events/past",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)", margin: "0 auto" }}>
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                    <path d="M6 6h10M6 10h10" />
                  </svg>
                ),
                title: "Past Events",
                desc: "A look back at our memorable gatherings and activities."
              },
              {
                href: "/events/gallery",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)", margin: "0 auto" }}>
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                ),
                title: "Photo Gallery",
                desc: "Relive the memories through our event photo gallery."
              },
            ].map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                <div className="cyber-card" style={{ padding: "2.5rem", textAlign: "center" }}>
                  <div style={{ marginBottom: "1rem" }}>{item.icon}</div>
                  <h2 style={{ fontSize: "1.3rem", color: "var(--gold)", marginBottom: "0.75rem", fontWeight: 700 }}>{item.title}</h2>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
