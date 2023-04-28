import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import { connectToDatabase } from '@/utils/db/db'

const getJoinedChannels = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const { user } = req
    const userId = new ObjectId(user?.id)

    const db = await connectToDatabase()
    const channelsCollection = db.collection('channels')

    const joinedChannels = await channelsCollection
      .find({
        membersId: userId,
      })
      .project({
        name: true,
        address: true,
        description: true,
        managerId: true,
        memberCount: { $size: '$membersId' },
      })
      .toArray()

    res.status(200).json(joinedChannels)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}
