import { Layout } from '@/components/Layout'
import { Analytics } from "@vercel/analytics/react"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      {children}
      <Analytics />
    </Layout>
  )
}
