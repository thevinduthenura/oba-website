"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import type { NewsPost } from "@/lib/types";

const MOCK_NEWS: NewsPost[] = [
  {
    id: 1,
    title: "Annual General Meeting (AGM) 2026 Announced",
    content: "The annual general meeting for the DSSC 2005 Batch OBA will be held this October. All registered members are invited to join the discussion on next year's budget, upcoming community projects, and new committee leadership elections.",
    publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    author: "Secretary",
  },
  {
    id: 2,
    title: "School Library Renovation Project Completed",
    content: "We are thrilled to announce the successful completion of the main library renovation project at D.S. Senanayake College. Thanks to the generous contributions of our 2005 batch members, we successfully donated modern computers, reading tables, and over 500 new reference books.",
    publishedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    author: "Project Chair",
  },
  {
    id: 3,
    title: "Scholarship Fund for Underprivileged Students",
    content: "The DSSC 2005 OBA has officially launched a new scholarship program to support promising, underprivileged students currently studying at the college. The fund will cover tuition, uniforms, and study materials for 15 students starting next term.",
    publishedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    author: "Treasurer",
  }
];

export default function NewsSection() {
  const [news, setNews] = useState<NewsPost[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      try {
        const fetched = await api.getNews();
        if (fetched && fetched.length > 0) {
          setNews(fetched.slice(0, 3));
        } else {
          setNews(MOCK_NEWS);
        }
      } catch (err) {
        setNews(MOCK_NEWS);
      }
    }
    fetchNews();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="news-feed"
      className="section"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="glow-spot-gold" style={{ top: "20%", right: "10%", opacity: 0.15 }} />
      <div className="glow-spot-white" style={{ bottom: "10%", left: "5%", opacity: 0.2 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3.5rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
          className="news-header-flex"
        >
          <div>
            <span className="section-badge" style={{ marginBottom: "1rem" }}>
              Latest Updates
            </span>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.75rem)",
                fontWeight: 800,
                color: "var(--text-primary)",
                letterSpacing: "-0.035em",
                marginTop: "0.85rem",
              }}
            >
              News &amp; <span className="gold-gradient-text">Announcements</span>
            </h2>
            <div
              style={{
                marginTop: "1rem",
                height: "2px",
                width: visible ? "70px" : "0px",
                background: "linear-gradient(90deg, var(--gold-vivid), transparent)",
                borderRadius: "2px",
                transition: "width 1s cubic-bezier(0.16,1,0.3,1) 200ms",
              }}
            />
          </div>

          <Link
            href="/news"
            className="btn-outline"
            style={{
              padding: "0.55rem 1.4rem",
              fontSize: "0.82rem",
              borderRadius: "2rem",
            }}
          >
            View All News
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
          className="news-grid"
        >
          {news.map((item, index) => {
            const formattedDate = new Date(item.publishedAt).toLocaleDateString("en-LK", {
              year: "numeric",
              month: "short",
              day: "numeric",
            });

            return (
              <div
                key={item.id}
                className="cyber-card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1.75rem",
                  minHeight: "260px",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 100 + 200}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 100 + 200}ms`,
                }}
              >
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "var(--gold)",
                    fontWeight: 500,
                    marginBottom: "0.8rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  {formattedDate}
                  {item.author && (
                    <span style={{ color: "var(--text-muted)", marginLeft: "0.5rem" }}>
                      • {item.author}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    lineHeight: 1.35,
                    marginBottom: "0.85rem",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    flex: 1,
                    marginBottom: "1.25rem",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.content}
                </p>

                <Link
                  href="/news"
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "var(--gold)",
                    textDecoration: "none",
                    alignSelf: "flex-start",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold-light)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
                >
                  Read Full Post
                  <span style={{ fontSize: "0.9rem" }}>→</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .news-header-flex {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.25rem !important;
            margin-bottom: 2.5rem !important;
          }
          .news-header-flex a {
            width: 100% !important;
            text-align: center !important;
            justify-content: center !important;
          }
          .news-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
