import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowRightIcon, MailIcon, PhoneIcon } from '../../ui/AllSVG'
import BrandLogo from './BrandLogo'
import PrimaryMenu from './PrimaryMenu'
import { getContactPageRoute } from '../../../routes/routes'

export default function PrimaryHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  const desktopItemClassName = ({ isActive }) =>
    `relative px-1 pb-1.5 text-[15px] font-semibold tracking-wide transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-center after:scale-x-0 after:bg-secondary after:transition-transform after:duration-300 ${
      isActive
        ? 'text-primary after:scale-x-100'
        : 'text-black hover:text-primary hover:after:scale-x-100'
    }`

  const mobileItemClassName = ({ isActive }) =>
    `flex items-center justify-between border-b border-primary/8 py-4 text-[17px] font-semibold tracking-wide ${
      isActive ? 'text-primary' : 'text-black'
    }`

  return (
    <header className="sticky top-0 z-50">
      <div className="h-0.5 bg-secondary" />

      <div
        className={`overflow-hidden bg-primary text-white/80 transition-all duration-300 ${
          isScrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="custom_container flex h-10 items-center justify-between gap-3 text-[11px] font-semibold tracking-[0.08em]">
          <div className="flex min-w-0 items-center gap-0">
            <a
              href="mailto:info@icchashaktitrust.org"
              className="flex min-w-0 items-center gap-2 truncate transition-colors hover:text-secondary"
            >
              <MailIcon className="size-3.5 shrink-0 text-secondary" />
              <span className="truncate">info@icchashaktitrust.org</span>
            </a>
            <span className="mx-4 hidden h-3 w-px bg-white/20 sm:block" />
            <a
              href="tel:01132618471"
              className="hidden items-center gap-2 sm:flex transition-colors hover:text-secondary"
            >
              <PhoneIcon className="size-3.5 shrink-0 text-secondary" />
              011-3261-8471
            </a>
          </div>

          <p className="hidden text-white/55 lg:block">
            NITI Aayog DL/2023/0375461
            <span className="mx-3 text-white/25">|</span>
            Reg. No. 705
            <span className="mx-3 text-white/25">|</span>
            PAN AACTI2510B
          </p>
        </div>
      </div>

      <div
        className={`border-b border-primary/8 bg-white/90 backdrop-blur-xl transition-[height,box-shadow] duration-300 ${
          isScrolled ? 'shadow-[0_12px_40px_rgba(18,47,42,0.08)]' : ''
        }`}
      >
        <div
          className={`custom_container grid grid-cols-[1fr_auto] items-center gap-3 transition-[height] duration-300 lg:grid-cols-[auto_1fr_auto] lg:gap-6 ${
            isScrolled ? 'h-16 sm:h-18' : 'h-16 sm:h-22'
          }`}
        >
          <BrandLogo onNavigate={closeMenu} />

          <PrimaryMenu
            className="hidden items-center justify-center gap-9 lg:flex"
            itemClassName={desktopItemClassName}
          />

          <div className="flex items-center gap-5">
            <a
              href="tel:01132618471"
              className="hidden flex-col leading-none xl:flex"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black">
                Call us
              </span>
              <span className="mt-1.5 text-sm font-bold text-primary">
                011-3261-8471
              </span>
            </a>

            <NavLink
              to={getContactPageRoute()}
              className="group hidden items-center gap-2 bg-secondary px-6 py-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-primary transition-colors duration-300 hover:bg-primary hover:text-white sm:inline-flex"
            >
              Donate Now
              <ArrowRightIcon className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </NavLink>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center border border-primary/10 text-primary lg:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
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

        <div
          className={`lg:hidden overflow-hidden border-t border-primary/8 bg-cream transition-all duration-300 ${
            isOpen ? 'max-h-105 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="custom_container py-2">
            <PrimaryMenu
              className="flex flex-col"
              itemClassName={mobileItemClassName}
              onNavigate={closeMenu}
            />
            <NavLink
              to={getContactPageRoute()}
              onClick={closeMenu}
              className="mt-6 mb-4 inline-flex w-full items-center justify-center gap-2 bg-secondary px-6 py-3.5 text-[12px] font-extrabold uppercase tracking-[0.18em] text-primary"
            >
              Donate Now
              <ArrowRightIcon className="size-3.5" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}
