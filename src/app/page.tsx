import Header from "./containers/Header"
import HeroSection from "./containers/HeroSection"

// import bgPatternLight from "@/app/assets/images/pattern-light-bg.svg"

export default function Home() {
  return (
    <>
      <div className="grid max-w-[73.125rem] gap-12 bg-[url('/pattern-light-bg.svg')] px-4 py-6">
        <Header />
        <main>
          <HeroSection />
        </main>
      </div>
    </>
  )
}
