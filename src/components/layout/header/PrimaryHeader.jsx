import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FiMail, FiPhone } from 'react-icons/fi'
import { HiArrowNarrowRight } from 'react-icons/hi'
import BrandLogo from './BrandLogo'
import PrimaryMenu from './PrimaryMenu'
import { ORG } from '../../../data/site'
import { RAZORPAY_URL } from '../../../routes/routes'

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
          <div className="site-masthead-inner custom_container">
            <p className="site-mast-ids">
              <span className="site-chip">Reg. No. {ORG.regNo}</span>
              <span className="site-mast-dot" />
              <span>PAN {ORG.pan}</span>
              <span className="site-mast-dot" />
              <span>NITI Aayog {ORG.nitiAayog}</span>
            </p>
            <div className="site-mast-contacts">
              <a href={`tel:${ORG.phone}`} className="site-mast-link">
                <FiPhone className="size-3.5 shrink-0 text-secondary" />
                {ORG.phoneDisplay}
              </a>
              <a href={`mailto:${ORG.email}`} className="site-mast-link">
                <FiMail className="size-3.5 shrink-0 text-secondary" />
                <span className="truncate">{ORG.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="site-header-bar">
          <div
            className={`site-header-inner custom_container ${
              isScrolled ? 'is-compact' : ''
            }`}
          >
            <BrandLogo onNavigate={closeMenu} />

            <div className="site-header-actions">
              <a href={RAZORPAY_URL} target="_blank" rel="noreferrer" className="site-donate">
                Donate Now
                <HiArrowNarrowRight className="size-3.5" />
              </a>

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

          <div className="site-header-nav-wrap">
            <PrimaryMenu
              className="site-header-nav custom_container"
              itemClassName={({ isActive }) =>
                `site-nav-link ${isActive ? 'is-active' : ''}`
              }
            />
          </div>
        </div>
      </div>

      <div
        id="site-overlay"
        className={`site-overlay lg:hidden ${isOpen ? 'is-open' : ''}`}
      >
        <div className="custom_container relative flex min-h-full flex-col justify-between py-8">
          <PrimaryMenu
            variant="overlay"
            className="flex flex-col"
            itemClassName={({ isActive }) =>
              `site-overlay-link ${isActive ? 'is-active' : ''}`
            }
            onNavigate={closeMenu}
          />

          <div>
            <div className="grid gap-3 text-sm text-white/70 sm:grid-cols-2">
              <a href={`mailto:${ORG.email}`} className="inline-flex items-center gap-2 hover:text-secondary">
                <FiMail className="size-4 text-secondary" />
                {ORG.email}
              </a>
              <a href={`tel:${ORG.phone}`} className="inline-flex items-center gap-2 hover:text-secondary">
                <FiPhone className="size-4 text-secondary" />
                {ORG.phoneDisplay}
              </a>
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45">
              Reg. No. {ORG.regNo}
              <span className="mx-2 text-white/20">·</span>
              PAN {ORG.pan}
              <span className="mx-2 text-white/20">·</span>
              NITI Aayog {ORG.nitiAayog}
            </p>
            <a
              href={RAZORPAY_URL}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="site-overlay-donate"
            >
              Donate Now
              <HiArrowNarrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
