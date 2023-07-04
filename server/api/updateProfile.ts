import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'
import authMiddleware from '../utils/authMiddleware'

const updateProfile = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const userId = new ObjectId(req.user?._id)

  const usersCollection = req.db.collection('users')

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
}

export default authMiddleware(withDB(updateProfile))
