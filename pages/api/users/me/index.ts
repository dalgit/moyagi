import { NextApiRequest, NextApiResponse } from 'next'
import getMyInfo from '@/server/api/getMyInfo'
import updateProfile from '@/server/api/updateProfile'
import authMiddleware from '@/server/utils/authMiddleware'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await authMiddleware(getMyInfo)(req, res)
      break

    case 'PATCH':
      await updateProfile(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
