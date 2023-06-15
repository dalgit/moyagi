import { NextApiRequest, NextApiResponse } from 'next'
import createPostComment from 'server/api/createPostComment'

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
      await createPostComment(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
