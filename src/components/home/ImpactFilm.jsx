import { useEffect, useState } from 'react'
import { useInView } from '../../hooks/useInView'
import Reveal from '../ui/Reveal'

const FIGURES = [
  { value: 6472, suffix: '', label: 'Active volunteers', note: 'Hands on the ground' },
  { value: 38768, prefix: '$', suffix: '', label: 'Given this season', note: 'From monthly donors' },
  { value: 119, suffix: 'k+', label: 'Lives reached', note: 'Across our programs' },
]

function useCountUp(target, active, duration = 1800) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return undefined
    const start = performance.now()
    let frame = 0

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3
      setValue(target * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, duration, target])

  return value
}

function Figure({ value, prefix = '', suffix = '', label, note, active, delay }) {
  const counted = useCountUp(value, active)

  return (
    <Reveal delay={delay} className="relative py-8 lg:py-4">
      <p className="font-serif text-[3.4rem] leading-none tracking-tight text-primary sm:text-6xl lg:text-7xl">
        {prefix}
        {new Intl.NumberFormat('en-US').format(Math.round(counted))}
        {suffix}
      </p>
      <span className="cf-rule mt-5 block w-16 bg-secondary" />
      <p className="mt-5 font-display text-lg font-extrabold text-primary">{label}</p>
      <p className="mt-1 text-sm text-black">{note}</p>
    </Reveal>
  )
}

export default function ImpactFilm() {
  const [ref, visible] = useInView({ threshold: 0.25 })

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="custom_container">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="cf-kicker text-primary">
              <span className="cf-index">01</span>
              Measured with care
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold tracking-tight text-primary sm:text-5xl">
              Proof, not promises
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-black">
            Every figure is a classroom kept open, a clinic staffed, or a kitchen that did not go quiet.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-2 border-t border-primary/8 sm:mt-14 lg:grid-cols-3 lg:gap-12">
          {FIGURES.map((item, index) => (
            <Figure key={item.label} {...item} active={visible} delay={index * 110} />
          ))}
        </div>
      </div>
    </section>
  )
}
