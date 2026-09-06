import { useState } from 'react'

export default function SubscribeBand() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section className="relative isolate overflow-hidden bg-primary py-16 sm:py-20">
      <img
        src="/images/backgrounds/subscribe-bg-1-1.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-primary/78" />
      <div className="custom_container relative z-10 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="cf-kicker">Stay close to the work</p>
          <h2 className="mt-4 font-serif text-4xl text-white sm:text-5xl">Subscribe Now</h2>
        </div>
        {sent ? (
          <p className="font-display text-lg font-extrabold text-secondary">Thank you. We will keep you posted.</p>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              required
              type="email"
              name="email"
              placeholder="enter your email"
              className="min-w-0 flex-1 border border-white/15 bg-white/10 px-4 py-3.5 text-sm text-white outline-none placeholder:text-white/45 focus:border-secondary"
            />
            <button
              type="submit"
              className="bg-secondary px-6 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary"
            >
              Subscribe now
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
