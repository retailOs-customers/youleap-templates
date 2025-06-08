'use client'
import { TProductItem } from '@/data'
import { HeartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from './button'
import { Dialog } from './dialog'
import InputNumber from './input-number'

interface ProductCardQuickViewProps {
  product: TProductItem
  className?: string
  badge?: string
}

export default function ProductCardQuickView({ product, className, badge }: ProductCardQuickViewProps) {
  const [hovered, setHovered] = useState(false)
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const title = product.title
  // Handle images: string[] or object[]
  let image1 = '/placeholder.webp'
  let image2 = ''
  if (Array.isArray(product.images) && product.images.length > 0) {
    if (typeof product.images[0] === 'string') {
      image1 = product.images[0] as string
      image2 = (product.images[1] as string) || ''
    } else if ('src' in product.images[0]) {
      image1 = (product.images[0] as any).src
      image2 = (product.images[1] as any)?.src || ''
    }
  }
  // Demo fields
  const sku = '47600031'
  const barcode = '7290107922814'
  const quantity = '754'
  const perUnit = '13.70'
  const perBox = '36'
  const price = typeof product.price === 'number' ? product.price : 0
  const salePrice = price * 0.8 // 20% off for demo
  const vatRate = 0.18 // 18% VAT
  const isFavorite = false
  const [quantityValue, setQuantityValue] = useState(1)
  const handleImageClick = () => {
    if (product.handle) {
      router.push(`/products/${product.handle}`)
    }
  }

  return (
    <>
      <div
        className={clsx(
          'mx-auto flex w-full max-w-sm flex-col rounded-2xl border border-neutral-100 bg-white p-0 shadow-lg transition hover:shadow-2xl',
          className
        )}
        dir="rtl"
      >
        {/* Product image with heart icon and badge */}
        <div
          className="group relative aspect-[3/2] w-full overflow-hidden rounded-t-2xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Heart icon absolute */}
          <button className="absolute top-3 left-3 z-1 rounded-full bg-white/80 p-1 shadow transition hover:bg-white">
            <HeartIcon className="h-7 w-7 text-rose-500" fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
          {/* Badge absolute right, only if badge prop is provided */}
          {badge && (
            <div className="absolute top-3 right-3 z-10">
              <span className="rounded-lg bg-zinc-900 px-3 py-1 text-xs font-bold text-white shadow select-none">
                {badge}
              </span>
            </div>
          )}
          <Image
            src={image1}
            alt={title}
            fill
            className={clsx(
              'cursor-pointer object-cover transition-all duration-700',
              image2 ? 'group-hover:opacity-0' : ''
            )}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
            priority
            onClick={handleImageClick}
          />
          {image2 && (
            <Image
              src={image2}
              alt={title}
              fill
              className={clsx(
                'absolute top-0 left-0 h-full w-full object-cover transition-all duration-700',
                hovered ? 'opacity-100' : 'opacity-0'
              )}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
              priority
              onClick={handleImageClick}
            />
          )}
        </div>
        {/* Card content */}
        <div className="flex flex-col items-center px-5 py-4">
          {/* Product title */}
          <div className="mb-1 line-clamp-2 min-h-[2.2em] text-center text-base leading-tight font-bold tracking-tight text-zinc-900">
            {title}
          </div>
          {/* Details */}
          <div className="mb-2 flex flex-col gap-0.5 text-center text-xs text-zinc-500">
            <div>
              <span className="font-semibold text-zinc-700">מק״ט:</span> {sku}
            </div>
            <div>
              <span className="font-semibold text-zinc-700">ברקוד:</span> {barcode}
            </div>
            <div>
              <span className="font-semibold text-zinc-700">מלאי:</span> {quantity}
            </div>
          </div>
          {/* Price */}
          <div className="mb-1 flex flex-col items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight text-emerald-900">
                ₪ {salePrice.toLocaleString()}
              </span>
              <span className="text-lg font-medium text-zinc-400 line-through">₪ {price.toLocaleString()}</span>
            </div>
            <div className="text-xs text-zinc-500">כולל מע"מ {vatRate * 100}%</div>
          </div>
          {/* Quantity selector */}
          <div className="mb-3 flex justify-center">
            <InputNumber
              min={1}
              max={99}
              defaultValue={quantityValue}
              onChange={setQuantityValue}
              className="w-auto justify-center"
            />
          </div>
          {/* Buttons */}
          <div className="mt-auto flex w-full flex-col gap-2">
            <Button color="dark/zinc" className="w-full cursor-pointer">
              הוספה לסל
            </Button>
            <Button outline className="w-full cursor-pointer" onClick={() => setOpen(true)}>
              תצוגה מהירה
            </Button>
          </div>
        </div>
      </div>
      {/* Quick View Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        size="2xl"
        dir="rtl"
        className={clsx(
          'z-[99999] row-start-2 flex min-h-[60vh] w-full min-w-0 flex-col items-center justify-center rounded-t-3xl bg-white p-[--gutter] shadow-lg ring-1 ring-zinc-950/10 transition duration-100 will-change-transform [--gutter:--spacing-8] data-closed:translate-y-12 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in sm:mb-auto sm:max-w-2xl sm:rounded-2xl sm:data-closed:translate-y-0 sm:data-closed:data-enter:scale-95 dark:bg-zinc-900 dark:ring-white/10 forced-colors:outline'
        )}
      >
        <button
          className="absolute top-4 left-4 z-50 rounded-full border border-zinc-200 bg-white p-2 shadow transition hover:bg-zinc-100 md:left-6"
          onClick={() => setOpen(false)}
          aria-label="סגור"
          type="button"
        >
          <XMarkIcon className="h-6 w-6 text-zinc-700" />
        </button>
        <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center gap-10 p-6 md:flex-row md:items-start">
          {/* Product image clickable */}
          <div
            className="relative flex h-60 w-44 flex-shrink-0 cursor-pointer flex-col items-center"
            onClick={handleImageClick}
            title="לעמוד מוצר"
          >
            <Image
              src={image1}
              alt={title}
              width={176}
              height={176}
              className="scale-95 rounded-xl bg-white object-contain transition hover:scale-105"
              sizes="176px"
            />
            <div className="mt-4 text-center text-zinc-600">₪ 2.90 לק"ג</div>
            {/* Quantity selector below image */}
            <div className="mt-4 flex justify-center">
              <InputNumber
                min={1}
                max={99}
                defaultValue={quantityValue}
                onChange={setQuantityValue}
                className="w-auto justify-center"
              />
            </div>
          </div>
          {/* Details */}
          <div className="flex w-full flex-1 flex-col items-start gap-3">
            <div className="mb-2 text-right text-2xl font-bold text-zinc-900" dir="rtl">
              {title}
            </div>
            <div className="mb-4 w-full border-b border-zinc-200" />
            <div className="grid w-full grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div className="text-right text-zinc-500">יח' במארז</div>
              <div className="rounded bg-zinc-100 px-2 py-1 text-center text-zinc-900">{perBox}</div>
              <div className="text-right text-zinc-500">מספר קטלוגי</div>
              <div className="rounded bg-zinc-100 px-2 py-1 text-center text-zinc-900">{sku}</div>
              <div className="text-right text-zinc-500">ברקוד</div>
              <div className="rounded bg-zinc-100 px-2 py-1 text-center text-zinc-900">{barcode}</div>
              <div className="text-right text-zinc-500">כמות במלאי</div>
              <div className="rounded bg-zinc-100 px-2 py-1 text-center text-zinc-900">{quantity}</div>
              <div className="text-right text-zinc-500">מחיר ליחידה</div>
              <div className="rounded bg-zinc-100 px-2 py-1 text-center text-zinc-900">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-emerald-900">₪ {salePrice.toLocaleString()}</span>
                  <span className="text-zinc-400 line-through">₪ {price.toLocaleString()}</span>
                </div>
              </div>
              <div className="text-right text-zinc-500">סה"כ כולל מע"מ</div>
              <div className="rounded bg-zinc-100 px-2 py-1 text-center text-zinc-900">
                ₪ {(salePrice * quantityValue * (1 + vatRate)).toLocaleString()}
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col gap-2">
              <Button color="dark/zinc" className="w-full cursor-pointer">
                הוספה לסל
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}
