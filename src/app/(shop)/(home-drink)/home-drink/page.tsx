import FeatureSection3 from '@/components/sections/feature-section-3'
import FeatureSectionHome from '@/components/sections/feature-section-home'
import HeroFHeightVideo from '@/components/sections/hero-f-height-video'
import SectionHomeCollectionCarousel from '@/components/sections/section-home-collection-carousel'
import SectionProductCarouselHome from '@/components/sections/section-product-carousel-home'
import { getDrinkCollections, getDrinkGroupCollections, TDrinkCollection, TDrinkGroupCollection } from '@/data'
import clsx from 'clsx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'משקאות',
  description: 'עולם של משקאות מגוון ומגוון',
}

export default async function Home() {
  const collections: TDrinkCollection[] = await getDrinkCollections()
  const groupCollections: TDrinkGroupCollection[] = await getDrinkGroupCollections()

  return (
    <div>
      <HeroFHeightVideo />
      <SectionHomeCollectionCarousel className="mt-16" groupCollections={groupCollections} />
      <FeatureSectionHome className="container mt-14 sm:mt-36" />
      {collections
        ?.filter((_, i) => i < 1)
        .map((collection, index) => (
          <SectionProductCarouselHome
            key={collection.id}
            className={clsx('container', index === 0 ? 'mt-14 sm:mt-44' : 'mt-36')}
            products={collection.products}
            collectionTitle={collection.title}
            collectionHandle={collection.handle}
            collectionDescription={collection.description}
          />
        ))}
      <FeatureSection3
        className="mt-14 sm:mt-28 lg:mt-32"
        heading={`גלו את המשקאות האקסקלוסיביים שלנו, המשולבים עם <span data-slot="italic">טעמים ייחודיים.</span>`}
        collection1={{
          title: 'אוסף יינות מובחרים <br /><span data-slot="italic">מהעולם.</span>',
          desciption: 'גלו את מבחר היינות האדומים והלבנים שלנו, שנבחרו בקפידה מכל העולם.',
          images: [
            '/images/drink/product-1.jpg',
            '/images/drink/product-2.jpg',
            '/images/drink/product-3.jpg',
            '/images/drink/product-4.jpg',
          ],
        }}
        collection2={{
          title: 'משקאות חריפים <br /><span data-slot="italic">ובירות איכותיות.</span>',
          desciption: 'הכירו את מגוון המשקאות החריפים והבירות שלנו, לאירועים מיוחדים ולכל ערב.',
          images: [
            '/images/drink/product-5.jpg',
            '/images/drink/product-6.jpg',
            '/images/drink/product-7.jpg',
            '/images/drink/product-8.jpg',
          ],
        }}
      />
    </div>
  )
}
