import { NavLink } from 'react-router-dom'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { getContactPageRoute } from '../../routes/routes'
import Reveal from '../ui/Reveal'

const GIFTS = [
  {
    amount: '₹800',
    title: 'A school kit',
    copy: 'Books, a bag, and pencils for one child who is waiting to start the term.',
  },
  {
    amount: '₹2,400',
    title: 'A clinic seat',
    copy: 'A full check-up, medicine, and follow-up for a child or elder at our next camp.',
  },
  {
    amount: '₹6,500',
    title: 'A month of meals',
    copy: 'Warm food that keeps a classroom full and a family at the table.',
  },
]

export default function GiftLedger() {
  return (
    <section className="relative overflow-x-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="custom_container">
        <Reveal className="max-w-2xl">
          <p className="cf-kicker text-primary">
            <span className="cf-index">05</span>
            Name a gift
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Choose what your kindness becomes
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px bg-primary/8 sm:mt-16 lg:grid-cols-3">
          {GIFTS.map((gift, index) => (
            <Reveal
              key={gift.title}
              delay={index * 100}
              className="gift-tile group bg-white p-7 sm:p-9"
            >
              <p className="font-serif text-4xl text-primary sm:text-5xl">{gift.amount}</p>
              <span className="cf-rule mt-5 block w-10 bg-secondary" />
              <h3 className="mt-6 font-display text-xl font-extrabold text-primary">{gift.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-black">{gift.copy}</p>
              <NavLink
                to={getContactPageRoute()}
                className="mt-8 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary"
              >
                Give this
                <HiArrowNarrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </NavLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
