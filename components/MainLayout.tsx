import type { FC } from 'react'
import { SiteHeader } from './SiteHeader'

export const MainLayout: FC = ({ children }) => {
  return (
    <div>
      <SiteHeader />
      <main className="bg-gray-50">{children}</main>
    </div>
  )
}
