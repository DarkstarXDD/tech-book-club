import Image from "next/image"
import communityImage from "@/app/assets/images/image-not-average-desktop.webp"

export default function CommunitySection() {
  return (
    <section className="grid gap-10 lg:gap-20">
      <div>
        <h2 className="font-martian-mono text-2xl font-semibold leading-snug tracking-tighter text-neutral-900 md:text-4xl">
          Not your average book club
        </h2>
        <p className="mt-6">
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
      ></Image>
    </section>
  )
}
