import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiMail, FiPhone } from 'react-icons/fi'
import { HiArrowNarrowRight } from 'react-icons/hi'
import BrandLogo from './BrandLogo'
import PrimaryMenu from './PrimaryMenu'
import { getContactPageRoute } from '../../../routes/routes'

export default function PrimaryHeader() {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="relative z-20">
        <div className="site-masthead">
          <div className="custom_container flex h-10 min-w-0 items-center justify-between gap-3 text-[11px] font-semibold tracking-[0.06em]">
            <p className="min-w-0 truncate uppercase tracking-[0.12em] text-white/80">
              Manav Sewa Health and Education Trust
            </p>

            <div className="flex shrink-0 items-center">
              <span className="site-chip hidden md:inline-flex">Reg. No. 185</span>
              <span className="mx-3 hidden h-3 w-px bg-white/15 lg:block" />
              <p className="hidden whitespace-nowrap text-white/55 lg:block">
                PAN AAHTM8926G
                <span className="mx-2.5 text-white/20">·</span>
                NITI Aayog DL/2022/0315852
              </p>
              <span className="mx-3 hidden h-3 w-px bg-white/15 sm:block" />
              <a
                href="tel:01142542612"
                className="site-mast-link hidden sm:inline-flex shrink-0"
              >
                <FiPhone className="size-3.5 shrink-0 text-secondary" />
                011-42542612
              </a>
              <span className="mx-3 hidden h-3 w-px bg-white/15 sm:block" />
              <a
                href="mailto:info@manavsewa.org.in"
                className="site-mast-link inline-flex min-w-0"
              >
                <FiMail className="size-3.5 shrink-0 text-secondary" />
                <span className="truncate">Info@manavsewa.org.in</span>
              </a>
            </div>
          </div>
        </div>

        <div className="site-header-bar">
          <div
            className={`custom_container flex items-center justify-between gap-3 transition-[height] duration-300 lg:grid lg:grid-cols-[auto_1fr_auto] lg:gap-8 ${
              isScrolled ? 'h-16' : 'h-16 sm:h-20'
            }`}
          >
            <BrandLogo onNavigate={closeMenu} />

            <PrimaryMenu
              className="hidden items-center justify-center gap-8 lg:flex xl:gap-10"
              itemClassName={({ isActive }) =>
                `site-nav-link ${isActive ? 'is-active' : ''}`
              }
            />

            <div className="flex shrink-0 items-center gap-3 sm:gap-4">
              <a href="tel:01142542612" className="site-call">
                <span className="site-call-icon">
                  <FiPhone className="size-4" />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-black">
                    Call us
                  </span>
                  <span className="mt-1.5 text-sm font-bold text-primary">
                    011-42542612
                  </span>
                </span>
              </a>

              <NavLink to={getContactPageRoute()} className="site-donate">
                Donate Now
                <HiArrowNarrowRight className="size-3.5" />
              </NavLink>

              <button
                type="button"
                className={`site-menu-btn ${isOpen ? 'is-open' : ''}`}
                onClick={() => setIsOpen((open) => !open)}
                aria-expanded={isOpen}
                aria-controls="site-overlay"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                <span className="relative block h-3.5 w-5">
                  <span
                    className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${
                      isOpen ? 'top-1.5 rotate-45' : 'top-0'
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1.5 h-px w-full bg-current transition-opacity duration-300 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`absolute left-0 h-px w-full bg-current transition-all duration-300 ${
                      isOpen ? 'top-1.5 -rotate-45' : 'top-3'
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="site-overlay"
        className={`site-overlay lg:hidden ${isOpen ? 'is-open' : ''}`}
      >
        <div className="custom_container relative flex min-h-full flex-col justify-between py-8">
          <PrimaryMenu
            className="flex flex-col"
            itemClassName={({ isActive }) =>
              `site-overlay-link ${isActive ? 'is-active' : ''}`
            }
            onNavigate={closeMenu}
          />

          <div>
            <div className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
              <a
                href="mailto:info@manavsewa.org.in"
                className="inline-flex items-center gap-2 hover:text-secondary"
              >
                <FiMail className="size-4 text-secondary" />
                Info@manavsewa.org.in
              </a>
              <a
                href="tel:01142542612"
                className="inline-flex items-center gap-2 hover:text-secondary"
              >
                <FiPhone className="size-4 text-secondary" />
                011-42542612
              </a>
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45">
              Reg. No. 185
              <span className="mx-2 text-white/20">·</span>
              PAN AAHTM8926G
              <span className="mx-2 text-white/20">·</span>
              NITI Aayog DL/2022/0315852
            </p>
            <NavLink
              to={getContactPageRoute()}
              onClick={closeMenu}
              className="site-overlay-donate"
            >
              Donate Now
              <HiArrowNarrowRight className="size-4" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}
