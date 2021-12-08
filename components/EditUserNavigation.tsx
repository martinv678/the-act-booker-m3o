import type { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavigationLink {
  name: string
  pathname: string
}

const LINKS: NavigationLink[] = [
  {
    name: 'Details',
    pathname: '/user/performers/[id]/details',
  },
  {
    name: 'Media',
    pathname: '/user/performers/[id]/media',
  },
]

export const EditUserNavigation: FC = () => {
  const router = useRouter()

  return (
    <div>
      <ul>
        {LINKS.map((link) => (
          <li key={link.pathname}>
            <Link
              href={{
                pathname: link.pathname,
                query: { id: router.query.id },
              }}
            >
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
