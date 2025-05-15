import { Divider } from '@/components/divider'
import { Heading } from '@/components/heading'
import { Pagination, PaginationList, PaginationNext, PaginationPage, PaginationPrevious } from '@/components/pagination'
import ProductCard from '@/components/product-card'
import { Text } from '@/components/text'
import { getCollectionByHandle } from '@/data'
import { Metadata } from 'next'
import StarSvg from '../star-svg'

export const metadata: Metadata = {
  title: 'כל המוצרים',
  description: 'גלו את האוסף שלנו של כל המוצרים, כולל טיפוח, טיפוח שיער וטיפוח הגוף. מצאו את המוצר המושלם עבורכם.',
}

export default async function Page() {
  const collection = await getCollectionByHandle('all')

  return (
    <div className="container">
      <div className="flex flex-col items-center py-14 text-center lg:py-20">
        <StarSvg width={48} height={48} />
        <Heading bigger level={1} className="mt-5">
          <span>כל</span>
          <br />
          <span data-slot="italic" className="underline">
            המוצרים.
          </span>
        </Heading>
        <Text className="mt-5 max-w-xl">
          גלו את האוסף שלנו של כל המוצרים, כולל טיפוח, טיפוח שיער וטיפוח הגוף. מצאו את המוצר המושלם עבורכם.
        </Text>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:mx-0 xl:grid-cols-3">
        {collection?.products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>

      <Pagination className="mx-auto mt-14 sm:mt-28">
        <PaginationPrevious href="?page=1" />
        <PaginationList>
          <PaginationPage href="?page=1" current>
            1
          </PaginationPage>
          <PaginationPage href="?page=2">2</PaginationPage>
          <PaginationPage href="?page=3">3</PaginationPage>
          <PaginationPage href="?page=4">4</PaginationPage>
        </PaginationList>
        <PaginationNext href="?page=3" />
      </Pagination>

      <Divider className="mt-16 sm:mt-24 lg:mt-28" />
    </div>
  )
}
