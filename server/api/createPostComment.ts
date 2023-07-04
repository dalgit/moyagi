import { ObjectId } from 'mongodb'
import { NextApiResponse } from 'next'
import { commentMatchPipeline } from 'server/pipeLine/comment'
import { CustomNextApiRequest } from 'server/types/api'
import authMiddleware from 'server/utils/authMiddleware'
import withDB from 'server/utils/withDB'

const createPostComment = async (
  req: CustomNextApiRequest,
  res: NextApiResponse,
) => {
  const { channelId, postId } = req.query
  const { content } = req.body
  const { user } = req

  const commentsCollection = req.db.collection('comments')

  const { insertedId } = await commentsCollection.insertOne({
    channelId: new ObjectId(channelId as string),
    postId: new ObjectId(postId as string),
    authorId: new ObjectId(user?._id),
    content,
    createdAt: new Date(),
  })

  const comment = await commentsCollection
    .aggregate(commentMatchPipeline({ _id: insertedId }))
    .next()

  return res.status(200).json(comment)
}

export default authMiddleware(withDB(createPostComment))
