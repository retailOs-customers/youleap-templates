import { Divider } from '@/components/divider'
import FeatureSection2 from '@/components/sections/feature-section-2'
import FeatureSection3 from '@/components/sections/feature-section-3'
import HeroSection3 from '@/components/sections/hero-section-3'
import SectionCollectionCarousel from '@/components/sections/section-collection-carousel'
import SectionProductCarousel from '@/components/sections/section-product-carousel'
import { getCollections, getGroupCollections } from '@/data'
import clsx from 'clsx'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'אופנה',
  description: 'גלו את הטרנדים האחרונים באופנה וסטייל עם האוסף המובחר שלנו של בגדים, אביזרים ועוד.',
}

export default async function Home() {
  let collections = await getCollections('fashion')
  let groupCollections = await getGroupCollections('fashion')

  return (
    <div>
      <HeroSection3 />

      <SectionCollectionCarousel className="container mt-14 sm:mt-28 lg:mt-28" groupCollections={groupCollections} />

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
        heading={`תרבות היא <span data-slot="italic">יותר</span> ממערכת <span data-slot="italic">של</span> מסמכים`}
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
          src: '/images/fashion/feature-1.png',
          width: 644,
          height: 653,
          alt: 'תכונת-אופנה-1',
        }}
      />

      <div className="container mt-24 sm:mt-28 lg:mt-40">
        <Divider />
      </div>

      <FeatureSection3
        className="mt-14 sm:mt-28 lg:mt-32"
        heading={`גלו את העיצובים האקסקלוסיביים שלנו, המשולבים עם <span data-slot="italic">אלגנטיות נצחית.</span>`}
        collection1={{
          title: 'אוסף ניו יורק <br /><span data-slot="italic">מהדורה.</span>',
          desciption: 'גלו את האוסף האקסקלוסיבי שלנו של צעיפי מודל מודפסים, מעוצבים להעלות את הסטייל שלכם',
          images: [
            '/images/fashion/newyork.jpg',
            '/images/fashion/newyork-1.jpg',
            '/images/fashion/newyork-2.jpg',
            '/images/fashion/newyork-3.jpg',
          ],
        }}
        collection2={{
          title: 'ארון הבגדים <br /> <span data-slot="italic">של האמן.</span>',
          desciption: 'גלו את האוסף האקסקלוסיבי שלנו של צעיפי מודל מודפסים, מעוצבים להעלות את הסטייל שלכם',
          images: [
            '/images/fashion/NewYork-3.png',
            '/images/fashion/p1.jpg',
            '/images/fashion/p2.jpg',
            '/images/fashion/p3.jpg',
          ],
        }}
      />
    </div>
  )
}
