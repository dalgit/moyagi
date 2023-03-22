import { MongoClient, Db } from 'mongodb'

export const connectToDatabase = async (): Promise<Db> => {
  const URI = process.env.MONGODB_URI as string
  const client = await MongoClient.connect(URI)
  const db = client.db('moyagi')

  return db
}
