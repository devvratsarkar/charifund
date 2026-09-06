import { NavLink } from 'react-router-dom'
import CausesSection from '../../components/home/CausesSection'
import DonateBand from '../../components/home/DonateBand'
import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'
import { PROGRAMS } from '../../data/site'
import { getProgramPageRoute } from '../../routes/routes'

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our programs"
        title="How we serve"
        copy="Child education, women empowerment, homes for elders, and child sponsorship."
        image="/images/services/child-education.jpg"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="custom_container grid gap-6 md:grid-cols-2">
          {PROGRAMS.map((program, index) => (
            <Reveal
              key={program.slug}
              delay={index * 80}
              className="overflow-hidden bg-cream shadow-[0_16px_40px_rgba(18,47,42,0.08)]"
            >
              <img src={program.image} alt="" className="h-56 w-full object-cover" />
              <div className="p-6">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-secondary">
                  {program.category}
                </p>
                <h3 className="mt-2 font-display text-2xl font-extrabold text-primary">{program.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black">{program.excerpt}</p>
                <NavLink
                  to={getProgramPageRoute(program.slug)}
                  className="mt-5 inline-flex text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary"
                >
                  Read more
                </NavLink>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CausesSection />
      <DonateBand />
    </>
  )
}
