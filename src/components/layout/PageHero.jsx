import Reveal from '../ui/Reveal'

export default function PageHero({ eyebrow, title, copy, image }) {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-16 sm:py-20 lg:py-24">
      <img
        src={image}
        alt=""
        className="cf-hero-photo absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/80 to-primary/40" />
      <span className="cf-orb right-10 top-8 size-36 bg-secondary/20" />

      <div className="custom_container relative z-10 max-w-3xl">
        <Reveal variant="left">
          <p className="cf-kicker">{eyebrow}</p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <span className="mt-6 block h-px w-16 bg-secondary" />
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            {copy}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
