import Header from "../containers/Header"
import HeroSection from "@/containers/HeroSection"
import FeaturesSection from "@/containers/FeaturesSection"
import CommunitySection from "@/containers/CommunitySection"
import PricingSection from "@/containers/PricingSection"
import TestimonialSection from "@/containers/TestimonialSection"
import Footer from "@/containers/Footer"

// import bgPatternLight from "@/app/assets/images/pattern-light-bg.svg"

export default function Home() {
  return (
    <div className="grid justify-items-center gap-16 px-4 pt-6 md:gap-20 md:px-8 md:pt-8 lg:gap-[7.5rem]">
      <div className="grid max-w-[73.125rem] gap-12">
        <Header />
        <main className="grid gap-16 md:gap-20 lg:gap-[7.5rem]">
          <HeroSection />
          <FeaturesSection />
          <CommunitySection />
          <PricingSection />
          <TestimonialSection />
        </main>
      </div>
      <Footer />
    </div>
  )
}

// bg-[url('/pattern-light-bg.svg')]
