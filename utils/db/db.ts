import { MongoClient } from 'mongodb'

export const connectToDatabase = async (): Promise<MongoClient> => {
  const URI = process.env.MONGODB_URI as string
  const client = await MongoClient.connect(URI)

  return client
}
