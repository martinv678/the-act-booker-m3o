import { UserService } from 'm3o/user'
import { DbService } from 'm3o/db'
import { ImageService } from 'm3o/image'

const M3O_KEY = process.env.M3O_KEY as string

export const user = new UserService(M3O_KEY)
export const db = new DbService(M3O_KEY)

// This is allowed to be used on the client
export const image = new ImageService(
  process.env.NEXT_PUBLIC_M3O_IMAGE_KEY,
)
