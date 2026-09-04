import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Keyboard, Parallax } from 'swiper/modules'
import { ArrowLeftIcon, ArrowRightIcon } from '../ui/AllSVG'
import { getAboutPageRoute, getContactPageRoute } from '../../routes/routes'
import 'swiper/css'
import 'swiper/css/effect-fade'
import '../../styles/banner.css'

const AUTO_DELAY = 7200

const SLIDES = [
  {
    index: '01',
    chapter: 'Shelter',
    eyebrow: 'Give a helping hand for a child',
    title: 'Lend a helping hand to those who need it',
    copy: 'Join Manavsewa Trust in creating safer homes, stronger classrooms, and brighter futures.',
    image: '/images/banner/slide-1.png',
    reveal: 'curtain',
    ken: 1,
  },
  {
    index: '02',
    chapter: 'Education',
    eyebrow: 'Education at the right time',
    title: 'Every child deserves a chance to learn and grow',
    copy: 'Your support funds school, care, and the opportunities that should never wait.',
    image: '/images/banner/slide-2.png',
    reveal: 'iris',
    ken: 2,
  },
  {
    index: '03',
    chapter: 'Dignity',
    eyebrow: 'Together we can do more',
    title: 'A little kindness can change a whole life',
    copy: 'Stand with families, women, and elders who need dignity, care, and hope.',
    image: '/images/banner/slide-3.png',
    reveal: 'shutter',
    ken: 3,
  },
]

function TitleWords({ title }) {
  return title.split(' ').map((word, index) => (
    <span key={`${word}-${index}`} className="banner-word">
      <span style={{ animationDelay: `${160 + index * 68}ms` }}>{word}</span>
    </span>
  ))
}

export default function HomeBanner() {
  const swiperRef = useRef(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const current = SLIDES[active]

  const goTo = (index) => {
    swiperRef.current?.slideToLoop(index)
  }

  const goPrev = (event) => {
    event.preventDefault()
    event.stopPropagation()
    goTo((active - 1 + SLIDES.length) % SLIDES.length)
  }

  const goNext = (event) => {
    event.preventDefault()
    event.stopPropagation()
    goTo((active + 1) % SLIDES.length)
  }

  return (
    <section
      className="home-banner relative isolate flex flex-col overflow-hidden bg-primary text-white"
      aria-roledescription="carousel"
      aria-label="Manavsewa Trust highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="banner-frame" aria-hidden="true">
        <span className="banner-frame-corner banner-frame-corner--tl" />
        <span className="banner-frame-corner banner-frame-corner--tr" />
        <span className="banner-frame-corner banner-frame-corner--bl" />
        <span className="banner-frame-corner banner-frame-corner--br" />
      </div>
      <p className="banner-spine" aria-hidden="true">
        Manavsewa Trust
      </p>

      <Swiper
        className="banner-swiper"
        modules={[Autoplay, EffectFade, Keyboard, Parallax]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        parallax
        speed={1300}
        loop
        preventClicks={false}
        preventClicksPropagation={false}
        touchStartPreventDefault={false}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: AUTO_DELAY,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
      >
        {SLIDES.map((slide, index) => (
          <SwiperSlide key={slide.index}>
            <div className="banner-slide-inner">
              <div className={`banner-media banner-media--${slide.reveal}`}>
                <img
                  src={slide.image}
                  alt=""
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className={`banner-slide-image banner-ken-${slide.ken}`}
                />
                <span className="banner-sheen" />
                <span className="banner-gold-edge" />
              </div>

              <div className="banner-scrim" />
              <p className="banner-watermark" aria-hidden="true">
                {slide.index}
              </p>

              <div className="custom_container relative z-10 flex h-full items-center py-10 sm:py-16">
                <div className="banner-copy max-w-3xl">
                  <p className="banner-eyebrow">{slide.eyebrow}</p>
                  <span className="banner-rule" />
                  <h1
                    className="banner-title mt-5 font-serif text-[2rem] font-medium leading-[1.12] tracking-tight text-white sm:mt-7 sm:text-5xl lg:text-[4.4rem]"
                    data-swiper-parallax="-70"
                  >
                    <TitleWords title={slide.title} />
                  </h1>
                  <p
                    className="banner-lead mt-4 max-w-xl text-[15px] leading-relaxed text-white/78 sm:mt-6 sm:text-lg"
                    data-swiper-parallax="-36"
                  >
                    {slide.copy}
                  </p>
                  <div className="banner-actions mt-7 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
                    <NavLink
                      to={getAboutPageRoute()}
                      className="cf-cta-sheen group relative inline-flex w-fit overflow-hidden items-center justify-center gap-2 bg-secondary px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary transition-colors duration-300 hover:bg-white sm:px-7 sm:py-3.5 sm:text-[12px] sm:tracking-[0.18em]"
                    >
                      Join With Us
                      <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </NavLink>
                    <NavLink
                      to={getContactPageRoute()}
                      className="inline-flex w-fit items-center justify-center gap-2 border border-white/28 px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:border-secondary hover:bg-secondary/10 hover:text-secondary sm:px-7 sm:py-3.5 sm:text-[12px] sm:tracking-[0.18em]"
                    >
                      Donate Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="banner-controls relative z-20 shrink-0">
        <span
          key={current.index}
          className={`banner-progress ${paused ? 'is-paused' : ''}`}
        />
        <div className="custom_container flex items-center justify-between gap-4 py-3.5 sm:py-4">
          <div className="min-w-0">
            <p className="font-serif text-lg leading-none text-white sm:text-2xl">
              {current.index}
              <span className="mx-2 text-white/25">/</span>
              <span className="text-white/40">{String(SLIDES.length).padStart(2, '0')}</span>
            </p>
            <p className="mt-1 truncate text-[10px] font-extrabold uppercase tracking-[0.2em] text-secondary">
              {current.chapter}
            </p>
          </div>

          <div className="hidden items-center gap-1 md:flex">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.index}
                type="button"
                className={`banner-chapter ${index === active ? 'is-active' : ''}`}
                aria-label={`Go to ${slide.chapter}`}
                aria-current={index === active ? 'true' : undefined}
                onClick={() => goTo(index)}
              >
                <span>{slide.index}</span>
                {slide.chapter}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="banner-nav"
              aria-label="Previous slide"
              onClick={goPrev}
            >
              <ArrowLeftIcon className="size-4" />
            </button>
            <button
              type="button"
              className="banner-nav banner-nav--next"
              aria-label="Next slide"
              onClick={goNext}
            >
              <ArrowRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
