import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import BatchIntroSection from "@/components/home/BatchIntroSection";
import MissionSection from "@/components/home/MissionSection";
import ContactCta from "@/components/home/ContactCta";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.fullName} - ${SITE.batch}`,
  description: SITE.description,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <BatchIntroSection />
      <MissionSection />
      <ContactCta />
    </>
  );
}
