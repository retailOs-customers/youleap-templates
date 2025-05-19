'use client'

import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { Button } from '../button'
import { Heading } from '../heading'
import StarSvg from '../star-svg'

interface HeroSection2Props {
  className?: string
}

const HeroSection2 = ({ className }: HeroSection2Props) => {
  const starLineRef = useRef<HTMLDivElement>(null)
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
    tl.set(starLineRef.current, { opacity: 0, y: 40 })
    tl.set(headingLinesRef.current, { opacity: 0, y: 40 })
    tl.set(textLineRef.current, { opacity: 0, y: 40 })
    tl.to(starLineRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
    })
      .to(headingLinesRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.18,
        ease: 'power3.out',
      })
      .to(
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
    <div className={className}>
      <div className="flex min-h-[calc(100vh-5rem)] flex-col-reverse justify-between bg-primary sm:flex-row">
        <div className="align-center flex flex-3/5 justify-center py-16 pl-6 xl:pb-20">
          <div ref={containerRef} className="flex max-w-xl flex-col items-center justify-center sm:min-w-[60%]">
            <div className="masking-text">
              <div className="line flex items-center justify-center" ref={starLineRef}>
                <StarSvg width={48} height={48} />
              </div>
            </div>
            <Heading fontSize="text-5xl/none md:text-6xl/none lg:text-7xl/none font-semibold" className="mt-8">
              <span className="masking-text">
                <span
                  className="line text-center"
                  ref={(el) => {
                    headingLinesRef.current[0] = el
                  }}
                >
                  <span data-slot="italic">הטבע</span> יודע
                </span>
              </span>
              <span className="masking-text">
                <span
                  className="line text-center"
                  ref={(el) => {
                    headingLinesRef.current[1] = el
                  }}
                >
                  <span data-slot="italic"> מה הוא עושה </span>
                </span>
              </span>
            </Heading>
            <div className="masking-text mt-8 w-full max-w-sm">
              <div className="line w-full text-center" ref={textLineRef}>
                מוצרים טבעיים, אמינים ויעילים באמת – כי מגיע לעור שלך את הטוב ביותר, ולכדור הארץ גם.
              </div>
            </div>
            <Button
              href={'/collections/all'}
              color="white"
              className="mt-16 w-full max-w-4xl cursor-pointer !border-white py-5 font-medium tracking-wide underline sm:py-6"
            >
              לכל המוצרים
              <div className="absolute right-1.5 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white sm:h-12 sm:w-12">
                <ArrowUpRightIcon className="h-4 w-4" />
              </div>
            </Button>
          </div>
        </div>

        <div className="relative flex-2/5">
          <video
            src="/vids/herovid.mp4"
            className="object-cover object-center sm:absolute sm:h-full sm:w-full"
            width={815}
            height={987}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection2
