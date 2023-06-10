import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from 'types/types'
import connectToDatabase from '../server/utils/connectToDatabase'

const getMyInfo = async (req: NextApiRequestWithUser, res: NextApiResponse) => {
  try {
    const userId = new ObjectId(req.user?.id)

    const db = await connectToDatabase()
    const usersCollection = db.collection('users')

    const userInfo = await usersCollection.findOne({ _id: userId })

    return res.status(200).json(userInfo)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default getMyInfo
