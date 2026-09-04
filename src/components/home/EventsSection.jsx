import { useEffect, useRef, useState } from 'react'
import { FiClock, FiMapPin, FiPlus } from 'react-icons/fi'
import '../../styles/events.css'

const EVENTS = [
  {
    title: 'Let’s Educate Children For a Good Life',
    copy: 'Join families, teachers, and volunteers as we gather books, kits, and care so every child can learn with dignity and joy.',
    date: 'Dec 13, 2024 @ 10:00 am',
    venue: '350 5th Ave, New York, NY 10118, United States',
    image: '/images/banner/slide-1.png',
  },
  {
    title: 'Your Little Help Can Heal Pains',
    copy: 'A community medical camp bringing check-ups, medicine, and comfort to children and families who need care the most.',
    date: 'Jan 18, 2025 @ 09:30 am',
    venue: '350 5th Ave, New York, NY 10118, United States',
    image: '/images/banner/slide-2.png',
  },
  {
    title: 'Give Children the Gift of Education',
    copy: 'Help us open classroom doors with scholarships, meals, and supplies that keep young learners in school for the long run.',
    date: 'Feb 08, 2025 @ 11:00 am',
    venue: '350 5th Ave, New York, NY 10118, United States',
    image: '/images/banner/slide-3.png',
  },
]

function useInView(offset = 0.16) {
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

function EventScribble() {
  return (
    <svg
      className="events-scribble"
      viewBox="0 0 148 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 11.5c12.5-5.5 28-8.2 44.5-7.4 16.8.8 32.4 4.2 49 5.2 14.2.9 32.6.2 48.5-3.8"
        stroke="#FFC107"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function EventCard({ event, active, onSelect }) {
  const onKeyDown = (eventKey) => {
    if (eventKey.key === 'Enter' || eventKey.key === ' ') {
      eventKey.preventDefault()
      onSelect()
    }
  }

  return (
    <article
      className={`events-card ${active ? 'is-active' : ''}`}
      tabIndex={0}
      role="button"
      aria-expanded={active}
      aria-label={event.title}
      onClick={onSelect}
      onKeyDown={onKeyDown}
    >
      <div className="events-collapsed" aria-hidden={active}>
        <img src={event.image} alt="" className="events-collapsed-image" />
        <span className="events-collapsed-shade" />
        <span className="events-plus">
          <FiPlus className="size-4" strokeWidth={2.4} />
        </span>
        <span className="events-collapsed-title">{event.title}</span>
      </div>

      <div className="events-expanded" aria-hidden={!active}>
        <div className="events-expanded-media">
          <img src={event.image} alt="" />
          <span className="events-date">
            <FiClock className="size-3.5 shrink-0" strokeWidth={2.2} />
            {event.date}
          </span>
        </div>
        <div className="events-expanded-body">
          <h3>{event.title}</h3>
          <p>{event.copy}</p>
          <div className="events-venue">
            <span>Venue</span>
            <p>
              <FiMapPin className="mt-0.5 size-3.5 shrink-0" strokeWidth={2.2} />
              {event.venue}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function EventsSection() {
  const [sectionRef, visible] = useInView()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (!visible || paused) return undefined

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % EVENTS.length)
    }, 5600)

    return () => window.clearInterval(timer)
  }, [paused, visible])

  return (
    <section
      ref={sectionRef}
      className={`events-section relative overflow-x-hidden bg-white py-12 sm:py-16 lg:py-24 ${
        visible ? 'is-visible' : ''
      }`}
    >
      <span className="cf-orb -left-8 top-12 size-36 bg-secondary/15" />
      <div className="custom_container">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="events-rise inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-secondary sm:tracking-[0.22em]"
            style={{ animationDelay: '80ms' }}
          >
            <span className="size-1.5 rounded-full bg-secondary" />
            Worldwide Non Profit Charity
          </p>
          <h2
            className="events-rise mt-3 font-display text-[1.85rem] font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl"
            style={{ animationDelay: '180ms' }}
          >
            See Upcoming{' '}
            <span className="relative inline-block">
              Events
              <EventScribble />
            </span>
          </h2>
        </div>

        <div
          className="events-rise events-track-wrap mt-10 sm:mt-14"
          style={{ animationDelay: '320ms' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="events-track">
            {EVENTS.map((event, index) => (
              <EventCard
                key={event.title}
                event={event}
                active={active === index}
                onSelect={() => setActive(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
