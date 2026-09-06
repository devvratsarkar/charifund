import { NavLink } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import {
  EIGHTY_G_PDF,
  RAZORPAY_URL,
  REGISTRATION_PDF,
  getAboutPageRoute,
  getAccountDonationRoute,
  getContactPageRoute,
  getCurrentCaseRoute,
  getGalleryPageRoute,
  getHomePageRoute,
  getNgoDarpanRoute,
  getPanCardRoute,
  getProgramPageRoute,
  getSuccessCaseRoute,
  getUpiDonationRoute,
} from '../../../routes/routes'
import { PROGRAMS } from '../../../data/site'

const NAV_ITEMS = [
  { label: 'Home', to: getHomePageRoute(), end: true },
  { label: 'About Us', to: getAboutPageRoute() },
  {
    label: 'Program',
    to: getProgramPageRoute(),
    children: PROGRAMS.map((program) => ({
      label: program.shortTitle,
      to: getProgramPageRoute(program.slug),
    })),
  },
  {
    label: 'Support a Life',
    children: [
      { label: 'Current Case', to: getCurrentCaseRoute() },
      { label: 'Success Case', to: getSuccessCaseRoute() },
    ],
  },
  {
    label: 'Donate Now',
    children: [
      { label: 'Donate With Account', to: getAccountDonationRoute() },
      { label: 'Net Banking / Card', href: RAZORPAY_URL },
      { label: 'Donate With UPI', to: getUpiDonationRoute() },
    ],
  },
  {
    label: 'Legal',
    children: [
      { label: 'Pan Card', to: getPanCardRoute() },
      { label: 'Ngo Darpan', to: getNgoDarpanRoute() },
      { label: 'Registration Certificate', href: REGISTRATION_PDF },
      { label: 'Save Tax (80G)', href: EIGHTY_G_PDF },
    ],
  },
  { label: 'Gallery', to: getGalleryPageRoute() },
  { label: 'Contact Us', to: getContactPageRoute() },
]

function MenuLink({ item, className, onNavigate }) {
  const resolvedClass =
    typeof className === 'function' ? className({ isActive: false }) : className

  if (item.href) {
    return (
      <a
        href={item.href}
        target={item.href.startsWith('http') ? '_blank' : undefined}
        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
        onClick={onNavigate}
        className={resolvedClass}
      >
        {item.label}
      </a>
    )
  }

  if (!item.to) {
    return <span className={resolvedClass}>{item.label}</span>
  }

  return (
    <NavLink
      to={item.to}
      end={item.end}
      onClick={onNavigate}
      className={({ isActive }) => (typeof className === 'function' ? className({ isActive }) : className)}
    >
      {item.label}
    </NavLink>
  )
}

export default function PrimaryMenu({
  className = '',
  itemClassName,
  onNavigate,
  variant = 'desktop',
}) {
  if (variant === 'overlay') {
    return (
      <nav className={className} aria-label="Primary">
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="site-overlay-group">
            <MenuLink
              item={item.to || item.href ? item : { ...item, to: item.children?.[0]?.to }}
              onNavigate={onNavigate}
              className={itemClassName}
            />
            {item.children ? (
              <div className="site-overlay-sub">
                {item.children.map((child) => (
                  <MenuLink
                    key={child.label}
                    item={child}
                    onNavigate={onNavigate}
                    className="site-overlay-sublink"
                  />
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </nav>
    )
  }

  return (
    <nav className={className} aria-label="Primary">
      {NAV_ITEMS.map((item, index) =>
        item.children ? (
          <div
            key={item.label}
            className={`site-dropdown ${index >= NAV_ITEMS.length - 3 ? 'site-dropdown--end' : ''}`}
          >
            {item.to ? (
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `${itemClassName ? itemClassName({ isActive }) : ''} site-dropdown-trigger`
                }
              >
                {item.label}
                <FiChevronDown className="size-3.5" />
              </NavLink>
            ) : (
              <span className={`${itemClassName ? itemClassName({ isActive: false }) : ''} site-dropdown-trigger`}>
                {item.label}
                <FiChevronDown className="size-3.5" />
              </span>
            )}
            <div className="site-dropdown-menu">
              {item.children.map((child) => (
                <MenuLink
                  key={child.label}
                  item={child}
                  onNavigate={onNavigate}
                  className="site-dropdown-link"
                />
              ))}
            </div>
          </div>
        ) : (
          <MenuLink
            key={item.label}
            item={item}
            onNavigate={onNavigate}
            className={itemClassName}
          />
        ),
      )}
    </nav>
  )
}
