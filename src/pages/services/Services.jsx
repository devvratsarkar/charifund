import { FiBookOpen, FiCoffee, FiHeart, FiHome } from 'react-icons/fi'
import CausesSection from '../../components/home/CausesSection'
import DonateBand from '../../components/home/DonateBand'
import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'

const STEPS = [
  { step: '01', title: 'Listen', copy: 'We sit with families and teachers to learn what is missing.' },
  { step: '02', title: 'Plan', copy: 'Monthly giving turns those needs into classrooms, meals, and camps.' },
  { step: '03', title: 'Deliver', copy: 'Local teams carry kits, care, and follow-up to the last mile.' },
  { step: '04', title: 'Report', copy: 'You see the work: photos, numbers, and stories from the ground.' },
]

const PROGRAMS = [
  { title: 'Child education', copy: 'Books, tuition, and safe rooms so learning never stops.', Icon: FiBookOpen },
  { title: 'Medical camps', copy: 'Check-ups, medicine, and after-care for children and elders.', Icon: FiHeart },
  { title: 'Healthy meals', copy: 'Warm food that keeps students in class and families together.', Icon: FiCoffee },
  { title: 'Safe shelter', copy: 'Emergency support when a home, winter, or flood takes everything.', Icon: FiHome },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our programs"
        title="How we serve"
        copy="Education, healthcare, food, and shelter — designed as long-term care, not one-day charity."
        image="/images/banner/slide-2.png"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="custom_container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-secondary">
              The Manavsewa way
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-5xl">
              Four steps from need to hope
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((item, index) => (
              <Reveal key={item.step} delay={index * 90} className="border border-primary/8 bg-cream p-6">
                <p className="font-display text-3xl font-extrabold text-secondary">{item.step}</p>
                <h3 className="mt-4 font-display text-xl font-extrabold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-black">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-20">
        <div className="custom_container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary sm:text-5xl">
              Programs that stay
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {PROGRAMS.map((item, index) => (
              <Reveal
                key={item.title}
                variant={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 70}
                className="flex gap-4 bg-white p-6 shadow-[0_16px_40px_rgba(18,47,42,0.08)]"
              >
                <span className="grid size-12 shrink-0 place-items-center border border-primary/12 text-primary">
                  <item.Icon className="size-5" strokeWidth={1.7} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CausesSection />
      <DonateBand />
    </>
  )
}
