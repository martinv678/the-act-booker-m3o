import type { FC } from 'react'
import Link from 'next/link'
import ArrowLeftIcon from '@heroicons/react/outline/ArrowLeftIcon'
import { UserLayout } from './UserLayout'
import { EditUserNavigation } from './EditUserNavigation'

export const EditUserLayout: FC = ({ children }) => {
  return (
    <UserLayout>
      <div className="border-b border-gray-300 bg-white p-6">
        <Link href="/supplier">
          <a className="flex items-center border-r border-gray-300">
            <ArrowLeftIcon className="w-4 mr-2" />
            Back
          </a>
        </Link>
      </div>
      <div className="p-6">
        <EditUserNavigation />
        {children}
      </div>
    </UserLayout>
  )
}
