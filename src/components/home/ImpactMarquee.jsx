const ITEMS = ['medical', 'education', 'foods', 'health', 'support', 'donation']

export default function ImpactMarquee() {
  return (
    <section id="help-donate" className="cf-impact-band relative overflow-hidden pb-20 pt-12 sm:pb-24 sm:pt-16">
      <img
        src="/images/backgrounds/help-donate-bg-1-1.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-b from-primary/82 via-primary/72 to-primary/92" />
      <span className="absolute inset-x-0 top-0 h-px bg-secondary/35" />

      <div className="custom_container relative">
        <p className="mb-7 flex items-center justify-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.28em] text-secondary sm:mb-9 sm:gap-4 sm:text-[12px] sm:tracking-[0.34em]">
          <span className="hidden h-px w-8 bg-secondary/80 sm:block sm:w-12" />
          Help & Donate Us
          <span className="hidden h-px w-8 bg-secondary/80 sm:block sm:w-12" />
        </p>

        <ul className="cf-cause-board grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {ITEMS.map((item) => (
            <li key={item} className="cf-cause-cell">
              <span className="cf-cause-mark" aria-hidden="true" />
              <span className="cf-cause-label">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
