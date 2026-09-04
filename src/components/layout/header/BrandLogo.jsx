import { NavLink } from 'react-router-dom'
import { getHomePageRoute } from '../../../routes/routes'

export default function BrandLogo({ onNavigate }) {
  return (
    <NavLink
      to={getHomePageRoute()}
      onClick={onNavigate}
      aria-label="Manavsewa Trust home"
      className="group flex items-center gap-2.5 sm:gap-3.5"
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-md border border-secondary/70 bg-primary sm:size-12">
        <span className="font-display text-lg font-extrabold leading-none text-secondary sm:text-[1.35rem]">
          M
        </span>
      </span>

      <span className="flex min-w-0 flex-col">
        <span className="font-display text-[1.15rem] font-extrabold leading-none tracking-[-0.03em] text-primary sm:text-[1.45rem]">
          Manavsewa
        </span>
        <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-black sm:block">
          Trust
        </span>
      </span>
    </NavLink>
  )
}
