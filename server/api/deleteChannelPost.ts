import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from 'types/types'
import { postByIdPipeLine } from '../../server/pipeLine/post'
import connectToDatabase from '../utils/connectToDatabase'

const deleteChannelPost = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const channelId = new ObjectId(req.query.channelId as string)
    const postId = new ObjectId(req.query.postId as string)

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

export default deleteChannelPost
