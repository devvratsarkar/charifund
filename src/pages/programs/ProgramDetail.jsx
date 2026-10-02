import { Navigate, useParams } from 'react-router-dom'
import DonateBand from '../../components/home/DonateBand'
import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'
import { ORG, PROGRAMS } from '../../data/site'
import { PAYU_URL, getServicesPageRoute } from '../../routes/routes'

export default function ProgramDetailPage() {
  const { slug } = useParams()
  const program = PROGRAMS.find((item) => item.slug === slug)

  if (!program) {
    return <Navigate to={getServicesPageRoute()} replace />
  }

  return (
    <>
      <PageHero
        eyebrow={program.category}
        title={program.title}
        copy={program.excerpt}
        image={program.image}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="custom_container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-secondary">
              {program.category}
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              {program.title}
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-black sm:text-base">
              {program.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            {program.model ? (
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {program.model.map((item) => (
                  <div key={item.title} className="border border-primary/8 bg-cream p-5">
                    <h3 className="font-display text-lg font-extrabold text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-black">{item.copy}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </Reveal>
          <Reveal variant="clip" delay={120}>
            <img
              src={program.workImage || program.image}
              alt={program.title}
              className="h-full min-h-80 w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {program.pledge ? (
        <section className="bg-cream py-14 sm:py-16">
          <div className="custom_container">
            <Reveal>
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-secondary">
                {program.pledge.eyebrow}
              </p>
              <h3 className="mt-3 max-w-2xl font-serif text-3xl text-primary sm:text-4xl">
                Your contribution can fill a stomach
              </h3>
              <div className="mt-8 flex flex-wrap gap-3">
                {program.pledge.amounts.map((amount) => (
                  <a
                    key={amount}
                    href={PAYU_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-w-28 items-center justify-center bg-secondary px-5 py-3 text-[12px] font-extrabold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-secondary"
                  >
                    {amount}
                  </a>
                ))}
              </div>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-black sm:text-base">
                {program.pledge.note}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary/70">
                {ORG.taxNote}
              </p>
            </Reveal>
          </div>
        </section>
      ) : null}

      {program.impacts ? (
        <section className="bg-white py-16 sm:py-20">
          <div className="custom_container">
            <Reveal>
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-secondary">
                Our core campaigns and impact
              </p>
              <h3 className="mt-3 font-serif text-3xl text-primary sm:text-4xl">
                Changing lives and making differences
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black">
                Let us extend the helping hand to those in need.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {program.impacts.map((item, index) => (
                <Reveal key={item.title} delay={index * 70} className="border border-primary/8 bg-cream p-6">
                  <h4 className="font-display text-lg font-extrabold uppercase tracking-[0.06em] text-primary">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-black">{item.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <DonateBand />
    </>
  )
}
