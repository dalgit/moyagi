import { NextApiRequest, NextApiResponse } from 'next'
import createPost from 'server/api/createPost'
import getChannelPosts from 'server/api/getChannelPosts'
import authMiddleware from 'server/utils/authMiddleware'

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    channelId?: string
  }
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await getChannelPosts(req, res)
      break

    case 'POST':
      await authMiddleware(createPost)(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
