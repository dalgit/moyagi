import { NextApiRequest } from 'next'

export interface NextApiRequestWithUser extends NextApiRequest {
  user?: UserJwt
}

interface UserJwt {
  id: string
}
