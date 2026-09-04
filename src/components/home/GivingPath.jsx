import Reveal from '../ui/Reveal'

const STEPS = [
  {
    index: '01',
    title: 'A need is heard',
    copy: 'Teachers, clinics, and families tell us what must not wait — books, medicine, or a meal.',
  },
  {
    index: '02',
    title: 'Your gift travels',
    copy: 'Monthly giving is assigned to a live program, not a holding account, within the same cycle.',
  },
  {
    index: '03',
    title: 'A life steadies',
    copy: 'A child stays in class. A parent gets care. You receive the proof, quietly and clearly.',
  },
]

export default function GivingPath() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
      <div className="custom_container">
        <Reveal>
          <p className="cf-kicker text-primary">
            <span className="cf-index">03</span>
            How a gift moves
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Three quiet steps from your hand to theirs
          </h2>
        </Reveal>

        <div className="relative mt-12 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-10">
          <span className="cf-path-line pointer-events-none absolute top-7 right-8 left-8 hidden h-px lg:block" />
          {STEPS.map((step, index) => (
            <Reveal key={step.index} delay={index * 120} className="relative">
              <span className="relative z-10 grid size-14 place-items-center border border-secondary bg-cream font-serif text-lg text-primary">
                {step.index}
              </span>
              <h3 className="mt-6 font-display text-2xl font-extrabold text-primary">
                {step.title}
              </h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-black">{step.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
