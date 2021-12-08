import type { NextPage } from 'next'
import type { Performer } from '@/lib/types'
import type { Account } from 'm3o/user'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'
import { withAuth } from '@m3o/nextjs'
import { performers } from '@/lib/performers'
import { TextInput } from '@/components/TextInput'
import { EditUserLayout } from '@/components/EditUserLayout'
import { put } from '@/lib/fetch'
import { useCoverPhotoUpload } from '@/hooks/useCoverPhotoUpload'

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

const EditPerformerMedia: NextPage<UserProps> = ({ performer }) => {
  const { upload, isUploading } = useCoverPhotoUpload()

  const [isSaving, setIsSaving] = useState(false)
  const router = useRouter()
  const { control, handleSubmit } = useForm<Performer>({
    defaultValues: performer,
  })

  async function onSubmit(values: Performer) {
    setIsSaving(true)

    try {
      await put(`/api/performers/${router.query.id}/update`, values)
      // Show some kinda of notification
    } catch (e) {
      console.log(e)
    }

    setIsSaving(false)
  }

  return (
    <EditUserLayout>
      <section className="bg-white border-gray-300 p-6 rounded-md border mb-4">
        <h1 className="font-black text-xl mb-6">Video</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            defaultValue={performer.youtubeVideoCode || ''}
            name="youtubeVideoCode"
            render={({ field }) => (
              <TextInput
                {...field}
                label="Youtube Link"
                id="youtubeVideoCode"
              />
            )}
          />
          <button type="submit" disabled={isSaving}>
            Save
          </button>
        </form>
      </section>
      <section className="bg-white border-gray-300 p-6 rounded-md border">
        <h1 className="font-black text-xl mb-6">Cover Photo</h1>
        {isUploading && <p>Is uploading...</p>}
        <input type="file" onChange={upload} multiple={false} />
      </section>
    </EditUserLayout>
  )
}

export default EditPerformerMedia
