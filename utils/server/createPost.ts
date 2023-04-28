import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import { connectToDatabase } from '@/utils/db/db'

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    channelId?: string
  }
}

export const createPost = async (
  req: NextApiRequestWithUser & ExtendedNextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const db = await connectToDatabase()
    const { channelId: cid } = req.query
    const { content } = req.body
    const { user } = req
    const channelId = new ObjectId(cid)
    const userId = new ObjectId(user?.id)

    await db.collection('posts').insertOne({
      channelId: channelId,
      authorId: userId,
      content,
    })

    res.status(200).json({ message: '작성이 완료되었습니다.' })
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}
