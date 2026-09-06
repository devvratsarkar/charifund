import { NavLink } from 'react-router-dom'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { RAZORPAY_URL, getContactPageRoute } from '../../routes/routes'
import Reveal from '../ui/Reveal'

export default function DonateBand() {
  return (
    <section className="relative isolate overflow-hidden bg-primary py-16 sm:py-20 lg:py-24">
      <img
        src="/images/backgrounds/donation-bg-1-1.png"
        alt=""
        className="cf-hero-photo absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-primary/82" />
      <span className="cf-cta-sheen pointer-events-none absolute inset-0" />

      <div className="custom_container relative z-10 grid items-end gap-10 lg:grid-cols-[1.3fr_auto]">
        <Reveal>
          <p className="cf-kicker">
            <span className="cf-index text-white/35">06</span>
            Help & donate us
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.15] text-white sm:text-6xl">
            Leave a quiet mark on someone’s tomorrow.
          </h2>
        </Reveal>
        <Reveal variant="right" delay={140} className="flex flex-wrap gap-3">
          <a
            href={RAZORPAY_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center bg-secondary text-[12px] font-extrabold uppercase tracking-[0.16em] text-primary"
          >
            <span className="px-6 py-3.5">Donate Now</span>
            <span className="grid size-12 place-items-center bg-white text-primary transition-transform duration-300 group-hover:translate-x-0.5">
              <HiArrowNarrowRight className="size-5" />
            </span>
          </a>
          <NavLink
            to={getContactPageRoute()}
            className="inline-flex items-center border border-white/25 px-6 py-3.5 text-[12px] font-extrabold uppercase tracking-[0.16em] text-white"
          >
            Contact Us
          </NavLink>
        </Reveal>
      </div>
    </section>
  )
}
