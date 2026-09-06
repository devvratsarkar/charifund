import BankDetails from '../../components/shared/BankDetails'
import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'

export default function AccountDonationPage() {
  return (
    <>
      <PageHero
        eyebrow="Donate With Account"
        title="Account Donation"
        copy="Transfer directly to Manav Sewa Health and Education Trust."
        image="/images/backgrounds/subscribe-bg-1-1.jpg"
      />
      <section className="bg-cream py-16 sm:py-20">
        <div className="custom_container max-w-3xl">
          <Reveal>
            <BankDetails />
          </Reveal>
        </div>
      </section>
    </>
  )
}
