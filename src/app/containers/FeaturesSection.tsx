import Image from "next/image"
import CheckboxIcon from "../components/CheckboxIcon"

import featuresImage from "@/app/assets/images/image-read-together-desktop.webp"

export default function FeaturesSection() {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-20">
      <div className="lg:col-start-2 lg:max-w-[34rem]">
        <div className="grid gap-6 md:gap-[2.125rem]">
          <h2 className="max-w-[32rem] font-martian-mono text-2xl font-semibold leading-snug tracking-tighter text-neutral-900 md:text-4xl">
            Read together, grow together
          </h2>
          <ul className="grid gap-4 md:gap-6">
            <li>
              <div className="grid grid-cols-[auto_1fr] items-center gap-[0.875rem]">
                <CheckboxIcon className="size-7 text-neutral-700" />
                <p>Monthly curated tech reads selected by industry experts</p>
              </div>
            </li>
            <li>
              <div className="grid grid-cols-[auto_1fr] items-center gap-[0.875rem]">
                <CheckboxIcon className="size-7 text-neutral-700" />
                <p>Virtual and in-person meetups for deep-dive discussions</p>
              </div>
            </li>
            <li>
              <div className="grid grid-cols-[auto_1fr] items-center gap-[0.875rem]">
                <CheckboxIcon className="size-7 text-neutral-700" />
                <p>Early access to new tech book releases</p>
              </div>
            </li>
            <li>
              <div className="grid grid-cols-[auto_1fr] items-center gap-[0.875rem]">
                <CheckboxIcon className="size-7 text-neutral-700" />
                <p>Author Q&A sessions with tech thought leaders</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Image
        src={featuresImage}
        alt="people seated in a circle happily reading books"
        className="rounded-2xl lg:col-start-1 lg:row-start-1"
      ></Image>
    </section>
  )
}
