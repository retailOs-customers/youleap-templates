import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import Image from 'next/image'

interface FeatureSectionHome2Props {
  className?: string
}

const FeatureSectionHome2 = ({ className }: FeatureSectionHome2Props) => {
  return (
    <div className={className}>
      <div className="grid grid-cols-12">
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
        <div className="relative col-span-12 aspect-square sm:col-span-6 sm:aspect-[unset] xl:col-span-4">
          <Image
            src={'/images/skincare/hero.jpg'}
            alt="גיבור"
            className="object-cover object-center"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 50vw"
          />
        </div>
        <div className="col-span-12 flex flex-col justify-between bg-primary sm:col-span-6 xl:col-span-4">
          <div className="flex max-w-md flex-col items-start gap-6 p-6 pb-0 lg:p-10 lg:pb-0">
            <div className="flex flex-col">
              <Heading bigger level={2}>
                פשוט וואוו
              </Heading>

              <Text className="max-w-lg text-xl">
                <span className="line text-center">
                  מוצרים כנים לחלוטין שבאמת עובדים, טובים לעור ולכדור הארץ – בלי יוצאים מן הכלל!
                </span>
              </Text>
            </div>
            <Button outline href="#">
              גלה את הקולקציה
            </Button>
          </div>
          <Image
            src={'/images/circle-line.png'}
            alt="קו-מעגל"
            width={643}
            height={494}
            className="h-auto w-full pb-4"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default FeatureSectionHome2
