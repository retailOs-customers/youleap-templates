'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Aside from './aside'
import { Text, TextLink } from './text'

const demo_pages_menu = [
  { name: 'Home skincare', href: '/' },
  { name: 'Home Cream', href: '/home-cream' },
  { name: 'Home Drink', href: '/home-drink' },
  { name: 'Home fashion', href: '/home-fashion' },
  { name: 'Home hjiab', href: '/home-shoes' },
  { name: 'Coming soon', href: '#' },
]

interface Props {
  className?: string
}

const AsideSidebarNavigation = ({ className }: Props) => {
  return (
    <Aside openFrom="right" type="sidebar-navigation" logoOnHeading contentMaxWidthClassName="max-w-sm">
      <div className={className}>
        {/* Content */}
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-zinc-900/10">
            <div className="space-y-2 py-6">
              <Disclosure as="div" className="-mx-3">
                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 ps-3 pe-3.5 text-base/7 font-medium hover:bg-zinc-50">
                  <Text>Home pages</Text>
                  <HugeiconsIcon
                    className="group-data-open:rotate-180"
                    icon={ArrowDown01Icon}
                    size={24}
                    strokeWidth={1}
                  />
                </DisclosureButton>
                <DisclosurePanel className="ps-6 pe-3 pb-2">
                  {demo_pages_menu.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as={TextLink}
                      href={item.href}
                      className="block rounded-lg py-1 text-sm/7 font-medium hover:bg-zinc-50"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </DisclosurePanel>
              </Disclosure>

              <TextLink
                href="/collections/all"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-zinc-50"
              >
                Shop
              </TextLink>
              <TextLink
                href="/cart"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-zinc-50"
              >
                Cart
              </TextLink>
              <TextLink
                href="/orders"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-zinc-50"
              >
                Orders
              </TextLink>
              <TextLink
                href="/contact"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-medium hover:bg-zinc-50"
              >
                Contact
              </TextLink>
            </div>
            <div className="py-6">
              <TextLink
                href="/login"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-medium hover:bg-zinc-50"
              >
                Sign in
              </TextLink>
              <TextLink
                href="/register"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-medium hover:bg-zinc-50"
              >
                Register
              </TextLink>
            </div>
          </div>
        </div>
      </div>
    </Aside>
  )
}

export default AsideSidebarNavigation
