import type { FC } from 'react'
import { MainLayout } from './MainLayout'

export const UserLayout: FC = ({ children }) => {
  return (
    <MainLayout>
      <div className="md:flex min-h-screen">
        <aside className="md:border-r border-gray-200 h-full w-3/12 max-w-xs min-h-screen">
          Sidebar
        </aside>
        <div className="w-full bg-gray-50">{children}</div>
      </div>
    </MainLayout>
  )
}
