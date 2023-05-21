import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import { connectToDatabase } from '@/utils/db/db'
import { channelsByUserIdPipeLine } from './pipeLine/channel'

export const getUserChannels = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const db = await connectToDatabase()
    const channelsCollection = db.collection('channels')
    const userId = new ObjectId(req.query.id as string)

    const channels = await channelsCollection
      .aggregate(channelsByUserIdPipeLine(userId))
      .toArray()

    return res.status(200).json(channels)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}
