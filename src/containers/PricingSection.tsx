import PriceCard from "@/components/PriceCard"

export default function PricingSection() {
  return (
    <section className="grid gap-6 md:max-w-[60.625rem] md:gap-10 lg:gap-16">
      <h2 className="font-martian-mono text-2xl font-semibold leading-snug tracking-tighter text-neutral-900 md:text-4xl">
        Membership options
      </h2>
      <div className="flex flex-col flex-wrap gap-6 md:flex-row">
        <PriceCard
          planName="Starter"
          monthlyPrice={19}
          benefits={["1 book/month", "Online forums"]}
          className="md:flex-1 md:basis-[21.25rem]"
        />
        <PriceCard
          planName="Pro"
          monthlyPrice={29}
          benefits={["2 books/month", "Virtual meetups"]}
          className="bg-[url('/pattern-glow.svg')] md:flex-1 md:basis-[21.25rem]"
        />
        <PriceCard
          planName="Enterprise"
          monthlyPrice="Custom"
          benefits={["Team access", "Private sessions"]}
          buttonText="Talk to Us"
          className="md:flex-1 md:basis-[21.25rem]"
        />
      </div>
    </section>
  )
}
