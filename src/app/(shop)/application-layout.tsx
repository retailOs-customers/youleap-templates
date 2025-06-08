import AsideSidebarCart from '@/components/aside-sidebar-cart'
import AsideSidebarNavigation from '@/components/aside-sidebar-navigation'
import Footer from '@/components/footer'
import Header from '@/components/header/header'
import FeatureSection4 from '@/components/sections/feature-section-4'
import NewsletterSection from '@/components/sections/newsletter-section-1'
import { getCartProducts } from '@/data'
import React, { ReactNode } from 'react'

interface ComponentProps {
  children: ReactNode
  header?: ReactNode
  footer?: ReactNode
}

const ApplicationLayout: React.FC<ComponentProps> = async ({ children, header, footer }) => {
  const products = await getCartProducts()
  return (
    <div>
      {/* HEADER */}
      {header ? header : <Header />}

      {/* MAIN CONTENT */}
      {children}
      <NewsletterSection className="container mt-16 pt-5" />
      <FeatureSection4 className="container mt-16" />

      {/* FOOTER */}
      {footer ? footer : <Footer className="container mt-16" />}

      {/* ASIDES */}
      <AsideSidebarNavigation />
      <AsideSidebarCart products={products} />
    </div>
  )
}

export { ApplicationLayout }
