import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/images/logo.svg"

export default function Header() {
  return (
    <header>
      <Link
        href="/"
        aria-label="tech book club - home"
        className="block max-w-48 outline-neutral-700"
      >
        <Image src={logo} alt="Tech book club" />
      </Link>
    </header>
  )
}
