import Reveal from '../ui/Reveal'

export default function StoryQuote() {
  return (
    <section className="relative isolate overflow-hidden bg-primary">
      <img
        src="/images/banner/slide-3.png"
        alt=""
        className="cf-hero-photo absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/88 to-primary/55" />

      <div className="custom_container relative z-10 grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-28">
        <Reveal variant="left">
          <p className="cf-kicker">
            <span className="cf-index text-white/40">02</span>
            A voice from the field
          </p>
          <p className="cf-quote-mark mt-6">“</p>
          <blockquote className="-mt-4 font-serif text-[1.7rem] leading-[1.3] text-white sm:text-4xl lg:text-[2.75rem]">
            Hope arrived as a warm meal, a school bag, and someone who stayed.
          </blockquote>
          <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.22em] text-secondary">
            Meera Devi
            <span className="mx-3 text-white/25">/</span>
            <span className="text-white/60">Mother, Delhi program</span>
          </p>
        </Reveal>

        <Reveal variant="clip" delay={160} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-3 border border-secondary/40" />
          <img
            src="/images/banner/slide-2.png"
            alt="Children together in a community program"
            className="relative h-72 w-full object-cover sm:h-[420px]"
          />
          <span className="absolute bottom-4 left-4 bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">
            Field note, 2025
          </span>
        </Reveal>
      </div>
    </section>
  )
}
