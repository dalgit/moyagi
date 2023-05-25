import { MongoClient, Db } from 'mongodb'

const connectToDatabase = async (): Promise<Db> => {
  const URI = process.env.MONGODB_URI as string
  const client = await MongoClient.connect(URI)
  return client.db('moyagi')
}

export default connectToDatabase
