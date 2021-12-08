import type { NextPage } from 'next'
import type { Account } from 'm3o/user'
import type { Performer } from '@/lib/types'
import Link from 'next/link'
import { withAuth } from '@m3o/nextjs'
import { performers } from '@/lib/performers'
import { UserLayout } from '@/components/UserLayout'

interface UserProps {
  performers: Performer[]
  user: Account
}

export const getServerSideProps = withAuth(async (context) => {
  if (!context.req.user) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    }
  }

  const listResponse = await performers.list({
    where: { creator: context.req.user.id },
  })

  return {
    props: {
      performers: listResponse,
      user: context.req.user,
    },
  }
})

const User: NextPage<UserProps> = ({ performers }) => {
  return (
    <UserLayout>
      <Link href="/user/performers/add">
        <a>Add new performer</a>
      </Link>
      {performers.map((item) => (
        <div key={item.id}>
          <Link href={`/user/performers/${item.id}/details`}>
            <a>{item.name}</a>
          </Link>
        </div>
      ))}
    </UserLayout>
  )
}

export default User
