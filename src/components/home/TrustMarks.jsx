import { NavLink } from 'react-router-dom'
import { FiAward, FiCreditCard, FiFileText, FiShield } from 'react-icons/fi'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Reveal from '../ui/Reveal'
import { ORG } from '../../data/site'
import {
  EIGHTY_G_PDF,
  REGISTRATION_PDF,
  getNgoDarpanRoute,
  getPanCardRoute,
} from '../../routes/routes'

const MARKS = [
  {
    label: 'NITI Aayog',
    value: ORG.nitiAayog,
    hint: 'NGO Darpan',
    to: getNgoDarpanRoute(),
    Icon: FiShield,
  },
  {
    label: 'Registration',
    value: `Reg. No. ${ORG.regNo}`,
    hint: '12A certificate',
    href: REGISTRATION_PDF,
    Icon: FiFileText,
  },
  {
    label: 'PAN',
    value: ORG.pan,
    hint: 'Tax identity',
    to: getPanCardRoute(),
    Icon: FiCreditCard,
  },
  {
    label: 'Tax benefit',
    value: '80G eligible',
    hint: '80G certificate',
    href: EIGHTY_G_PDF,
    Icon: FiAward,
  },
]

function MarkWrap({ to, href, className, children, label }) {
  if (to) {
    return (
      <NavLink to={to} className={className} aria-label={label}>
        {children}
      </NavLink>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className} aria-label={label}>
      {children}
    </a>
  )
}

export default function TrustMarks() {
  return (
    <section id="trust-marks" className="relative z-10 bg-white">
      <div className="custom_container grid -mt-14 grid-cols-2 gap-2.5 pb-10 sm:-mt-[4.5rem] sm:gap-4 sm:pb-12 lg:grid-cols-4 lg:gap-5">
        {MARKS.map((mark, index) => (
          <Reveal key={mark.label} delay={index * 70}>
            <MarkWrap
              to={mark.to}
              href={mark.href}
              label={`View ${mark.label}: ${mark.value}`}
              className="cf-trust-item group flex h-full flex-col items-start gap-3 bg-white px-3.5 py-4 sm:flex-row sm:gap-4 sm:px-5 sm:py-6"
            >
              <span className="grid size-9 shrink-0 place-items-center border border-secondary bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-primary sm:size-11">
                <mark.Icon className="size-3.5 sm:size-4" strokeWidth={2.2} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[9px] font-bold uppercase tracking-[0.12em] text-secondary sm:text-[10px] sm:tracking-[0.18em]">
                  {mark.label}
                </span>
                <span className="mt-1 block break-words font-display text-[12px] font-extrabold leading-snug text-primary sm:mt-1.5 sm:text-[15px]">
                  {mark.value}
                </span>
                <span className="mt-1.5 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.12em] text-black transition-colors duration-300 group-hover:text-primary sm:mt-2 sm:text-[10px] sm:tracking-[0.14em]">
                  {mark.hint}
                  <HiArrowNarrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </span>
            </MarkWrap>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
