import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { NextApiRequestWithUser } from 'types/types'
import { postMatchPipeline } from '../../server/pipeLine/post'
import connectToDatabase from '../utils/connectToDatabase'

const getMyPosts = async (
  req: NextApiRequestWithUser,
  res: NextApiResponse,
) => {
  try {
    const userId = new ObjectId(req.user?._id)

    const db = await connectToDatabase()
    const postsCollection = db.collection('posts')

    const posts = await postsCollection
      .aggregate(postMatchPipeline({ authorId: userId }))
      .toArray()

    return res.status(200).json(posts)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default getMyPosts
