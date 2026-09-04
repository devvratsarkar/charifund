import { NavLink } from 'react-router-dom'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { getContactPageRoute } from '../../routes/routes'
import Reveal from '../ui/Reveal'

const ROLES = [
  { title: 'Weekend tutor', detail: 'Two hours. One classroom. Reading that sticks.' },
  { title: 'Camp aide', detail: 'Help a doctor’s desk move with care and calm.' },
  { title: 'Kitchen hand', detail: 'Plate the meal that brings a child back tomorrow.' },
]

export default function VolunteerDesk() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="grid lg:grid-cols-2">
        <Reveal variant="clip" className="relative min-h-[320px] lg:min-h-[560px]">
          <img
            src="/images/banner/slide-2.png"
            alt="Volunteers with children"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/25" />
          <span className="absolute bottom-6 left-6 bg-secondary px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">
            This month’s desk
          </span>
        </Reveal>

        <div className="flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <Reveal>
            <p className="cf-kicker">
              <span className="cf-index text-white/35">07</span>
              Give hours
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-[1.2] text-white sm:text-5xl">
              If you cannot give money, give a morning.
            </h2>
          </Reveal>

          <ul className="mt-10 space-y-0">
            {ROLES.map((role, index) => (
              <Reveal
                key={role.title}
                delay={120 + index * 90}
                className="volunteer-row grid grid-cols-[auto_1fr] gap-5 border-t border-white/12 py-5 last:border-b"
              >
                <span className="font-serif text-sm text-secondary">0{index + 1}</span>
                <div>
                  <p className="font-display text-lg font-extrabold text-white">{role.title}</p>
                  <p className="mt-1 text-sm text-white/65">{role.detail}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={400}>
            <NavLink
              to={getContactPageRoute()}
              className="group mt-10 inline-flex w-fit items-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.16em] text-secondary"
            >
              Offer your time
              <HiArrowNarrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </NavLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
