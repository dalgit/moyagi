import { NextApiRequest } from 'next'

export interface NextApiRequestWithUser extends NextApiRequest {
  user?: any
}
