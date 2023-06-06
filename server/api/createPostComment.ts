import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextApiRequestWithUser } from 'types/types'
import { postByIdPipeLine } from '../../server/pipeLine/post'
import connectToDatabase from '../utils/connectToDatabase'

interface ExtendedNextApiRequest extends NextApiRequest {
  query: {
    channelId: string
    postId: string
  }
}

const createPostComment = async (
  req: NextApiRequestWithUser & ExtendedNextApiRequest,
  res: NextApiResponse,
) => {
  try {
    const db = await connectToDatabase()
    const { channelId, postId } = req.query
    const { content } = req.body
    const { user } = req

    const commentsCollection = db.collection('comments')

    const { insertedId } = await commentsCollection.insertOne({
      channelId: new ObjectId(channelId),
      postId: new ObjectId(postId),
      authorId: new ObjectId(user?.id),
      content,
    })

    const comment = await commentsCollection
      .aggregate(postByIdPipeLine(insertedId))
      .next()

    res.status(200).json(comment)
  } catch (error) {
    res
      .status(500)
      .json({ message: '서버가 불안정합니다. 잠시후 다시 시도해주세요.' })
  }
}

export default createPostComment
