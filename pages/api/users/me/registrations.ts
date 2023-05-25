import { NextApiResponse, NextApiRequest } from 'next'
import getMyRegistration from '@/server/api/getMyRegistration'
import authMiddleware from '@/server/utils/authMiddleware'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await authMiddleware(getMyRegistration)(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
