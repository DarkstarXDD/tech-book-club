import HeroSection from "@/app/components/HeroSection"
import FeaturesSection from "@/app/components/FeaturesSection"
import CommunitySection from "@/app/components/CommunitySection"
import JourneySteps from "@/app/components/JourneySteps"
import PricingSection from "@/app/components/PricingSection"
import TestimonialSection from "@/app/components/TestimonialSection"

// import bgPatternLight from "@/app/assets/images/pattern-light-bg.svg"

export default function Home() {
  return (
    <main className="col-start-1 row-span-2 row-start-2 grid grid-rows-subgrid justify-items-center gap-16 md:gap-20 lg:gap-[7.5rem]">
      <HeroSection />
      <div className="grid justify-items-center gap-16 md:gap-20 lg:gap-[7.5rem]">
        <FeaturesSection />
        <CommunitySection />
        <JourneySteps />
        <PricingSection />
        <TestimonialSection />
      </div>
    </main>
  )
}

// bg-[url('/pattern-light-bg.svg')]
