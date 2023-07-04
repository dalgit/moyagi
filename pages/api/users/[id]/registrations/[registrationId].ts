import { NextApiResponse } from 'next'
import deleteRegistration from 'server/api/deleteRegistration'
import { CustomNextApiRequest } from 'server/types/api'

export default async function handler(
  req: CustomNextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'DELETE':
      await deleteRegistration(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
