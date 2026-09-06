import { NavLink } from 'react-router-dom'
import { RAZORPAY_URL } from '../../routes/routes'
import { SUPPORT_CAUSES } from '../../data/site'
import Reveal from '../ui/Reveal'

export default function GiftLedger() {
  return (
    <section className="relative overflow-x-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="custom_container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="cf-kicker text-primary justify-center">
            <span className="cf-index">03</span>
            Worldwide non profit charity
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Give a Helping Hand For Needy People
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2">
          {SUPPORT_CAUSES.map((cause, index) => (
            <Reveal key={cause.title} delay={index * 90} className="group relative min-h-64 overflow-hidden">
              <img src={cause.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/35 to-transparent" />
              <a
                href={RAZORPAY_URL}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-x-0 bottom-0 p-6 text-white"
              >
                <h3 className="font-display text-2xl font-extrabold">{cause.title}</h3>
                <p className="mt-1 text-sm text-secondary">{cause.collected}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
