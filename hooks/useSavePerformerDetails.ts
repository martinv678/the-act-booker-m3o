import type { Performer } from '@/lib/types'
import { useRouter } from 'next/router'
import { useState, useCallback } from 'react'
import { put } from '@/lib/fetch'

export function useSavePerformerDetails() {
  const router = useRouter()
  const [isSaving, setIsSaving] = useState(false)

  const save = useCallback(
    async (values: Performer) => {
      setIsSaving(true)

      try {
        await put(`/api/performers/${router.query.id}/update`, values)
        // Show some kinda of notification
      } catch (e) {
        console.log(e)
      }

      setIsSaving(false)
    },
    [router.query.id],
  )

  return {
    isSaving,
    save,
  }
}
