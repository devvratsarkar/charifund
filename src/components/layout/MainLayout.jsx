import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PrimaryHeader from './header/PrimaryHeader.jsx'
import PageLoader from './PageLoader.jsx'
import PageTransition from './PageTransition.jsx'
import ScrollProgress from './ScrollProgress.jsx'
import SiteFooter from './SiteFooter.jsx'

export default function MainLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="min-h-svh bg-cream text-black">
      <PageLoader />
      <ScrollProgress />
      <PrimaryHeader />
      <main>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <SiteFooter />
    </div>
  )
}
