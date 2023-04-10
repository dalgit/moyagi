import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import authMiddleware from '@/utils/authMiddleware'
import { connectToDatabase } from '@/utils/db/db'

const createChannel = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const db = await connectToDatabase()
    const { name, address, description, isPublic } = req.body
    const { user } = req

    const userId = new ObjectId(user?.id)

    await db.collection('channels').insertOne({
      name,
      address,
      description,
      isPublic,
      manager: userId,
      members: [userId],
    })

    res.status(200).json({ message: '채널이 개설되었습니다.' })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
}

export default authMiddleware(createChannel)
