import { Divider } from '@/components/divider'
import { Heading } from '@/components/heading'
// import { Pagination, PaginationList, PaginationNext, PaginationPage, PaginationPrevious } from '@/components/pagination'
import ProductCard from '@/components/product-card'
import { Text } from '@/components/text'
import { getCollectionByHandle } from '@/data'
// import { TProductItem } from '@/data'
import { HeartIcon } from '@heroicons/react/24/outline'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'רשימת המשאלות',
  description: 'המוצרים ששמרת ברשימת המשאלות שלך. הוסף מוצרים לרשימה כדי לעקוב אחריהם.',
}

export default async function Page() {
  const collection = await getCollectionByHandle('all')
  // Using sample products from the collection for design purposes
  const sampleProducts = collection?.products.slice(0, 6) || []

  return (
    <div className="container">
      <div className="flex flex-col items-center py-14 text-center lg:py-20">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100">
          <HeartIcon className="h-6 w-6 text-zinc-600" />
        </div>
        <Heading bigger level={1} className="mt-5">
          <span>רשימת</span>
          <br />
          <span data-slot="italic" className="underline">
            המשאלות.
          </span>
        </Heading>
        <Text className="mt-5 max-w-xl">
          המוצרים ששמרת ברשימת המשאלות שלך. הוסף מוצרים לרשימה כדי לעקוב אחריהם.
        </Text>
      </div>

      {sampleProducts.length === 0 ? (
        <div className="mt-16 text-center">
          <Text className="text-lg text-zinc-600">רשימת המשאלות שלך ריקה</Text>
          <Text className="mt-2 text-zinc-500">
            הוסף מוצרים לרשימת המשאלות שלך כדי לעקוב אחריהם ולקבל עדכונים על שינויים במחיר או זמינות.
          </Text>
        </div>
      ) : (
        <>
          <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:mx-0 xl:grid-cols-3">
            {sampleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {/* 
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
          </Pagination> */}
        </>
      )}

      <Divider className="mt-16 sm:mt-24 lg:mt-28" />
    </div>
  )
}
