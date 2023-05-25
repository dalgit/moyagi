import { NextApiResponse, NextApiRequest } from 'next'
import getUserChannels from '@/server/api/getUserChannels'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await getUserChannels(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
