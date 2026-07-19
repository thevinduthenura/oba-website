import type { Metadata } from "next";
import { api } from "@/lib/api";
import OfficeBearerCard from "@/components/committee/OfficeBearerCard";
import type { Member } from "@/lib/types";

export const metadata: Metadata = {
  title: "Office Bearers",
  description: "Meet the elected office bearers of the DSSC 2005 OBA.",
};

export default async function OfficeBearersPage() {
  let members: Member[] = [];
  try {
    members = await api.getMembers("OFFICE_BEARER");
  } catch {
    // Backend not running - show empty state
  }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>Committee</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
            Office <span className="gradient-text">Bearers</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "550px", lineHeight: 1.7 }}>
            Our elected leaders who guide the DSSC 2005 OBA with passion and dedication.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--black)" }}>
        <div className="container">
          {members.length === 0 ? (
            <div className="cyber-card" style={{ textAlign: "center", padding: "5rem 2rem" }}>
              <div style={{ marginBottom: "1.25rem", display: "flex", justifyContent: "center" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }}>
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>Office bearer profiles coming soon.</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
              {members.map((m) => <OfficeBearerCard key={m.id} member={m} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
