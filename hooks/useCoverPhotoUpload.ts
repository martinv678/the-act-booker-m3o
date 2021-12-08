import type { ChangeEvent } from 'react'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { image } from '@/lib/m3o'
import { put } from '@/lib/fetch'

const FILE_EXTENSION_REGEX = /\.[0-9a-z]+$/i

export function useCoverPhotoUpload() {
  const [isUploading, setIsUploading] = useState(false)
  const router = useRouter()

  const upload = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const [file] = Array.from(event.target.files)
      const reader = new FileReader()

      reader.addEventListener(
        'load',
        async function () {
          const [ext] = file.name.match(FILE_EXTENSION_REGEX)
          const response = await image.upload({
            base64: reader.result as string,
            name: `${router.query.id}-cover-photo${ext}`,
          })

          try {
            await put(`/api/performers/${router.query.id}/update`, {
              thumbnail: response.url,
            })
          } catch (e) {
            console.log(e)
          }
          setIsUploading(false)
        },
        false,
      )

      if (file) {
        setIsUploading(true)
        reader.readAsDataURL(file)
      }
    },
    [router.query.id],
  )

  return {
    upload,
    isUploading,
  }
}
