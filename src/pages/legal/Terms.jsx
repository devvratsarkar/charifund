import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        copy="By accessing and browsing this website, you accept these Terms and Conditions."
        image="/images/backgrounds/slider-1-1.jpg"
      />
      <section className="bg-white py-16 sm:py-20">
        <Reveal className="custom_container max-w-3xl space-y-5 text-sm leading-relaxed text-black sm:text-base">
          <p>
            You have to abide by the following terms and conditions that are applicable by law if you access and use this website. By accessing and browsing this website, it is understood that you accept, without limitation or qualification, these Terms and Conditions.
          </p>
          <p>
            You agree to use the website only for lawful purposes, and in a manner which does not infringe the rights, or restrict, or inhibit the use and enjoyment of the website by any third party.
          </p>
          <p>
            The content of the pages of this website is for your general information and use only. It is subject to change without notice.
          </p>
          <p>
            Commercial use or publication of all or any item displayed is strictly prohibited without prior authorization from Manav Sewa Health and Education Trust.
          </p>
          <p>
            It is necessary to procure written permission from Manav Sewa Health and Education Trust if you wish to reuse, repost, distribute, modify or use any of the content on its website. Further, you must retain and reproduce each and every copyright notice or other proprietary rights notice contained in any information you download.
          </p>
          <p>
            Manav Sewa Health and Education Trust website may contain trademarks, patents, proprietary information, technologies or other proprietary rights. No license or rights is granted to you to use the above.
          </p>
        </Reveal>
      </section>
    </>
  )
}
