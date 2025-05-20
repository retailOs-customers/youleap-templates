'use client'

import { getGroupCollections } from '@/data'
import { useCarouselArrowButtons } from '@/hooks/use-carousel-arrow-buttons'
import type { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../button'
import CarouselCollections from '../carousel-collections'
import { Heading } from '../heading'

interface SectionHomeCollectionCarouselProps {
  emblaOptions?: EmblaOptionsType
  className?: string
  sectonTitle?: string
  groupCollections: Awaited<ReturnType<typeof getGroupCollections>>
}

// example data
const ex_group_collections = [
  {
    name: 'Most Popular',
    handle: 'most-popular',
    collections: [
      // list your collection data
    ],
  },
  // ...
]

const SectionHomeCollectionCarousel = ({
  emblaOptions = {
    slidesToScroll: 'auto',
  },
  className,
  sectonTitle = 'מצאו את <span data-slot="italic">הסגנון הייחודי</span> שלכם, ואלפי <br /> מותגים.',
  groupCollections,
}: SectionHomeCollectionCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...emblaOptions,
    direction: 'rtl',
  })
  const [groupSelected, setGroupSelected] = useState<string>(groupCollections?.[0].handle || '')
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = useCarouselArrowButtons(emblaApi)

  // Add refs for animated heading lines
  const headingLinesRef = useRef<(HTMLSpanElement | null)[]>([])
  const headingContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.set(headingLinesRef.current, { opacity: 0, y: 40, scale: 0.9 })
    gsap.to(headingLinesRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      stagger: 0.25,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: headingContainerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  }, [])

  return (
    <div className={className}>
      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        <div className="w-full text-center" ref={headingContainerRef}>
          <Heading bigger level={2}>
            <span className="masking-text">
              <span
                className="line text-3xl sm:text-4xl xl:text-5xl/none"
                ref={(el) => {
                  headingLinesRef.current[0] = el
                }}
                dangerouslySetInnerHTML={{ __html: 'מצאו את הסגנון הייחודי שלכם' }}
              />
            </span>
            <span className="masking-text">
              <span
                className="line text-4xl font-bold sm:text-5xl xl:text-6xl/none"
                ref={(el) => {
                  headingLinesRef.current[1] = el
                }}
                dangerouslySetInnerHTML={{ __html: 'מתוך אלפי מותגים' }}
              />
            </span>
          </Heading>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {groupCollections?.map((group) => (
            <Button
              key={group.handle}
              onClick={() => setGroupSelected(group.handle)}
              // @ts-ignore
              outline={groupSelected !== group.handle}
            >
              {group.title}
            </Button>
          ))}
        </div>

        {/* <NextPrevButtons
          className="ms-auto xl:ms-0"
          onNextClick={onNextButtonClick}
          onPrevClick={onPrevButtonClick}
          nextBtnDisabled={nextBtnDisabled}
          prevBtnDisabled={prevBtnDisabled}
        /> */}
      </div>

      <CarouselCollections
        className="mt-8"
        emblaRef={emblaRef}
        collections={groupCollections?.find((group) => group.handle === groupSelected)?.collections || []}
      />
    </div>
  )
}

export default SectionHomeCollectionCarousel
