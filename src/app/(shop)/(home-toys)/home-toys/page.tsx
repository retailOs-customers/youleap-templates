import HeroMovement from '@/components/sections/hero-movement'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'צעצועים',
  description: 'גלו את הצעצועים החמים ביותר בעולם עם הקולקציה הנבחרת שלנו של צעצועים לנשים, גברים וילדים.',
}

export default async function Home() {
  return (
    <div>
      <HeroMovement />
    </div>
  )
}
