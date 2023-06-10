import { NextApiResponse } from 'next'
import getMyJoinedChannels from 'server/api/getMyJoinedChannels'
import authMiddleware from 'server/utils/authMiddleware'
import { NextApiRequestWithUser } from 'types/types'

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
