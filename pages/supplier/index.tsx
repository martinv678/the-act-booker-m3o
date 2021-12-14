import type { NextPage } from 'next'
import type { Performer } from '@/lib/types'
import Link from 'next/link'
import { withAuth } from '@m3o/auth'
import { performers } from '@/lib/performers'
import { UserLayout } from '@/components/UserLayout'

interface UserProps {
  performers: Performer[]
}

export const getServerSideProps = withAuth<UserProps>({
  redirectOnAuthFailure: true,
  async onAuthentication({ user }) {
    const listResponse = await performers.list({
      where: { creator: user.id },
    })

    return {
      props: {
        performers: listResponse,
      },
    }
  },
})

const User: NextPage<UserProps> = ({ performers }) => {
  return (
    <UserLayout>
      <Link href="/supplier/performers/add">
        <a>Add new performer</a>
      </Link>
      {performers.map((item) => (
        <div key={item.id}>
          <Link href={`/supplier/performers/${item.id}/details`}>
            <a>{item.name}</a>
          </Link>
        </div>
      ))}
    </UserLayout>
  )
}

export default User
