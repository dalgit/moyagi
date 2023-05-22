import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import { connectToDatabase } from '@/utils/db/db'
import { postByUserIdPipeLine } from './pipeLine/post'

export const getUserPosts = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const userId = new ObjectId(req.query.id as string)

    const db = await connectToDatabase()
    const postsCollection = db.collection('posts')

    const posts = await postsCollection
      .aggregate(postByUserIdPipeLine(userId))
      .toArray()

    return res.status(200).json(posts)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}
