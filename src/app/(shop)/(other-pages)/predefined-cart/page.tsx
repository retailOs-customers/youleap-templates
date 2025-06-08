import Breadcrumb from '@/components/breadcrumb'
import { Divider } from '@/components/divider'
import { Heading } from '@/components/heading'
// import { Pagination, PaginationList, PaginationNext, PaginationPage, PaginationPrevious } from '@/components/pagination'
import { Text } from '@/components/text'
import { getCollectionByHandle } from '@/data'
// import { TProductItem } from '@/data'
import PredefinedCartClient from '@/components/predefined-cart-client'
import { HeartIcon } from '@heroicons/react/24/outline'
import { Metadata } from 'next'
import CategoryFilters1 from '../collections/category-filters-1'

export const metadata: Metadata = {
  title: 'רשימת המשאלות',
  description: 'המוצרים ששמרת ברשימת המשאלות שלך. הוסף מוצרים לרשימה כדי לעקוב אחריהם.',
}

export default async function Page() {
  const collection = await getCollectionByHandle('all')
  const sampleProducts = collection?.products.slice(0, 24) || []

  // Demo state (would be useState in client component)
  const displayMode = 'grid'
  const perPage = 24
  const perPageOptions = [24, 48, 96]

  return (
    <div className="container" dir="rtl">
      {/* Breadcrumb and header */}
      <Breadcrumb breadcrumbs={[{ id: 1, name: 'דף הבית', href: '/' }]} currentPage="סל קבוע" className="py-3.5" />
      <Divider />
      <main>
        <div className="flex flex-col items-center py-14 text-center lg:py-20">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100">
            <HeartIcon className="h-6 w-6 text-zinc-600" />
          </div>
          <Heading bigger level={1} className="mt-5">
            <span>סל קבוע</span>
          </Heading>
          <Text className="mt-5 max-w-xl">כל המוצרים שבחרת לסל הקבוע שלך. תוכל להוסיף, להסיר ולסנן מוצרים בקלות.</Text>
        </div>
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          {/* Sidebar */}
          <CategoryFilters1 />
          {/* Main section */}
          <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
            <h2 id="product-heading" className="sr-only">
              מוצרים
            </h2>
            <PredefinedCartClient products={sampleProducts} />
          </section>
        </div>
        <Divider className="mt-16 sm:mt-24 lg:mt-28" />
      </main>
    </div>
  )
}
