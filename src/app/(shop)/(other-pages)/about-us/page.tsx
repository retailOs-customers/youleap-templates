import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import { VectorArrowDown2 } from '@/components/vector-arrow-down'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

const Page = () => {
  return (
    <div className="container mt-16 pb-16 sm:mt-24 lg:mt-28">
      {/* SECTION1 */}
      <div className="flex flex-col justify-between gap-8 overflow-hidden lg:flex-row lg:gap-6 xl:gap-2.5">
        <div className="flex flex-2/3 flex-col gap-20 md:gap-24 lg:gap-28 xl:gap-32">
          <div className="relative">
            <Heading level={1} fontSize="text-7xl lg:text-8xl 2xl:text-9xl font-medium" className="relative w-fit">
              <span>אודות </span>
              <span data-slot="italic">אנחנו</span>

              <VectorArrowDown2 className="absolute -end-32 top-1/2 hidden h-20 sm:block sm:h-32 lg:-end-16 2xl:top-2/3" />
            </Heading>
          </div>

          <div className="mt-auto flex flex-col gap-8 sm:flex-row lg:gap-6 xl:gap-2.5">
            <div className="flex-1/2 xl:flex-1/3">
              <Image
                src={'/images/skincare/face-3-3.webp'}
                width={494}
                height={529}
                alt={'תכונה-1-2'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="flex flex-1/2 sm:justify-center xl:flex-2/3">
              <div className="max-w-sm self-end">
                <Text>הפילוסופיה הפשוטה שלנו בכל מה שאנחנו עושים. אנחנו נלהבים מטיפוח העור, אנחנו אמיתיים.</Text>
                <br />
                <Text>
                  אנחנו צוות של אנשים נלהבים שמאמינים בכוחם של חומרים טבעיים וביכולתם לשנות את העור שלך. המשימה שלנו היא
                  לספק לך את המוצרים הטובים ביותר שהם לא רק יעילים אלא גם בטוחים עבורך ועבור הסביבה.
                </Text>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1/3">
          <video
            src="/vids/shoe-hero.mp4"
            width={494}
            height={529}
            className="w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="mt-24 sm:mt-28 lg:mt-40">
        <Heading level={2} bigger>
          מידע מעניין <br />
          על <span data-slot="italic">חנות הביטפן!</span>
        </Heading>
        <div className="mt-14 flex flex-col justify-between gap-10 lg:flex-row">
          <div className="flex-4/9">
            <div className="">
              <Image
                src={'/images/skincare/feature-1.webp'}
                width={700}
                height={440}
                alt={'תכונה-1-2'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="flex-5/9 self-end">
            <div className="mx-auto max-w-sm">
              <Text className="mt-8">
                Drawing from our rich ayurvedic legacy of over 30 years and embracing dermal science, we aim to create
                transparent skincare that is incredibly effective.
              </Text>

              <div className="mt-24">
                <Heading bigger>
                  <span>+40</span>
                  {` `}
                  <span data-slot="dim">years</span>
                </Heading>
                <Text className="mt-8">
                  Our simple philosophy in all that we do. We are passionate about skin care, we are truekind.
                </Text>
              </div>

              <div className="mt-11">
                <Heading bigger>
                  <span>+5000</span>
                  {` `}
                  <span data-slot="dim">clients</span>
                </Heading>
                <Text className="mt-8">We aim to create, safe and without harming the environment or the planet.</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
