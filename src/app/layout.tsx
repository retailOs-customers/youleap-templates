import Aside from '@/components/aside'
import '@/styles/globals.css'
import '@/styles/tailwind.css'
import clsx from 'clsx'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - קונימבו',
    default: 'קונימבו',
  },
  description:
    'קונימבו היא פלטפורמה מתקדמת לבניית חנויות אינטרנט. המערכת מציעה פתרון מודרני, מהיר ונוח לעסקים המעוניינים למכור אונליין – עם דגש על ביצועים, נגישות, ועיצוב ייחודי.',
  keywords: ['חנויות אינטרנט', 'קונימבו', 'E-commerce', 'מערכת חנות', 'עיצוב רספונסיבי', 'UX', 'מכירות אונליין'],
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={clsx('text-zinc-950 antialiased dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950', 'font-asimon')}
    >
      <body>
        <Aside.Provider>{children}</Aside.Provider>
      </body>
    </html>
  )
}
