import FeatureSection1 from '@/components/sections/feature-section-1'
import FeatureSection2 from '@/components/sections/feature-section-2'
import FeatureSection5 from '@/components/sections/feature-section-5'
import HeroSection2 from '@/components/sections/hero-section-2'
import SectionCollectionCarousel from '@/components/sections/section-collection-carousel'
import SectionProductCarousel from '@/components/sections/section-product-carousel'
import { getCollections, getGroupCollections } from '@/data'
import clsx from 'clsx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'טיפוח',
  description: 'גלו את הטרנדים האחרונים בטיפוח ויופי עם האוסף המובחר שלנו של מוצרים, טיפים ועוד.',
}

export default async function Home() {
  let collections = await getCollections('skincare')
  let groupCollections = await getGroupCollections('skincare')

  return (
    <div>
      <HeroSection2 />

      <SectionCollectionCarousel className="container mt-14 sm:mt-28 lg:mt-28" groupCollections={groupCollections} />

      <FeatureSection1
        className="container mt-24 sm:mt-28 lg:mt-40"
        image1={{
          src: '/images/skincare/feature-1.webp',
          width: 325,
          height: 335,
          alt: 'תכונה-1-1',
        }}
        image2={{
          src: '/images/skincare/feature-6.webp',
          width: 495,
          height: 530,
          alt: 'תכונה-1-2',
        }}
        heading={`נקי, מעבר לכל ספק <span data-slot="italic">טיפוח.</span>`}
      />

      <FeatureSection5 className="mt-24 sm:mt-28 lg:mt-40" />

      {collections
        ?.filter((_, i) => i < 3)
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

      <FeatureSection2
        className="container mt-14 sm:mt-28 lg:mt-32"
        variant="up"
        heading={`נקי, מודע, ביצועים <span data-slot="italic">טיפוח.</span>`}
        faqs={[
          {
            question: 'שקיפות מוחלטת',
            answer:
              'ללא קופסאות שחורות, אין מה להסתיר, אנו חושפים את כל הנוסחאות שלנו, כך שלעולם לא תצטרך לנחש מה יש בהם וכמה.',
          },
          {
            question: 'נקי, מעבר לכל ספק',
            answer: 'אנו מחויבים להשתמש רק בחומרים הבטוחים והיעילים ביותר, ואף פעם לא מתפשרים על איכות.',
          },
          {
            question: 'מודע ואחראי',
            answer: 'אנו מחויבים להשתמש רק בחומרים הבטוחים והיעילים ביותר, ואף פעם לא מתפשרים על איכות.',
          },
          {
            question: 'חזק ורב-תכליתי',
            answer: 'אנו מחויבים להשתמש רק בחומרים הבטוחים והיעילים ביותר, ואף פעם לא מתפשרים על איכות.',
          },
        ]}
        image={{
          src: '/images/skincare/feature-3.png',
          width: 662,
          height: 653,
          alt: 'תכונת-טיפוח-3',
        }}
      />
    </div>
  )
}
