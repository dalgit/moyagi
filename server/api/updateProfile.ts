import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from 'types/types'
import authMiddleware from '../utils/authMiddleware'
import connectToDatabase from '../utils/connectToDatabase'

const updateProfile = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const userId = new ObjectId(req.user?.id)

    const db = await connectToDatabase()
    const usersCollection = db.collection('users')

    const { introduction, imageUrl } = req.body

    const udapteResult = await usersCollection.findOneAndUpdate(
      { _id: userId },
      {
        $set: {
          ...(introduction && { introduction }),
          ...(imageUrl && { imageUrl }),
        },
      },
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
