import { FaLeaf, FaHeart } from 'react-icons/fa'
import AboutSection from '../../components/home/AboutSection'
import DonateBand from '../../components/home/DonateBand'
import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'
import { MISSION, VISION } from '../../data/site'

const VALUES = [
  {
    title: 'Our Mission',
    copy: MISSION,
    Icon: FaHeart,
  },
  {
    title: 'Our Vision',
    copy: VISION,
    Icon: FaLeaf,
  },
]

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About Manav Sewa"
        copy="Helping each other can make the world better. We rebuild dignity through education, healthcare, and care for the most vulnerable."
        image="/images/about/about-1-1.png"
      />

      <AboutSection />

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
        <span className="cf-orb -right-8 top-10 size-40 bg-secondary/20" />
        <div className="custom_container">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-secondary">
            Manav Sewa Story
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-5xl">
              Our mission and vision
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {VALUES.map((value, index) => (
              <Reveal
                key={value.title}
                variant="scale"
                delay={index * 90}
                className="bg-white p-6 shadow-[0_16px_40px_rgba(18,47,42,0.08)] sm:p-8"
              >
                <span className="grid size-12 place-items-center bg-primary text-secondary">
                  <value.Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-extrabold text-primary">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black">{value.copy}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} className="mt-10 overflow-hidden">
            <img src="/images/story-1-1.jpg" alt="Manav Sewa story" className="h-72 w-full object-cover sm:h-[28rem]" />
          </Reveal>
        </div>
      </section>

      <DonateBand />
    </>
  )
}
