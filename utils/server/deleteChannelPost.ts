import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from '@/types/types'
import { connectToDatabase } from '@/utils/db/db'
import { postByIdPipeLine } from './pipeLine/post'

export const deleteChannelPost = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const { channelId: cid, postId: pid } = req.query
    const channelId = new ObjectId(cid)
    const postId = new ObjectId(pid)

    const db = await connectToDatabase()
    const postsCollection = db.collection('posts')

    const post = await postsCollection
      .aggregate(postByIdPipeLine(postId))
      .next()

    await postsCollection.deleteOne({
      _id: postId,
      channelId,
    })

    return res.status(200).json(post)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}
