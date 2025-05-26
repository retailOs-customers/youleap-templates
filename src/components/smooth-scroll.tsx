'use client'

import Lenis from '@studio-freight/lenis'
import { ReactNode, useEffect } from 'react'

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      wheelMultiplier: 0.8,
      gestureOrientation: 'vertical',
      infinite: false,
    })

    lenis.scrollTo(0, { immediate: true })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
