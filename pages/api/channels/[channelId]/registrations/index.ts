import { NextApiResponse, NextApiRequest } from 'next'
import createRegistration from 'server/api/createRegistration'
import getRegistrations from 'server/api/getRegistrations'
import authMiddleware from 'server/utils/authMiddleware'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await getRegistrations(req, res)
      break

    case 'POST':
      await authMiddleware(createRegistration)(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
