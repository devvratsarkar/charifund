import PageHero from '../../components/layout/PageHero'
import Reveal from '../../components/ui/Reveal'
import { GALLERY } from '../../data/site'

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Gallery"
        copy="Moments from programmes, camps, and the lives Manav Sewa stands beside."
        image="/images/gallery/g-3.jpeg"
      />
      <section className="bg-cream py-16 sm:py-20">
        <div className="custom_container grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
          {GALLERY.map((src, index) => (
            <Reveal key={src} delay={(index % 8) * 40} className="overflow-hidden">
              <img src={src} alt={`Gallery ${index + 1}`} className="h-44 w-full object-cover sm:h-56 lg:h-64" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
