import HomeBanner from '../../components/home/HomeBanner'
import ImpactMarquee from '../../components/home/ImpactMarquee'
import TrustMarks from '../../components/home/TrustMarks'
import AboutSection from '../../components/home/AboutSection'
import ImpactFilm from '../../components/home/ImpactFilm'
import CausesSection from '../../components/home/CausesSection'
import StoryQuote from '../../components/home/StoryQuote'
import GivingPath from '../../components/home/GivingPath'
import EventsSection from '../../components/home/EventsSection'
import GiftLedger from '../../components/home/GiftLedger'
import VoicesBoard from '../../components/home/VoicesBoard'
import VolunteerDesk from '../../components/home/VolunteerDesk'
import DonateBand from '../../components/home/DonateBand'

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <ImpactMarquee />
      <TrustMarks />
      <AboutSection />
      <ImpactFilm />
      <CausesSection />
      <StoryQuote />
      <GivingPath />
      <EventsSection />
      <GiftLedger />
      <VoicesBoard />
      <VolunteerDesk />
      <DonateBand />
    </>
  )
}
