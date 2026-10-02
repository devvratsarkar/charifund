import { NavLink } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import {
  EIGHTY_G_PDF,
  PAYU_URL,
  REGISTRATION_PDF,
  getAboutPageRoute,
  getAccountDonationRoute,
  getContactPageRoute,
  getLiveCaseRoute,
  getGalleryPageRoute,
  getHomePageRoute,
  getNgoDarpanRoute,
  getPanCardRoute,
  getProgramPageRoute,
  getSuccessCaseRoute,
  getUpiDonationRoute,
} from '../../../routes/routes'
import { PROGRAMS } from '../../../data/site'

export const NAV_ITEMS = [
  { label: 'Home', to: getHomePageRoute(), end: true },
  { label: 'About Us', to: getAboutPageRoute() },
  {
    label: 'Support a Life',
    highlight: true,
    children: [
      { label: 'Live Case', to: getLiveCaseRoute(), highlight: true },
      { label: 'Success Case', to: getSuccessCaseRoute() },
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

export const ACTION_ITEMS = [
  {
    label: 'Donate Now',
    cta: 'donate',
    children: [
      { label: 'Donate With Account', to: getAccountDonationRoute() },
      { label: 'Net Banking / Card', href: PAYU_URL },
      { label: 'Donate With UPI', to: getUpiDonationRoute() },
    ],
  },
  {
    label: 'Sponsor Now',
    cta: 'sponsor',
    to: getProgramPageRoute(),
    children: PROGRAMS.map((program) => ({
      label: program.shortTitle,
      to: getProgramPageRoute(program.slug),
    })),
  },
]

export const ALL_NAV_ITEMS = [...NAV_ITEMS, ...ACTION_ITEMS]

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

function DropdownTrigger({ item, className, showChevron = true }) {
  const chevron = showChevron ? <FiChevronDown className="site-cta-caret size-3" /> : null

  if (item.to) {
    return (
      <NavLink to={item.to} className={({ isActive }) => `${className} ${isActive ? 'is-active' : ''}`}>
        {item.label}
        {chevron}
      </NavLink>
    )
  }

  return (
    <span className={className}>
      {item.label}
      {chevron}
    </span>
  )
}

export default function PrimaryMenu({
  className = '',
  itemClassName,
  onNavigate,
  variant = 'desktop',
  items = NAV_ITEMS,
}) {
  if (variant === 'overlay') {
    return (
      <nav className={className} aria-label="Primary">
        {items.map((item) =>
          item.cta ? (
            <div key={item.label} className="site-overlay-group site-overlay-cta-group">
              <MenuLink
                item={item.to || item.href ? item : { ...item, to: item.children?.[0]?.to }}
                onNavigate={onNavigate}
                className={`site-overlay-cta site-overlay-cta--${item.cta}`}
              />
              {item.children ? (
                <div className="site-overlay-sub">
                  {item.children.map((child) => (
                    <MenuLink
                      key={child.label}
                      item={child}
                      onNavigate={onNavigate}
                      className={`site-overlay-sublink${child.highlight ? ' site-overlay-live' : ''}`}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          ) : (
            <div key={item.label} className="site-overlay-group">
              <MenuLink
                item={item.to || item.href ? item : { ...item, to: item.children?.[0]?.to }}
                onNavigate={onNavigate}
                className={({ isActive }) =>
                  `${typeof itemClassName === 'function' ? itemClassName({ isActive }) : itemClassName} ${
                    item.highlight ? 'site-overlay-live' : ''
                  }`
                }
              />
              {item.children ? (
                <div className="site-overlay-sub">
                  {item.children.map((child) => (
                    <MenuLink
                      key={child.label}
                      item={child}
                      onNavigate={onNavigate}
                      className={`site-overlay-sublink${child.highlight ? ' site-overlay-live' : ''}`}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          ),
        )}
      </nav>
    )
  }

  if (variant === 'cta') {
    return (
      <nav className={className} aria-label="Quick actions">
        {items.map((item) => (
          <div key={item.label} className="site-dropdown site-dropdown--end site-header-cta-wrap">
            <DropdownTrigger
              item={item}
              className={`site-header-cta site-header-cta--${item.cta} site-dropdown-trigger`}
            />
            {item.children ? (
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
            ) : null}
          </div>
        ))}
      </nav>
    )
  }

  return (
    <nav className={className} aria-label="Primary">
      {items.map((item, index) =>
        item.children ? (
          <div
            key={item.label}
            className={`site-dropdown ${index >= items.length - 3 ? 'site-dropdown--end' : ''}`}
          >
            <DropdownTrigger
              item={item}
              className={`${itemClassName ? itemClassName({ isActive: false }) : ''} site-dropdown-trigger${
                item.highlight ? ' site-nav-live' : ''
              }`}
            />
            <div className="site-dropdown-menu">
              {item.children.map((child) => (
                <MenuLink
                  key={child.label}
                  item={child}
                  onNavigate={onNavigate}
                  className={`site-dropdown-link${child.highlight ? ' site-nav-live' : ''}`}
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
