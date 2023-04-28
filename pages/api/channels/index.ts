import { NextApiResponse, NextApiRequest } from 'next'
import authMiddleware from '@/utils/authMiddleware'
import { createChannel } from '@/utils/server/createChannel'
import { getChannelBySlug } from '@/utils/server/getChannelBySlug'
import { getChannelsByKeyword } from '@/utils/server/getChannelsByKeword'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'POST':
      await authMiddleware(createChannel)(req, res)
      break

    case 'GET':
      if (req.query.channelAddress) {
        await getChannelBySlug(req, res)
      }

      if (req.query.keyword) {
        await getChannelsByKeyword(req, res)
      }
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
