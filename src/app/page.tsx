import Header from "@/app/components/Header"
import HeroSection from "@/app/components/HeroSection"
import FeaturesSection from "@/app/components/FeaturesSection"
import CommunitySection from "@/app/components/CommunitySection"
import JourneySteps from "@/app/components/JourneySteps"
import PricingSection from "@/app/components/PricingSection"
import TestimonialSection from "@/app/components/TestimonialSection"
import Footer from "@/app/components/Footer"

// import bgPatternLight from "@/app/assets/images/pattern-light-bg.svg"

export default function Home() {
  return (
    <div className="grid justify-items-center gap-16 md:gap-20 lg:gap-[7.5rem]">
      <div className="px-4 pt-6 md:px-8 md:pt-8 lg:px-12">
        <div className="grid max-w-[34rem] gap-12 md:max-w-[48rem] md:gap-16 lg:max-w-[73.125rem] lg:gap-20">
          <Header />
          <main className="grid justify-items-center gap-16 md:gap-20 lg:gap-[7.5rem]">
            <HeroSection />
            <FeaturesSection />
            <CommunitySection />
            <JourneySteps />
            <PricingSection />
            <TestimonialSection />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

// bg-[url('/pattern-light-bg.svg')]
