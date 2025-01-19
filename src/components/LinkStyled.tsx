// Called this LinkStyled to avoid name overlapping with built in Link component from Next.js

import type { ComponentProps } from "react"
import { type VariantProps } from "tailwind-variants"
import { buttonStyles as linkStyles } from "./Button"

type LinkVariants = VariantProps<typeof linkStyles>

type LinkProps = {
  href: string
  children: React.ReactNode
  className?: string
} & ComponentProps<"a"> &
  LinkVariants

export default function LinkStyled({
  href,
  children,
  className,
  variant,
  uppercase,
  ...props
}: LinkProps) {
  return (
    <a
      href={href}
      {...props}
      className={linkStyles({ variant, uppercase, className })}
    >
      {children}
    </a>
  )
}
