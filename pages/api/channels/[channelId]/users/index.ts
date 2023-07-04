import { NextApiResponse } from 'next'
import getChannelMembers from 'server/api/getChannelMembers'
import { CustomNextApiRequest } from 'server/types/api'

export default async function handler(
  req: CustomNextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await getChannelMembers(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
