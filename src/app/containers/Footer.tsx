import Image from "next/image"
import { FaBluesky } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"

import Button from "../components/Button"
import Star from "../components/Star"

import avatars from "@/app/assets/images/image-avatars.webp"

export default function Footer() {
  return (
    <footer className="rounded-t-2xl bg-neutral-900 bg-[url('/pattern-dark-bg.svg')] px-4 pt-12 text-neutral-100 md:px-8 md:pt-16 lg:pt-20">
      <div className="grid gap-6">
        <div className="grid gap-10">
          <p className="text-center font-martian-mono text-2xl font-semibold leading-snug tracking-tighter md:text-4xl">
            Ready to debug your reading list?
          </p>
          <Button variant="alternate" uppercase>
            Review Membership Options
          </Button>
        </div>

        <div className="grid grid-cols-[1fr_auto] items-center justify-items-start gap-x-3 gap-y-1 justify-self-center">
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

      <hr className="mt-16 h-[0.0625rem] border-none bg-neutral-700" />

      <div className="flex flex-col items-center justify-center gap-4 py-6 md:flex-row md:justify-between">
        <p className="font-martian-mono text-xs font-normal leading-tight tracking-tight">
          © 2024 - Tech Book Club
        </p>
        <div className="flex items-center justify-center gap-6">
          <FaBluesky size="1.375rem" />
          <FaLinkedin size="1.375rem" />
        </div>
      </div>
    </footer>
  )
}
