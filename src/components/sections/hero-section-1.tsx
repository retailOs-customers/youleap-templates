'use client'

import clsx from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import ButtonLargeWithIcon from '../button-large-with-icon'
import { Text } from '../text'

interface HeroSection1Props {
  className?: string
}

const HeroSection1 = ({ className }: HeroSection1Props) => {
  const img1Ref = useRef<HTMLImageElement>(null)
  const img2Ref = useRef<HTMLImageElement>(null)
  const img3Ref = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const onLoad = () => {
      // Random directions for each image
      const randoms = [
        { x: gsap.utils.random(-150, 150), y: gsap.utils.random(-100, 100) },
        { x: gsap.utils.random(-150, 150), y: gsap.utils.random(-100, 100) },
        { x: gsap.utils.random(-150, 150), y: gsap.utils.random(-100, 100) },
      ]
      const images = [img1Ref.current, img2Ref.current, img3Ref.current]

      // Create a timeline for initial animations
      const tl = gsap.timeline()

      images.forEach((img, i) => {
        if (img) {
          gsap.set(img, { x: randoms[i].x, y: randoms[i].y })
          tl.to(
            img,
            {
              opacity: 1,
              x: 0,
              y: 0,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: img,
                start: 'top 90%',
                toggleActions: 'play none none reset',
                once: true, // Ensure the animation only plays once
              },
            },
            0
          ) // Start all animations at the same time
        }
      })

      // Mousemove parallax effect
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const relX = (e.clientX - rect.left) / rect.width - 0.5
        const relY = (e.clientY - rect.top) / rect.height - 0.5
        gsap.to(img1Ref.current, { xPercent: relX * 8, yPercent: relY * 8, duration: 0.5, overwrite: 'auto' })
        gsap.to(img2Ref.current, { xPercent: relX * 14, yPercent: relY * 14, duration: 0.5, overwrite: 'auto' })
        gsap.to(img3Ref.current, { xPercent: relX * 6, yPercent: relY * 6, duration: 0.5, overwrite: 'auto' })
      }
      const container = containerRef.current
      if (container) {
        container.addEventListener('mousemove', handleMouseMove)
      }
      // Cleanup
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        if (container) container.removeEventListener('mousemove', handleMouseMove)
      }
    }

    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
      return () => window.removeEventListener('load', onLoad)
    }

    ;[img1Ref.current, img2Ref.current, img3Ref.current].forEach((img) => {
      if (img) img.classList.add('loaded')
    })
  }, [])

  return (
    <div ref={containerRef} className={clsx('flex flex-col items-center gap-16', className)}>
      <div className="flex w-full flex-col justify-between gap-6 md:flex-row">
        <div className="w-full">
          <Image
            src="/images/shoe/hero-1-1.png"
            alt="hero-1"
            width={450}
            height={340}
            className="hero-img-anim w-full opacity-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            ref={img1Ref}
          />
          <Text className="mt-2.5 max-w-xs">עיצוב מינימליסטי, משתלב בקלות ומתאים למבני גוף שונים.</Text>
        </div>
        <div className="w-full">
          <Image
            src="/images/shoe/hero-1-2.png"
            alt="hero-1"
            width={450}
            className="hero-img-anim w-full opacity-0"
            height={440}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            ref={img2Ref}
          />
        </div>
        <div className="flex w-full flex-col justify-end gap-2.5">
          <Text className="max-w-xs self-end text-left">בד נעים שמתאים לכל עונות השנה.</Text>
          <Image
            src="/images/shoe/hero-1-3.png"
            alt="hero-1"
            className="hero-img-anim w-full opacity-0"
            width={450}
            height={280}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            ref={img3Ref}
          />
          <Text className="max-w-xs">עיצוב מתוחכם ועל-זמני.</Text>
        </div>
      </div>
      <ButtonLargeWithIcon href="/collections/all">גלו את כל המוצרים</ButtonLargeWithIcon>
    </div>
  )
}

export default HeroSection1
