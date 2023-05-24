import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import { connectToDatabase } from '@/utils/db/db'

export const deleteChannelUser = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const { channelId: cid, userId: uid } = req.query
    const channelId = new ObjectId(cid as string)
    const userId = new ObjectId(uid as string)

    const db = await connectToDatabase()
    const collection = db.collection('channels')

    const deletedUser = await collection.findOneAndDelete({
      membersId: userId,
      channelId,
    })

    return res.status(200).json(deletedUser)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}
