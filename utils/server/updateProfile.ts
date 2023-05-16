import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import { connectToDatabase } from '@/utils/db/db'
import authMiddleware from '../authMiddleware'

const updateProfile = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const { user } = req
    const userId = new ObjectId(user?.id)

    const db = await connectToDatabase()
    const usersCollection = db.collection('users')
    const { introduction, imageUrl } = req.body

    const udapteResult = await usersCollection.findOneAndUpdate(
      { _id: userId },
      { $set: { introduction, imageUrl } },
      { returnDocument: 'after' },
    )

    const updatedUser = udapteResult.value

    return res.status(200).json(updatedUser)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default authMiddleware(updateProfile)
