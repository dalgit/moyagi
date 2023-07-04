import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import withDB from 'server/utils/withDB'
import { channelMatchPipeline } from '../../server/pipeLine/channel'

const getChannelBySlug = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const { channelAddress: address } = req.query

  const channel = await req.db
    .collection('channels')
    .aggregate(channelMatchPipeline({ address: address as string }))
    .next()

  if (!channel) {
    return res.status(404).json({ message: '채널을 찾을 수 없습니다.' })
  }

  return res.status(200).json(channel)
}

export default withDB(getChannelBySlug)
