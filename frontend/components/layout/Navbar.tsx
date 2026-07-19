"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

type NavLink = (typeof NAV_LINKS)[number];
type ChildLink = { label: string; href: string };

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const hasChildren = (link: NavLink): link is NavLink & { children: readonly ChildLink[] } =>
    "children" in link && Array.isArray(link.children);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          background: scrolled
            ? "rgba(5, 5, 5, 0.82)"
            : "transparent",
          backdropFilter: scrolled ? "blur(28px) saturate(1.4)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(28px) saturate(1.4)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(212, 175, 55, 0.08)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
        }}
      >
        {/* Subtle gold shimmer line at top when scrolled */}
        {scrolled && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)",
              pointerEvents: "none",
            }}
          />
        )}

        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "72px",
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.65rem",
                textDecoration: "none",
              }}
            >
              <div style={{ position: "relative" }}>
                <Image
                  src="/dssc-2005.png"
                  alt="DSSC 2005 Batch"
                  width={38}
                  height={38}
                  style={{ objectFit: "contain", display: "block" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    fontWeight: 800,
                    fontSize: "0.95rem",
                    letterSpacing: "-0.025em",
                    background: "linear-gradient(135deg, #ffffff 0%, var(--gold-light) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1.15,
                  }}
                >
                  DSSC 2005
                </span>
                <span
                  style={{
                    fontSize: "0.58rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Old Boys&apos; Association
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div
              ref={dropdownRef}
              style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
              className="hidden-mobile"
            >
              {NAV_LINKS.map((link) => (
                <div key={link.href} style={{ position: "relative" }}>
                  {hasChildren(link) ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(openDropdown === link.label ? null : link.label)
                        }
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                          padding: "0.45rem 0.85rem",
                          borderRadius: "0.5rem",
                          fontSize: "0.845rem",
                          fontWeight: 500,
                          color: isActive(link.href) ? "#ffffff" : "var(--text-secondary)",
                          transition: "all 0.2s",
                          fontFamily: "inherit",
                          position: "relative",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#ffffff"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = isActive(link.href) ? "#ffffff" : "var(--text-secondary)"; (e.currentTarget as HTMLElement).style.background = "none"; }}
                      >
                        {link.label}
                        <svg
                          width="9" height="9"
                          viewBox="0 0 12 12"
                          fill="currentColor"
                          style={{
                            opacity: 0.55,
                            transform: openDropdown === link.label ? "rotate(180deg)" : "none",
                            transition: "transform 0.25s",
                          }}
                        >
                          <path d="M6 8L1 3h10z" />
                        </svg>
                      </button>

                      {openDropdown === link.label && (
                        <div
                          style={{
                            position: "absolute",
                            top: "calc(100% + 10px)",
                            left: "50%",
                            transform: "translateX(-50%)",
                            minWidth: "190px",
                            background: "rgba(8, 8, 8, 0.96)",
                            border: "1px solid rgba(212, 175, 55, 0.12)",
                            borderRadius: "0.85rem",
                            padding: "0.5rem",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.03)",
                            backdropFilter: "blur(24px)",
                            animation: "fadeUp 0.2s ease",
                          }}
                        >
                          {/* Top gold line */}
                          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)", marginBottom: "0.4rem" }} />
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                padding: "0.55rem 0.85rem",
                                borderRadius: "0.5rem",
                                fontSize: "0.82rem",
                                fontWeight: 500,
                                color: isActive(child.href) ? "var(--gold)" : "var(--text-secondary)",
                                textDecoration: "none",
                                transition: "all 0.15s",
                                background: isActive(child.href) ? "rgba(212,175,55,0.07)" : "transparent",
                              }}
                              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.color = "#ffffff"; }}
                              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = isActive(child.href) ? "rgba(212,175,55,0.07)" : "transparent"; (e.currentTarget as HTMLElement).style.color = isActive(child.href) ? "var(--gold)" : "var(--text-secondary)"; }}
                            >
                              {isActive(child.href) && (
                                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gold)", display: "inline-block", flexShrink: 0 }} />
                              )}
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <div style={{ position: "relative" }}>
                      <Link
                        href={link.href}
                        style={{
                          display: "block",
                          padding: "0.45rem 0.85rem",
                          borderRadius: "0.5rem",
                          fontSize: "0.845rem",
                          fontWeight: isActive(link.href) ? 600 : 500,
                          color: isActive(link.href) ? "#ffffff" : "var(--text-secondary)",
                          textDecoration: "none",
                          transition: "all 0.2s",
                          position: "relative",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#ffffff"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = isActive(link.href) ? "#ffffff" : "var(--text-secondary)"; (e.currentTarget as HTMLElement).style.background = "none"; }}
                      >
                        {link.label}
                      </Link>
                      {/* Active underline */}
                      {isActive(link.href) && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: "2px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "18px",
                            height: "2px",
                            background: "linear-gradient(90deg, var(--gold-vivid), var(--gold))",
                            borderRadius: "2px",
                            animation: "lineExpand 0.4s cubic-bezier(0.16,1,0.3,1) both",
                          }}
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Join Us — gold gradient button */}
              <Link
                href="/contact"
                className="btn-gold"
                style={{
                  marginLeft: "0.85rem",
                  padding: "0.5rem 1.4rem",
                  fontSize: "0.82rem",
                  borderRadius: "2rem",
                }}
              >
                Join Us
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="show-mobile"
              style={{
                background: mobileOpen ? "rgba(212,175,55,0.08)" : "none",
                border: `1px solid ${mobileOpen ? "rgba(212,175,55,0.3)" : "var(--border)"}`,
                borderRadius: "0.6rem",
                cursor: "pointer",
                padding: "0.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                width: "42px",
                height: "42px",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s",
              }}
              aria-label="Toggle mobile menu"
              id="mobile-menu-toggle"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: "20px",
                    height: "2px",
                    background: mobileOpen ? "var(--gold-vivid)" : "var(--gold)",
                    borderRadius: "2px",
                    transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                    transform:
                      mobileOpen && i === 0 ? "translateY(7px) rotate(45deg)"
                      : mobileOpen && i === 2 ? "translateY(-7px) rotate(-45deg)"
                      : "none",
                    opacity: mobileOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "72px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(5,5,5,0.97)",
            zIndex: 999,
            padding: "1.5rem",
            overflowY: "auto",
            backdropFilter: "blur(24px)",
            animation: "fadeIn 0.2s ease",
            borderTop: "1px solid rgba(212,175,55,0.1)",
          }}
        >
          {/* Gold line at top */}
          <div style={{ height: "1px", background: "linear-gradient(90deg, var(--gold), transparent)", marginBottom: "1.5rem", opacity: 0.5 }} />

          {NAV_LINKS.map((link) => (
            <div key={link.href} style={{ marginBottom: "0.2rem" }}>
              <Link
                href={link.href}
                style={{
                  display: "block",
                  padding: "0.9rem 1rem",
                  color: isActive(link.href) ? "var(--gold)" : "var(--text-primary)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "0.65rem",
                  background: isActive(link.href) ? "rgba(212,175,55,0.08)" : "transparent",
                  borderLeft: isActive(link.href) ? "3px solid var(--gold)" : "3px solid transparent",
                  transition: "all 0.2s",
                  minHeight: "48px",
                  touchAction: "manipulation",
                  WebkitTapHighlightColor: "transparent",
                } as React.CSSProperties}
              >
                {link.label}
              </Link>
              {hasChildren(link) && (
                <div style={{ paddingLeft: "1.25rem", marginTop: "0.1rem", marginBottom: "0.25rem" }}>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: "0.6rem 1rem",
                        color: isActive(child.href) ? "var(--gold-light)" : "var(--text-muted)",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        borderRadius: "0.5rem",
                        background: isActive(child.href) ? "rgba(212,175,55,0.06)" : "transparent",
                        minHeight: "44px",
                        touchAction: "manipulation",
                        WebkitTapHighlightColor: "transparent",
                      } as React.CSSProperties}
                    >
                      <span style={{ opacity: 0.5, fontSize: "0.75rem" }}>›</span>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border)" }}>
            <Link href="/contact" className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>
              Join Us
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
