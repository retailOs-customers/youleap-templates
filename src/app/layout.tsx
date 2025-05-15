import Aside from '@/components/aside'
import '@/styles/globals.css'
import '@/styles/tailwind.css'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'

const heebo = Heebo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-heebo',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Bitpan',
    default: 'Bitpan',
  },
  description:
    'Bitpan is a modern and elegant template for Next.js, Tailwind CSS, and TypeScript. It is designed to be simple and easy to use, with a focus on performance and accessibility.',
  keywords: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Bipan', 'Headless UI', 'Fashion', 'Skincare', 'E-commerce'],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={clsx('text-zinc-950 antialiased dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950', heebo.variable)}
    >
      <body>
        <Aside.Provider>{children}</Aside.Provider>
      </body>
    </html>
  )
}
