import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import StarSvg from '@/components/star-svg'
import { Text } from '@/components/text'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

interface HeroSection3Props {
  className?: string
}

const HeroSection3 = ({ className }: HeroSection3Props) => {
  return (
    <div className="relative flex min-h-dvh w-full">
      <Image src={'/images/fashion/hero-1.png'} alt="גיבור" className="object-cover object-center" fill priority />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative container flex flex-1 pt-20 pb-36">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-y-7 self-center text-center text-white">
          <StarSvg width={48} height={48} color="white" />
          <Heading fontSize="text-5xl/none md:text-6xl/none lg:text-7xl/none 2xl:text-8xl/none font-semibold">
            <span data-slot="italic">איפה</span> יוקרה <br /> מוצאת את <span data-slot="italic">משמעותה.</span>
          </Heading>
          <Text className="max-w-sm">
            מוצרים כנים לחלוטין שבאמת עובדים, טובים לעור ולכדור הארץ – בלי יוצאים מן הכלל!
          </Text>
        </div>
      </div>

      <div className="absolute bottom-14 left-1/2 container max-w-3xl -translate-x-1/2 sm:bottom-20">
        <Button
          href={'/collections/all'}
          color="white"
          className="mt-10 w-full cursor-pointer !border-white py-5 font-medium tracking-wide underline sm:py-6"
        >
          לכל המוצרים
          <div className="absolute right-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white sm:h-12 sm:w-12">
            <ArrowUpRightIcon className="h-4 w-4" />
          </div>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection3
