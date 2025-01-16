import Header from "./containers/Header"
import HeroSection from "./containers/HeroSection"
import FeaturesSection from "./containers/FeaturesSection"
import CommunitySection from "./containers/CommunitySection"
import PricingSection from "./containers/PricingSection"
import TestimonialSection from "./containers/TestimonialSection"

// import bgPatternLight from "@/app/assets/images/pattern-light-bg.svg"

export default function Home() {
  return (
    <>
      <div className="grid max-w-[73.125rem] gap-12 px-4 py-6 md:px-8 md:py-8">
        <Header />
        <main className="grid gap-16 md:gap-20 lg:gap-[7.5rem]">
          <HeroSection />
          <FeaturesSection />
          <CommunitySection />
          <PricingSection />
          <TestimonialSection />
        </main>
      </div>
    </>
  )
}

// bg-[url('/pattern-light-bg.svg')]
