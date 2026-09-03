import { NavLink } from 'react-router-dom'
import {
  getAboutPageRoute,
  getContactPageRoute,
  getHomePageRoute,
  getServicesPageRoute,
} from '../../../routes/routes'

export const NAV_ITEMS = [
  { label: 'Home', to: getHomePageRoute(), end: true },
  { label: 'About Us', to: getAboutPageRoute() },
  { label: 'Program', to: getServicesPageRoute() },
  { label: 'Contact Us', to: getContactPageRoute() },
]

export default function PrimaryMenu({
  className = '',
  itemClassName,
  onNavigate,
}) {
  return (
    <nav className={className} aria-label="Primary">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.end}
          onClick={onNavigate}
          className={({ isActive }) =>
            itemClassName ? itemClassName({ isActive }) : undefined
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
