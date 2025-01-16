import Image from "next/image"
import { FaBluesky } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"

import Button from "../components/Button"
import Star from "../components/Star"

import avatars from "@/app/assets/images/image-avatars.webp"

export default function Footer() {
  return (
    <footer className="w-full justify-items-center rounded-t-2xl bg-neutral-900 bg-[url('/pattern-dark-bg.svg')] px-4 pt-12 text-neutral-100 md:px-8 md:pt-16 lg:pt-20">
      <div className="grid max-w-[48rem] justify-items-center gap-10">
        <p className="text-center font-martian-mono text-2xl font-semibold leading-snug tracking-tighter md:text-4xl">
          Ready to debug your reading list?
        </p>

        <div className="grid max-w-[25rem] gap-6">
          <Button variant="alternate" uppercase>
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

      <hr className="mt-16 h-[0.0625rem] w-full border-none bg-neutral-700" />

      <div className="flex w-full flex-col items-center justify-center gap-4 py-6 md:flex-row md:justify-between">
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
