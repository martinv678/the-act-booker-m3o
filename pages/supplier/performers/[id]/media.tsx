import type { NextPage } from 'next'
import type { Performer } from '@/lib/types'
import { useForm, Controller } from 'react-hook-form'
import { withAuth } from '@m3o/auth'
import { performers } from '@/lib/performers'
import { TextInput } from '@/components/TextInput'
import { EditUserLayout } from '@/components/EditUserLayout'
import { useCoverPhotoUpload } from '@/hooks/useCoverPhotoUpload'
import { useSavePerformerDetails } from '@/hooks/useSavePerformerDetails'

interface UserProps {
  performer: Performer
}

export const getServerSideProps = withAuth<UserProps>({
  redirectOnAuthFailure: true,
  async onAuthentication({ context }) {
    const result = await performers.findUnique({
      where: { id: context.query.id as string },
    })

    return {
      props: {
        performer: result,
      },
    }
  },
})

const EditPerformerMedia: NextPage<UserProps> = ({ performer }) => {
  const { save, isSaving } = useSavePerformerDetails()
  const { upload, isUploading } = useCoverPhotoUpload()
  const { control, handleSubmit } = useForm<Performer>({
    defaultValues: {
      youtubeVideoCode: performer.youtubeVideoCode || '',
    },
  })

  return (
    <EditUserLayout>
      <section className="bg-white border-gray-300 p-6 rounded-md border mb-4">
        <h1 className="font-black text-xl mb-6">Video</h1>
        <form onSubmit={handleSubmit(save)}>
          <Controller
            control={control}
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
