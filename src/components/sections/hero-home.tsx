'use client'

import { Button } from '@/components/button'
import { Heading } from '@/components/heading'
import { Text } from '@/components/text'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

interface HeroHomeProps {
  className?: string
}

const HeroHome = ({ className }: HeroHomeProps) => {
  const headingLinesRef = useRef<(HTMLSpanElement | null)[]>([])
  const textLineRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reset',
      },
    })
    tl.set(headingLinesRef.current, { opacity: 0, y: 40 })
    tl.set(textLineRef.current, { opacity: 0, y: 40 })
    tl.to(headingLinesRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.18,
      ease: 'power3.out',
    }).to(
      textLineRef.current,
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

  return (
    <div className="relative flex w-full">
      <img
        src="/images/cream/hero.jpg"
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-white/10" />

      <div className="relative container flex flex-1 pt-16 pb-16">
        <div
          ref={containerRef}
          className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-y-4 self-center text-center text-black"
        >
          <Heading fontSize="text-5xl/none md:text-6xl/none lg:text-7xl/none 2xl:text-8xl/none font-semibold">
            <span className="masking-text">
              <span
                className="line text-center"
                data-slot="italic"
                ref={(el) => {
                  headingLinesRef.current[0] = el
                }}
              >
                הטבע יודע
              </span>
            </span>
            <span className="masking-text">
              <span
                className="line text-center"
                ref={(el) => {
                  headingLinesRef.current[1] = el
                }}
              >
                מה הוא עושה
              </span>
            </span>
          </Heading>
          <Text className="masking-text max-w-lg text-xl">
            <span className="line text-center" ref={textLineRef}>
              מוצרים טבעיים, אמינים ויעילים באמת – כי מגיע לעור שלך את הטוב ביותר, ולכדור הארץ גם.
            </span>
          </Text>
          <div className="container max-w-3xl">
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
      </div>
    </div>
  )
}

export default HeroHome
