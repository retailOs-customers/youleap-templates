'use client'

import clsx from 'clsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  fontSize?: string
  bigger?: boolean
} & React.ComponentPropsWithoutRef<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>

export function Heading({
  className,
  fontSize = 'text-[2rem] sm:text-4xl xl:text-[2.5rem] leading-none',
  bigger = false,
  level = 2,
  children,
  ...props
}: HeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const linesRef = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    // Find all spans with data-slot=italic or data-slot=dim
    const lines = ref.current?.querySelectorAll('span[data-slot=italic], span[data-slot=dim]')
    if (lines && lines.length > 0) {
      linesRef.current = Array.from(lines) as HTMLSpanElement[]
      gsap.set(linesRef.current, { opacity: 0, y: 40 })
      gsap.to(linesRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          toggleActions: 'play none none reset',
        },
      })
    }
  }, [])

  let Element: `h${typeof level}` = `h${level}`

  return (
    <Element
      {...props}
      ref={ref}
      className={clsx(
        className,
        bigger ? 'text-3xl leading-none sm:text-4xl xl:text-5xl/none' : fontSize,
        'text font-medium *:data-[slot=dim]:text-black *:data-[slot=italic]:font-serif *:data-[slot=italic]:font-normal *:data-[slot=italic]:italic *:data-[slot=dim]:dark:text-zinc-500'
      )}
    >
      {children}
    </Element>
  )
}

export function Subheading({ className, fontSize = 'text-xl/8', level = 3, ...props }: HeadingProps) {
  let Element: `h${typeof level}` = `h${level}`

  return (
    <Element
      {...props}
      className={clsx(
        className,
        fontSize,
        'font-medium *:data-[slot=dim]:text-zinc-300 *:data-[slot=italic]:font-serif *:data-[slot=italic]:font-normal *:data-[slot=italic]:italic *:data-[slot=dim]:dark:text-zinc-500'
      )}
    />
  )
}
