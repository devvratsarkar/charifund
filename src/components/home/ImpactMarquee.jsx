const ITEMS = [
  'medical',
  'education',
  'foods',
  'health',
  'support',
  'donation',
]

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-8 sm:gap-12">
          <span className="font-serif text-xl italic tracking-tight text-white sm:text-2xl">
            {item}
          </span>
          <img src="/images/resources/help-donate-1-1.png" alt="" className="h-8 w-8 object-contain sm:h-10 sm:w-10" />
        </span>
      ))}
    </div>
  )
}

export default function ImpactMarquee() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-14" aria-hidden="true">
      <img
        src="/images/backgrounds/help-donate-bg-1-1.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary/72" />
      <div className="relative">
        <p className="mb-5 text-center text-[12px] font-bold uppercase tracking-[0.22em] text-secondary">
          Help & Donate Us
        </p>
        <div className="cf-marquee-track flex w-max">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  )
}
