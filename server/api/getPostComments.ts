import { ObjectId } from 'mongodb'
import { NextApiResponse, NextApiRequest } from 'next'
import { commentMatchPipeline } from 'server/pipeLine/comment'
import connectToDatabase from '../utils/connectToDatabase'

const getPostComments = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const postId = new ObjectId(req.query.postId as string)

    const db = await connectToDatabase()
    const commentsCollection = db.collection('comments')

    const comments = await commentsCollection
      .aggregate(commentMatchPipeline({ postId }))
      .toArray()

    return res.status(200).json(comments)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default getPostComments
