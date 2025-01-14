import type { Metadata } from "next"
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
