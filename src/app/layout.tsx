import type { Metadata } from "next"
import { Inter, Martian_Mono } from "next/font/google"
import "./globals.css"

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
        {children}
      </body>
    </html>
  )
}
