import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from 'types/types'
import { channelMatchPipeline } from '../../server/pipeLine/channel'
import connectToDatabase from '../utils/connectToDatabase'

const getMyJoinedChannels = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const userId = new ObjectId(req.user?.id)

    const db = await connectToDatabase()
    const channelsCollection = db.collection('channels')

    const channels = await channelsCollection
      .aggregate(channelMatchPipeline({ membersId: userId }))
      .toArray()

    res.status(200).json(channels)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default getMyJoinedChannels
