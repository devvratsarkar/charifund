import Reveal from '../ui/Reveal'
import { NEWS } from '../../data/site'

export default function NewsSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
      <div className="custom_container">
        <Reveal className="max-w-2xl">
          <p className="cf-kicker text-primary">
            <span className="cf-index">05</span>
            Our latest news
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Latest News & Articles From Manav Sewa
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="group bg-white shadow-[0_16px_40px_rgba(18,47,42,0.08)]">
              <div className="relative overflow-hidden">
                <img src={item.image} alt="" className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute top-4 left-4 bg-secondary px-3 py-2 text-center text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary">
                  {item.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-extrabold text-primary">{item.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
