import { twMerge } from "tailwind-merge"

import CheckboxIcon from "./CheckboxIcon"
import LinkStyled from "@/components/LinkStyled"

export default function PriceCard({
  className,
  planName,
  monthlyPrice,
  benefits,
  LinkText = "Subscribe Now",
}: {
  className?: string
  planName: string
  monthlyPrice: number | string
  benefits: string[]
  LinkText?: string
}) {
  return (
    <div
      className={twMerge(
        "grid gap-8 rounded-lg border border-neutral-200 p-6",
        className
      )}
    >
      <div className="grid gap-6">
        <h3 className="font-martian-mono text-xl font-semibold leading-tighter tracking-tight text-neutral-900">
          {planName}
        </h3>

        <p>
          <span className="font-martian-mono text-2xl font-semibold leading-snug tracking-tight text-neutral-900">
            {typeof monthlyPrice === "number"
              ? `$${monthlyPrice}`
              : `${monthlyPrice}`}
          </span>{" "}
          {typeof monthlyPrice === "number" ? "/month" : null}
        </p>

        <hr className="h-[0.0625rem] border-none bg-neutral-200" />

        <ul className="grid gap-4">
          {benefits?.map((benefit, index) => (
            <li key={index}>
              <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                <CheckboxIcon className="size-6 text-neutral-700" />
                <p>{benefit}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <LinkStyled href="#" theme="primary">
        {LinkText}
      </LinkStyled>
    </div>
  )
}
