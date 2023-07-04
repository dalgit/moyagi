import { Db } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export interface CustomNextApiRequest extends NextApiRequest {
  db: Db
  user?: any
}

export type CustomNextApiHandler = (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => void | Promise<void>
