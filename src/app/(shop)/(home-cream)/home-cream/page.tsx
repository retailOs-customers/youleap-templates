import { Divider } from '@/components/divider'
import FeatureSection1 from '@/components/sections/feature-section-1'
import FeatureSection2 from '@/components/sections/feature-section-2'
import FeatureSection3 from '@/components/sections/feature-section-3'
import FeatureSection5 from '@/components/sections/feature-section-5'
import HeroHome from '@/components/sections/hero-home'
import SectionCollectionCarousel from '@/components/sections/section-collection-carousel'
import SectionHomeCollectionCarousel from '@/components/sections/section-home-collection-carousel'
import SectionProductCarousel from '@/components/sections/section-product-carousel'
import { getCollections, getGroupCollections } from '@/data'
import clsx from 'clsx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'נעליים',
  description: 'גלו את הטרנדים החמים ביותר בעולם הנעליים עם הקולקציה הנבחרת שלנו של נעליים לנשים, גברים וילדים.',
}

export default async function Home() {
  let collections = await getCollections('shoe')
  let groupCollections = await getGroupCollections('shoe')
  return (
    <div>
      <HeroHome />
      <SectionHomeCollectionCarousel className="mt-16" groupCollections={groupCollections} />
      <FeatureSection5 className="container mt-14 sm:mt-28 lg:mt-28" />
      {collections
        ?.filter((_, i) => i < 1)
        .map((collection, index) => (
          <SectionProductCarousel
            key={index}
            className={clsx('container', index === 0 ? 'mt-14 sm:mt-44' : 'mt-36')}
            products={collection?.products}
            collectionTitle={collection?.title}
            collectionHandle={collection?.handle}
            collectionDescription={collection?.description}
          />
        ))}

      <FeatureSection1 className="container mt-24 sm:mt-28 lg:mt-40" />
      <FeatureSection2 className="container mt-20 sm:mt-28 lg:mt-32" />
      <div className="container mt-24 sm:mt-28 lg:mt-40">
        <Divider />
      </div>
      <FeatureSection3
        className="mt-20 sm:mt-28 lg:mt-32"
        heading={`הנעליים שחייבים בכל ארון – מסטייל יומיומי לנוחות מרבית לאורך כל היום.`}
        collection1={{
          title: '<span data-slot="italic">בד ריון פרימיום</span> לנעליים',
          desciption: 'הבד רך וחלק, נעים על הרגליים, נוח לנעילה ומתאים לכל סגנון לבוש.',
          images: [
            '/images/shoe/premium-rayon-1.webp',
            '/images/shoe/premium-rayon-2.webp',
            '/images/shoe/premium-rayon-3.webp',
            '/images/shoe/premium-rayon-4.webp',
            '/images/shoe/premium-rayon-1.webp',
          ],
        }}
        collection2={{
          title: '<span data-slot="italic">שיפון פרימיום</span> לנעליים',
          desciption: 'תחוו נוחות שאין כמותה עם הנעליים הנושמות שלנו – מושלמות לכל עונה.',
          images: [
            '/images/shoe/essential-modal-1-1.webp',
            '/images/shoe/essential-modal-1-1.webp',
            '/images/shoe/essential-modal-1.webp',
            '/images/shoe/essential-modal-3.webp',
            '/images/shoe/essential-modal-4.webp',
          ],
        }}
      />
      <div className="container mt-20 sm:mt-28 lg:mt-32">
        <Divider />
      </div>
      <SectionCollectionCarousel className="container mt-20" groupCollections={groupCollections} />
    </div>
  )
}
