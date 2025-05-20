'use client'

import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import StarSvg from '@/components/star-svg'
import { Text } from '@/components/text'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

interface HeroSection3Props {
  className?: string
}

const HeroSection3 = ({ className }: HeroSection3Props) => {
  const starLineRef = useRef<HTMLDivElement>(null)
  const headingLinesRef = useRef<(HTMLSpanElement | null)[]>([])
  const textLineRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Split text into characters for more dramatic effect
    const splitText = (text: string) => {
      return text
        .split('')
        .map((char, i) => `<span class="char">${char}</span>`)
        .join('')
    }

    let tl: gsap.core.Timeline | null = null
    let scrollTrigger: ScrollTrigger | null = null

    const animate = () => {
      // Reset and split text
      headingLinesRef.current.forEach((line) => {
        if (line) {
          line.innerHTML = splitText(line.textContent?.replace(/<[^>]+>/g, '') || '')
        }
      })
      // Initial state
      gsap.set(starLineRef.current, { opacity: 0, y: 40 })
      gsap.set(headingLinesRef.current, { opacity: 0 })
      gsap.set(textLineRef.current, { opacity: 0, y: 40 })

      tl = gsap.timeline()
      // Animate star
      tl.to(starLineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      })
      // Animate heading characters
      headingLinesRef.current.forEach((line) => {
        if (line) {
          const chars = line.querySelectorAll('.char')
          tl!.to(
            chars,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.03,
              ease: 'back.out(1.7)',
            },
            '-=0.4'
          )
        }
      })
      // Animate text with a slight delay
      tl.to(
        textLineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.2'
      )
    }

    scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top 80%',
      toggleActions: 'play reverse play reverse',
      onEnter: animate,
      onEnterBack: animate,
      onLeave: () => {
        // Reset state when leaving
        headingLinesRef.current.forEach((line) => {
          if (line) {
            line.innerHTML = splitText(line.textContent?.replace(/<[^>]+>/g, '') || '')
            gsap.set(line.querySelectorAll('.char'), { opacity: 0, y: 16 })
          }
        })
        gsap.set(starLineRef.current, { opacity: 0, y: 40 })
        gsap.set(textLineRef.current, { opacity: 0, y: 40 })
      },
      onLeaveBack: () => {
        // Reset state when scrolling back up
        headingLinesRef.current.forEach((line) => {
          if (line) {
            line.innerHTML = splitText(line.textContent?.replace(/<[^>]+>/g, '') || '')
            gsap.set(line.querySelectorAll('.char'), { opacity: 0, y: 16 })
          }
        })
        gsap.set(starLineRef.current, { opacity: 0, y: 40 })
        gsap.set(textLineRef.current, { opacity: 0, y: 40 })
      },
    })

    return () => {
      if (tl) tl.kill()
      if (scrollTrigger) scrollTrigger.kill()
    }
  }, [])

  return (
    <div className="relative flex min-h-dvh w-full">
      <video
        src="/vids/clothes.mp4"
        className="absolute inset-0 h-full w-full object-cover object-center"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative container flex flex-1 pt-20 pb-36">
        <div
          ref={containerRef}
          className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-y-7 self-center text-center text-white"
        >
          <div className="masking-text">
            <div className="line flex items-center justify-center" ref={starLineRef}>
              <StarSvg width={48} height={48} color="white" />
            </div>
          </div>
          <Heading fontSize="text-5xl/none md:text-6xl/none lg:text-7xl/none 2xl:text-8xl/none font-semibold">
            <span className="masking-text">
              <span
                className="line text-center [&_.char]:inline-block [&_.char]:translate-y-4 [&_.char]:opacity-0"
                data-slot="italic"
                ref={(el) => {
                  headingLinesRef.current[0] = el
                }}
              >
                עיצוב מוקפד
              </span>
            </span>
            <span className="masking-text">
              <span
                className="line text-center [&_.char]:inline-block [&_.char]:translate-y-4 [&_.char]:opacity-0"
                ref={(el) => {
                  headingLinesRef.current[1] = el
                }}
              >
                עם מחויבות לערכים.
              </span>
            </span>
          </Heading>
          <Text className="masking-text max-w-sm">
            <span className="line text-center" ref={textLineRef}>
              מוצרים כנים לחלוטין שבאמת עובדים, טובים לעור ולכדור הארץ – בלי יוצאים מן הכלל!
            </span>
          </Text>
        </div>
      </div>

      <div className="absolute bottom-14 left-1/2 container max-w-3xl -translate-x-1/2 sm:bottom-20">
        <Button
          href={'/collections/all'}
          color="white"
          className="mt-10 w-full cursor-pointer !border-white py-5 font-medium tracking-wide underline sm:py-6"
        >
          לכל המוצרים
          <div className="absolute right-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white sm:h-12 sm:w-12">
            <ArrowUpRightIcon className="h-4 w-4" />
          </div>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection3
