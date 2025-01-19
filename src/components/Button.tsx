import type { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"

export const buttonStyles = tv({
  base: "flex flex-wrap items-center justify-center gap-3 rounded-lg border-2 px-6 py-5 font-martian-mono text-sm font-semibold leading-snug tracking-tight hover:bg-gradient-to-r active:opacity-80 md:text-md",
  variants: {
    variant: {
      primary:
        "border-neutral-900 bg-light-salmon-50 text-neutral-900 outline-neutral-700 hover:from-light-salmon-100 hover:to-light-salmon-50",
      alternate:
        "border-neutral-0 bg-transparent text-neutral-0 outline-neutral-200 hover:from-neutral-700 hover:to-neutral-900",
    },

    uppercase: {
      true: "uppercase",
    },
  },
})

type ButtonVariants = VariantProps<typeof buttonStyles>

type ButtonProps = {
  children: React.ReactNode
  className?: string
} & ComponentProps<"button"> &
  ButtonVariants

export default function Button({
  children,
  className,
  variant,
  uppercase,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={buttonStyles({ variant, uppercase, className })}
    >
      {children}
    </button>
  )
}
