import type { NewsPost } from "@/lib/types";

interface NewsCardProps {
  post: NewsPost;
}

export default function NewsCard({ post }: NewsCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-LK", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="cyber-card" style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}>
      {post.imageUrl && (
        <div style={{ height: "200px", background: `url(${post.imageUrl}) center/cover`, flexShrink: 0 }} />
      )}
      <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 500, marginBottom: "0.6rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "middle" }}>
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          {formattedDate}
          {post.author && <span style={{ color: "var(--text-muted)", marginLeft: "0.75rem" }}>by {post.author}</span>}
        </div>
        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem", lineHeight: 1.3 }}>
          {post.title}
        </h3>
        <p style={{
          fontSize: "0.875rem",
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          flex: 1,
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 4,
          WebkitBoxOrient: "vertical" as const,
        }}>
          {post.content}
        </p>
      </div>
    </div>
  );
}
