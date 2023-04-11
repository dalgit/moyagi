import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import authMiddleware from '@/utils/authMiddleware'
import { connectToDatabase } from '@/utils/db/db'

const joinRequest = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const db = await connectToDatabase()
    const joinRequestCollection = db.collection('joinRequest')

    const { user } = req
    const userId = new ObjectId(user.id)

    const { message, isPublic, channelId: cId } = req.body
    const channelId = new ObjectId(cId)

    const status = isPublic ? 'approved' : 'pending'
    const time = new Date()

    if (isPublic) {
      const channelsCollection = db.collection('channels')

      await channelsCollection.updateOne(
        { _id: channelId },
        { $push: { members: userId } },
      )
    }

    await joinRequestCollection.insertOne({
      requestorId: userId,
      channelId,
      message,
      status,
      time,
    })

    return res.status(200).json({ message: 'ok' })
  } catch {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default authMiddleware(joinRequest)