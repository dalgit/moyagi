import { NextApiRequest, NextApiResponse } from 'next'
import authMiddleware from '@/utils/authMiddleware'
import { getMyInfo } from '@/utils/server/getMyInfo'
import updateProfile from '@/utils/server/updateProfile'

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
