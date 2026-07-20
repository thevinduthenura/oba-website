import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore current and completed projects by the DSSC 2005 OBA.",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>Giving Back</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
            Our <span className="gradient-text">Projects</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "600px", lineHeight: 1.7 }}>
            From school development initiatives to community outreach - we&apos;re committed to making a difference.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="projects-nav-grid">
            {[
              {
                href: "/projects/current",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold-dark)", margin: "0 auto" }}>
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
                    <path d="m5 3 3 2.5L5 8" />
                    <path d="m19 3-3 2.5 3 2.5" />
                  </svg>
                ),
                title: "Current Projects",
                desc: "Active initiatives and ongoing projects we are working on right now."
              },
              {
                href: "/projects/completed",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)", margin: "0 auto" }}>
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                ),
                title: "Completed Projects",
                desc: "A record of successful projects we have delivered for the school and community."
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
      <style>{`@media(max-width:768px){.projects-nav-grid{grid-template-columns:1fr !important;}}`}</style>
    </>
  );
}
