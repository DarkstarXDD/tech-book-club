import type { Metadata } from "next"
import { Inter, Martian_Mono } from "next/font/google"
import "./globals.css"

import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

export const metadata: Metadata = {
  title: "Tech Book Club",

  description:
    "Check out Darkstar's solution for the Tech Book Club Landing Page challenge on Frontend Mentor",

  authors: {
    name: "Darkstar",
    url: "https://github.com/DarkstarXDD",
  },

  openGraph: {
    type: "website",
    url: "https://tech-book-club-darkstarxdd.vercel.app/",
    title: "Tech Book Club",

    description:
      "Check out Darkstar's solution for the Tech Book Club Landing Page challenge on Frontend Mentor",

    images: {
      url: "https://tech-book-club-darkstarxdd.vercel.app/og-img.jpeg",
      type: "image/jpeg",
      width: 1440,
      height: 756,
    },
  },
}

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const martian_mono = Martian_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-martian-mono",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${martian_mono.variable} font-inter text-lg font-normal leading-normal tracking-normal text-neutral-700`}
      >
        <div className="grid justify-items-center gap-16 md:gap-20 lg:gap-[7.5rem]">
          <div className="px-4 pt-6 md:px-8 md:pt-8 lg:px-12">
            <div className="grid max-w-[34rem] grid-rows-[repeat(3,auto)] gap-12 md:max-w-[48rem] md:gap-16 lg:max-w-[73.125rem] lg:gap-20">
              <div className="bg-neutral-900] col-start-1 row-span-2 row-start-1"></div>
              <Header className="col-start-1 row-span-1 row-start-1" />
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
