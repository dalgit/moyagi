import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from 'types/types'
import connectToDatabase from '../utils/connectToDatabase'

const deleteChannelUser = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const channelId = new ObjectId(req.query.channelId as string)
    const userId = new ObjectId(req.query.id as string)

    const db = await connectToDatabase()
    const channelsCollection = db.collection('channels')

    const updatedChannel = await channelsCollection.updateOne(
      { _id: channelId },
      { $pull: { membersId: userId } },
    )

    return res.status(200).json(updatedChannel)
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default deleteChannelUser
