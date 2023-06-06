import { NextApiRequest, NextApiResponse } from 'next'
import createPostComment from 'server/api/createPostComment'
import authMiddleware from 'server/utils/authMiddleware'

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    channelId?: string
    postId?: string
  }
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'POST':
      await authMiddleware(createPostComment)(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
