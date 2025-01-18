import Image from "next/image"
import Button from "@/components/Button"
import Star from "@/components/Star"

import avatars from "@/assets/images/image-avatars.webp"
import hero from "@/assets/images/image-hero-desktop.webp"

export default function HeroSection() {
  return (
    <section className="grid w-full gap-16 pb-20 lg:grid-cols-[auto_1fr] lg:items-center">
      <div className="grid max-w-[43rem] gap-8 lg:max-w-[36rem]">
        <div className="grid gap-6">
          <h1 className="bg-gradient-text bg-clip-text font-martian-mono text-3xl font-bold leading-tight tracking-tighter text-transparent md:text-5xl">
            Join the ultimate tech book club
          </h1>
          <p>
            Turn your reading time into learning time with fellow tech
            enthusiasts. Get curated recommendations, join vibrant discussions,
            and level up your skills one chapter at a time.
          </p>
        </div>

        <div className="grid max-w-[25rem] gap-5">
          <Button variant="primary" uppercase>
            Review Membership Options
          </Button>

          <div className="grid grid-cols-[auto_1fr] items-center justify-items-start gap-x-3 gap-y-1">
            <Image src={avatars} alt="" className="row-span-2 max-w-28" />
            <div className="flex items-center justify-center">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className="col-start-2 font-martian-mono text-xs leading-tight tracking-tight">
              200+ developers joined already
            </p>
          </div>
        </div>
      </div>

      <Image
        src={hero}
        alt="Three people looking at the contents of a book inside a library."
        className="rounded-2xl max-lg:w-[40rem]"
      />
    </section>
  )
}
