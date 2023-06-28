import { NextApiRequest, NextApiResponse } from 'next'
import createPostComment from 'server/api/createPostComment'
import getPostComments from 'server/api/getPostComments'

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
    case 'GET':
      await getPostComments(req, res)
      break
    case 'POST':
      await createPostComment(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
