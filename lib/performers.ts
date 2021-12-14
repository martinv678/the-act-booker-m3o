import type { Performer } from './types'
import { Storage } from '@m3o/storage'

const TABLE_NAME = 'performers'

export const performers = new Storage<Performer>({
  tableName: TABLE_NAME,
})
