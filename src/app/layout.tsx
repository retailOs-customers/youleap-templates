import Aside from '@/components/aside'
import SmoothScroll from '@/components/smooth-scroll'
import '@/styles/globals.css'
import '@/styles/tailwind.css'
import clsx from 'clsx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - RetailOs',
    default: 'RetailOs',
  },
  description:
    'RetailOS A unified system for managing multi-channel retail networks—across currencies, websites, regions, and languages—with full integration into all your business systems. It delivers a powerful digital presence and a seamless 360° customer experience, all built on the world’s most advanced technology stack.',
  keywords: ['חנויות אינטרנט', 'RetailOs', 'E-commerce', 'מערכת חנות', 'עיצוב רספונסיבי', 'UX', 'מכירות אונליין'],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={clsx('text-zinc-950 antialiased dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950', 'font-asimon')}
    >
      <body>
        <Aside.Provider>
          <SmoothScroll>{children}</SmoothScroll>
        </Aside.Provider>
      </body>
    </html>
  )
}
