import { ObjectId } from 'mongodb'
import { NextApiResponse, NextApiRequest } from 'next'
import connectToDatabase from '../utils/connectToDatabase'

const getUserSettings = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const userId = new ObjectId(req.query.id as string)

    const db = await connectToDatabase()
    const usersCollection = db.collection('users')

    const user = await usersCollection.findOne(
      { _id: userId },
      { projection: { password: 0 } },
    )

    return res.status(200).json(user)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default getUserSettings
