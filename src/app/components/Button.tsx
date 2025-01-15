import type { ComponentProps } from "react"
import { tv, type VariantProps } from "tailwind-variants"

const buttonStyles = tv({
  base: "hover:bg-gradient-to-r rounded-lg border-2 px-6 py-5 font-martian-mono text-sm font-semibold leading-snug tracking-tight active:opacity-80 md:text-md",
  variants: {
    variant: {
      primary:
        "bg-light-salmon-50 hover:from-light-salmon-100 hover:to-light-salmon-50 border-neutral-900 text-neutral-900 outline-neutral-700",
      alternate:
        "border-neutral-0 bg-neutral-900 text-neutral-0 outline-neutral-200 hover:from-neutral-700 hover:to-neutral-900",
    },

    uppercase: {
      true: "uppercase",
    },
  },
})

type ButtonVariants = VariantProps<typeof buttonStyles>

type ButtonProps = {
  children: React.ReactNode
} & ComponentProps<"button"> &
  ButtonVariants

export default function Button({
  children,
  variant,
  uppercase,
  ...props
}: ButtonProps) {
  return (
    <button {...props} className={buttonStyles({ variant, uppercase })}>
      {children}
    </button>
  )
}
