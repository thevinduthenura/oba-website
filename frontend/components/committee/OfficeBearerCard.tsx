"use client";

import type { Member } from "@/lib/types";

interface OfficeBearerCardProps {
  member: Member;
}

export default function OfficeBearerCard({ member }: OfficeBearerCardProps) {
  return (
    <div
      className="cyber-card"
      style={{
        padding: "1.75rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          background: member.imageUrl
            ? `url(${member.imageUrl}) center/cover`
            : "linear-gradient(135deg, var(--gold-dark), var(--gold))",
          border: "3px solid rgba(201,168,76,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          color: "var(--black)",
          fontWeight: 700,
          flexShrink: 0,
        }}
      >
        {!member.imageUrl && member.name.charAt(0)}
      </div>

      <div>
        <div
          style={{
            fontSize: "1.05rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "0.25rem",
          }}
        >
          {member.name}
        </div>
        {member.position && (
          <div
            style={{
              fontSize: "0.8rem",
              color: "var(--gold-dark)",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {member.position}
          </div>
        )}
      </div>

      {member.bio && (
        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            textAlign: "center",
          }}
        >
          {member.bio}
        </p>
      )}

      {(member.email || member.linkedinUrl) && (
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.25rem" }}>
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(201,168,76,0.1)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--gold)",
                textDecoration: "none",
                fontSize: "0.75rem",
                transition: "all 0.2s",
              }}
              title={member.email}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(201,168,76,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(201,168,76,0.1)";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle" }}>
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          )}
          {member.linkedinUrl && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "rgba(201,168,76,0.1)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--gold)",
                textDecoration: "none",
                fontSize: "0.75rem",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(201,168,76,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(201,168,76,0.1)";
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  );
}
