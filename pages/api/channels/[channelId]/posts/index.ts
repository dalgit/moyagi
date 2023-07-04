import { NextApiResponse } from 'next'
import createPost from 'server/api/createPost'
import getChannelPosts from 'server/api/getChannelPosts'
import { CustomNextApiRequest } from 'server/types/api'

export default async function handler(
  req: CustomNextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await getChannelPosts(req, res)
      break

    case 'POST':
      await createPost(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
