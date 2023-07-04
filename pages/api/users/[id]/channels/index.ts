import { NextApiResponse } from 'next'
import getUserChannels from 'server/api/getUserChannels'
import { CustomNextApiRequest } from 'server/types/api'

export default async function handler(
  req: CustomNextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await getUserChannels(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
