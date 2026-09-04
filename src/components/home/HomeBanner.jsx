import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowLeftIcon, ArrowRightIcon } from '../ui/AllSVG'
import {
  getAboutPageRoute,
  getContactPageRoute,
} from '../../routes/routes'
import '../../styles/banner.css'

const SLIDE_DURATION = 7500
const TRANSITION_MS = 1200

const SLIDES = [
  {
    eyebrow: 'Give a helping hand for a child',
    title: 'Lend a helping hand to those who need it',
    copy: 'Join Manavsewa Trust in creating safer homes, stronger classrooms, and brighter futures.',
    image: '/images/banner/slide-1.png',
    effect: 'curtain',
    textEffect: 'words',
  },
  {
    eyebrow: 'Education at the right time',
    title: 'Every child deserves a chance to learn and grow',
    copy: 'Your support funds school, care, and the opportunities that should never wait.',
    image: '/images/banner/slide-2.png',
    effect: 'iris',
    textEffect: 'mask',
  },
  {
    eyebrow: 'Together we can do more',
    title: 'A little kindness can change a whole life',
    copy: 'Stand with families, women, and elders who need dignity, care, and hope.',
    image: '/images/banner/slide-3.png',
    effect: 'shutter',
    textEffect: 'zoom',
  },
]

function getDirection(from, to) {
  const forward = (to - from + SLIDES.length) % SLIDES.length
  return forward === 1 ? 1 : -1
}

function SlideTitle({ title, effect }) {
  if (effect === 'words') {
    return title.split(' ').map((word, index) => (
      <span className="banner-word" key={`${word}-${index}`}>
        <span style={{ animationDelay: `${280 + index * 70}ms` }}>{word}</span>
      </span>
    ))
  }

  if (effect === 'mask') {
    return (
      <span className="banner-mask-right" style={{ animationDelay: '220ms' }}>
        {title}
      </span>
    )
  }

  return (
    <span className="banner-soft-zoom" style={{ animationDelay: '180ms' }}>
      {title}
    </span>
  )
}

