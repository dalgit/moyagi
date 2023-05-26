import { NextApiResponse, NextApiRequest } from 'next'
import deleteChannelPost from 'server/api/deleteChannelPost'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'DELETE':
      await deleteChannelPost(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
