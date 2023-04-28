import { NextApiResponse, NextApiRequest } from 'next'
import authMiddleware from '@/utils/authMiddleware'
import { createJoinRequest } from '@/utils/server/createJoinRequest'
import { getJoinRequests } from '@/utils/server/getJoinRequests'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await getJoinRequests(req, res)
      break

    case 'POST':
      await authMiddleware(createJoinRequest)(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
