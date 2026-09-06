import Reveal from '../ui/Reveal'
import { TESTIMONIAL } from '../../data/site'

export default function VoicesBoard() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
      <img
        src="/images/backgrounds/testimonial-bg-1.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/82" />
      <div className="custom_container relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="cf-kicker">
            <span className="cf-index text-white/35">04</span>
            Testimonials
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            What They’re Talking About Manav Sewa
          </h2>
          <blockquote className="mt-8 font-serif text-2xl leading-snug text-white sm:text-3xl">
            “{TESTIMONIAL.quote}”
          </blockquote>
          <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.18em] text-secondary">
            {TESTIMONIAL.name}
          </p>
          <p className="mt-1 text-sm text-white/70">{TESTIMONIAL.role}</p>
        </Reveal>
        <Reveal variant="clip" delay={120}>
          <img
            src={TESTIMONIAL.image}
            alt={TESTIMONIAL.name}
            className="h-80 w-full object-cover sm:h-[420px]"
          />
        </Reveal>
      </div>
    </section>
  )
}
