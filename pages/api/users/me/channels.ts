import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import authMiddleware from '@/utils/authMiddleware'
import { getMyJoinedChannels } from '@/utils/server/getMyJoinedChannels'

export default async function handler(
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await authMiddleware(getMyJoinedChannels)(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
