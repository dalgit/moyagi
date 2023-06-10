import { NextApiResponse, NextApiRequest } from 'next'
import getChannelsByRecommendation from 'server/api/getChannelsByRecommendation'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await getChannelsByRecommendation(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
