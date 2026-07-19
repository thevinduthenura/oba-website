import type { Metadata } from "next";
import { api } from "@/lib/api";
import ProjectCard from "@/components/projects/ProjectCard";
import type { Project } from "@/lib/types";

export const metadata: Metadata = { title: "Completed Projects" };

export default async function CompletedProjectsPage() {
  let projects: Project[] = [];
  try { projects = await api.getProjects("COMPLETED"); } catch { /* empty */ }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>Projects</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
            <span className="gradient-text">Completed</span> Projects
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "550px", lineHeight: 1.7 }}>Our delivered achievements and the impact we&apos;ve made.</p>
        </div>
      </div>
      <section className="section" style={{ background: "var(--black)" }}>
        <div className="container">
          {projects.length === 0 ? (
            <div className="cyber-card" style={{ textAlign: "center", padding: "5rem 2rem" }}>
              <div style={{ marginBottom: "1.25rem", display: "flex", justifyContent: "center" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>Completed projects archive coming soon.</p>
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
