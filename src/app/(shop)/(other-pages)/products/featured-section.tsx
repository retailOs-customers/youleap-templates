import { Text } from '@/components/text'
import { BoatIcon, FavouriteIcon, MoneyReceiveCircleIcon, Plant03Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'

const data = [
  {
    title: 'החזרה תוך 30 יום',
    description: 'אפשרות להחזיר מוצרים עד 30 יום מרגע הקנייה – ללא דאגות.',
    icon: MoneyReceiveCircleIcon,
  },
  {
    title: 'משלוח חינם',
    description: 'משלוחים חינם בקנייה מעל סכום מסוים – ישירות עד הבית.',
    icon: BoatIcon,
  },
  {
    title: 'אחריות מלאה לאיכות',
    description: 'אנו מתחייבים למוצרים איכותיים בלבד – או שתקבלו את כספכם בחזרה.',
    icon: FavouriteIcon,
  },
  {
    title: 'טבעוני וללא ניסויים בבעלי חיים',
    description: 'כל המוצרים מיוצרים באחריות – ללא רכיבים מן החי וללא ניסויים.',
    icon: Plant03Icon,
  },
]

const FeaturedSection = ({ className }: { className?: string }) => {
  return (
    <div className={clsx('grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4', className)}>
      {data.map((item, index) => {
        return (
          <div key={item.title} className="flex flex-col items-center justify-start gap-5 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-zinc-100">
              <HugeiconsIcon icon={item.icon} size={28} color="currencyColor" strokeWidth={1} />
            </div>
            <Text className="max-w-xs text-center leading-snug text-zinc-600">{item.title}</Text>
          </div>
        )
      })}
    </div>
  )
}

export default FeaturedSection
