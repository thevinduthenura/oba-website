"use client";

import type { Member } from "@/lib/types";

interface MemberTableProps {
  members: Member[];
}

export default function MemberTable({ members }: MemberTableProps) {
  if (members.length === 0) {
    return (
      <div
        className="cyber-card"
        style={{
          textAlign: "center",
          padding: "4rem 2rem",
        }}
      >
        <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "center" }}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <p style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>No members found.</p>
      </div>
    );
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "0.9rem",
        }}
      >
        <thead>
          <tr
            style={{
              background: "rgba(201,168,76,0.1)",
              borderBottom: "2px solid rgba(201,168,76,0.3)",
            }}
          >
            {["Name", "Position", "Email"].map((h) => (
              <th
                key={h}
                style={{
                  padding: "1rem 1.25rem",
                  textAlign: "left",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {members.map((member, i) => (
            <tr
              key={member.id}
              style={{
                background:
                  i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                borderBottom: "1px solid var(--border)",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(201,168,76,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)";
              }}
            >
              <td style={{ padding: "1rem 1.25rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, var(--gold-dark), var(--gold))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: "var(--black)",
                      flexShrink: 0,
                    }}
                  >
                    {member.name.charAt(0)}
                  </div>
                  <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
                    {member.name}
                  </span>
                </div>
              </td>
              <td style={{ padding: "1rem 1.25rem", color: "var(--text-secondary)" }}>
                {member.position || "-"}
              </td>
              <td style={{ padding: "1rem 1.25rem" }}>
                {member.email ? (
                  <a
                    href={`mailto:${member.email}`}
                    style={{
                      color: "var(--gold)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--gold-light)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.color =
                        "var(--gold)")
                    }
                  >
                    {member.email}
                  </a>
                ) : (
                  <span style={{ color: "var(--text-muted)" }}>-</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
