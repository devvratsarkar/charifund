import { NavLink } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import {
  getAboutPageRoute,
  getContactPageRoute,
  getCurrentCaseRoute,
  getDonatePageRoute,
  getGalleryPageRoute,
  getHomePageRoute,
  getPrivacyPolicyRoute,
  getRefundPolicyRoute,
  getTermsRoute,
  getUpiDonationRoute,
} from '../../routes/routes'
import { ORG } from '../../data/site'
import Reveal from '../ui/Reveal'

const LINKS = [
  { label: 'About Us', to: getAboutPageRoute() },
  { label: 'Current Case', to: getCurrentCaseRoute() },
  { label: 'Gallery', to: getGalleryPageRoute() },
  { label: 'Donate Now', to: getDonatePageRoute() },
  { label: 'Contact Us', to: getContactPageRoute() },
]

const LEGAL = [
  { label: 'Return & Refund', to: getRefundPolicyRoute() },
  { label: 'Terms & Conditions', to: getTermsRoute() },
  { label: 'Privacy Policy', to: getPrivacyPolicyRoute() },
]

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0d221e] text-white">
      <span className="cf-orb -left-10 top-10 size-36 bg-secondary/10" />
      <div className="custom_container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <Reveal>
          <NavLink to={getHomePageRoute()} className="inline-block">
            <img src={ORG.logo} alt={ORG.legalName} className="h-16 w-auto max-w-[280px] object-contain" />
          </NavLink>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
            We help companies develop powerful corporate social responsibility,
            grantmaking, and employee engagement strategies.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-secondary">
            Quick Links
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
            Get in touch
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-0.5 size-4 shrink-0 text-secondary" />
              {ORG.address}
            </li>
            <li className="flex items-start gap-2">
              <FiPhone className="mt-0.5 size-4 shrink-0 text-secondary" />
              <a href={`tel:${ORG.phone}`}>{ORG.phoneDisplay}</a>
            </li>
            <li className="flex items-start gap-2">
              <FiMail className="mt-0.5 size-4 shrink-0 text-secondary" />
              <a href={`mailto:${ORG.email}`}>{ORG.email}</a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={260}>
          <p className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-secondary">
            UPI Donation
          </p>
          <NavLink to={getUpiDonationRoute()} className="mt-4 block">
            <img src="/images/upi.jpeg" alt="UPI donation QR" className="h-36 w-36 object-cover" />
          </NavLink>
        </Reveal>
      </div>

      <div className="border-t border-white/10">
        <div className="custom_container flex flex-col gap-3 py-5 text-center text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>© {new Date().getFullYear()} {ORG.name}. All Rights Reserved.</p>
          <p className="flex flex-wrap justify-center gap-x-3 gap-y-1">
            {LEGAL.map((item, index) => (
              <span key={item.to} className="inline-flex items-center gap-3">
                {index > 0 ? <span className="text-white/20">|</span> : null}
                <NavLink to={item.to} className="hover:text-secondary">
                  {item.label}
                </NavLink>
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  )
}
