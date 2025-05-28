'use client'

import clsx from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import ButtonMedium from '../button-medium'
import styles from './hero-movement.module.css'

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

// Card component for hero section
function HeroCard({
  image,
  alt,
  title,
  description,
  buttonHref,
  buttonText,
  location,
}: {
  image: string
  alt: string
  title: string
  description: string
  buttonHref: string
  buttonText: string
  location: React.CSSProperties
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.classList.remove(styles['hero-fade-in-init'])
    }
  }, [])
  return (
    <div
      ref={cardRef}
      className="hero-card-parallax flex h-[320px] min-h-[300px] w-[260px] min-w-[260px] flex-col items-center justify-between rounded-xl bg-white px-4 pb-4 shadow-md"
      style={location}
    >
      <Image src={image} alt={alt} width={150} height={150} />
      <div className="flex flex-col items-center">
        <h3 className="mt-2 mb-1 text-base font-bold text-[#22384c]">{title}</h3>
        <p className="mb-2 text-center text-xs text-[#22384c]">{description}</p>
        <a
          href={buttonHref}
          className="mt-2 text-xl font-extrabold text-[#22384c] underline transition-colors duration-150 hover:text-[#1a2a3c]"
        >
          {buttonText}
        </a>
      </div>
    </div>
  )
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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  // --- Animated title for second section ---
  const title2LinesRef = useRef<(HTMLSpanElement | null)[]>([])
  const subtitle2Ref = useRef<HTMLParagraphElement>(null)
  const section2ContainerRef = useRef<HTMLDivElement>(null)

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
      onStart: () => {
        titleRef.current?.classList.remove(styles['hero-fade-in-init'])
      },
    })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          onStart: () => {
            subtitleRef.current?.classList.remove(styles['hero-fade-in-init'])
          },
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
          onStart: () => {
            buttonRef.current?.classList.remove(styles['hero-fade-in-init'])
          },
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

  // Parallax effect for HeroCards only
  useEffect(() => {
    const container = cardsContainerRef.current
    if (!container) return

    // Parallax multipliers for each card: [x, y]
    const multipliers = [
      { x: -20, y: -10 }, // top-left
      { x: 20, y: -10 }, // top-right
      { x: -20, y: 10 }, // bottom-left
      { x: 20, y: 10 }, // bottom-right
    ]

    // Collect the four card DOM nodes in order
    const cardNodes = Array.from(container.querySelectorAll('.hero-card-parallax'))

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const relX = (e.clientX - rect.left) / rect.width - 0.5
      const relY = (e.clientY - rect.top) / rect.height - 0.5
      cardNodes.forEach((card, i) => {
        gsap.to(card, {
          x: relX * multipliers[i].x,
          y: relY * multipliers[i].y,
          duration: 0.5,
          overwrite: 'auto',
        })
      })
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animated entrance for second section's title
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section2ContainerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reset',
      },
    })
    tl.set(title2LinesRef.current, { opacity: 0, y: 40 })
    tl.set(subtitle2Ref.current, { opacity: 0, y: 40 })
    tl.to(title2LinesRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.18,
      ease: 'power3.out',
    }).to(
      subtitle2Ref.current,
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

  useLayoutEffect(() => {
    if (!titleRef.current) return
    // Remove the hidden class before animating
    titleRef.current.classList.remove(styles['title-hidden'])
    const chars = titleRef.current.querySelectorAll('.title-char')
    gsap.fromTo(
      chars,
      { opacity: 0, y: 40, scale: 0.8, rotate: -10 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'back.out(1.7)',
      }
    )
  }, [])

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
            <h1
              ref={titleRef}
              className={clsx(
                'mb-4 text-center text-7xl font-bold wrap-anywhere text-[#22384c]',
                styles['title-hidden']
              )}
            >
              {`לגלות. לשחק. להתפתח.`.split('').map((char, i) => (
                <span key={i} className="title-char">
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>
            <p ref={subtitleRef} className={clsx('mb-8 text-xl text-[#22384c]', styles['hero-fade-in-init'])}>
              ב-Toyland תמצאו צעצועים שמתאימים בדיוק לגיל, לשלב ההתפתחות ולתחומי העניין של כל ילד.
            </p>
            <div ref={buttonRef} className={clsx('w-full', styles['hero-fade-in-init'])}>
              <ButtonMedium href="/collections/all">לכל המוצרים</ButtonMedium>
            </div>
          </div>
        </div>
      </div>
      {/* New Section Placeholder */}
      <div
        ref={sectionRef}
        className="flex w-full flex-col items-center justify-start bg-[#bdd0df] pt-14 pb-62 md:min-h-[90vh]"
      >
        {/* Title, subtitle, button - OUTSIDE the parallax container */}
        <div
          ref={section2ContainerRef}
          className="relative z-20 flex max-w-[34rem] flex-col items-center justify-center text-center"
        >
          <h2 className="mb-4 text-5xl font-bold text-[#22384c]">
            <span
              className="block"
              ref={(el) => {
                title2LinesRef.current[0] = el
              }}
            >
              עולמות של דמיון,
            </span>
            <span
              className="block"
              ref={(el) => {
                title2LinesRef.current[1] = el
              }}
            >
              משחק ולמידה
            </span>
          </h2>
          <p ref={subtitle2Ref} className="mb-8 text-xl text-[#22384c]">
            בין אם זה מטבח, סופרמרקט או עגלת תינוק – כל צעצוע כאן פותח דלת לעולם של דמיון, עצמאות ורגש. קולקציית העץ של
            Melissa & Doug משלבת איכות, חינוך וכיף – בדיוק כמו שילדים אוהבים.
          </p>
        </div>
        {/* Parallax cards and center image */}
        <div
          className="relative mx-auto mt-10 grid h-[600px] w-full max-w-5xl place-items-center gap-6"
          ref={cardsContainerRef}
        >
          {/* Top Left */}
          <div className="absolute top-0 left-24 z-10">
            <HeroCard
              image="/images/toys/product2.png"
              alt="box2"
              title="דוכן כריכים מעץ מליסה ודאג"
              description="דלפק כריכים עם 52 חלקי אוכל ומשחק שונים. כולל פרוסות בשר וגבינה מעץ, גליל סנדוויץ' בקבוק רוטב, צ'יפס, עוגיות וכוס שתייה עם תוספת וכסף כלול במשחק"
              buttonHref="/collections/all"
              buttonText="קנה עכשיו"
              location={{}}
            />
          </div>
          {/* Top Right */}
          <div className="absolute top-[-10%] right-[10%] z-10">
            <HeroCard
              image="/images/toys/product3.png"
              alt="box3"
              title="דוכן ירקות מעץ"
              description="דלפק כריכים עם 52 חלקי אוכל ומשחק שונים. כולל פרוסות בשר וגבינה מעץ, גליל סנדוויץ' בקבוק רוטב, צ'יפס, עוגיות וכוס שתייה עם תוספת וכסף כלול במשחק"
              buttonHref="/collections/all"
              buttonText="קנה עכשיו"
              location={{}}
            />
          </div>
          {/* Bottom Left */}
          <div className="absolute top-[70%] left-[14%] z-10">
            <HeroCard
              image="/images/toys/product4.png"
              alt="box4"
              title="דוכן מאפיה מעץ"
              description="דלפק כריכים עם 52 חלקי אוכל ומשחק שונים. כולל פרוסות בשר וגבינה מעץ, גליל סנדוויץ' בקבוק רוטב, צ'יפס, עוגיות וכוס שתייה עם תוספת וכסף כלול במשחק"
              buttonHref="/collections/all"
              buttonText="קנה עכשיו"
              location={{}}
            />
          </div>
          {/* Bottom Right */}
          <div className="absolute top-[70%] right-[15%] z-10">
            <HeroCard
              image="/images/toys/product5.png"
              alt="box5"
              title="דוכן גלידה מעץ"
              description="דלפק כריכים עם 52 חלקי אוכל ומשחק שונים. כולל פרוסות בשר וגבינה מעץ, גליל סנדוויץ' בקבוק רוטב, צ'יפס, עוגיות וכוס שתייה עם תוספת וכסף כלול במשחק"
              buttonHref="/collections/all"
              buttonText="קנה עכשיו"
              location={{}}
            />
          </div>
          {/* Center Illustration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/toys/center-img.png"
              alt="toy"
              width={450}
              height={450}
              className="pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroMovement
