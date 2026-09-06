import BankDetails from '../../components/shared/BankDetails'
import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'
import { SUCCESS_CASES } from '../../data/site'

export default function SuccessCasePage() {
  const item = SUCCESS_CASES[0]

  return (
    <>
      <PageHero
        eyebrow="Support a life"
        title="Success Case"
        copy="A life that found treatment, care, and a chance to recover."
        image="/images/gallery/g-11.jpeg"
      />

      <section className="bg-cream py-16 sm:py-20">
        <div className="custom_container grid gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal className="overflow-hidden bg-white">
            <img src={item.image} alt={item.name} className="h-96 w-full object-cover" />
            <div className="bg-cream p-6 text-center">
              <h2 className="font-display text-3xl font-extrabold text-primary">{item.name}</h2>
              <p className="mt-2 text-sm text-black">Suffering — {item.condition}</p>
              <p className="text-sm text-black">{item.age}</p>
              <a
                href={item.details}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex bg-primary px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white"
              >
                View Details
              </a>
            </div>
          </Reveal>
          <BankDetails showTax />
        </div>
      </section>
    </>
  )
}
