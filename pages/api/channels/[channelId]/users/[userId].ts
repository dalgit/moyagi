import { NextApiResponse, NextApiRequest } from 'next'
import deleteChannelUser from 'server/api/deleteChannelUser'
import getChannelMembers from 'server/api/getChannelMembers'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await getChannelMembers(req, res)
      break

    case 'DELETE':
      await deleteChannelUser(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
