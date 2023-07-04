import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { channelMatchPipeline } from 'server/pipeLine/channel'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'

const getUserChannels = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const userId = new ObjectId(req.query.id as string)

  const channels = await req.db
    .collection('channels')
    .aggregate(channelMatchPipeline({ membersId: userId }))
    .toArray()

  return res.status(200).json(channels)
}

export default withDB(getUserChannels)
