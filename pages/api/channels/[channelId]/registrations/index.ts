import { NextApiResponse, NextApiRequest } from 'next'
import authMiddleware from '@/utils/authMiddleware'
import { createRegistration } from '@/utils/server/createRegistration'
import { getRegistrations } from '@/utils/server/getRegistrations'

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
