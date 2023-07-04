import { MongoClient, Db } from 'mongodb'

const connectToDatabase = async (): Promise<{
  client: MongoClient
  db: Db
}> => {
  const URI = process.env.MONGODB_URI as string
  const client = await MongoClient.connect(URI)
  const db = client.db('moyagi')
  return { client, db }
}

export default connectToDatabase
