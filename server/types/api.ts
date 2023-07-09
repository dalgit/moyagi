import { Db } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { JwtUser } from './jwt'

export interface CustomNextApiRequest extends NextApiRequest {
  db: Db
  user?: JwtUser
}

export type CustomNextApiHandler = (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => void | Promise<void>
