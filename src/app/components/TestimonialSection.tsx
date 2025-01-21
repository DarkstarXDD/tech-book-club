import FiveStarIcons from "@/components/FiveStarIcons"

export default function TestimonialSection() {
  return (
    <section className="grid max-w-[60.625rem] justify-items-start gap-8 lg:justify-items-center">
      <FiveStarIcons />
      <blockquote className="font-martian-mono text-xl font-semibold leading-tighter tracking-tight text-neutral-900 md:text-2xl md:leading-snug lg:text-center">
        <p>
          &quot;This book club transformed my technical reading from a solitary
          activity into an enriching community experience. The discussions are
          gold!&quot;
        </p>
      </blockquote>
      <p className="lg:text-center">Sarah Chen, Software Architect</p>
    </section>
  )
}
