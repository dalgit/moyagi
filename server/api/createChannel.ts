import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import { channelsByAddressPipeLine } from '../pipeLine/channel'
import connectToDatabase from '../utils/connectToDatabase'

const createChannel = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const db = await connectToDatabase()
    const { name, address, description, isPublic, imageUrl } = req.body
    const { user } = req

    const userId = new ObjectId(user?.id)
    const channelsCollection = db.collection('channels')

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
      .aggregate(channelsByAddressPipeLine(address))
      .next()

    res.status(200).json(channel)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default createChannel
