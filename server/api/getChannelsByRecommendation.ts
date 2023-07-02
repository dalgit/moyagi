import { NextApiResponse, NextApiRequest } from 'next'
import { managerPipeline, membersPipeline } from 'server/pipeLine/channel'
import connectToDatabase from '../utils/connectToDatabase'

const getChannelsByRecommendation = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const db = await connectToDatabase()
    const channelsCollection = db.collection('channels')

    const recommendedChannels = await channelsCollection
      .aggregate([
        { $sort: { members: -1 } },
        { $limit: 4 },
        ...managerPipeline,
        ...membersPipeline,
      ])
      .toArray()

    return res.status(200).json(recommendedChannels)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시 후 다시 시도해주세요.' })
  }
}

export default getChannelsByRecommendation
