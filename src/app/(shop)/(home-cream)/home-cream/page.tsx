import FeatureSection2 from '@/components/sections/feature-section-2'
import FeatureSection5 from '@/components/sections/feature-section-5'
import FeatureSectionHome from '@/components/sections/feature-section-home'
import FeatureSectionHome2 from '@/components/sections/feature-section-home2'
import HeroHome from '@/components/sections/hero-home'
import SectionHomeCollectionCarousel from '@/components/sections/section-home-collection-carousel'
import SectionProductCarouselHome from '@/components/sections/section-product-carousel-home'
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
      <FeatureSectionHome className="container mt-14 sm:mt-36" />
      <FeatureSection5 className="container mt-14 sm:mt-36" />
      {collections
        ?.filter((_, i) => i < 1)
        .map((collection, index) => (
          <SectionProductCarouselHome
            key={index}
            className={clsx('container', index === 0 ? 'mt-14 sm:mt-44' : 'mt-36')}
            products={collection?.products}
            collectionTitle={collection?.title}
            collectionHandle={collection?.handle}
            collectionDescription={collection?.description}
          />
        ))}
      <FeatureSectionHome2 className="container mt-14 sm:mt-36" />
      {collections
        ?.filter((_, i) => i < 1)
        .map((collection, index) => (
          <SectionProductCarouselHome
            key={index}
            className={clsx('container', index === 2 ? 'mt-14 sm:mt-44' : 'mt-36')}
            products={collection?.products}
            collectionTitle={collection?.title}
            collectionHandle={collection?.handle}
            collectionDescription={collection?.description}
          />
        ))}
      <FeatureSection2 className="container mt-20 sm:mt-28 lg:mt-32" />
    </div>
  )
}
