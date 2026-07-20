import type { Metadata } from "next";
import { api } from "@/lib/api";
import NewsCard from "@/components/news/NewsCard";
import type { NewsPost } from "@/lib/types";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Latest news and updates from the DSSC 2005 OBA.",
};

export default async function NewsPage() {
  let posts: NewsPost[] = [];
  try { posts = await api.getNews(); } catch { /* empty */ }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>Stay Informed</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
            News &amp; <span className="gradient-text">Updates</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "550px", lineHeight: 1.7 }}>
            The latest announcements, news, and updates from our OBA.
          </p>
        </div>
      </div>
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          {posts.length === 0 ? (
            <div className="cyber-card" style={{ textAlign: "center", padding: "5rem 2rem" }}>
              <div style={{ marginBottom: "1.25rem", display: "flex", justifyContent: "center" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }}>
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8M15 18h-5M10 6h8v4h-8Z" />
                </svg>
              </div>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>No news posts yet. Check back soon!</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {posts.map((p) => <NewsCard key={p.id} post={p} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
