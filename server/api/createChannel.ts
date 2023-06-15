import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import authMiddleware from 'server/utils/authMiddleware'
import { NextApiRequestWithUser } from 'types/types'
import { channelMatchPipeline } from '../pipeLine/channel'
import connectToDatabase from '../utils/connectToDatabase'

const createChannel = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const db = await connectToDatabase()
    const { name, address, description, isPublic, imageUrl } = req.body
    const { user } = req

    const userId = new ObjectId(user?._id)
    const channelsCollection = db.collection('channels')

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

    res.status(200).json(channel)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default authMiddleware(createChannel)
