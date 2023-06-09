import { NextApiResponse } from 'next'
import createChannel from 'server/api/createChannel'
import getChannelBySlug from 'server/api/getChannelBySlug'
import getChannelsByKeyword from 'server/api/getChannelsByKeword'
import { CustomNextApiRequest } from 'server/types/api'

export default async function handler(
  req: CustomNextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'POST':
      await createChannel(req, res)
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
      return res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
