import { ApplicationLayout } from '@/app/(shop)/application-layout'
import Header from '@/components/header/header'

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ApplicationLayout header={<Header variant="bg-transparent-text-white" hasBottomBorder={false} />}>
      {children}
    </ApplicationLayout>
  )
}
