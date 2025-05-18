'use client'

import NextPrevButtons from '@/components/next-prev-btns'
import { getGroupCollections } from '@/data'
import { useCarouselArrowButtons } from '@/hooks/use-carousel-arrow-buttons'
import type { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../button'
import CarouselCollections from '../carousel-collections'
import { Divider } from '../divider'
import { Heading } from '../heading'
import { Text } from '../text'

interface SectionCollectionCarouselProps {
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

const SectionCollectionCarousel = ({
  emblaOptions = {
    slidesToScroll: 'auto',
  },
  className,
  sectonTitle = 'מצאו את <span data-slot="italic">הסגנון הייחודי</span> שלכם, ואלפי <br /> מותגים.',
  groupCollections,
}: SectionCollectionCarouselProps) => {
  // Tạo ref để truy cập các phương thức của carousel
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
    gsap.set(headingLinesRef.current, { opacity: 0, y: 40 })
    gsap.to(headingLinesRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.18,
      ease: 'power3.out',
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
        <div className="flex-2/3" ref={headingContainerRef}>
          <Heading className="max-w-2xl" bigger level={2}>
            <span className="masking-text">
              <span
                className="line"
                ref={(el) => {
                  headingLinesRef.current[0] = el
                }}
                dangerouslySetInnerHTML={{ __html: 'מצאו את <span data-slot="italic">הסגנון הייחודי</span>' }}
              />
            </span>
            <span className="masking-text">
              <span
                className="line"
                ref={(el) => {
                  headingLinesRef.current[1] = el
                }}
                dangerouslySetInnerHTML={{ __html: 'שלכם, ואלפי <br /> מותגים.' }}
              />
            </span>
          </Heading>
        </div>

        <div className="flex-1/3">
          <Text>קבלו 15% הנחה על ההזמנה הראשונה שלכם!</Text>
          <Button outline href={'/collections/all'} className="mt-4">
            לקנייה עכשיו
          </Button>
        </div>

        <Divider className="block lg:hidden" />
      </div>

      <div className="mt-20 flex flex-wrap items-center justify-between gap-5">
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

        <NextPrevButtons
          className="ms-auto xl:ms-0"
          onNextClick={onNextButtonClick}
          onPrevClick={onPrevButtonClick}
          nextBtnDisabled={nextBtnDisabled}
          prevBtnDisabled={prevBtnDisabled}
        />
      </div>

      <CarouselCollections
        className="mt-10"
        emblaRef={emblaRef}
        collections={groupCollections?.find((group) => group.handle === groupSelected)?.collections || []}
      />
    </div>
  )
}

export default SectionCollectionCarousel
