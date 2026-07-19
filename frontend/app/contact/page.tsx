"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8085"}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "0.875rem 1.25rem",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius)",
    color: "var(--text-primary)",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
  };

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
            Reach Out
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
            Contact <span className="gradient-text">Our Batch</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "550px", lineHeight: 1.7 }}>
            Have a question or want to reconnect? We&apos;d love to hear from you.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "3rem", alignItems: "start" }} className="contact-grid">
            {/* Left: Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="cyber-card" style={{ padding: "2rem" }}>
                <h2 style={{ fontSize: "1.3rem", color: "var(--gold)", marginBottom: "1.25rem", fontWeight: 800 }}>Get in Touch</h2>
                {[
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }}>
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    ),
                    label: "Email",
                    value: SITE.email,
                    href: `mailto:${SITE.email}`
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }}>
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    ),
                    label: "Website",
                    value: "ds2005.com",
                    href: SITE.domain
                  },
                  {
                    icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }}>
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    ),
                    label: "Facebook",
                    value: "DSSC2005BATCH",
                    href: SITE.facebook
                  },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 0", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ marginTop: "4px", display: "inline-flex" }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginBottom: "0.2rem" }}>{item.label}</div>
                      <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500 }}>{item.value}</a>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02))", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "var(--radius-xl)", padding: "2rem", textAlign: "center" }}>
                <div style={{ marginBottom: "0.75rem", display: "flex", justifyContent: "center" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }}>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 style={{ color: "var(--gold)", marginBottom: "0.5rem", fontWeight: 700 }}>Are you a DSSC 2005 Alum?</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>Reach out to us and join the official OBA member registry.</p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="cyber-card" style={{ padding: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "2rem", fontWeight: 800 }}>Send a Message</h2>

              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "3rem 2rem" }}>
                  <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "center" }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--gold)" }}>
                      <circle cx="12" cy="12" r="10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 style={{ color: "var(--gold)", marginBottom: "0.75rem", fontWeight: 700 }}>Message Sent!</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Thank you for reaching out. We&apos;ll get back to you soon.</p>
                  <button onClick={() => setStatus("idle")} style={{ marginTop: "1.5rem", padding: "0.75rem 2rem", background: "var(--gold)", color: "var(--black)", border: "none", borderRadius: "0.5rem", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem" }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>Full Name *</label>
                      <input id="contact-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>Email *</label>
                      <input id="contact-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>Subject *</label>
                    <input id="contact-subject" name="subject" type="text" required value={form.subject} onChange={handleChange} placeholder="What is this about?" style={inputStyle}
                       onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                       onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "0.4rem" }}>Message *</label>
                    <textarea id="contact-message" name="message" required rows={6} value={form.message} onChange={handleChange} placeholder="Write your message here..." style={{ ...inputStyle, resize: "vertical" as const, minHeight: "140px" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")} />
                  </div>

                  {status === "error" && (
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1rem", background: "rgba(255,80,80,0.06)", border: "1px solid rgba(255,80,80,0.2)", borderRadius: "var(--radius)", fontSize: "0.875rem", color: "#ff8080" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      {errorMsg}
                    </div>
                  )}

                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={status === "loading"}
                    style={{
                      padding: "0.95rem 2rem",
                      background: status === "loading" ? "var(--surface-3)" : "linear-gradient(135deg, var(--gold-dark), var(--gold))",
                      color: status === "loading" ? "var(--text-muted)" : "var(--black)",
                      border: "none",
                      borderRadius: "var(--radius)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                      transition: "opacity 0.2s, transform 0.2s",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @media(max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
          #contact-submit { width: 100% !important; }
          .contact-grid .cyber-card { padding: 1.5rem !important; }
        }
        @media(max-width: 480px) {
          .contact-grid .cyber-card { padding: 1.25rem !important; }
        }
      `}</style>
    </>
  );
}
