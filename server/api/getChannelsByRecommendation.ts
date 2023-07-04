import { NextApiResponse } from 'next'
import { managerPipeline, membersPipeline } from 'server/pipeLine/channel'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'

const getChannelsByRecommendation = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const recommendedChannels = await req.db
    .collection('channels')
    .aggregate([
      { $sort: { members: -1 } },
      { $limit: 4 },
      ...managerPipeline,
      ...membersPipeline,
    ])
    .toArray()

  return res.status(200).json(recommendedChannels)
}

export default withDB(getChannelsByRecommendation)
