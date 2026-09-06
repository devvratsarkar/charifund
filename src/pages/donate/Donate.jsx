import { NavLink } from 'react-router-dom'
import { HiArrowNarrowRight } from 'react-icons/hi'
import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'
import { ORG } from '../../data/site'
import { getAccountDonationRoute, getUpiDonationRoute, RAZORPAY_URL } from '../../routes/routes'

const WAYS = [
  {
    title: 'Donate With Account',
    copy: 'Transfer directly to the Manav Sewa Health and Education Trust current account at State Bank of India.',
    to: getAccountDonationRoute(),
    external: false,
  },
  {
    title: 'Net Banking / Debit / Credit Card',
    copy: 'Give securely online through Razorpay with net banking, debit card, or credit card.',
    href: RAZORPAY_URL,
    external: true,
  },
  {
    title: 'Donate With UPI',
    copy: 'Scan the UPI QR and send your gift in a few seconds.',
    to: getUpiDonationRoute(),
    external: false,
  },
]

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Give today"
        title="Donate Now"
        copy="Every donation supports education, medical care, and shelter for children, women, and elders."
        image="/images/backgrounds/donation-bg-1-1.png"
      />

      <section className="bg-cream py-16 sm:py-20">
        <div className="custom_container grid gap-5 md:grid-cols-3">
          {WAYS.map((way, index) => {
            const className =
              'group flex h-full flex-col bg-white p-6 shadow-[0_16px_40px_rgba(18,47,42,0.08)] sm:p-8'
            const body = (
              <>
                <h3 className="font-display text-2xl font-extrabold text-primary">{way.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-black">{way.copy}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">
                  Continue
                  <HiArrowNarrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </>
            )

            return (
              <Reveal key={way.title} delay={index * 80}>
                {way.external ? (
                  <a href={way.href} target="_blank" rel="noreferrer" className={className}>
                    {body}
                  </a>
                ) : (
                  <NavLink to={way.to} className={className}>
                    {body}
                  </NavLink>
                )}
              </Reveal>
            )
          })}
        </div>
        <p className="custom_container mt-8 text-center text-sm text-black">{ORG.taxNote}</p>
      </section>
    </>
  )
}
