import Link from "next/link"
import Image from "next/image"
import logo from "@/app/assets/images/logo.svg"

export default function Header() {
  return (
    <header>
      <Link href="/" aria-label="tech book club - home">
        <Image src={logo} alt="Tech book club" />
      </Link>
    </header>
  )
}
