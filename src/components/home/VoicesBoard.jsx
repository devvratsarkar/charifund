import Reveal from '../ui/Reveal'

const VOICES = [
  {
    quote: 'My daughter returned to school with a bag that felt like a promise.',
    name: 'Anjali Sharma',
    role: 'Parent, education program',
    wide: true,
  },
  {
    quote: 'The camp came to our lane. We did not have to choose between fare and medicine.',
    name: 'Ramesh Yadav',
    role: 'Grandfather, medical camp',
    wide: false,
  },
  {
    quote: 'I give a little each month. Charifund writes back with names, not slogans.',
    name: 'Priya Menon',
    role: 'Monthly donor, Bengaluru',
    wide: false,
  },
]

export default function VoicesBoard() {
  return (
    <section className="relative overflow-x-hidden bg-cream py-16 sm:py-20 lg:py-24">
      <div className="custom_container">
        <Reveal className="max-w-2xl">
          <p className="cf-kicker text-primary">
            <span className="cf-index">06</span>
            Letters, not captions
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-5xl">
            People the work belongs to
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:mt-16 lg:grid-cols-2">
          {VOICES.map((voice, index) => (
            <Reveal
              key={voice.name}
              delay={index * 110}
              variant={index === 0 ? 'left' : 'up'}
              className={`voice-card border border-primary/8 bg-white p-7 sm:p-9 ${
                voice.wide ? 'lg:col-span-2 lg:grid lg:grid-cols-[auto_1fr] lg:items-end lg:gap-16' : ''
              }`}
            >
              <p className="cf-quote-mark text-[4.5rem] sm:text-[5.5rem]">“</p>
              <div className={voice.wide ? 'lg:pb-2' : ''}>
                <blockquote
                  className={`-mt-6 font-serif leading-[1.35] text-primary ${
                    voice.wide ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-2xl'
                  }`}
                >
                  {voice.quote}
                </blockquote>
                <p className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.18em] text-secondary">
                  {voice.name}
                </p>
                <p className="mt-1 text-sm text-black">{voice.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
