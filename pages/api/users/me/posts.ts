import { NextApiResponse, NextApiRequest } from 'next'
import authMiddleware from '@/utils/authMiddleware'
import { getMyPosts } from '@/utils/server/getMyPosts'

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
