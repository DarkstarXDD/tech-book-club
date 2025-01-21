import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/images/logo.svg"

export default function Header({ className }: { className?: string }) {
  return (
    <header className={className}>
      <Link
        href="/"
        aria-label="tech book club - home"
        className="outline-neutral-700) block max-w-48"
      >
        <Image src={logo} alt="Tech book club" />
      </Link>
    </header>
  )
}
