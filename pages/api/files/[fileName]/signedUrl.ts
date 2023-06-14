import { NextApiResponse, NextApiRequest } from 'next'
import getPreSignedUrl from 'server/api/getPreSignedUrl'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const requestMethod = req.method

  switch (requestMethod) {
    case 'GET':
      await getPreSignedUrl(req, res)
      break

    default:
      res.status(405).end(`${requestMethod} not allowed`)
      break
  }
}
