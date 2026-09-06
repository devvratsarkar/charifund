import { NavLink } from 'react-router-dom'
import { getContactPageRoute } from '../../routes/routes'
import Reveal from '../ui/Reveal'

export default function StoryQuote() {
  return (
    <section
      className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundImage: "url('/images/backgrounds/inspiring-bg-1-1.png')", backgroundSize: 'cover' }}
    >
      <div className="custom_container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left">
          <p className="cf-kicker text-primary">
            <span className="cf-index">02</span>
            Who are we
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-primary sm:text-5xl">
            Inspiring and Helping for Better Lifestyle
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-black sm:text-base">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <NavLink to={getContactPageRoute()} className="bg-primary p-5 text-white">
              <p className="font-display text-lg font-extrabold">Become A Volunteer</p>
            </NavLink>
            <div className="bg-secondary p-5 text-primary">
              <p className="font-display text-lg font-extrabold">Medical & Health</p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          <Reveal variant="clip">
            <img
              src="/images/inspiring/inspiring-1-1.jpg"
              alt="Volunteers helping in the community"
              className="h-56 w-full object-cover sm:h-72 lg:h-[22rem]"
            />
          </Reveal>
          <Reveal variant="clip" delay={120} className="mt-8">
            <img
              src="/images/inspiring/inspiring-1-2.jpg"
              alt="Community care"
              className="h-56 w-full object-cover sm:h-72 lg:h-[22rem]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
