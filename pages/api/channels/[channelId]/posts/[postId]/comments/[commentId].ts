import { NextApiResponse, NextApiRequest } from 'next'
import deletePostComment from 'server/api/deletePostComment'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'DELETE':
      await deletePostComment(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
