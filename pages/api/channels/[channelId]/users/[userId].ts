import { NextApiResponse, NextApiRequest } from 'next'
import { deleteChannelUser } from '@/utils/server/deleteChannelUser'
import { getChannelMembers } from '@/utils/server/getChannelMembers'

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
