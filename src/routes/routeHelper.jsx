import MainLayout from '../components/layout/MainLayout.jsx'
import HomePage from '../pages/home/Home'
import AboutUsPage from '../pages/about/AboutUs'
import ServicesPage from '../pages/services/Services'
import ContactUsPage from '../pages/contact/ContactUs'
 
import {
  getAboutPageRoute,
  getContactPageRoute,
  getHomePageRoute,
  getServicesPageRoute,
} from './routes'

export const RouterData = [
  {
    element: <MainLayout />,
    children: [
      {
        path: getHomePageRoute(),
        element: <HomePage />,
      },
      {
        path: getAboutPageRoute(),
        element: <AboutUsPage />,
      },
      {
        path: getServicesPageRoute(),
        element: <ServicesPage />,
      },
      {
        path: getContactPageRoute(),
        element: <ContactUsPage />,
      },
    ],
  },
]
