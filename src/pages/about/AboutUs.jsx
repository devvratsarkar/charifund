import { FaHandsHelping, FaLeaf, FaShieldAlt, FaHeart } from 'react-icons/fa'
import AboutSection from '../../components/home/AboutSection'
import DonateBand from '../../components/home/DonateBand'
import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'

const VALUES = [
  {
    title: 'Compassion first',
    copy: 'Every program starts with the person in front of us, not a template.',
    Icon: FaHeart,
  },
  {
    title: 'Lasting care',
    copy: 'We build monthly systems so classrooms, clinics, and kitchens never pause.',
    Icon: FaLeaf,
  },
  {
    title: 'Honest giving',
    copy: 'Donors see where funds travel, from a school kit to a medical camp.',
    Icon: FaShieldAlt,
  },
  {
    title: 'Community hands',
    copy: 'Local volunteers, teachers, and families shape every Charifund project.',
    Icon: FaHandsHelping,
  },
]

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="About Charifund"
        copy="We exist so children can learn, families can heal, and communities can stand with dignity."
        image="/images/banner/slide-1.png"
      />

      <AboutSection />

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
        <span className="cf-orb -right-8 top-10 size-40 bg-secondary/20" />
        <div className="custom_container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-secondary">
              What we believe
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-5xl">
              Values that guide every rupee
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, index) => (
              <Reveal
                key={value.title}
                variant="scale"
                delay={index * 90}
                className="bg-white p-6 shadow-[0_16px_40px_rgba(18,47,42,0.08)]"
              >
                <span className="grid size-12 place-items-center bg-primary text-secondary">
                  <value.Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold text-primary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black">{value.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DonateBand />
    </>
  )
}
