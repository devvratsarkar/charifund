import { Navigate, useParams } from 'react-router-dom'
import DonateBand from '../../components/home/DonateBand'
import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'
import { PROGRAMS } from '../../data/site'

export default function ProgramDetailPage() {
  const { slug } = useParams()
  const program = PROGRAMS.find((item) => item.slug === slug)

  if (!program) {
    return <Navigate to="/program" replace />
  }

  return (
    <>
      <PageHero
        eyebrow={program.category}
        title={program.title}
        copy="Manav Sewa Health and Education Trust"
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
            <img src={program.image} alt={program.title} className="h-full min-h-80 w-full object-cover" />
          </Reveal>
        </div>
      </section>

      <DonateBand />
    </>
  )
}
