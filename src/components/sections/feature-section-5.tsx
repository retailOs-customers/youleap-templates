import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import Image from 'next/image'

interface FeatureSection5Props {
  className?: string
}

const FeatureSection5 = ({ className }: FeatureSection5Props) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-12">
        <div className="col-span-12 flex flex-col justify-between bg-primary sm:col-span-6 xl:col-span-4">
          <div className="max-w-md p-6 pb-0 lg:p-10 lg:pb-0">
            <Heading fontSize="text-4xl/none sm:text-5xl/none xl:text-6xl/none 2xl:text-7xl/none">
              נקי, מודע, ביצועים
            </Heading>
          </div>
          <Image
            src={'/images/circle-line.png'}
            alt="קו-מעגל"
            width={643}
            height={494}
            className="h-auto w-full"
            priority
          />
          <div className="max-w-md p-6 pt-0 lg:p-10 lg:pt-0">
            <Text>מוצרים כנים לחלוטין שבאמת עובדים, טובים לעור ולכדור הארץ – בלי יוצאים מן הכלל!</Text>
          </div>
        </div>
        <div className="relative col-span-12 aspect-square sm:col-span-6 sm:aspect-[unset] xl:col-span-4">
          <Image
            src={'/images/skincare/hero.jpg'}
            alt="גיבור"
            className="object-cover object-center"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 50vw"
          />
        </div>
        <div className="col-span-12 grid grid-cols-2 xl:col-span-4 xl:block">
          <div className="col-span-2 sm:col-span-1 xl:col-[unset]">
            <Image
              src={'/images/skincare/feature-2.png'}
              alt="תכונה"
              width={640}
              height={599}
              className="h-auto w-full object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 50vw"
              priority
            />
          </div>
          <div className="col-span-2 max-w-xl px-6 pt-10 pb-7 sm:col-span-1 lg:px-10 xl:col-[unset]">
            <Heading>
              שקיפות מוחלטת. <br />
              <span data-slot="italic">תוצאות</span> מוחלטות.
            </Heading>
            <Text className="mt-7">
              טיפוח עור עם נוגדי חמצון, חומרים מתחדשים ומשקמים בעור ברמות pH יציבות שלא מבטיחות ניסים, אלא מביאות תוצאות
              אמיתיות.
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection5
