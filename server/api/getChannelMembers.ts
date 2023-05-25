import { ObjectId } from 'mongodb'
import { NextApiResponse, NextApiRequest } from 'next'
import connectToDatabase from '../utils/connectToDatabase'

const getChannelMembers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const channelId = new ObjectId(req.query.channelId as string)

    const db = await connectToDatabase()

    const channelsCollection = db.collection('channels')
    const usersCollection = db.collection('users')

    const channel = await channelsCollection.findOne({ _id: channelId })

    const membersId = channel?.membersId

    const members = await usersCollection
      .find({ _id: { $in: membersId } })
      .project({ password: 0 })
      .toArray()

    return res.status(200).json(members)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default getChannelMembers
