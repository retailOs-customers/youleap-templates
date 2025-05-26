import { TProductItem } from '@/data'
import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import { Text, TextLink } from './text'

interface ProductCardProps {
  product: TProductItem
  className?: string
  imageRatio?: string
}

export default function ProductCard({ product, className, imageRatio = 'aspect-3/4' }: ProductCardProps) {
  const {
    id,
    title,
    type,
    url,
    price,
    variants,
    featured_image,
    created_at,
    description,
    handle,
    images,
    price_max,
    price_min,
    published_at,
    tags,
    vendor,
  } = product

  // find the product color
  const color = variants[0].selectedOptions.find((option) => option.name === 'Color')?.value
  // // find the product size
  const size = variants[0].selectedOptions.find((option) => option.name === 'Size')?.value

  return (
    <div className={clsx('group/prd relative w-full', className)}>
      {/* Product Image */}
      <div className={clsx('relative w-full overflow-hidden', imageRatio)}>
        <Image
          src={images[0] || '/placeholder.webp'}
          alt={title}
          fill
          className="z-0 rounded-lg object-cover transition-transform duration-700 group-hover/prd:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
          priority
        />
        {images[1] ? (
          <Image
            src={images[1] || '/placeholder.webp'}
            alt={title}
            fill
            className="z-0 rounded-lg object-cover opacity-0 transition-all duration-700 group-hover/prd:scale-110 group-hover/prd:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
          />
        ) : null}
      </div>

      {/* Category Label */}
      <div className="absolute top-3 left-3">
        <div className="rounded-full bg-white px-3.5 py-1.5 text-xs leading-none text-zinc-900 uppercase">{type}</div>
      </div>

      {/* Shopping Bag Icon */}
      <div className="absolute top-3 right-3">
        <div className="flex gap-2">
          <div className="rounded-full bg-white p-1.5 text-zinc-500">
            <ShoppingBagIcon className="h-4 w-4" />
          </div>
          <div className="rounded-full bg-white p-1.5 text-zinc-500">
            <HeartIcon className="h-4 w-4" />
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="pt-3">
        <div className="flex justify-between">
          <TextLink href={`/products/${handle}`}>
            <span className="absolute inset-0"></span>
            {title}
          </TextLink>
          <Text className="">${price.toFixed(2)}</Text>
        </div>
        <Text className="mt-0.5 text-xs text-zinc-500">{color ?? size ?? ''}</Text>
      </div>
    </div>
  )
}
