'use client'

import { getCartProducts } from '@/data'
import { Delete02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { Aside } from './aside/aside'
import { Button } from './button'
import { Text, TextLink } from './text'

interface Props {
  className?: string
  products: Awaited<ReturnType<typeof getCartProducts>>
}

const AsideSidebarCart = ({ className = '', products }: Props) => {
  return (
    <Aside openFrom="right" type="cart" heading="Shopping Cart">
      <div className={clsx('flex h-full flex-col', className)}>
        {/* CONTENT */}
        <div className="flex-1 overflow-x-hidden overflow-y-auto py-6 hidden-scrollbar">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-zinc-900/10">
              {products.map((product) => (
                <CartProductItem key={product.id} product={product} />
              ))}
            </ul>
          </div>
        </div>
        {/* FOOTER  */}
        <section
          aria-labelledby="summary-heading"
          className="mt-auto grid shrink-0 gap-4 border-t border-zinc-900/10 py-4"
        >
          <h2 id="summary-heading" className="sr-only">
            סיכום הזמנה
          </h2>
          <div className="">
            <dl className="space-y-6 px-4 py-4 sm:px-6">
              <div className="mb-2 flex items-center justify-between">
                <dt className="text-sm font-medium">סך ביניים</dt>
                <dd className="text-sm font-medium text-zinc-900">$64.00</dd>
              </div>
              <div className="mb-2 flex items-center justify-between">
                <dt className="text-sm font-medium">משלוח</dt>
                <dd className="text-sm font-medium text-zinc-900">$5.00</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm font-medium">מיסים</dt>
                <dd className="text-sm font-medium text-zinc-900">$5.52</dd>
              </div>
              <div className="flex items-center justify-between border-t border-zinc-200 pt-4">
                <dt className="text-base font-medium">סה"כ</dt>
                <dd className="text-base font-medium text-zinc-900">$75.52</dd>
              </div>
            </dl>
            {/* <Text className="mt-0.5 text-xs text-zinc-500">משלוח ומס מחושבים בסוף הקניה.</Text> */}
            <div className="mt-5 grid grid-cols-2 gap-2">
              <Button outline href={'/cart'}>
                צפה בעגלה
              </Button>
              <Button href={'/checkout'}>חשבון</Button>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-zinc-500">
              <Text className="text-xs">
                או{' '}
                <TextLink href={'/collections/all'} className="text-xs font-medium text-zinc-900 uppercase">
                  המשך לקנות<span aria-hidden="true"> →</span>
                </TextLink>
              </Text>
            </div>
          </div>
        </section>
      </div>
    </Aside>
  )
}

export const CartProductItem = ({
  product,
  className,
}: {
  className?: string
  product: Awaited<ReturnType<typeof getCartProducts>>[number]
}) => {
  const [quantity, setQuantity] = useState(1)
  const min = 1
  const max = 8
  const handleDecrement = () => setQuantity((q) => Math.max(min, q - 1))
  const handleIncrement = () => setQuantity((q) => Math.min(max, q + 1))

  return (
    <li key={product.id} className={clsx(className, 'flex py-6')}>
      <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-md">
        <Image fill alt={product.imageAlt} src={product.imageSrc} className="size-full object-cover" />
      </div>

      <div className="ms-4 flex flex-1 flex-col">
        <div className="flex justify-between font-medium">
          <h3 className="leading-tight">
            <TextLink href={'/products/' + product.handle}>{product.name}</TextLink>
          </h3>
          <Text className="ms-4">{product.price}</Text>
        </div>
        <div className="mt-1 flex gap-1.5 text-xs text-zinc-500">
          <Text className="text-xs">{product.color}</Text>
          {product.size ? <Text className="text-xs">/</Text> : null}
          {product.size ? <Text className="text-xs">{product.size}</Text> : null}
        </div>
        <Text className="mt-1 text-xs text-zinc-500">{product.price}</Text>
        <div className="mt-auto flex items-center justify-between pt-2 text-sm">
          <div className="inline-flex w-full max-w-16 items-center gap-1">
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={handleIncrement}
              className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-300 p-0 text-base text-gray-500 hover:bg-zinc-100 disabled:opacity-40"
              disabled={quantity >= max}
            >
              +
            </button>
            <span className="w-6 text-center text-sm font-medium text-gray-500">{quantity}</span>
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={handleDecrement}
              className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-300 p-0 text-base text-gray-500 hover:bg-zinc-100 disabled:opacity-40"
              disabled={quantity <= min}
            >
              -
            </button>
          </div>

          <button type="button" className="-m-2 cursor-pointer p-2 font-medium" title="Remove item from cart">
            <span className="sr-only">Remove</span>
            <HugeiconsIcon icon={Delete02Icon} size={16} color="currentColor" strokeWidth={1} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default AsideSidebarCart