export default function HomeBanner() {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState(null)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const remainingRef = useRef(SLIDE_DURATION)

  const goTo = useCallback((index) => {
    const next = (index + SLIDES.length) % SLIDES.length
    setActive((current) => {
      if (next === current) return current
      remainingRef.current = SLIDE_DURATION
      setDirection(getDirection(current, next))
      setPrev(current)
      return next
    })
  }, [])

  useEffect(() => {
    remainingRef.current = SLIDE_DURATION
  }, [active])

  useEffect(() => {
    if (prev === null) return undefined
    const timer = window.setTimeout(() => setPrev(null), TRANSITION_MS)
    return () => window.clearTimeout(timer)
  }, [prev, active])

  useEffect(() => {
    if (paused) return undefined

    const startedAt = Date.now()
    const timer = window.setTimeout(() => {
      remainingRef.current = SLIDE_DURATION
      setActive((current) => {
        const next = (current + 1) % SLIDES.length
        setDirection(1)
        setPrev(current)
        return next
      })
    }, remainingRef.current)

    return () => {
      window.clearTimeout(timer)
      remainingRef.current = Math.max(
        0,
        remainingRef.current - (Date.now() - startedAt),
      )
    }
  }, [active, paused])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') goTo(active + 1)
      if (event.key === 'ArrowLeft') goTo(active - 1)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [active, goTo])

  const slide = SLIDES[active]

  return (
    <section
      className="home-banner relative isolate overflow-hidden bg-primary text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Manavsewa Trust highlights"
    >
      <div className="absolute inset-0">
        {SLIDES.map((item, index) => {
          const isActive = index === active
          const isPrev = index === prev

          return (
            <div
              key={item.image}
              className={`banner-slide banner-slide--${item.effect} ${
                isActive ? 'is-active' : ''
              } ${isPrev ? 'is-prev' : ''} ${direction < 0 ? 'is-rtl' : ''}`}
              style={{
                zIndex: isActive ? 2 : isPrev ? 1 : 0,
                visibility: isActive || isPrev ? 'visible' : 'hidden',
              }}
              aria-hidden={!isActive}
            >
              <img
                src={item.image}
                alt=""
                loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'}
                className={`h-full w-full object-cover ${
                  isActive ? `banner-ken-${index + 1}` : 'scale-105'
                }`}
              />
              <div className="absolute inset-0 bg-linear-to-r from-primary/75 via-primary/40 to-primary/15" />
              <div className="absolute inset-0 bg-linear-to-t from-primary/55 via-transparent to-primary/10" />
            </div>
          )
        })}

        {slide.effect === 'curtain' ? (
          <span key={`edge-${active}`} className="banner-gold-edge" />
        ) : null}
        <span key={`sheen-${active}`} className="banner-sheen" />
      </div>

      <div className="custom_container relative z-10 flex h-full items-center py-10 pb-28 sm:py-16 sm:pb-24">
        <div key={active} className="max-w-3xl">
          <p
            className="banner-eyebrow text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary sm:text-sm sm:tracking-[0.28em]"
            style={{ animationDelay: '80ms' }}
          >
            {slide.eyebrow}
          </p>
          <span
            className="banner-draw mt-4 block h-px w-16 bg-secondary sm:mt-5"
            style={{ animationDelay: '220ms' }}
          />
          <h1 className="home-banner-copy mt-5 font-display text-[1.85rem] font-extrabold leading-[1.15] tracking-tight text-white sm:mt-7 sm:text-5xl lg:text-[4.25rem]">
            <SlideTitle title={slide.title} effect={slide.textEffect} />
          </h1>
          <p
            className={`mt-4 max-w-xl text-[15px] leading-relaxed text-white/80 sm:mt-6 sm:text-lg ${
              slide.textEffect === 'zoom' ? 'banner-soft-zoom' : 'banner-mask-right'
            }`}
            style={{ animationDelay: '520ms' }}
          >
            {slide.copy}
          </p>

          <div className="banner-soft-zoom mt-7 sm:mt-10" style={{ animationDelay: '680ms' }}>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <NavLink
                to={getAboutPageRoute()}
                className="group inline-flex w-fit items-center justify-center gap-2 bg-secondary px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary transition-colors duration-300 hover:bg-white sm:px-7 sm:py-3.5 sm:text-[12px] sm:tracking-[0.18em]"
              >
                Join With Us
                <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </NavLink>
              <NavLink
                to={getContactPageRoute()}
                className="inline-flex w-fit items-center justify-center gap-2 border border-white/30 px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-secondary hover:text-secondary sm:px-7 sm:py-3.5 sm:text-[12px] sm:tracking-[0.18em]"
              >
                Donate Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>

        <div className="custom_container absolute inset-x-0 bottom-4 z-10 flex items-end justify-between gap-4 sm:bottom-8 sm:gap-6">
          <div className="flex items-center gap-4">
            <span
              key={active}
              className="banner-counter font-display text-sm font-bold tracking-[0.2em] text-white/80"
            >
              {String(active + 1).padStart(2, '0')}
              <span className="mx-2 text-white/30">/</span>
              {String(SLIDES.length).padStart(2, '0')}
            </span>
            <div className="hidden h-px w-24 overflow-hidden bg-white/20 sm:block">
              <div
                key={active}
                className={`h-full w-full bg-secondary banner-progress ${
                  paused ? 'is-paused' : ''
                }`}
              />
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => goTo(active - 1)}
              className="grid size-10 place-items-center border border-white/20 text-white transition-colors duration-300 hover:border-secondary hover:text-secondary sm:size-11"
              aria-label="Previous slide"
            >
              <ArrowLeftIcon className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => goTo(active + 1)}
              className="grid size-10 place-items-center border border-white/20 text-white transition-colors duration-300 hover:border-secondary hover:text-secondary sm:size-11"
              aria-label="Next slide"
            >
              <ArrowRightIcon className="size-4" />
            </button>
          </div>
        </div>

        <div className="banner-scroll-hint pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
            Scroll
          </span>
          <span className="h-8 w-px bg-secondary/80" />
        </div>
    </section>
  )
}
