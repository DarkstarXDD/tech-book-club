import Header from "./containers/Header"
import HeroSection from "./containers/HeroSection"
import FeaturesSection from "./containers/FeaturesSection"

// import bgPatternLight from "@/app/assets/images/pattern-light-bg.svg"

export default function Home() {
  return (
    <>
      <div className="grid max-w-[73.125rem] gap-12 px-4 py-6 md:px-8 md:py-8">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
        </main>
      </div>
    </>
  )
}

// bg-[url('/pattern-light-bg.svg')]
