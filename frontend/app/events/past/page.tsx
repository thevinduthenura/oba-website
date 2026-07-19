import type { Metadata } from "next";
import { api } from "@/lib/api";
import EventCard from "@/components/events/EventCard";
import type { Event } from "@/lib/types";

export const metadata: Metadata = {
  title: "Past Events",
  description: "Browse past events organized by the DSSC 2005 OBA.",
};

export default async function PastEventsPage() {
  let events: Event[] = [];
  try {
    events = await api.getEvents("PAST");
  } catch { /* empty */ }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>Events</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
            <span className="gradient-text">Past</span> Events
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "550px", lineHeight: 1.7 }}>
            Relive the moments from our previous events and gatherings.
          </p>
        </div>
      </div>
      <section className="section" style={{ background: "var(--black)" }}>
        <div className="container">
          {events.length === 0 ? (
            <div className="cyber-card" style={{ textAlign: "center", padding: "5rem 2rem" }}>
              <div style={{ marginBottom: "1.25rem", display: "flex", justifyContent: "center" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }}>
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                  <path d="M6 6h10M6 10h10" />
                </svg>
              </div>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>Past events archive coming soon.</p>
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
