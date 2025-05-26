import { Heading } from '@/components/heading'
import clsx from 'clsx'
import Image from 'next/image'

interface ProductDetailContentProps {
  className?: string
  content: string
  imageSrc?: string
  imageAlt?: string
}

const ProductDetailContent = ({ content, className, imageAlt, imageSrc }: ProductDetailContentProps) => {
  return (
    <div className={clsx('max-w-none', className)}>
      <div className="flex flex-col-reverse justify-between gap-14 lg:flex-row lg:gap-12 xl:gap-20 2xl:gap-32">
        <div className="flex flex-3/7">
          <Image
            src={imageSrc || '/images/shoe/feature-1-2.jpg'}
            width={494}
            height={529}
            alt={imageAlt || 'product-detail-content'}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            className="w-full object-cover"
          />
        </div>

        <div className="flex flex-4/7 flex-col gap-5 lg:gap-10 2xl:gap-14">
          <Heading>
            <span>Details &</span>
            <br />
            <span data-slot="italic">features</span>
          </Heading>

          <div className="max-w-xl leading-relaxed" dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailContent
