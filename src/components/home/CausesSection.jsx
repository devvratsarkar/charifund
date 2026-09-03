import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { FiHeart, FiBookOpen, FiCoffee } from 'react-icons/fi'
import { HiArrowLeft, HiArrowRight, HiArrowNarrowRight } from 'react-icons/hi'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { getServicesPageRoute } from '../../routes/routes'
import 'swiper/css'
import 'swiper/css/pagination'
import '../../styles/causes.css'

const CAUSES = [
  {
    title: 'Medical Care',
    copy: 'Set up a secure and user-friendly online donation platform that accepts multiple payment methods.',
    Icon: FiHeart,
    tone: 'medical',
  },
  {
    title: 'Child Education',
    copy: 'Set up a secure and user-friendly online donation platform that accepts multiple payment methods.',
    Icon: FiBookOpen,
    tone: 'education',
  },
  {
    title: 'Healthy Food',
    copy: 'Set up a secure and user-friendly online donation platform that accepts multiple payment methods.',
    Icon: FiCoffee,
    tone: 'food',
  },
]

function useInView(offset = 0.18) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: offset },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [offset])

  return [ref, visible]
}

function CauseCard({ title, copy, Icon, tone }) {
  return (
    <NavLink to={getServicesPageRoute()} className={`group causes-card causes-card--${tone}`}>
      <span className="causes-icon mb-5 sm:mb-6">
        <Icon className="size-5 sm:size-6" strokeWidth={1.6} />
      </span>
      <h3 className="font-display text-[1.35rem] font-extrabold tracking-tight text-primary sm:text-2xl">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-black sm:text-sm">{copy}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary sm:mt-6">
        Learn more
        <HiArrowNarrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    </NavLink>
  )
}

export default function CausesSection() {
  const [sectionRef, visible] = useInView()

  return (
    <section
      ref={sectionRef}
      className={`causes-section relative bg-cream py-12 sm:py-16 lg:py-24 ${
        visible ? 'is-visible' : ''
      }`}
    >
      <div className="custom_container">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="causes-rise inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-secondary sm:tracking-[0.22em]"
            style={{ animationDelay: '80ms' }}
          >
            <FaHandHoldingHeart className="size-4" />
            Start donating poor people
          </p>
          <h2
            className="causes-rise mt-3 font-display text-[1.65rem] font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl"
            style={{ animationDelay: '180ms' }}
          >
            Charity With Difference
          </h2>
          <p
            className="causes-rise mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-black sm:text-base"
            style={{ animationDelay: '280ms' }}
          >
            Join our monthly giving program to provide consistent support to our
            initiatives. Regular contributions, no matter the size, help us plan
            and sustain long-term projects.
          </p>
        </div>

        <div className="causes-rise causes-slider relative mt-8 sm:mt-14" style={{ animationDelay: '380ms' }}>
          <Swiper
            className="causes-swiper"
            modules={[Autoplay, Navigation, Pagination]}
            loop
            speed={800}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{
              prevEl: '.causes-nav-prev',
              nextEl: '.causes-nav-next',
            }}
            pagination={{
              el: '.causes-pagination',
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 18 },
              1024: { slidesPerView: 3, spaceBetween: 24, loop: false },
            }}
          >
            {CAUSES.map((cause) => (
              <SwiperSlide key={cause.title}>
                <CauseCard {...cause} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="causes-toolbar">
            <button type="button" className="causes-nav-prev" aria-label="Previous cause">
              <HiArrowLeft className="size-4 sm:size-5" />
            </button>
            <div className="causes-pagination" />
            <button type="button" className="causes-nav-next" aria-label="Next cause">
              <HiArrowRight className="size-4 sm:size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
