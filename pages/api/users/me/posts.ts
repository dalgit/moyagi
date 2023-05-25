import { NextApiResponse, NextApiRequest } from 'next'
import getMyPosts from '@/server/api/getMyPosts'
import authMiddleware from '@/server/utils/authMiddleware'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await authMiddleware(getMyPosts)(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
