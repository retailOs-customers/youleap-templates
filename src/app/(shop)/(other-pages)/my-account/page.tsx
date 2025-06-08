'use client'

import { Button } from '@/components/button'
import { useRouter } from 'next/navigation'

export default function MyAccountPage() {
  const router = useRouter()

  return (
    <div dir="rtl" className="min-h-screen bg-neutral-50 p-8 font-asimon">
      {/* Header */}
      <h1 className="mb-8 text-right text-3xl font-bold text-zinc-900">אזור אישי</h1>
      <div className="mb-10 flex flex-col items-center gap-6 rounded-xl border border-neutral-100 bg-white p-8 shadow md:flex-row md:items-stretch">
        <Button color="dark/zinc" className="mb-4 w-full md:order-2 md:mb-0 md:w-auto">
          התנתק
        </Button>
        <div className="grid flex-1 grid-cols-2 gap-6 text-center text-base md:grid-cols-7">
          <div>
            <div className="text-neutral-500">שם</div>
            <div className="font-bold break-words text-zinc-900">תאי מרקט (2008) בע"מ</div>
          </div>
          <div>
            <div className="text-neutral-500">איש קשר</div>
            <div className="font-bold break-words text-zinc-900">משה בן יוסף</div>
          </div>
          <div>
            <div className="text-neutral-500">מייל</div>
            <div className="font-bold break-words text-zinc-900">Sales@thaimarket.co.il</div>
          </div>
          <div>
            <div className="text-neutral-500">טלפון</div>
            <div className="font-bold break-words text-zinc-900">052-3289599</div>
          </div>
          <div>
            <div className="text-neutral-500">עיר</div>
            <div className="font-bold break-words text-zinc-900">תל מונד</div>
          </div>
          <div>
            <div className="text-neutral-500">יתרת חוב</div>
            <div className="font-bold break-words text-zinc-900">4,229</div>
          </div>
          <div>
            <div className="text-neutral-500">אובליגו</div>
            <div className="font-bold break-words text-zinc-900">40,000</div>
          </div>
        </div>
      </div>

      {/* Action Cards */}
      <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[
          { label: 'סל קבוע', onClick: () => router.push('/predefined-cart') },
          { label: 'מסמכים' },
          { label: 'טיוטות' },
          { label: 'מועדפים', onClick: () => router.push('/wishlist') },
          { label: 'כרטסת' },
          { label: 'גיול חובות' },
        ].map((item) => (
          <div
            key={item.label}
            className="flex cursor-pointer flex-col items-center rounded-xl bg-white p-8 shadow transition hover:shadow-md"
            onClick={item.onClick}
          >
            {/* Optionally, keep a small icon for clarity */}
            {/* <ArrowCircleRightIcon className="w-6 h-6 mb-2 text-neutral-400" /> */}
            <span className="text-lg font-medium text-zinc-900">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Account Deletion */}
      <div className="mx-auto flex flex-col items-center rounded-xl bg-white p-8 shadow md:w-1/3">
        <h2 className="mb-2 text-xl font-bold text-zinc-900">מחיקת חשבון</h2>
        <p className="mb-4 text-center text-sm text-neutral-500">
          פעולה זו תמחק את החשבון שלך לצמיתות ולא תוכל לשחזר אותו.
        </p>
        <Button color="red">מחק</Button>
      </div>
    </div>
  )
}
