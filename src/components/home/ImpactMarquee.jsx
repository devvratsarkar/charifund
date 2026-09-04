const ITEMS = [
  'Donate with heart',
  'Educate a child',
  'Heal with care',
  'Feed a family',
  'Stand for dignity',
  'Build brighter futures',
]

function Track() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center gap-8 sm:gap-12">
          <span className="font-serif text-xl italic tracking-tight text-white sm:text-2xl">
            {item}
          </span>
          <span className="size-2 rounded-full bg-secondary" />
        </span>
      ))}
    </div>
  )
}

export default function ImpactMarquee() {
  return (
    <section className="overflow-hidden bg-primary py-4 sm:py-5" aria-hidden="true">
      <div className="cf-marquee-track flex w-max">
        <Track />
        <Track />
      </div>
    </section>
  )
}
