import type { Performer } from '@/lib/types'
import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { post } from '@/lib/fetch'

type Fields = Pick<Performer, 'name' | 'tagLine'>

export function useAddPerformer() {
  const router = useRouter()

  const addPerformer = useCallback(
    async (values: Fields) => {
      try {
        await post('/api/performers/create', values)
        router.push('/supplier')
      } catch (e) {
        console.log(e)
      }
    },
    [router],
  )

  return {
    addPerformer,
  }
}
