import type { Metadata } from "next";
import { api } from "@/lib/api";
import ProjectCard from "@/components/projects/ProjectCard";
import type { Project } from "@/lib/types";

export const metadata: Metadata = { title: "Current Projects" };

export default async function CurrentProjectsPage() {
  let projects: Project[] = [];
  try { projects = await api.getProjects("CURRENT"); } catch { /* empty */ }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>Projects</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
            <span className="gradient-text">Current</span> Projects
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "550px", lineHeight: 1.7 }}>Active initiatives in progress right now.</p>
        </div>
      </div>
      <section className="section" style={{ background: "var(--black)" }}>
        <div className="container">
          {projects.length === 0 ? (
            <div className="cyber-card" style={{ textAlign: "center", padding: "5rem 2rem" }}>
              <div style={{ marginBottom: "1.25rem", display: "flex", justifyContent: "center" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }}>
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
                  <path d="m5 3 3 2.5L5 8" />
                  <path d="m19 3-3 2.5 3 2.5" />
                </svg>
              </div>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>Current project details coming soon.</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
              {projects.map((p) => <ProjectCard key={p.id} project={p} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
