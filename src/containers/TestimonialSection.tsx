import Star from "@/components/Star"

export default function TestimonialSection() {
  return (
    <section className="grid justify-items-start gap-8 lg:justify-items-center">
      <div className="flex items-center justify-center">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
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
