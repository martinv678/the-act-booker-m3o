import type { NextApiRequest, NextApiResponse } from 'next'
import { getLoggedInUserAccount } from '@m3o/nextjs'
import { performers } from '@/lib/performers'

export default async function updatePerformer(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'PUT') {
    res.status(405).send({ error: { message: 'Method not allowed' } })
    return
  }

  try {
    const user = await getLoggedInUserAccount(req)
    const performer = await performers.findUnique({
      where: { id: req.query.id as string },
    })

    if (performer.creator !== user.id) {
      res.statusCode = 401

      return res.send({
        error: { message: 'You are unable to edit this performer' },
      })
    }

    await performers.update({
      where: { id: req.query.id as string },
      data: req.body,
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
