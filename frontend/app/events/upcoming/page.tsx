import type { Metadata } from "next";
import { api } from "@/lib/api";
import EventCard from "@/components/events/EventCard";
import type { Event } from "@/lib/types";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description: "Browse and register for upcoming DSSC 2005 OBA events.",
};

export default async function UpcomingEventsPage() {
  let events: Event[] = [];
  try {
    events = await api.getEvents("UPCOMING");
  } catch { /* empty */ }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>Events</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
            <span className="gradient-text">Upcoming</span> Events
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "550px", lineHeight: 1.7 }}>
            Don&apos;t miss out - register now for our upcoming events and reunions.
          </p>
        </div>
      </div>
      <section className="section" style={{ background: "var(--black)" }}>
        <div className="container">
          {events.length === 0 ? (
            <div className="cyber-card" style={{ textAlign: "center", padding: "5rem 2rem" }}>
              <div style={{ marginBottom: "1.25rem", display: "flex", justifyContent: "center" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }}>
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                </svg>
              </div>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>No upcoming events at the moment. Check back soon!</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {events.map((e) => <EventCard key={e.id} event={e} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
