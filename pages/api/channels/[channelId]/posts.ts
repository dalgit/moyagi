import { NextApiRequest, NextApiResponse } from 'next'
import authMiddleware from '@/utils/authMiddleware'
import { createPost } from '@/utils/server/createPost'
import { getChannelPosts } from '@/utils/server/getChannelPosts'

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
