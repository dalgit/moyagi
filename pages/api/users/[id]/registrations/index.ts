import { NextApiResponse } from 'next'
import getUserRegistrations from 'server/api/getUserRegistrations'
import { CustomNextApiRequest } from 'server/types/api'

export default async function handler(
  req: CustomNextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await getUserRegistrations(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
