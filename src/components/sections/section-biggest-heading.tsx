'use client'

import clsx from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

interface SectionBiggestHeadingProps {
  className?: string
  heading?: React.ReactNode
  features?: string[]
}

const SectionBiggestHeading: React.FC<SectionBiggestHeadingProps> = ({
  className,
  heading = (
    <>
      Greatest Of <span className="font-serif font-normal italic">Collection</span>
    </>
  ),
  features = ['Breathable Quality', 'Easy To Wear', 'Kind To Planet', 'Premium Viscose'],
}) => {
  const headingLinesRef = useRef<(HTMLSpanElement | null)[]>([])
  const headingContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
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
  }, [])

  return (
    <div className={clsx('', className)} ref={headingContainerRef}>
      <h2 className="text-center text-[2.75rem] leading-none font-semibold tracking-tighter text-zinc-950 lg:text-[6.5rem] xl:text-[8.3rem] 2xl:text-[10rem] dark:text-white">
        <span className="masking-text">
          <span
            className="line"
            ref={(el) => {
              headingLinesRef.current[0] = el
            }}
          >
            Greatest Of
          </span>
        </span>
        <span> </span>
        <span className="masking-text">
          <span
            className="line font-serif font-normal italic"
            ref={(el) => {
              headingLinesRef.current[1] = el
            }}
          >
            Collection
          </span>
        </span>
      </h2>
      <div className="mt-4 flex flex-wrap justify-between text-sm tracking-wide uppercase 2xl:mt-5">
        {features.map((feature, index) => (
          <div key={index} className="px-2 py-1">
            [ {feature} ]
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionBiggestHeading
