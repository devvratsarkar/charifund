import BankDetails from '../../components/shared/BankDetails'
import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'

export default function UpiDonationPage() {
  return (
    <>
      <PageHero
        eyebrow="Donate With UPI"
        title="UPI Donation"
        copy="Scan the QR or use the bank details below to send your gift."
        image="/images/upi.jpeg"
      />
      <section className="bg-cream py-16 sm:py-20">
        <div className="custom_container grid items-start gap-8 lg:grid-cols-2">
          <Reveal className="bg-white p-6 shadow-[0_16px_40px_rgba(18,47,42,0.08)]">
            <img src="/images/upi.jpeg" alt="Manav Sewa UPI QR" className="mx-auto w-full max-w-md object-contain" />
          </Reveal>
          <BankDetails />
        </div>
      </section>
    </>
  )
}
