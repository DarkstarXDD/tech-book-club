import Image from "next/image"
import CheckboxIcon from "@/components/CheckboxIcon"

import featuresImage from "@/assets/images/image-read-together-desktop.webp"

export default function FeaturesSection() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20">
      <div className="grid gap-6 md:gap-[2.125rem] lg:col-start-2 lg:max-w-[34rem]">
        <h2 className="font-martian-mono text-2xl font-semibold leading-snug tracking-tighter text-neutral-900 md:text-4xl lg:max-w-[32rem]">
          Read together, grow together
        </h2>
        <ul className="grid gap-4 md:gap-6">
          <li className="grid grid-cols-[auto_1fr] items-center gap-[0.875rem]">
            <CheckboxIcon className="size-7 text-neutral-700" />
            <p>Monthly curated tech reads selected by industry experts</p>
          </li>

          <li className="grid grid-cols-[auto_1fr] items-center gap-[0.875rem]">
            <CheckboxIcon className="size-7 text-neutral-700" />
            <p>Virtual and in-person meetups for deep-dive discussions</p>
          </li>

          <li className="grid grid-cols-[auto_1fr] items-center gap-[0.875rem]">
            <CheckboxIcon className="size-7 text-neutral-700" />
            <p>Early access to new tech book releases</p>
          </li>

          <li className="grid grid-cols-[auto_1fr] items-center gap-[0.875rem]">
            <CheckboxIcon className="size-7 text-neutral-700" />
            <p>Author Q&A sessions with tech thought leaders</p>
          </li>
        </ul>
      </div>

      <Image
        src={featuresImage}
        alt="people seated in a circle happily reading books"
        className="rounded-2xl lg:col-start-1 lg:row-start-1"
      ></Image>
    </section>
  )
}
