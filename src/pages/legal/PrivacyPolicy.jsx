import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        copy="How Manav Sewa Health and Education Trust collects, uses, and protects your personal information."
        image="/images/backgrounds/slider-1-2.jpg"
      />
      <section className="bg-white py-16 sm:py-20">
        <Reveal className="custom_container max-w-3xl space-y-5 text-sm leading-relaxed text-black sm:text-base">
          <p>
            The below Privacy Policy is an understanding with you on the collection, use and protection of your personal information. This privacy policy sets out how this website uses and protects any information that you give to us when you use this website. Please read the entire Privacy Policy.
          </p>
          <p>1. Manav Sewa Health and Education Trust collects information from the users in a number of ways, for example when the user:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Contact us for any query / Concern / Remarks</li>
            <li>Makes a donation</li>
            <li>Signs up for a Newsletter to stay updated</li>
          </ul>
          <p>
            While forwarding a donation to Manav Sewa Health and Education Trust, the donors have to submit some personal information as it would help us ensuring genuine contributions:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Your name</li>
            <li>Your Contact information including email address and mailing address</li>
            <li>Your telephone number</li>
            <li>Your payment processing details</li>
            <li>Any other data as required</li>
          </ul>
          <p>
            Manav Sewa Health and Education Trust does not collect or record the user’s personal information unless he/she chooses to provide it.
          </p>
        </Reveal>
      </section>
    </>
  )
}
