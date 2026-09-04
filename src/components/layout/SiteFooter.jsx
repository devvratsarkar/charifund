import { NavLink } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import {
  getAboutPageRoute,
  getContactPageRoute,
  getHomePageRoute,
  getServicesPageRoute,
} from '../../routes/routes'
import Reveal from '../ui/Reveal'

const LINKS = [
  { label: 'Home', to: getHomePageRoute() },
  { label: 'About Us', to: getAboutPageRoute() },
  { label: 'Program', to: getServicesPageRoute() },
  { label: 'Contact Us', to: getContactPageRoute() },
]

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0d221e] text-white">
      <span className="cf-orb -left-10 top-10 size-36 bg-secondary/10" />
      <div className="custom_container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center border border-secondary/70 bg-primary">
              <span className="font-display text-xl font-extrabold text-secondary">C</span>
            </span>
            <span className="font-serif text-2xl text-white">Charifund</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            Charifund exists to educate children, heal families, and restore
            dignity through consistent community care.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-secondary">
            Explore
          </p>
          <ul className="mt-4 space-y-3">
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="text-sm text-white/75 transition-colors hover:text-secondary"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={180}>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-secondary">
            Reach us
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <FiMail className="mt-0.5 size-4 shrink-0 text-secondary" />
              info@icchashaktitrust.org
            </li>
            <li className="flex items-start gap-2">
              <FiPhone className="mt-0.5 size-4 shrink-0 text-secondary" />
              011-3261-8471
            </li>
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 size-4 shrink-0 text-secondary" />
              New Delhi, India
            </li>
          </ul>
        </Reveal>

        <Reveal delay={260}>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-secondary">
            Give today
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            Monthly giving helps us plan meals, classrooms, and medical camps
            with confidence.
          </p>
          <NavLink
            to={getContactPageRoute()}
            className="mt-5 inline-flex bg-secondary px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary"
          >
            Donate Now
          </NavLink>
        </Reveal>
      </div>

      <div className="border-t border-white/10">
        <p className="custom_container py-5 text-center text-xs text-white/45">
          © {new Date().getFullYear()} Charifund Charitable Trust. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
