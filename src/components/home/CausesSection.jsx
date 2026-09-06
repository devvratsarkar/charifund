import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { HiArrowLeft, HiArrowRight, HiArrowNarrowRight } from 'react-icons/hi'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { getProgramPageRoute } from '../../routes/routes'
import { PROGRAMS } from '../../data/site'
import 'swiper/css'
import 'swiper/css/pagination'
import '../../styles/causes.css'

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

function CauseCard({ program }) {
  return (
    <NavLink to={getProgramPageRoute(program.slug)} className="group causes-card causes-card--photo">
      <span className="causes-photo">
        <img src={program.image} alt="" />
        <span className="causes-tag">{program.category}</span>
      </span>
      <h3 className="mt-5 font-display text-[1.25rem] font-extrabold tracking-tight text-primary sm:text-2xl">
        {program.shortTitle}
      </h3>
      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-black sm:text-sm">{program.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary sm:mt-6">
        Donation details
        <HiArrowNarrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    </NavLink>
  )
}

export default function CausesSection() {
  const [sectionRef, visible] = useInView()
  const swiperRef = useRef(null)

  return (
    <section
      ref={sectionRef}
      className={`causes-section relative overflow-x-hidden bg-cream py-12 sm:py-16 lg:py-24 ${
        visible ? 'is-visible' : ''
      }`}
    >
      <span className="cf-orb -right-10 top-8 size-40 bg-secondary/20" />
      <div className="custom_container">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="causes-rise inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-secondary sm:tracking-[0.22em]"
            style={{ animationDelay: '80ms' }}
          >
            <FaHandHoldingHeart className="size-4" />
            Help & Donate Us
          </p>
          <h2
            className="causes-rise mt-3 font-display text-[1.65rem] font-extrabold tracking-tight text-primary sm:text-4xl lg:text-5xl"
            style={{ animationDelay: '180ms' }}
          >
            Our Programmes
          </h2>
          <p
            className="causes-rise mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-black sm:text-base"
            style={{ animationDelay: '280ms' }}
          >
            Child education, women empowerment, old-age care, and child sponsorship — the work of Manav Sewa Trust.
          </p>
        </div>

        <div className="causes-rise causes-slider relative mt-8 sm:mt-14" style={{ animationDelay: '380ms' }}>
          <Swiper
            className="causes-swiper"
            modules={[Autoplay, Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            loop
            speed={800}
            spaceBetween={16}
            slidesPerView={1}
            autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{
              el: '.causes-pagination',
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 18 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
          >
            {[...PROGRAMS, ...PROGRAMS].map((program, index) => (
              <SwiperSlide key={`${program.slug}-${index}`}>
                <CauseCard program={program} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="causes-toolbar">
            <button
              type="button"
              className="causes-nav-prev"
              aria-label="Previous programme"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <HiArrowLeft className="size-4 sm:size-5" />
            </button>
            <div className="causes-pagination" />
            <button
              type="button"
              className="causes-nav-next"
              aria-label="Next programme"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <HiArrowRight className="size-4 sm:size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
