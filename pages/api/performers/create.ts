import { getLoggedInUserAccount } from '@m3o/nextjs'
import { performers } from '@/lib/performers'

export default async function createPerformer(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send({ error: { message: 'Method not allowed' } })
    return
  }

  try {
    const user = await getLoggedInUserAccount(req)
    await performers.create({
      data: { ...req.body, creator: user.id },
    })
    res.json({})
  } catch (e) {
    console.log(e)
    if (e.Id) {
      console.log('this is the m3o error')
    }

    if (typeof e === 'string') {
      res.statusCode = 422
      res.send({ error: { message: e } })
      return
    }
  }
}
