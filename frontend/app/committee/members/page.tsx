import type { Metadata } from "next";
import { api } from "@/lib/api";
import MemberTable from "@/components/committee/MemberTable";

export const metadata: Metadata = {
  title: "Member Directory",
  description: "Browse the full member directory of the DSSC 2005 OBA.",
};

export default async function MembersPage() {
  let members = [];
  try {
    members = await api.getMembers("MEMBER");
  } catch {
    // Backend not running - show empty state
  }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>Committee</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
            Member <span className="gradient-text">Directory</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "550px", lineHeight: 1.7 }}>
            A complete listing of our registered DSSC 2005 OBA members.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--black)" }}>
        <div className="container">
          <div className="cyber-card" style={{ overflow: "hidden" }}>
            <MemberTable members={members} />
          </div>
        </div>
      </section>
    </>
  );
}
