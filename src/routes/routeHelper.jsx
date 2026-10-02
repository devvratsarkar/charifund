import { Navigate } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout.jsx'
import HomePage from '../pages/home/Home'
import AboutUsPage from '../pages/about/AboutUs'
import ServicesPage from '../pages/services/Services'
import ProgramDetailPage from '../pages/programs/ProgramDetail'
import ContactUsPage from '../pages/contact/ContactUs'
import LiveCasePage from '../pages/support/LiveCase'
import SuccessCasePage from '../pages/support/SuccessCase'
import DonatePage from '../pages/donate/Donate'
import AccountDonationPage from '../pages/donate/AccountDonation'
import UpiDonationPage from '../pages/donate/UpiDonation'
import PanCardPage from '../pages/legal/PanCard'
import NgoDarpanPage from '../pages/legal/NgoDarpan'
import PrivacyPolicyPage from '../pages/legal/PrivacyPolicy'
import TermsPage from '../pages/legal/Terms'
import RefundPolicyPage from '../pages/legal/RefundPolicy'
import GalleryPage from '../pages/gallery/Gallery'

import {
  getAboutPageRoute,
  getAccountDonationRoute,
  getContactPageRoute,
  getLiveCaseRoute,
  getDonatePageRoute,
  getGalleryPageRoute,
  getHomePageRoute,
  getNgoDarpanRoute,
  getPanCardRoute,
  getPrivacyPolicyRoute,
  getProgramPageRoute,
  getRefundPolicyRoute,
  getServicesPageRoute,
  getSuccessCaseRoute,
  getTermsRoute,
  getUpiDonationRoute,
} from './routes'

export const RouterData = [
  {
    element: <MainLayout />,
    children: [
      { path: getHomePageRoute(), element: <HomePage /> },
      { path: getAboutPageRoute(), element: <AboutUsPage /> },
      { path: getServicesPageRoute(), element: <ServicesPage /> },
      { path: getProgramPageRoute(':slug'), element: <ProgramDetailPage /> },
      { path: getLiveCaseRoute(), element: <LiveCasePage /> },
      { path: getSuccessCaseRoute(), element: <SuccessCasePage /> },
      { path: getDonatePageRoute(), element: <DonatePage /> },
      { path: getAccountDonationRoute(), element: <AccountDonationPage /> },
      { path: getUpiDonationRoute(), element: <UpiDonationPage /> },
      { path: getPanCardRoute(), element: <PanCardPage /> },
      { path: getNgoDarpanRoute(), element: <NgoDarpanPage /> },
      { path: getGalleryPageRoute(), element: <GalleryPage /> },
      { path: getContactPageRoute(), element: <ContactUsPage /> },
      { path: getPrivacyPolicyRoute(), element: <PrivacyPolicyPage /> },
      { path: getTermsRoute(), element: <TermsPage /> },
      { path: getRefundPolicyRoute(), element: <RefundPolicyPage /> },
    ],
  },
]
