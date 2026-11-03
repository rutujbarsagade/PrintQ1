import type { Metadata } from "next"
import { PublicNavbar } from "@/components/layout/public-navbar"
import { PublicFooter } from "@/components/layout/public-footer"
import { LandingHero } from "./hero"
import { LandingFeatures } from "./features"
import { LandingHowItWorks } from "./how-it-works"
import { LandingBenefits } from "./benefits"
import { LandingTestimonials } from "./testimonials"
import { LandingTrustedShops } from "./trusted-shops"
import { LandingCTABanner } from "./cta-banner"
import { LandingFAQ } from "./faq"

export const metadata: Metadata = {
  title: "PrintQ — Simple online printing and PDF tools",
  description: "Scan a print shop QR code, upload a file, choose print settings, pay online or at the counter, and track your order.",
}

export default function LandingPage() {
  return (
    <>
      <PublicNavbar />
      <main>
        <LandingHero />
        <LandingHowItWorks />
        <LandingFeatures />
        <LandingBenefits />
        <LandingTestimonials />
        <LandingTrustedShops />
        <LandingFAQ />
        <LandingCTABanner />
      </main>
      <PublicFooter />
    </>
  )
}
