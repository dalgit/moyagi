import { NextApiResponse } from 'next'
import createPostComment from 'server/api/createPostComment'
import getPostComments from 'server/api/getPostComments'
import { CustomNextApiRequest } from 'server/types/api'

export default async function handler(
  req: CustomNextApiRequest,
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
