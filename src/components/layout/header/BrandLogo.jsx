import { NavLink } from 'react-router-dom'
import { getHomePageRoute } from '../../../routes/routes'

export default function BrandLogo({ onNavigate }) {
  return (
    <NavLink
      to={getHomePageRoute()}
      onClick={onNavigate}
      aria-label="Charifund home"
      className="group flex items-center gap-3.5"
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-md border border-secondary/70 bg-primary">
        <span className="font-display text-[1.35rem] font-extrabold leading-none text-secondary">
          C
        </span>
      </span>

      <span className="flex flex-col">
        <span className="font-display text-[1.55rem] font-extrabold leading-none tracking-[-0.03em] text-primary">
          Charifund
        </span>
        <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-black">
          Charitable Trust
        </span>
      </span>
    </NavLink>
  )
}
