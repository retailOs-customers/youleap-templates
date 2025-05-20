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
  sectonTitle = 'מצאו את הסגנון הייחודי שלכם, ואלפי <br /> מותגים.',
  groupCollections,
}: SectionCollectionCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...emblaOptions,
    direction: 'rtl',
  })
  const [groupSelected, setGroupSelected] = useState<string>(groupCollections?.[0].handle || '')
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = useCarouselArrowButtons(emblaApi)

  // Add refs for animated heading lines
  const headingLinesRef = useRef<(HTMLSpanElement | null)[]>([])
  const headingContainerRef = useRef<HTMLDivElement>(null)
  const buttonsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Heading animation
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
        toggleActions: 'play none none reset',
      },
    })

    // Buttons animation
    const buttons = buttonsContainerRef.current?.querySelectorAll('button')
    if (buttons) {
      gsap.set(buttons, { opacity: 0, y: 20 })
      gsap.to(buttons, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: buttonsContainerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reset',
        },
      })
    }

    // Drag-to-scroll for mobile
    const container = buttonsContainerRef.current
    let isDown = false
    let startX = 0
    let scrollLeft = 0

    function handlePointerDown(e: PointerEvent) {
      // Only enable on mobile (max-width: 767px)
      if (window.innerWidth >= 768) return
      isDown = true
      container?.classList.add('dragging')
      startX = e.pageX - (container?.offsetLeft || 0)
      scrollLeft = container?.scrollLeft || 0
      container?.setPointerCapture(e.pointerId)
    }
    function handlePointerMove(e: PointerEvent) {
      if (!isDown || !container) return
      const x = e.pageX - container.offsetLeft
      const walk = (x - startX) * -1 // reverse direction for RTL
      container.scrollLeft = scrollLeft + walk
    }
    function handlePointerUp(e: PointerEvent) {
      isDown = false
      container?.classList.remove('dragging')
      container?.releasePointerCapture(e.pointerId)
    }
    container?.addEventListener('pointerdown', handlePointerDown)
    container?.addEventListener('pointermove', handlePointerMove)
    container?.addEventListener('pointerup', handlePointerUp)
    container?.addEventListener('pointerleave', handlePointerUp)

    return () => {
      container?.removeEventListener('pointerdown', handlePointerDown)
      container?.removeEventListener('pointermove', handlePointerMove)
      container?.removeEventListener('pointerup', handlePointerUp)
      container?.removeEventListener('pointerleave', handlePointerUp)
    }
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
                dangerouslySetInnerHTML={{ __html: 'מצאו את הסגנון הייחודי' }}
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
        <div
          ref={buttonsContainerRef}
          className="no-scrollbar flex gap-2 overflow-x-auto px-2 pb-4 sm:px-0 sm:pb-2 md:flex-wrap md:overflow-x-visible md:pb-0"
        >
          {groupCollections?.map((group) => (
            <Button
              key={group.handle}
              onClick={() => setGroupSelected(group.handle)}
              // @ts-ignore
              outline={groupSelected !== group.handle}
              className="shrink-0"
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
