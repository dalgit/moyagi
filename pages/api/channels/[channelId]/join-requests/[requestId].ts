import { NextApiResponse, NextApiRequest } from 'next'
import { deleteJoinRequest } from '@/utils/server/deleteRegistration'
import { updateJoinRequest } from '@/utils/server/updateJoinRequest'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'PATCH':
      await updateJoinRequest(req, res)
      break

    case 'DELETE':
      await deleteJoinRequest(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
