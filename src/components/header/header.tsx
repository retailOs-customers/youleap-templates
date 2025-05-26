import { Logo } from '@/app/logo'
import { getSkincareCollections } from '@/data'
import clsx from 'clsx'
import Link from 'next/link'
import { TextLink } from '../text'
import CartIconBtn from './cart-icon-btn'
import DropdownMenuPopover from './dropdown-menu-popover'
import HamburgerIconMenu from './hamburger-icon-menu'
import MegaMenuPopover, { MegaMenuPopoverProps } from './mega-menu-popover'
import SearchIconPopover from './search-icon-popover'
import UserIconPopover from './user-icon-popover'

const demo_pages_menu = [
  { name: 'דף הבית טיפוח', href: '/' },
  { name: 'דף הבית קרם', href: '/home-cream' },
  { name: 'דף הבית דרינק', href: '/home-drink' },
  { name: 'דף הבית אופנה', href: '/home-fashion' },
  { name: 'דף הבית נעליים', href: '/home-shoes' },
  { name: 'בקרוב', href: '#' },
]
const mega_menus = [
  {
    name: 'עמודי דמו',
    href: '#',
    chidren: demo_pages_menu,
  },
  {
    name: 'קולקציות',
    href: '#',
    chidren: [
      { name: 'כל הקולקציות 1', href: '/collections/all' },
      { name: 'כל הקולקציות 2', href: '/collections/page-style-2/all' },
      { name: 'עמוד קולקציה', href: '/collections/face-wash' },
      { name: 'פרטי מוצר', href: '/products/demo-product-1' },
      { name: 'פרטי מוצר 2', href: '/products/page-style-2/demo-product-2' },
      { name: 'פרטי מוצר 3', href: '/products/page-style-3/demo-product-3' },
    ],
  },
  {
    name: 'מה חדש',
    href: '#',
    chidren: [
      { name: 'צור קשר', href: '/contact' },
      { name: 'אודות', href: '/about-us' },
      { name: 'בלוג', href: '/blog' },
      { name: 'התחברות / הרשמה', href: '/login' },
      { name: 'עגלת קניות', href: '/cart' },
      { name: 'ההזמנות שלי', href: '/orders' },
    ],
  },
]

const demo_checkout_menu = [
  { name: 'התחברות / הרשמה', href: '/login' },
  { name: 'עגלת קניות', href: '/cart' },
  { name: 'לתשלום', href: '/checkout' },
  { name: 'הזמנה הושלמה', href: '/order-successful' },
  { name: 'ההזמנות שלי', href: '/orders' },
  { name: 'פרטי הזמנה', href: '/orders/4657' },
]

interface HeaderProps {
  className?: string
  hasBottomBorder?: boolean
  variant?: 'default' | 'bg-transparent-text-white'
  megamenuVariant?: MegaMenuPopoverProps['variant']
}

const Header = async ({ className, hasBottomBorder = true, variant = 'default', megamenuVariant }: HeaderProps) => {
  const collections = await getSkincareCollections()
  const featuredCollections = collections.slice(0, 3) // Get 3 collections

  return (
    <header
      className={clsx(
        className,
        'group z-10 w-full',
        variant === 'default' && 'relative',
        variant === 'bg-transparent-text-white' &&
          'absolute inset-x-0 top-0 bg-transparent text-white transition-colors duration-300 has-[.bitpan-popover-full-panel]:text-zinc-950'
      )}
    >
      <nav aria-label="Global" className="container">
        <div
          className={clsx(
            'flex items-center justify-between border-zinc-950/10 py-6 dark:border-white/10',
            hasBottomBorder && 'border-b',
            !hasBottomBorder && 'has-[.bitpan-popover-full-panel]:border-b'
          )}
        >
          {/* LEFT LOGO */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">החברה שלך</span>
              <Logo />
            </Link>
          </div>

          {/* MAIN CENTER MENUS */}
          <div className="hidden lg:flex lg:gap-x-8">
            {/* DROPDOWN */}
            <DropdownMenuPopover dropdownMenu={demo_pages_menu}>עמודי דמו</DropdownMenuPopover>

            {/* MEGA MENU */}
            <MegaMenuPopover
              megamenu={mega_menus}
              rightImage={{
                src: '/images/shoe/feature-1-2.png',
                alt: 'Featured product',
              }}
              featuredCollections={featuredCollections}
              variant={megamenuVariant}
            >
              גלו
            </MegaMenuPopover>

            {/* TEXT LINKS */}
            <TextLink href="/collections/page-style-2/all">חנות</TextLink>
            <DropdownMenuPopover dropdownMenu={demo_checkout_menu}>לתשלום</DropdownMenuPopover>
          </div>

          {/* RIGHT ICON BUTTONS */}
          <div className="flex flex-1 justify-end gap-x-2.5 md:gap-x-4 xl:gap-x-5">
            {/* HAMBURGER MENU */}
            <HamburgerIconMenu />

            {/* SEARCH  */}
            <SearchIconPopover />

            {/* USER - DROPDOWN */}
            <UserIconPopover />

            {/* CART */}
            <CartIconBtn />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
