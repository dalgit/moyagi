import { MongoClient } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiHandler, CustomNextApiRequest } from 'server/types/api'
import connectToDatabase from './connectToDatabase'

const withDB =
  (handler: CustomNextApiHandler) =>
  async (req: CustomNextApiRequest, res: NextApiResponse) => {
    let client: MongoClient | undefined

    try {
      const { client: dbClient, db } = await connectToDatabase()
      client = dbClient
      req.db = db
      await handler(req, res)
    } catch (e) {
      console.error(e)
      return res.status(500).json({
        message: '서버가 불안정합니다. 잠시 후 다시 시도해주세요.',
      })
    } finally {
      await client?.close()
    }
  }

export default withDB
