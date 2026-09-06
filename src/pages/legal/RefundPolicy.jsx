import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'
import { ORG } from '../../data/site'

export default function RefundPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Return & Refund Policy"
        copy="Refunds are considered within 48 hours of making a donation or before claiming your receipt, whichever happens first."
        image="/images/backgrounds/slider-1-3.jpg"
      />
      <section className="bg-white py-16 sm:py-20">
        <Reveal className="custom_container max-w-3xl space-y-5 text-sm leading-relaxed text-black sm:text-base">
          <p>
            Refunds will be considered only if the request is made within 48 hours of making a donation or before claiming your receipt which ever happens first.
          </p>
          <p>
            Manav Sewa Health and Education Trust accepts sponsorship from donors and sells handicraft items made by the under privileged children. The amounts raised from the above goes into various welfare schemes run by the organization solely for the development of the socio economic status of these children. However, a refund/replacement can be made if the customer establishes that the quality of product delivered is not good.
          </p>
          <p>
            When you donate to any of our causes/services you can claim a refund for the amount donated till the time you have not claimed the receipt or within 48hrs of making the donation whichever happens first. If you are, for any reason, not entirely happy with your cause, we will cheerfully issue a full refund. To request a refund, simply contact us at {ORG.email} with the details of your donation within 48hrs of making the donation. All Amounts received, are utilized for the different cases/ causes and specialized treatments of specially-abled children. Please include your transaction ID (sent to you via email after your donation was successful) and optionally tell us why you’re requesting a refund – we take customer feedback very seriously and use it to constantly improve our quality of service. Refunds are being processed within 21 days period.
          </p>
        </Reveal>
      </section>
    </>
  )
}
