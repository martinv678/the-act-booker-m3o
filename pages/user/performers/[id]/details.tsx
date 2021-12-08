import type { NextPage } from 'next'
import type { Performer } from '@/lib/types'
import type { Account } from 'm3o/user'
import { useForm, Controller } from 'react-hook-form'
import { withAuth } from '@m3o/nextjs'
import { performers } from '@/lib/performers'
import { TextInput } from '@/components/TextInput'
import { EditUserLayout } from '@/components/EditUserLayout'
import { put } from '@/lib/fetch'
import { useSavePerformerDetails } from '@/hooks/useSavePerformerDetails'

interface UserProps {
  performer: Performer
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

  const result = await performers.findUnique({
    where: { id: context.query.id as string },
  })

  return {
    props: {
      performer: result,
      user: context.req.user,
    },
  }
})

const EditPerformerDetails: NextPage<UserProps> = ({ performer }) => {
  const { save, isSaving } = useSavePerformerDetails()
  const { control, handleSubmit } = useForm<Performer>({
    defaultValues: performer,
  })

  return (
    <EditUserLayout>
      <form onSubmit={handleSubmit(save)}>
        <Controller
          control={control}
          defaultValue={performer.name}
          name="name"
          render={({ field }) => (
            <TextInput {...field} label="Name" id="name" />
          )}
        />
        <Controller
          control={control}
          defaultValue={performer.tagLine || ''}
          name="tagLine"
          render={({ field }) => (
            <TextInput {...field} label="Tag Line" id="tagLine" />
          )}
        />
        <Controller
          control={control}
          defaultValue={performer.description || ''}
          name="description"
          render={({ field }) => (
            <TextInput {...field} label="Description" id="description" />
          )}
        />
        <button type="submit" disabled={isSaving}>
          Submit
        </button>
      </form>
    </EditUserLayout>
  )
}

export default EditPerformerDetails
