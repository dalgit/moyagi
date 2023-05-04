import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import { connectToDatabase } from '@/utils/db/db'

export const deleteJoinRequest = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const { channelId: cid, requestId: rid } = req.query
    const channelId = new ObjectId(cid)
    const requestId = new ObjectId(rid)

    const db = await connectToDatabase()
    const joinRequestCollection = db.collection('joinRequest')

    await joinRequestCollection.deleteOne({
      _id: requestId,
      channelId,
    })

    return res.status(200).json({ message: 'ok' })
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}
