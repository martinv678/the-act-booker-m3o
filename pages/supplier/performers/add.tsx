import type { NextPage } from 'next'
import type { Performer } from '@/lib/types'
import Head from 'next/head'
import { useForm, Controller } from 'react-hook-form'
import { withAuth } from '@m3o/auth'
import { UserLayout } from '@/components/UserLayout'
import { TextInput } from '@/components/TextInput'
import { useAddPerformer } from '@/hooks/useAddPerformer'

type Fields = Pick<Performer, 'name' | 'tagLine'>

export const getServerSideProps = withAuth({
  redirectOnAuthFailure: true,
})

const AddPerformer: NextPage = () => {
  const { control, handleSubmit } = useForm<Fields>()
  const { addPerformer } = useAddPerformer()

  return (
    <UserLayout>
      <Head>
        <title>Add new performer | The Act Booker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Create Performer</h1>
      <form onSubmit={handleSubmit(addPerformer)}>
        <Controller
          control={control}
          defaultValue=""
          name="name"
          render={({ field }) => (
            <TextInput {...field} label="Name" id="name" />
          )}
        />
        <Controller
          control={control}
          defaultValue=""
          name="tagLine"
          render={({ field }) => (
            <TextInput {...field} label="Tag Line" id="tagLine" />
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </UserLayout>
  )
}

export default AddPerformer
