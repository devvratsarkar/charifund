import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'
import { ORG } from '../../data/site'

export default function PanCardPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="PAN Card"
        copy={`PAN ${ORG.pan} · ${ORG.legalName}`}
        image="/images/pan-card.jpeg"
      />
      <section className="bg-cream py-16 sm:py-20">
        <div className="custom_container max-w-3xl">
          <Reveal className="bg-white p-4 shadow-[0_16px_40px_rgba(18,47,42,0.08)] sm:p-8">
            <img src="/images/pan-card.jpeg" alt={`PAN card ${ORG.pan}`} className="w-full object-contain" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
