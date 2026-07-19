import type { Metadata } from "next";
import { api } from "@/lib/api";
import GalleryGrid from "@/components/events/GalleryGrid";
import type { GalleryImage } from "@/lib/types";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Browse the DSSC 2005 OBA photo gallery from our events and reunions.",
};

export default async function GalleryPage() {
  let images: GalleryImage[] = [];
  try {
    images = await api.getGallery();
  } catch { /* empty */ }

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span style={{ fontSize: "0.8rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>Memories</span>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem", letterSpacing: "-0.03em" }}>
            Photo <span className="gradient-text">Gallery</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", maxWidth: "550px", lineHeight: 1.7 }}>
            A visual journey through our events, reunions, and milestones.
          </p>
        </div>
      </div>
      <section className="section" style={{ background: "var(--black)" }}>
        <div className="container">
          <GalleryGrid images={images} />
        </div>
      </section>
    </>
  );
}
