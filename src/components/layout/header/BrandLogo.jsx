import { NavLink } from 'react-router-dom'
import { getHomePageRoute } from '../../../routes/routes'

export default function BrandLogo({ onNavigate }) {
  return (
    <NavLink
      to={getHomePageRoute()}
      onClick={onNavigate}
      aria-label="Manavsewa Trust home"
      className="group flex min-w-0 items-center gap-2.5 sm:gap-3.5"
    >
      <span className="relative grid size-10 shrink-0 place-items-center bg-primary sm:size-11">
        <span className="absolute inset-0.75 border border-secondary/55" />
        <span className="font-display text-lg font-extrabold leading-none text-secondary sm:text-xl">
          M
        </span>
      </span>

      <span className="flex min-w-0 flex-col">
        <span className="font-serif text-[1.2rem] leading-none tracking-tight text-primary sm:text-[1.5rem]">
          Manavsewa
        </span>
        <span className="mt-1.5 flex items-center gap-2">
          <span className="h-px w-3.5 bg-secondary sm:w-4" />
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-black">
            Trust
          </span>
        </span>
      </span>
    </NavLink>
  )
}
