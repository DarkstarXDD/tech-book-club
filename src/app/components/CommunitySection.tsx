import Image from "next/image"
import communityImage from "@/assets/images/image-not-average-desktop.webp"
import PatternCircle from "@/assets/images/pattern-circle.png"

export default function CommunitySection() {
  return (
    <section className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-20">
      <div className="grid gap-6 lg:max-w-[34rem]">
        <h2 className="font-martian-mono text-2xl font-semibold leading-snug tracking-tighter text-neutral-900 md:text-4xl lg:max-w-[34rem]">
          Not your average book{" "}
          <span className="relative inline-block">
            <em className="not-italic">club</em>
            <Image
              src={PatternCircle}
              alt=""
              className="absolute -z-10 -translate-y-[2.5rem] scale-[1.4] select-none md:-translate-y-[3.5rem]"
            />
          </span>
        </h2>
        <p>
          Connect with a community that speaks your language - from{" "}
          <strong className="font-semibold">Python</strong> to{" "}
          <strong className="font-semibold">TypeScript</strong> and everything
          in between. Our discussions blend technical depth with practical
          applications.
        </p>
      </div>

      <Image
        src={communityImage}
        alt="Old man and two women readings books in a library."
        className="rounded-2xl"
      />
    </section>
  )
}
