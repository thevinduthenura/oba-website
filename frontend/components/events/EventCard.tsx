"use client";

import type { Event } from "@/lib/types";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const isUpcoming = event.status === "UPCOMING";
  const formattedDate = new Date(event.date).toLocaleDateString("en-LK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="cyber-card"
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          height: "180px",
          background: event.imageUrl
            ? `url(${event.imageUrl}) center/cover`
            : "linear-gradient(135deg, var(--surface-2), var(--surface-3))",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!event.imageUrl && (
          <span style={{ opacity: 0.3 }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#ffffff" }}>
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
          </span>
        )}
        {/* Status badge */}
        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            padding: "0.3rem 0.75rem",
            borderRadius: "2rem",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            background: isUpcoming
              ? "rgba(201,168,76,0.9)"
              : "rgba(100,100,100,0.9)",
            color: isUpcoming ? "var(--black)" : "var(--text-primary)",
          }}
        >
          {isUpcoming ? "Upcoming" : "Past"}
        </div>
      </div>

      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.8rem",
            color: "var(--gold)",
            marginBottom: "0.5rem",
            fontWeight: 500,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          {formattedDate}
        </div>

        <h3
          style={{
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: "0.5rem",
            lineHeight: 1.3,
          }}
        >
          {event.title}
        </h3>

        <p
          style={{
            fontSize: "0.875rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            flex: 1,
            marginBottom: "1rem",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical" as const,
          }}
        >
          {event.description}
        </p>

        <div
          style={{
            fontSize: "0.8rem",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            marginBottom: "1rem",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }}>
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {event.location}
        </div>

        {event.registrationUrl && isUpcoming && (
          <a
            href={event.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="event-register-btn"
            style={{
              display: "inline-block",
              padding: "0.6rem 1.25rem",
              background: "linear-gradient(135deg, var(--gold-dark), var(--gold))",
              color: "var(--black)",
              borderRadius: "0.5rem",
              fontSize: "0.85rem",
              fontWeight: 700,
              textDecoration: "none",
              textAlign: "center",
              transition: "opacity 0.2s",
              minHeight: "44px",
              lineHeight: "24px",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.opacity = "1")
            }
          >
            Register Now
          </a>
        )}
      </div>
    </div>
  );
}
