import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'
import { ORG } from '../../data/site'
import { REGISTRATION_PDF, EIGHTY_G_PDF } from '../../routes/routes'

export default function NgoDarpanPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="NGO Darpan"
        copy={`NITI Aayog unique ID and statutory details of ${ORG.legalName}.`}
        image="/images/pan-card.jpeg"
      />
      <section className="bg-cream py-16 sm:py-20">
        <div className="custom_container grid gap-5 md:grid-cols-3">
          {[
            { label: 'NITI Aayog Unique ID', value: ORG.nitiAayog },
            { label: 'Registration No.', value: ORG.regNo },
            { label: 'PAN', value: ORG.pan },
          ].map((item, index) => (
            <Reveal key={item.label} delay={index * 80} className="bg-white p-6 shadow-[0_16px_40px_rgba(18,47,42,0.08)]">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-secondary">{item.label}</p>
              <p className="mt-3 font-display text-xl font-extrabold text-primary">{item.value}</p>
            </Reveal>
          ))}
        </div>
        <div className="custom_container mt-8 flex flex-wrap gap-3">
          <a href={REGISTRATION_PDF} target="_blank" rel="noreferrer" className="bg-primary px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white">
            Registration Certificate
          </a>
          <a href={EIGHTY_G_PDF} target="_blank" rel="noreferrer" className="bg-secondary px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary">
            80G Certificate
          </a>
        </div>
      </section>
    </>
  )
}
