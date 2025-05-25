'use client'

import { Button } from '@/components/button'
import CarouselProducts from '@/components/carousel-products'
import { Heading } from '@/components/heading'
import NextPrevButtons from '@/components/next-prev-btns'
import { Text } from '@/components/text'
import { TProductItem } from '@/data'
import { useCarouselArrowButtons } from '@/hooks/use-carousel-arrow-buttons'
import type { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

interface SectionProductCarouselHomeProps {
  products?: TProductItem[]
  emblaOptions?: EmblaOptionsType
  className?: string
  collectionHandle?: string
  collectionTitle?: string
  collectionDescription?: string
}

const SectionProductCarouselHome = ({
  products,
  emblaOptions = {
    slidesToScroll: 'auto',
  },
  className,
  collectionHandle,
  collectionTitle,
  collectionDescription,
}: SectionProductCarouselHomeProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...emblaOptions,
    direction: 'rtl',
  })

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = useCarouselArrowButtons(emblaApi)

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="flex flex-col gap-4 text-center">
          <div className="flex flex-col gap-2">
            <Heading>
              <span data-slot="italic">{collectionTitle || 'קולקציה'}</span>
            </Heading>
            <Text className="max-w-xs lg:max-w-sm">{collectionDescription}</Text>
          </div>
          <Button outline href={collectionHandle ? `/collections/${collectionHandle}` : '#'}>
            גלה את הקולקציה
          </Button>
        </div>
      </div>

      {products ? <CarouselProducts className="mt-16" emblaRef={emblaRef} products={products} /> : null}

      <div className="mt-10 flex items-center justify-center">
        <NextPrevButtons
          className="ms-auto xl:ms-0"
          onNextClick={onNextButtonClick}
          onPrevClick={onPrevButtonClick}
          nextBtnDisabled={nextBtnDisabled}
          prevBtnDisabled={prevBtnDisabled}
        />
      </div>
    </div>
  )
}

export default SectionProductCarouselHome
