"use client";

import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isCurrent = project.status === "CURRENT";

  return (
    <div className="cyber-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3 }}>
          {project.title}
        </h3>
        <span
          style={{
            padding: "0.3rem 0.75rem",
            borderRadius: "2rem",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            background: isCurrent ? "rgba(201,168,76,0.15)" : "rgba(100,100,100,0.15)",
            color: isCurrent ? "var(--gold)" : "var(--text-muted)",
            border: `1px solid ${isCurrent ? "rgba(201,168,76,0.4)" : "var(--border)"}`,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {isCurrent ? "Current" : "Completed"}
        </span>
      </div>

      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7, flex: 1 }}>
        {project.description}
      </p>

      {project.impact && (
        <div style={{ background: "rgba(201,168,76,0.07)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "var(--radius)", padding: "0.75rem 1rem", fontSize: "0.85rem", color: "var(--gold-light)" }}>
          <strong style={{ color: "var(--gold)" }}>Impact: </strong>{project.impact}
        </div>
      )}

      <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.8rem", color: "var(--text-muted)", paddingTop: "1rem", borderTop: "1px solid var(--border)", alignItems: "center" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }}>
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          Started: {new Date(project.startDate).toLocaleDateString("en-LK", { year: "numeric", month: "short" })}
        </span>
        {project.endDate && (
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }}>
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            Completed: {new Date(project.endDate).toLocaleDateString("en-LK", { year: "numeric", month: "short" })}
          </span>
        )}
      </div>
    </div>
  );
}
