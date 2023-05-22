import { NextApiResponse, NextApiRequest } from 'next'
import { getUserRegistrations } from '@/utils/server/getUserRegistrations'

export default async function handler(
  req: NextApiRequest,
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
