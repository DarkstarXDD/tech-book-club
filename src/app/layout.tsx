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
        <div className="grid grid-cols-[1fr,minmax(0,34rem),1fr] grid-rows-[repeat(3,auto)] gap-x-4 gap-y-12 md:grid-cols-[1fr,minmax(0,48rem),1fr] md:gap-x-8 md:gap-y-16 lg:grid-cols-[1fr,minmax(0,73.125rem),1fr] lg:gap-12 lg:gap-y-20">
          <div className="col-start-1 col-end-4 row-span-2 row-start-1 bg-neutral-100 bg-[url('/pattern-light-bg.svg')]"></div>
          <Header className="col-start-2 row-span-1 row-start-1 pt-6 md:pt-8" />
          {children}
        </div>
        <Footer className="mt-16 md:mt-20 lg:mt-[7.5rem]" />
      </body>
    </html>
  )
}
