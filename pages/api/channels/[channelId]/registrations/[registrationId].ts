import { NextApiResponse, NextApiRequest } from 'next'
import deleteRegistration from 'server/api/deleteRegistration'
import updateRegistration from 'server/api/updateRegistration'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'PATCH':
      await updateRegistration(req, res)
      break

    case 'DELETE':
      await deleteRegistration(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
