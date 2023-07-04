import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'
import { channelMatchPipeline } from '../../server/pipeLine/channel'

const getMyJoinedChannels = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const userId = new ObjectId(req.user?._id)

  const channels = await req.db
    .collection('channels')
    .aggregate(channelMatchPipeline({ membersId: userId }))
    .toArray()

  res.status(200).json(channels)
}

export default withDB(getMyJoinedChannels)
