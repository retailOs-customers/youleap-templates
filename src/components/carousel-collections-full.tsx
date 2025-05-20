'use client'

import { TCollection } from '@/data'
import clsx from 'clsx'
import { EmblaViewportRefType } from 'embla-carousel-react'
import CollectionCard from './collection-card'

interface CarouselCollectionsFullProps {
  collections: TCollection[]
  className?: string
  emblaRef: EmblaViewportRefType
}

const CarouselCollectionsFull = ({ className, collections, emblaRef }: CarouselCollectionsFullProps) => {
  return (
    <div className={clsx('embla embla-overflow-unset', className)} ref={emblaRef}>
      <div className="-mx-8 embla__container">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="embla__slide basis-[80%] px-4 sm:basis-[40%] md:basis-[32%] lg:basis-[28%] xl:basis-[28%]"
          >
            <CollectionCard collection={collection} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CarouselCollectionsFull
