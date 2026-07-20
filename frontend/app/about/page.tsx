import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the D.S. Senanayake College Old Boys' Association 2005 Batch - our history, leadership, and goals.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
            Our Story
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
            About <span className="gradient-text">DSSC 2005 OBA</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "600px", lineHeight: 1.7 }}>
            The official alumni association of the D.S. Senanayake College 2005 batch - proudly connecting Senanayakeans across the globe.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "3rem" }} className="about-detail-grid">
            <div>
              <h2 style={{ fontSize: "1.75rem", color: "var(--gold-dark)", marginBottom: "1.25rem", fontWeight: 800, letterSpacing: "-0.02em" }}>Our History</h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1.25rem", fontSize: "1rem" }}>
                D.S. Senanayake College was established on 10 February 1967 in Cinnamon Gardens, Colombo (adjoining Kinsey Road on what was then Gregory Road, renamed to R. G. Senanayake Mawatha in 2013). Named after the first Prime Minister of independent Sri Lanka, D.S. Senanayake, the school was founded under the leadership of visionary educationist Mr. R. I. T. Alles as its founding principal.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1.25rem", fontSize: "1rem" }}>
                The D.S. Senanayake College Old Boys&apos; Association - 2005 Batch was established to unite the alumni who entered and graduated through the halls of this prestigious national school. What began as small reunions of batch mates has grown into a structured, globally connected alumni network.
              </p>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.9, fontSize: "1rem" }}>
                Today, our batch continues to carry forward the proud legacy of Mr. R. I. T. Alles, championing the school motto &quot;Country Before Self&quot; (&apos;තමනට පෙර රට&apos;). We actively coordinate educational projects, charity drives, sports support, and professional networking sessions to keep the Senanayakian spirit alive.
              </p>

              <div style={{ marginTop: "2.5rem" }}>
                <h2 style={{ fontSize: "1.75rem", color: "var(--gold-dark)", marginBottom: "1.25rem", fontWeight: 800, letterSpacing: "-0.02em" }}>Our Values</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="stats-cards-grid">
                  {[
                    { title: "Brotherhood", desc: "Lifelong bonds forged through shared school experiences" },
                    { title: "Service", desc: "Giving back to school, batch mates, and the wider community" },
                    { title: "Excellence", desc: "Upholding the high standards of DSSC in everything we do" },
                    { title: "Unity", desc: "Staying connected regardless of distance or profession" },
                  ].map((v) => (
                    <div key={v.title} className="cyber-card" style={{ padding: "1.5rem" }}>
                      <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--gold-dark)", marginBottom: "0.4rem" }}>{v.title}</div>
                      <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>{v.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="cyber-card" style={{ padding: "1.75rem" }}>
                <h3 style={{ fontSize: "1.2rem", color: "var(--gold)", marginBottom: "1.25rem", fontWeight: 800, letterSpacing: "-0.02em" }}>Quick Facts</h3>
                {[
                  { label: "School Founded", value: "10 Feb 1967" },
                  { label: "Founder", value: "Mr. R. I. T. Alles" },
                  { label: "School Motto", value: "Country Before Self" },
                  { label: "Batch Founded", value: "2005" },
                  { label: "Location", value: "Colombo, Sri Lanka" },
                  { label: "Website", value: "ds2005.com" },
                  { label: "Facebook", value: "DSSC2005BATCH" },
                ].map((fact) => (
                  <div key={fact.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.8rem 0", borderBottom: "1px solid rgba(255, 255, 255, 0.04)", fontSize: "0.875rem" }}>
                    <span style={{ color: "var(--text-muted)" }}>{fact.label}</span>
                    <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media (max-width: 768px) {
          .about-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
