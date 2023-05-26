import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from 'types/types'
import { channelsByAddressPipeLine } from '../../server/pipeLine/channel'
import connectToDatabase from '../utils/connectToDatabase'

const getChannelBySlug = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const db = await connectToDatabase()
    const channelsCollection = db.collection('channels')
    const { channelAddress: address } = req.query

    const channel = await channelsCollection
      .aggregate(channelsByAddressPipeLine(address as string))
      .next()

    if (!channel) {
      return res.status(404).json({ message: '채널을 찾을 수 없습니다.' })
    }

    return res.status(200).json(channel)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default getChannelBySlug
