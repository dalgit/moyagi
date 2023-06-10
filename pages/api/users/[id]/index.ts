import { NextApiResponse, NextApiRequest } from 'next'
import getUserProfile from 'server/api/getUserProfile'
import updateProfile from 'server/api/updateProfile'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await getUserProfile(req, res)
      break

    case 'PATCH':
      await updateProfile(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
