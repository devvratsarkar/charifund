import BankDetails from '../../components/shared/BankDetails'
import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'
import { CURRENT_CASES } from '../../data/site'

export default function CurrentCasePage() {
  return (
    <>
      <PageHero
        eyebrow="Support a life"
        title="Current Case"
        copy="Children who need treatment, nutrition, and care right now. Your gift can change a life."
        image="/images/backgrounds/subscribe-bg-1-1.jpg"
      />

      <section className="bg-cream py-16 sm:py-20">
        <div className="custom_container grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {CURRENT_CASES.map((item, index) => (
              <Reveal key={item.name} delay={index * 40} className="overflow-hidden bg-white shadow-[0_16px_40px_rgba(18,47,42,0.08)]">
                <img src={item.image} alt={item.name} className="h-64 w-full object-cover object-top" />
                <div className="p-5">
                  <h3 className="font-display text-xl font-extrabold text-primary">{item.name}</h3>
                  <p className="mt-1 text-sm text-black">Suffering — {item.condition}</p>
                  <p className="text-sm text-black">Age — {item.age}</p>
                  <a
                    href={item.details}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary"
                  >
                    View Details
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <BankDetails showTax />
          </div>
        </div>
      </section>
    </>
  )
}
