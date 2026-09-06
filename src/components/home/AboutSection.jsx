import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaHandshake, FaHandHoldingUsd, FaShoppingBag, FaPhoneAlt, FaHeart, FaUsers } from 'react-icons/fa'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { getAboutPageRoute } from '../../routes/routes'
import { ORG } from '../../data/site'
import '../../styles/about.css'

const STATS = [
  { label: 'Join Our Team', value: 6472, format: 'number', Icon: FaHandshake },
  { label: 'Donate Us', value: 38768, format: 'money', Icon: FaHandHoldingUsd },
  { label: 'Total Fund Raised', value: 1193210, format: 'number', Icon: FaShoppingBag },
]

function formatStat(value, format) {
  const formatted = new Intl.NumberFormat('en-US').format(Math.round(value))
  return format === 'money' ? `$${formatted}` : formatted
}

function useInView(offset = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: offset },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [offset])

  return [ref, visible]
}

function useCountUp(target, active, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return undefined

    let frame = 0
    const start = performance.now()

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

function StatItem({ label, value, format, Icon, active, delay }) {
  const counted = useCountUp(value, active)

  return (
    <div
      className="about-rise flex items-start gap-3"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="mt-0.5 grid size-12 shrink-0 place-items-center rounded-full bg-cream text-primary shadow-[0_8px_20px_rgba(18,47,42,0.06)]">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-sm font-semibold text-primary">{label}</p>
        <p className="mt-1 font-display text-xl font-extrabold text-secondary">
          {formatStat(counted, format)}
        </p>
      </div>
    </div>
  )
}

function HeartBadge() {
  return (
    <span className="relative grid size-14 place-items-center rounded-full bg-primary shadow-[0_12px_30px_rgba(18,47,42,0.2)] sm:size-[5.25rem]">
      <FaHeart className="size-6 text-secondary sm:size-8" />
      <FaUsers className="absolute top-2 size-3 text-cream sm:top-3 sm:size-3.5" />
    </span>
  )
}

export default function AboutSection() {
  const [sectionRef, visible] = useInView()
  const photoRef = useRef(null)

  useEffect(() => {
    const photo = photoRef.current
    if (!photo || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const onScroll = () => {
      const rect = photo.getBoundingClientRect()
      const offset = (rect.top - window.innerHeight * 0.35) * -0.12
      photo.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`about-section about-pattern relative overflow-hidden bg-white py-12 sm:py-16 lg:py-28 ${
        visible ? 'is-visible' : ''
      }`}
    >
      <span className="cf-orb -left-8 top-16 size-36 bg-secondary/15" />
      <span className="cf-orb right-10 bottom-10 size-28 bg-primary/5" style={{ animationDelay: '1s' }} />
      <div className="custom_container grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative overflow-hidden rounded-2xl bg-cream p-3 sm:rounded-[2rem] sm:p-6">
            <span className="about-frame-y absolute bottom-0 left-0 h-full w-1 origin-bottom bg-secondary sm:w-1.5" />
            <span className="about-frame-x absolute bottom-0 left-0 h-1 w-full origin-left bg-secondary sm:h-1.5" />
            <div className="overflow-hidden rounded-xl sm:rounded-[1.4rem]">
              <img
                ref={photoRef}
                src="/images/about/about-1-1.png"
                alt="Children gathering outdoors"
                className="about-photo h-64 w-full object-cover will-change-transform sm:h-[420px] lg:h-[520px]"
              />
            </div>
          </div>

          <div className="about-badge absolute top-3 left-3 sm:-top-6 sm:-left-6">
            <HeartBadge />
          </div>
        </div>

        <div>
          <p
            className="about-rise flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-secondary sm:text-[12px] sm:tracking-[0.22em]"
            style={{ animationDelay: '80ms' }}
          >
            <span className="size-1.5 rounded-full bg-secondary" />
            About Manav Sewa
          </p>

          <h2
            className="about-rise mt-3 font-display text-[1.75rem] font-extrabold leading-tight tracking-tight text-primary sm:mt-4 sm:text-4xl lg:text-[3.15rem]"
            style={{ animationDelay: '180ms' }}
          >
            Helping Each Other can Make{' '}
            <span className="relative inline-block">
              World Better
              <span className="about-underline absolute -bottom-1 left-0 h-1 w-full rounded-full bg-secondary" />
            </span>
          </h2>

          <div
            className="about-rise mt-6 flex items-start gap-4 sm:mt-8 sm:items-center"
            style={{ animationDelay: '300ms' }}
          >
            <img
              src="/images/about/about-1-3.jpg"
              alt="Children sitting together"
              className="h-16 w-16 shrink-0 rounded-full object-cover shadow-[0_12px_30px_rgba(18,47,42,0.12)] sm:h-24 sm:w-40"
            />
            <p className="text-[15px] leading-relaxed text-black sm:text-base">
              We help companies develop powerful corporate social responsibility,
              grantmaking, and employee engagement strategies.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-3 sm:gap-6">
            {STATS.map((stat, index) => (
              <StatItem
                key={stat.label}
                {...stat}
                active={visible}
                delay={380 + index * 120}
              />
            ))}
          </div>

          <div
            className="about-rise mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-5"
            style={{ animationDelay: '760ms' }}
          >
            <NavLink
              to={getAboutPageRoute()}
              className="group inline-flex w-fit max-w-full items-center bg-primary text-[11px] font-extrabold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-secondary hover:text-primary sm:text-[12px] sm:tracking-[0.16em]"
            >
              <span className="grid size-10 shrink-0 place-items-center bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-secondary sm:size-11">
                <HiChevronDoubleRight className="size-4" />
              </span>
              <span className="px-4 py-2 sm:px-6 sm:py-0">More About Us</span>
            </NavLink>

            <a href={`tel:${ORG.phone}`} className="flex items-center gap-3">
              <span className="about-phone-ring grid size-12 place-items-center rounded-full border border-secondary text-primary">
                <FaPhoneAlt className="size-4" />
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-black">
                  Call Any Time
                </span>
                <span className="mt-1 block font-display text-lg font-extrabold text-primary">
                  {ORG.phoneDisplay}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
