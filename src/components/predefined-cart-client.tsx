'use client'
import { Bars3Icon, Squares2X2Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import ProductSortDropdown from '../app/(shop)/(other-pages)/collections/product-sort-dropdown'
import { Input } from './input'
import { Listbox, ListboxOption } from './listbox'
import ProductCardHorizontal from './product-card-horizontal'
import ProductCardQuickView from './product-card-quick-view'

export default function PredefinedCartClient({ products }: { products: any[] }) {
  const [displayMode, setDisplayMode] = useState<'grid' | 'list'>('grid')
  const [perPage, setPerPage] = useState(24)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('')
  const perPageOptions = [24, 48, 96]

  // Filter and sort logic (demo only)
  const filtered = products.filter((p) => !search || p.title?.toLowerCase().includes(search.toLowerCase()))
  const shown = filtered.slice(0, perPage)

  return (
    <>
      <div className="mb-6 flex w-full min-w-0 flex-row-reverse items-center gap-x-2 border-b border-zinc-200 pb-4">
        {/* Display mode */}
        <div className="flex min-w-0 flex-0 items-center justify-center">
          <div className="flex gap-1">
            <button
              className={`z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border ${displayMode === 'grid' ? 'border-zinc-900 bg-zinc-100 text-zinc-900' : 'border-zinc-200 bg-white text-zinc-500 hover:bg-zinc-50'} text-sm transition`}
              type="button"
              onClick={() => setDisplayMode('grid')}
            >
              <Squares2X2Icon className="h-5 w-5" />
            </button>
            <button
              className={`z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border ${displayMode === 'list' ? 'border-zinc-900 bg-zinc-100 text-zinc-900' : 'border-zinc-200 bg-white text-zinc-500 hover:bg-zinc-50'} text-sm transition`}
              type="button"
              onClick={() => setDisplayMode('list')}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          </div>
        </div>
        {/* Sort by */}
        <div className="relative flex min-w-0 flex-1 items-center justify-center">
          <ProductSortDropdown align="right" />
        </div>
        {/* Per page */}
        <div className="flex min-w-0 flex-1 items-center justify-center">
          <Listbox
            value={perPage}
            aria-label="מוצרים לעמוד"
            className="h-10 min-w-0 text-center text-sm"
            onChange={setPerPage}
          >
            {perPageOptions.map((option) => (
              <ListboxOption key={option} value={option}>
                {option} מוצרים
              </ListboxOption>
            ))}
          </Listbox>
        </div>
        {/* Search */}
        <div className="flex min-w-0 flex-1 items-center justify-center">
          <Input
            type="search"
            placeholder="חפש מוצר..."
            className="h-10 min-w-0 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* Product count */}
        <span className="mr-auto w-14 min-w-0 flex-none text-center text-xs text-zinc-500">{shown.length} מוצרים</span>
      </div>
      <div
        className={
          displayMode === 'grid'
            ? 'grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 xl:grid-cols-3'
            : 'flex flex-col gap-6'
        }
      >
        {shown.map((product, i) =>
          displayMode === 'grid' ? (
            <ProductCardQuickView
              key={product.id}
              product={product}
              badge={i === 0 ? 'מארז' : i === 1 ? 'חדש!' : undefined}
            />
          ) : (
            <ProductCardHorizontal key={product.id} product={product} />
          )
        )}
      </div>
    </>
  )
}
