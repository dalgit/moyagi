import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { CustomNextApiRequest } from 'server/types/api'
import authMiddleware from 'server/utils/authMiddleware'
import withDB from 'server/utils/withDB'
import { channelMatchPipeline } from '../pipeLine/channel'

const createChannel = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const { name, address, description, isPublic, imageUrl } = req.body
  const { user } = req

  const userId = new ObjectId(user?._id)
  const channelsCollection = req.db.collection('channels')

  const existingName = await channelsCollection.findOne({ name })

  if (existingName) {
    return res.status(409).json({ message: '이미 존재하는 이름입니다.' })
  }

  const existingAddress = await channelsCollection.findOne({ address })
  if (existingAddress) {
    return res.status(409).json({ message: '이미 존재하는 주소입니다.' })
  }

  await channelsCollection.insertOne({
    name,
    address,
    description,
    isPublic,
    imageUrl: imageUrl ?? null,
    managerId: userId,
    membersId: [userId],
  })

  const channel = await channelsCollection
    .aggregate(channelMatchPipeline({ address }))
    .next()

  return res.status(200).json(channel)
}

export default authMiddleware(withDB(createChannel))
