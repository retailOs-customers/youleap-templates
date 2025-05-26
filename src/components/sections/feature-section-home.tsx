'use client'
import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import clsx from 'clsx'
import gsap from 'gsap'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

interface TImage {
  src: string
  width: number
  height: number
  alt: string
}

interface FeatureSectionHomeProps {
  className?: string
  heading?: string
  description?: string
  images?: string[]
  buttonText?: string
  buttonLink?: string
}

const FeatureSectionHome = ({
  className,
  description = 'אנחנו אוהבים את זה בזכות העיצוב המודרני, הפשוט והנקי, והתחושה הקלילה במיוחד. חוו נוחות שאין כמותה עם כיסויי הראש הנושמים שלנו, מושלמים לכל עונה.',
  heading = `<span>
  נקי, מעבר לכל ספק 
  </span>`,
  images = ['/images/shoe/feature-1-1.png', '/images/shoe/feature-1-2.jpg'],
  buttonText = 'לכל המוצרים',
  buttonLink = '/collections/all',
}: FeatureSectionHomeProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftImgRef = useRef<HTMLImageElement>(null)
  const rightImgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const relX = (e.clientX - rect.left) / rect.width - 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5
      gsap.to(leftImgRef.current, { xPercent: relX * 8, yPercent: relY * 8, duration: 0.5, overwrite: 'auto' })
      gsap.to(rightImgRef.current, { xPercent: relX * 14, yPercent: relY * 14, duration: 0.5, overwrite: 'auto' })
    }
    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
    }
    return () => {
      if (container) container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className={clsx('flex flex-col justify-between gap-8 lg:flex-row', className)}>
      {/* Left (small) image */}
      <div className="flex w-full">
        <Image
          src={images[0]}
          alt="Left feature image"
          width={325}
          height={325}
          sizes="100%"
          className="h-auto w-full"
          priority
          ref={leftImgRef}
        />
      </div>

      <div className="flex w-full items-center text-center sm:justify-center">
        <div className="max-w-lg">
          <div className="flex flex-col gap-2">
            <Heading
              fontSize="text-5xl font-semibold"
              dangerouslySetInnerHTML={{ __html: heading }}
              className=""
            ></Heading>
            <Text dangerouslySetInnerHTML={{ __html: description }}></Text>
          </div>
          <Button outline href={buttonLink} className="mt-7">
            {buttonText}
          </Button>
        </div>
      </div>

      {/* Right (large) image */}
      <div className="flex w-full items-center justify-center">
        <Image
          src={images[1]}
          alt="Right feature image"
          width={494}
          height={529}
          sizes="100%"
          className="h-auto max-w-[271px] object-contain"
          priority
          ref={rightImgRef}
        />
      </div>
    </div>
  )
}

export default FeatureSectionHome
