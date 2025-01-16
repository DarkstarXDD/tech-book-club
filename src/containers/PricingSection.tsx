import PriceCard from "@/components/PriceCard"

export default function PricingSection() {
  return (
    <section className="grid gap-6 md:gap-10 lg:gap-16">
      <h2 className="font-martian-mono text-2xl font-semibold leading-snug tracking-tighter text-neutral-900 md:text-4xl">
        Membership options
      </h2>
      <div className="grid gap-6">
        <PriceCard
          planName="Starter"
          monthlyPrice={19}
          benefits={["1 book/month", "Online forums"]}
        />
        <PriceCard
          planName="Pro"
          monthlyPrice={29}
          benefits={["2 books/month", "Virtual meetups"]}
        />
        <PriceCard
          planName="Enterprise"
          monthlyPrice="Custom"
          benefits={["Team access", "Private sessions"]}
          buttonText="Talk to Us"
        />
      </div>
    </section>
  )
}
