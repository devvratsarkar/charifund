import { useState } from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'

const DETAILS = [
  { label: 'Write to us', value: 'info@icchashaktitrust.org', href: 'mailto:info@icchashaktitrust.org', Icon: FiMail },
  { label: 'Call any time', value: '011-3261-8471', href: 'tel:01132618471', Icon: FiPhone },
  { label: 'Visit', value: 'New Delhi, India', href: null, Icon: FiMapPin },
]

export default function ContactUsPage() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="We are listening"
        title="Contact Manavsewa Trust"
        copy="Ask about a program, volunteer, or start a monthly gift. A teammate will write back."
        image="/images/banner/slide-3.png"
      />

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
        <span className="cf-orb -left-6 bottom-10 size-40 bg-secondary/20" />
        <div className="custom_container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-secondary">
                Reach the team
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                Let’s start a conversation
              </h2>
            </Reveal>
            <div className="mt-8 space-y-4">
              {DETAILS.map((item, index) => (
                <Reveal key={item.label} delay={index * 90} className="flex items-start gap-4 bg-white p-5">
                  <span className="grid size-11 shrink-0 place-items-center bg-primary text-secondary">
                    <item.Icon className="size-4" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-black">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block font-display text-lg font-extrabold text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-display text-lg font-extrabold text-primary">{item.value}</p>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="right" delay={120} className="bg-white p-6 shadow-[0_20px_48px_rgba(18,47,42,0.1)] sm:p-8">
            {sent ? (
              <div className="flex min-h-72 flex-col justify-center">
                <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-secondary">Thank you</p>
                <h3 className="mt-3 font-display text-3xl font-extrabold text-primary">
                  We received your message
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black">
                  A Manavsewa Trust teammate will reply shortly. Until then, thank you for standing with us.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-4">
                <label className="grid gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
                  Full name
                  <input
                    required
                    name="name"
                    className="border border-primary/12 bg-cream px-4 py-3 text-sm font-medium tracking-normal text-primary outline-none focus:border-secondary"
                  />
                </label>
                <label className="grid gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    className="border border-primary/12 bg-cream px-4 py-3 text-sm font-medium tracking-normal text-primary outline-none focus:border-secondary"
                  />
                </label>
                <label className="grid gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-primary">
                  Message
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="resize-none border border-primary/12 bg-cream px-4 py-3 text-sm font-medium tracking-normal text-primary outline-none focus:border-secondary"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 bg-primary px-6 py-3.5 text-[12px] font-extrabold uppercase tracking-[0.16em] text-white transition-colors hover:bg-secondary hover:text-primary"
                >
                  Send message
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
