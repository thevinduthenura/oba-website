import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Committee & Members",
  description: "Meet the committee and members of the DSSC 2005 Old Boys' Association.",
};

export default function CommitteePage() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
            Our Team
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
            Committee &amp; <span className="gradient-text">Members</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "600px", lineHeight: 1.7 }}>
            Meet the dedicated individuals who lead the DSSC 2005 Old Boys&apos; Association.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }} className="committee-nav-grid">
            {[
              {
                href: "/committee/office-bearers",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold-dark)", margin: "0 auto" }}>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "Office Bearers",
                desc: "Meet our elected office bearers - President, Vice President, Secretary and more."
              },
              {
                href: "/committee/members",
                icon: (
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold-dark)", margin: "0 auto" }}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M9 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                title: "Member Directory",
                desc: "Browse our full member directory of DSSC 2005 alumni."
              },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="nav-card" style={{ textDecoration: "none" }}>
                <div className="cyber-card" style={{ padding: "2.5rem", textAlign: "center" }}>
                  <div style={{ marginBottom: "1rem" }}>{item.icon}</div>
                  <h2 style={{ fontSize: "1.5rem", color: "var(--gold-dark)", marginBottom: "0.75rem", fontWeight: 700 }}>{item.title}</h2>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        @media(max-width:768px){.committee-nav-grid{grid-template-columns:1fr !important;}}
      `}</style>
    </>
  );
}
