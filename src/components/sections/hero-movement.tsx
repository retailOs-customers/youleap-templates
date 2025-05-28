'use client'

import clsx from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ButtonMedium from '../button-medium'

const images = [
  '/images/toys/product1.png',
  '/images/toys/product2.png',
  '/images/toys/product3.png',
  '/images/toys/product4.png',
  '/images/toys/product5.png',
  '/images/toys/product6.png',
]

const multipliers = [
  { x: 10, y: 8 },
  { x: -12, y: 10 },
  { x: 14, y: -9 },
  { x: -8, y: 12 },
  { x: 11, y: -13 },
  { x: -15, y: 7 },
]

// Responsive hook
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [breakpoint])
  return isMobile
}

const HeroMovement = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRefs = useRef<(HTMLImageElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const [imagesLoaded, setImagesLoaded] = useState(false)

  useEffect(() => {
    // Set images as loaded after initial render
    setImagesLoaded(true)
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Intro animation for text elements
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reset',
      },
    })

    tl.set([titleRef.current, subtitleRef.current, buttonRef.current], { opacity: 0, y: 40 })
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.5'
      )

    return () => {
      tl.kill()
    }
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const relX = (e.clientX - rect.left) / rect.width - 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5
      imgRefs.current.forEach((img, i) => {
        if (img) {
          gsap.to(img, {
            xPercent: relX * multipliers[i].x,
            yPercent: relY * multipliers[i].y,
            duration: 0.5,
            overwrite: 'auto',
          })
        }
      })
    }
    const container = containerRef.current
    if (container) container.addEventListener('mousemove', handleMouseMove)
    return () => {
      if (container) container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    gsap.registerPlugin(ScrollTrigger)

    const images = imgRefs.current.filter(Boolean)
    const nextSection = sectionRef.current
    if (!nextSection) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: nextSection,
        start: 'top 100%',
        end: 'top 10%',
        scrub: true,
      },
    })

    images.forEach((img, i) => {
      // First 3 images (0,1,2) move left, last 3 images (3,4,5) move right
      const direction = i < 3 ? -1 : 1
      tl.to(
        img,
        {
          x: 300 * direction, // Move items further to the sides
          ease: 'power1.inOut',
        },
        0
      )
    })

    return () => {
      tl.kill()
    }
  }, [isMobile])

  return (
    <div className="relative overflow-x-hidden">
      <div
        ref={containerRef}
        className={clsx(
          'flex min-h-[80vh] w-full items-center justify-center overflow-x-hidden !overflow-y-visible bg-[#bdd0df] md:min-h-[90vh]',
          className
        )}
      >
        {(() => {
          const imagePositions = isMobile
            ? [
                { left: '2%', top: '8%' },
                { left: '2%', top: '40%' },
                { left: '5%', top: '22%' },
                { left: '90%', top: '22%' },
                { left: '89%', top: '32%' },
                { left: '88%', top: '2%' },
              ]
            : [
                { left: '20%', top: '1%' },
                { left: '16%', top: '16%' },
                { left: '36%', top: '27%' },
                { left: '63%', top: '27%' },
                { left: '82%', top: '16%' },
                { left: '77%', top: '1%' },
              ]
          return images.map((src, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: imagePositions[i].left,
                top: imagePositions[i].top,
                transform: 'translate(-50%, 0)',
                zIndex: 2,
              }}
            >
              <Image
                src={src}
                alt={`toy-${i}`}
                width={isMobile ? 150 : 300}
                height={isMobile ? 150 : 300}
                ref={(el) => {
                  imgRefs.current[i] = el
                }}
                className="drop-shadow-xl"
                priority
              />
            </div>
          ))
        })()}
        <div className="absolute top-16 left-1/2 z-1 mt-8 flex -translate-x-1/2 flex-col items-center text-center">
          <div className="flex max-w-[30rem] flex-col items-center justify-center">
            <h1 ref={titleRef} className="mb-4 text-center text-7xl font-bold text-[#22384c]">
              לגלות. לשחק. להתפתח.
            </h1>
            <p ref={subtitleRef} className="mb-8 text-xl text-[#22384c]">
              ב-Toyland תמצאו צעצועים שמתאימים בדיוק לגיל, לשלב ההתפתחות ולתחומי העניין של כל ילד.
            </p>
            <div ref={buttonRef} className="w-full">
              <ButtonMedium href="/collections/all">לכל המוצרים</ButtonMedium>
            </div>
          </div>
        </div>
      </div>
      {/* New Section Placeholder */}
      <div
        ref={sectionRef}
        className="flex w-full flex-col items-center justify-start bg-[#bdd0df] py-10 md:min-h-[90vh]"
      >
        <div className="flex max-w-[34rem] flex-col items-center justify-center text-center">
          <h2 className="mb-4 text-5xl font-bold text-[#22384c]">
            עולמות של דמיון, <br />
            משחק ולמידה
          </h2>
          <p className="mb-8 text-xl text-[#22384c]">
            ב-Toyland תמצאו צעצועים שמתאימים בדיוק לגיל, לשלב ההתפתחות ולתחומי העניין של כל ילד.
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 items-center justify-center gap-4">
          {/* Top Left Box */}
          <div className="col-start-1 row-start-1 flex flex-col items-center rounded-xl bg-white p-4 shadow-md">
            <Image src="/images/toys/product1.png" alt="box1" width={80} height={80} />
            <h3 className="mt-2 mb-1 text-base font-bold text-[#22384c]">דוכן כיריים מעץ</h3>
            <p className="mb-2 text-center text-xs text-[#22384c]">
              מכיל 52 חלקי אוכל ומשחק שונים. כולל כיריים, כלי בישול, תבלינים, כסף, עוגות ועוד.
            </p>
            <ButtonMedium href="/collections/all">קנה עכשיו</ButtonMedium>
          </div>
          {/* Top Right Box */}
          <div className="col-start-3 row-start-1 flex flex-col items-center rounded-xl bg-white p-4 shadow-md">
            <Image src="/images/toys/product2.png" alt="box2" width={80} height={80} />
            <h3 className="mt-2 mb-1 text-base font-bold text-[#22384c]">דוכן כיריים מעץ</h3>
            <p className="mb-2 text-center text-xs text-[#22384c]">
              מכיל 52 חלקי אוכל ומשחק שונים. כולל כיריים, כלי בישול, תבלינים, כסף, עוגות ועוד.
            </p>
            <ButtonMedium href="/collections/all">קנה עכשיו</ButtonMedium>
          </div>
          {/* Center Image */}
          <div className="col-start-2 row-start-2 flex items-center justify-center">
            <Image src="/images/toys/center-img.png" alt="toy" width={475} height={475} />
          </div>
          {/* Bottom Left Box */}
          <div className="col-start-1 row-start-3 flex flex-col items-center rounded-xl bg-white p-4 shadow-md">
            <Image src="/images/toys/product3.png" alt="box3" width={80} height={80} />
            <h3 className="mt-2 mb-1 text-base font-bold text-[#22384c]">דוכן כיריים מעץ</h3>
            <p className="mb-2 text-center text-xs text-[#22384c]">
              מכיל 52 חלקי אוכל ומשחק שונים. כולל כיריים, כלי בישול, תבלינים, כסף, עוגות ועוד.
            </p>
            <ButtonMedium href="/collections/all">קנה עכשיו</ButtonMedium>
          </div>
          {/* Bottom Right Box */}
          <div className="col-start-3 row-start-3 flex flex-col items-center rounded-xl bg-white p-4 shadow-md">
            <Image src="/images/toys/product4.png" alt="box4" width={80} height={80} />
            <h3 className="mt-2 mb-1 text-base font-bold text-[#22384c]">דוכן כיריים מעץ</h3>
            <p className="mb-2 text-center text-xs text-[#22384c]">
              מכיל 52 חלקי אוכל ומשחק שונים. כולל כיריים, כלי בישול, תבלינים, כסף, עוגות ועוד.
            </p>
            <ButtonMedium href="/collections/all">קנה עכשיו</ButtonMedium>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroMovement
