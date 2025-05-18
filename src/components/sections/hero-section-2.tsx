'use client'

import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import { Button } from '../button'
import { Heading } from '../heading'
import StarSvg from '../star-svg'
import { Text } from '../text'

interface HeroSection2Props {
  className?: string
}

const HeroSection2 = ({ className }: HeroSection2Props) => {
  return (
    <div className={className}>
      <div className="flex min-h-[calc(100vh-5rem)] flex-col-reverse justify-between bg-primary sm:flex-row">
        <div className="flex flex-3/5 justify-center self-end py-16 pr-container pl-6 xl:pb-20">
          <div className="max-w-xl">
            <StarSvg width={48} height={48} />
            <Heading fontSize="text-5xl/none md:text-6xl/none lg:text-7xl/none font-semibold" className="mt-8">
              <span data-slot="italic">הטבע</span> יודע<span data-slot="italic"> מה הוא עושה </span>
            </Heading>
            <Text className="mt-8 max-w-sm">
              מוצרים טבעיים, אמינים ויעילים באמת – כי מגיע לעור שלך את הטוב ביותר, ולכדור הארץ גם.
            </Text>
            <Button
              href={'/collections/all'}
              color="white"
              className="mt-16 w-full max-w-4xl cursor-pointer !border-white py-5 font-medium tracking-wide underline sm:py-6"
            >
              לכל המוצרים
              <div className="absolute right-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white sm:h-12 sm:w-12">
                <ArrowUpRightIcon className="h-4 w-4" />
              </div>
            </Button>
          </div>
        </div>

        <div className="relative flex-2/5">
          <video
            src="/vids/herovid.mp4"
            className="object-cover object-center sm:absolute sm:h-full sm:w-full"
            width={815}
            height={987}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection2
