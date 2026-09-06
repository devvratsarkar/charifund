import { NavLink } from 'react-router-dom'
import { getHomePageRoute } from '../../../routes/routes'
import { ORG } from '../../../data/site'

export default function BrandLogo({ onNavigate }) {
  return (
    <NavLink
      to={getHomePageRoute()}
      onClick={onNavigate}
      aria-label={`${ORG.name} home`}
      className="site-brand"
    >
      <img src={ORG.logo} alt={ORG.legalName} />
    </NavLink>
  )
}
